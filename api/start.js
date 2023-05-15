const { execSync } = require('child_process'); // Import the execSync function from the child_process module
const path = require('path'); // Import the path module

const startScript = path.join(__dirname, 'package.json'); // Get the path to the package.json file

try {
  execSync(`npm start`, { // Execute the command "npm start" synchronously
    cwd: path.dirname(startScript), // Set the current working directory for the command execution
    stdio: 'inherit', // Inherit the standard input/output streams for the command
  });
} catch (error) {
  console.error('Failed to start application:', error); // Display an error message if the command execution fails
}
