// This script kills any process using port 3000 and then starts the development server
const { execSync } = require('child_process');
const os = require('os');

function killProcessOnPort(port) {
  try {
    console.log(`Checking for processes using port ${port}...`);
    
    if (os.platform() === 'darwin' || os.platform() === 'linux') {
      // For macOS and Linux
      try {
        const output = execSync(`lsof -i :${port} | grep LISTEN`).toString();
        if (output) {
          const pid = output.split(/\s+/)[1];
          console.log(`Found process ${pid} using port ${port}. Killing it...`);
          execSync(`kill -9 ${pid}`);
          console.log(`Process ${pid} killed successfully.`);
        } else {
          console.log(`No process found using port ${port}.`);
        }
      } catch (error) {
        // If lsof returns non-zero exit code, it means no process was found
        console.log(`No process found using port ${port}.`);
      }
    } else if (os.platform() === 'win32') {
      // For Windows
      try {
        const output = execSync(`netstat -ano | findstr :${port}`).toString();
        if (output) {
          const lines = output.split('\n');
          for (const line of lines) {
            if (line.includes(`:${port}`)) {
              const parts = line.trim().split(/\s+/);
              const pid = parts[parts.length - 1];
              console.log(`Found process ${pid} using port ${port}. Killing it...`);
              execSync(`taskkill /F /PID ${pid}`);
              console.log(`Process ${pid} killed successfully.`);
            }
          }
        } else {
          console.log(`No process found using port ${port}.`);
        }
      } catch (error) {
        console.log(`No process found using port ${port}.`);
      }
    } else {
      console.log(`Unsupported platform: ${os.platform()}`);
    }
  } catch (error) {
    console.error(`Error killing process on port ${port}:`, error.message);
  }
}

// Kill any process using port 3000
killProcessOnPort(3000);

// Start the development server
console.log('Starting development server on port 3000...');
try {
  execSync('npm run dev', { stdio: 'inherit' });
} catch (error) {
  console.error('Error starting development server:', error.message);
} 