const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function getMarkdownFiles(dir, files = []) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && !file.startsWith('.')) {
        getMarkdownFiles(fullPath, files);
      }
    } else if (file.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  return files;
}

const rootDir = path.resolve(__dirname, '..');
const mdFiles = getMarkdownFiles(rootDir);

console.log(`Found ${mdFiles.length} Markdown files. Running link check...`);

let failed = false;
for (const file of mdFiles) {
  const relativePath = path.relative(rootDir, file);
  try {
    console.log(`Checking links in ${relativePath}...`);
    execSync(`npx markdown-link-check -q -c .github/workflows/mlc_config.json "${file}"`, { stdio: 'inherit', cwd: rootDir });
  } catch (error) {
    console.error(`Error checking links in ${relativePath}`);
    failed = true;
  }
}

if (failed) {
  console.error('\nLink check failed. Fix the broken links listed above.');
  process.exit(1);
} else {
  console.log('\nAll links are valid!');
}
