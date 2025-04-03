// This script checks if the GitHub repository exists and creates it if it doesn't
require('dotenv').config({ path: '.env.local' });
const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const owner = 'ricardobeaumont';
const repo = 'globtek-v3';

async function checkAndCreateRepo() {
  try {
    console.log(`Checking if repository ${owner}/${repo} exists...`);
    
    try {
      // Try to get the repository
      await octokit.repos.get({
        owner,
        repo,
      });
      console.log(`Repository ${owner}/${repo} already exists.`);
    } catch (error) {
      if (error.status === 404) {
        // Repository doesn't exist, create it
        console.log(`Repository ${owner}/${repo} does not exist. Creating it...`);
        
        await octokit.repos.createForAuthenticatedUser({
          name: repo,
          description: 'Globtek v3 - A modern web application',
          private: false,
          auto_init: true, // Initialize with a README
        });
        
        console.log(`Repository ${owner}/${repo} created successfully.`);
      } else {
        console.error(`Error checking repository: ${error.message}`);
      }
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

checkAndCreateRepo(); 