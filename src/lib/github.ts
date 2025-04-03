import { Octokit } from '@octokit/rest';

// Initialize Octokit with GitHub token if available
const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
});

// Repository information
const owner = 'RICBEAUMONT';
const repo = 'globtek-v3';

export interface CommitInfo {
  sha: string;
  date: Date;
  message: string;
  author: string;
  url: string;
  stats?: {
    additions: number;
    deletions: number;
    total: number;
  };
}

export interface CommitDetails {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };
  html_url: string;
  stats: {
    additions: number;
    deletions: number;
    total: number;
  };
  files: GitHubFile[];
}

export interface GitHubFile {
  filename: string;
  status: string;
  additions: number;
  deletions: number;
  changes: number;
  blob_url: string;
  raw_url: string;
  contents_url: string;
}

export async function getRecentCommits(days: number = 30): Promise<CommitInfo[]> {
  try {
    // Check if GitHub token is available
    if (!process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
      console.error('GitHub token is not available. Please add it to your .env.local file.');
      return [];
    }

    // First, check if the repository exists
    try {
      console.log(`Checking if repository ${owner}/${repo} exists...`);
      await octokit.repos.get({
        owner,
        repo,
      });
      console.log(`Repository ${owner}/${repo} exists.`);
    } catch (error: any) {
      if (error.status === 404) {
        console.error(`Repository ${owner}/${repo} not found. This could be due to:`);
        console.error(`1. The repository doesn't exist`);
        console.error(`2. The repository is private and your token doesn't have access`);
        console.error(`3. There might be a case sensitivity issue with the repository name`);
        console.error(`4. The repository might be under a different organization or username`);
        
        // Try to list repositories to see what's available
        try {
          console.log(`Listing repositories for user ${owner}...`);
          const repos = await octokit.repos.listForUser({
            username: owner,
            sort: 'updated',
            direction: 'desc',
            per_page: 10,
          });
          
          console.log(`Found ${repos.data.length} repositories:`);
          repos.data.forEach((repo: any) => {
            console.log(`- ${repo.full_name} (${repo.private ? 'private' : 'public'})`);
          });
        } catch (listError: any) {
          console.error(`Error listing repositories: ${listError.message}`);
          if (listError.status === 401 || listError.status === 403) {
            console.error('Authentication failed. Your GitHub token may have expired or lacks necessary permissions.');
            console.error('Please create a new token with the "repo" scope and update your .env.local file.');
          }
        }
        
        return [];
      } else if (error.status === 401 || error.status === 403) {
        console.error('Authentication failed. Your GitHub token may have expired or lacks necessary permissions.');
        console.error('Please create a new token with the "repo" scope and update your .env.local file.');
        return [];
      } else {
        console.error(`Error checking repository: ${error.message}`);
        return [];
      }
    }
    
    // Get commits from the last X days
    const since = new Date();
    since.setDate(since.getDate() - days);
    
    console.log(`Fetching commits for ${owner}/${repo} since ${since.toISOString()}`);
    
    try {
      const response = await octokit.repos.listCommits({
        owner,
        repo,
        since: since.toISOString(),
      });
      
      // Get stats for each commit
      const commitsWithStats = await Promise.all(
        response.data.map(async (commit) => {
          try {
            const statsResponse = await octokit.repos.getCommit({
              owner,
              repo,
              ref: commit.sha,
            });
            
            // Ensure stats object has all required properties
            const stats = statsResponse.data.stats ? {
              additions: statsResponse.data.stats.additions || 0,
              deletions: statsResponse.data.stats.deletions || 0,
              total: statsResponse.data.stats.total || 0
            } : undefined;
            
            return {
              sha: commit.sha,
              date: new Date(commit.commit.author?.date || ''),
              message: commit.commit.message || '',
              author: commit.commit.author?.name || '',
              url: commit.html_url || '',
              stats
            };
          } catch (error) {
            console.error(`Error fetching stats for commit ${commit.sha}:`, error);
            return {
              sha: commit.sha,
              date: new Date(commit.commit.author?.date || ''),
              message: commit.commit.message || '',
              author: commit.commit.author?.name || '',
              url: commit.html_url || '',
            };
          }
        })
      );
      
      return commitsWithStats;
    } catch (error: any) {
      if (error.status === 401 || error.status === 403) {
        console.error('Authentication failed when fetching commits. Your GitHub token may have expired or lacks necessary permissions.');
        console.error('Please create a new token with the "repo" scope and update your .env.local file.');
        return [];
      } else {
        throw error; // Re-throw other errors to be caught by the outer try-catch
      }
    }
  } catch (error: any) {
    console.error('Error fetching GitHub commits:', error);
    
    // Provide more detailed error information
    if (error.status === 404) {
      console.error(`Repository ${owner}/${repo} not found or not accessible. Please check if the repository exists and your token has access.`);
    } else if (error.status === 401 || error.status === 403) {
      console.error('Authentication failed. Your GitHub token may have expired or lacks necessary permissions.');
      console.error('Please create a new token with the "repo" scope and update your .env.local file.');
    }
    
    // Return empty array to prevent app from crashing
    return [];
  }
}

export async function getCommitDetails(sha: string): Promise<CommitDetails | null> {
  try {
    // Check if GitHub token is available
    if (!process.env.NEXT_PUBLIC_GITHUB_TOKEN) {
      console.error('GitHub token is not available. Please add it to your .env.local file.');
      return null;
    }

    console.log(`Fetching commit details for ${sha} from ${owner}/${repo}`);
    
    try {
      const response = await octokit.repos.getCommit({
        owner,
        repo,
        ref: sha,
      });
      
      // Ensure the response has the required structure
      if (!response.data.commit.author) {
        console.error(`Commit ${sha} has no author information`);
        return null;
      }
      
      // Create a properly typed CommitDetails object
      const commitDetails: CommitDetails = {
        sha: response.data.sha,
        commit: {
          message: response.data.commit.message || '',
          author: {
            name: response.data.commit.author.name || 'Unknown',
            date: response.data.commit.author.date || new Date().toISOString()
          }
        },
        html_url: response.data.html_url,
        stats: {
          additions: response.data.stats?.additions || 0,
          deletions: response.data.stats?.deletions || 0,
          total: response.data.stats?.total || 0
        },
        files: response.data.files || []
      };
      
      return commitDetails;
    } catch (error: any) {
      if (error.status === 401 || error.status === 403) {
        console.error('Authentication failed when fetching commit details. Your GitHub token may have expired or lacks necessary permissions.');
        console.error('Please create a new token with the "repo" scope and update your .env.local file.');
        return null;
      } else {
        throw error; // Re-throw other errors to be caught by the outer try-catch
      }
    }
  } catch (error: any) {
    console.error(`Error fetching commit details for ${sha}:`, error);
    
    // Provide more detailed error information
    if (error.status === 404) {
      console.error(`Commit ${sha} not found or not accessible.`);
    } else if (error.status === 401 || error.status === 403) {
      console.error('Authentication failed. Your GitHub token may have expired or lacks necessary permissions.');
      console.error('Please create a new token with the "repo" scope and update your .env.local file.');
    }
    
    return null;
  }
}

// Helper function to categorize commits based on message
export function categorizeCommit(message: string): 'feature' | 'fix' | 'improvement' {
  const lowerMessage = message.toLowerCase();
  
  // Check for fix-related keywords
  if (
    lowerMessage.includes('fix') || 
    lowerMessage.includes('bug') || 
    lowerMessage.includes('issue') || 
    lowerMessage.includes('patch') || 
    lowerMessage.includes('resolve') ||
    lowerMessage.includes('correct') ||
    lowerMessage.includes('repair')
  ) {
    return 'fix';
  } 
  
  // Check for feature-related keywords
  else if (
    lowerMessage.includes('feat') || 
    lowerMessage.includes('add') || 
    lowerMessage.includes('new') || 
    lowerMessage.includes('implement') || 
    lowerMessage.includes('create') ||
    lowerMessage.includes('introduce')
  ) {
    return 'feature';
  } 
  
  // Default to improvement
  else {
    return 'improvement';
  }
}

// Helper function to extract technical details from commit message
export function extractTechnicalDetails(message: string): string {
  const lines = message.split('\n');
  
  // Look for technical details in the commit message
  // This is a simple implementation that could be enhanced based on your commit message format
  const technicalLines = lines.filter(line => 
    line.toLowerCase().includes('technical') || 
    line.toLowerCase().includes('implementation') || 
    line.toLowerCase().includes('code') || 
    line.toLowerCase().includes('refactor') ||
    line.toLowerCase().includes('optimize')
  );
  
  if (technicalLines.length > 0) {
    return technicalLines.join('\n');
  }
  
  // If no specific technical details found, return a generic message
  return 'This commit includes code changes that improve the application.';
}

// Helper function to extract impact from commit message
export function extractImpact(message: string): string {
  const lines = message.split('\n');
  
  // Look for impact-related information in the commit message
  const impactLines = lines.filter(line => 
    line.toLowerCase().includes('impact') || 
    line.toLowerCase().includes('affect') || 
    line.toLowerCase().includes('improve') || 
    line.toLowerCase().includes('enhance') ||
    line.toLowerCase().includes('benefit')
  );
  
  if (impactLines.length > 0) {
    return impactLines.join('\n');
  }
  
  // If no specific impact information found, return a generic message
  return 'This update improves the application by adding new functionality or fixing issues.';
} 