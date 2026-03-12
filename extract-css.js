const fs = require('fs');
const path = require('path');

const cssRegex = /<style>\{\`([\s\S]*?)\`\}<\/style>/;

function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const match = content.match(cssRegex);
      if (match) {
        const cssContent = match[1].trim();
        const baseName = path.basename(fullPath, '.tsx');
        const cssFileName = baseName + '.css';
        const cssPath = path.join(dir, cssFileName);
        
        // Write CSS file
        fs.writeFileSync(cssPath, cssContent + '\n');
        
        // Remove style block and add import
        content = content.replace(cssRegex, '');
        
        // Add import after the last import statement or at the top
        const importRegex = /import [^;]+;/d; // Just finding a spot
        const importLines = content.match(/import .*?;?/g);
        const newImport = `import "./${cssFileName}";\n`;
        
        if (importLines && importLines.length > 0) {
          const lastImport = importLines[importLines.length - 1];
          content = content.replace(lastImport, lastImport + '\n' + newImport);
        } else {
          content = newImport + content;
        }
        
        fs.writeFileSync(fullPath, content);
        console.log(`Extracted CSS from ${fullPath} to ${cssFileName}`);
      }
    }
  }
}

processDir('src/components');
console.log('Extraction complete.');
