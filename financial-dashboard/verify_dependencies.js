#!/usr/bin/env node
/**
 * Verify that all required dependencies are installed
 */

const fs = require('fs');
const path = require('path');

const requiredPackages = {
  'react': '^18.2.0',
  'react-dom': '^18.2.0',
  'vite': '^5.0.0',
  '@vitejs/plugin-react': '^4.2.1'
};

console.log('Checking dependencies...\n');
console.log('='.repeat(60));

let allInstalled = true;
const nodeModulesPath = path.join(__dirname, 'node_modules');

for (const [pkg, version] of Object.entries(requiredPackages)) {
  const pkgPath = path.join(nodeModulesPath, pkg);
  if (fs.existsSync(pkgPath)) {
    try {
      const pkgJson = JSON.parse(
        fs.readFileSync(path.join(pkgPath, 'package.json'), 'utf8')
      );
      console.log(`✓ ${pkg.padEnd(25)} ${pkgJson.version.padEnd(15)} (required: ${version})`);
    } catch (e) {
      console.log(`✓ ${pkg.padEnd(25)} installed`);
    }
  } else {
    console.log(`✗ ${pkg.padEnd(25)} NOT INSTALLED (required: ${version})`);
    allInstalled = false;
  }
}

console.log('='.repeat(60));

if (allInstalled) {
  console.log('\n✓ All dependencies are installed!');
  console.log('\nYou can now run:');
  console.log('  npm run dev');
} else {
  console.log('\n✗ Some dependencies are missing.');
  console.log('\nRun: npm install');
  process.exit(1);
}



