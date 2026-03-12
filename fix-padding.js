const fs = require('fs');
const path = require('path');

function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let newContent = content
        .replace(/padding:\s*120px\s+0;/g, 'padding: 60px 0;')
        .replace(/padding:\s*140px\s+0\s+80px;/g, 'padding: 70px 0 40px;')
        .replace(/padding:\s*140px\s+0;/g, 'padding: 70px 0;')
        .replace(/padding:\s*80px\s+0\s+120px;/g, 'padding: 40px 0 60px;');

      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`Updated padding in ${fullPath}`);
      }
    }
  }
}

processDir('src/components/sections');
console.log('Padding update complete.');
