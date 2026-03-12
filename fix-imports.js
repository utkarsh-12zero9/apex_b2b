const fs = require('fs');
const path = require('path');

function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const brokenRegex = /import \nimport "(\.\/[^"]+\.css)";\n/;
      const match = content.match(brokenRegex);
      if (match) {
        const cssImportLine = `import "${match[1]}";\n`;
        let newContent = content.replace(brokenRegex, 'import ');
        
        // Let's just put the CSS import at the very top, or right after 'use client'
        if (newContent.includes('"use client";')) {
            newContent = newContent.replace('"use client";', '"use client";\n' + cssImportLine);
        } else {
            newContent = cssImportLine + newContent;
        }

        fs.writeFileSync(fullPath, newContent);
        console.log(`Fixed imports in ${fullPath}`);
      }
    }
  }
}

processDir('src/components');
console.log('Cleanup complete.');
