const fs = require('fs');
const path = require('path');

const directories = [
  'src/components/sections',
  'src/components/layout',
  'src/components/ui'
];

const replacements = [
  { from: /color:\s*#f1f5f9/gi, to: 'color: #0f172a' },
  { from: /color:\s*#e2e8f0/gi, to: 'color: #1e293b' },
  { from: /color:\s*#cbd5e1/gi, to: 'color: #334155' },
  { from: /color:\s*#94a3b8/gi, to: 'color: #475569' },
  { from: /color:\s*#64748b/gi, to: 'color: #334155' },
  { from: /color:\s*#a5b4fc/gi, to: 'color: #6366f1' },
  { from: /color:\s*#818cf8/gi, to: 'color: #4f46e5' },
  { from: /rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*(0\.\d+)\s*\)/g, to: 'rgba(0,0,0,$1)' },
  { from: /rgba\(\s*5,\s*8,\s*16,\s*(0\.\d+)\s*\)/g, to: 'rgba(255,255,255,$1)' },  // dark background replacement
];

function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let original = content;
      replacements.forEach(rule => {
        content = content.replace(rule.from, rule.to);
      });
      if (content !== original) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated', fullPath);
      }
    }
  }
}

directories.forEach(processDir);
console.log('Done 2.');
