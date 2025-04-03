/**
 * This script helps you generate a new GitHub token with the correct permissions.
 * 
 * To use this script:
 * 1. Run: node scripts/generate-github-token.js
 * 2. Follow the instructions to create a new token
 * 3. Copy the token and update your .env.local file
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n=== GitHub Token Generator ===\n');
console.log('This script will help you generate a new GitHub token with the correct permissions.');
console.log('You will need to create a token manually on GitHub and then update your .env.local file.\n');

console.log('Steps to create a GitHub token:');
console.log('1. Go to https://github.com/settings/tokens');
console.log('2. Click "Generate new token (classic)"');
console.log('3. Give your token a descriptive name (e.g., "Globtek Updates")');
console.log('4. Set an expiration date (recommended: 30 days or more)');
console.log('5. Select the following scopes:');
console.log('   - repo (Full control of private repositories)');
console.log('6. Click "Generate token"');
console.log('7. Copy the token and paste it below\n');

rl.question('Enter your new GitHub token: ', (token) => {
  if (!token) {
    console.log('No token provided. Exiting...');
    rl.close();
    return;
  }

  // Update .env.local file
  const envPath = path.join(process.cwd(), '.env.local');
  
  try {
    if (fs.existsSync(envPath)) {
      let envContent = fs.readFileSync(envPath, 'utf8');
      
      // Check if GITHUB_TOKEN already exists
      if (envContent.includes('GITHUB_TOKEN=')) {
        // Replace existing token
        envContent = envContent.replace(/GITHUB_TOKEN=.*/, `GITHUB_TOKEN=${token}`);
      } else {
        // Add new token
        envContent += `\n# GitHub API Token\nGITHUB_TOKEN=${token}`;
      }
      
      fs.writeFileSync(envPath, envContent);
      console.log('\n✅ Successfully updated .env.local with your new GitHub token!');
    } else {
      console.log('\n❌ .env.local file not found. Creating a new one...');
      fs.writeFileSync(envPath, `# GitHub API Token\nGITHUB_TOKEN=${token}`);
      console.log('✅ Created .env.local with your new GitHub token!');
    }
    
    console.log('\nNext steps:');
    console.log('1. Restart your development server');
    console.log('2. Check the Updates page to see if the token works');
    console.log('3. If you still see errors, check the console for more information');
  } catch (error) {
    console.error('\n❌ Error updating .env.local:', error.message);
    console.log('\nPlease manually update your .env.local file with the following line:');
    console.log(`GITHUB_TOKEN=${token}`);
  }
  
  rl.close();
}); 