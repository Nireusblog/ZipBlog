const { execSync } = require('child_process');
const path = require('path');

const startScript = path.join(__dirname, 'package.json');

try {
  execSync(`npm start`, {
    cwd: path.dirname(startScript),
    stdio: 'inherit',
  });
} catch (error) {
  console.error('Failed to start application:', error);
}
