// This script lists repositories for the authenticated user
require('dotenv').config({ path: '.env.local' });
const { Octokit } = require('@octokit/rest');

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

async function listRepositories() {
  try {
    console.log('Listing repositories for the authenticated user...');
    
    // Get user information
    const { data: user } = await octokit.users.getAuthenticated();
    console.log(`Authenticated as: ${user.login}`);
    
    // List repositories
    const { data: repos } = await octokit.repos.listForAuthenticatedUser({
      sort: 'updated',
      direction: 'desc',
      per_page: 30,
    });
    
    console.log(`Found ${repos.length} repositories:`);
    repos.forEach((repo, index) => {
      console.log(`${index + 1}. ${repo.full_name} (${repo.private ? 'private' : 'public'})`);
    });
    
    // Check if the target repository exists
    const targetOwner = 'ricardobeaumont';
    const targetRepo = 'globtek-v3';
    
    const matchingRepos = repos.filter(repo => 
      repo.name.toLowerCase() === targetRepo.toLowerCase() || 
      repo.full_name.toLowerCase() === `${targetOwner}/${targetRepo}`.toLowerCase()
    );
    
    if (matchingRepos.length > 0) {
      console.log('\nMatching repositories found:');
      matchingRepos.forEach(repo => {
        console.log(`- ${repo.full_name} (${repo.private ? 'private' : 'public'})`);
      });
    } else {
      console.log(`\nNo repository matching "${targetOwner}/${targetRepo}" found.`);
      console.log('Please check the repository name and update it in src/lib/github.ts');
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

listRepositories(); 