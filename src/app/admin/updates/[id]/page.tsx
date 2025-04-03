'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getCommitDetails, CommitInfo, categorizeCommit } from '@/lib/github';

interface Update {
  id: string;
  date: Date;
  title: string;
  description: string;
  category: 'feature' | 'fix' | 'improvement';
  details?: string;
  technicalDetails?: string;
  impact?: string;
  screenshots?: string[];
  commitUrl?: string;
  author?: string;
  files?: {
    filename: string;
    status: string;
    additions: number;
    deletions: number;
    changes: number;
    blob_url: string;
    raw_url: string;
  }[];
}

interface GitHubFile {
  filename: string;
  status: string;
  additions: number;
  deletions: number;
  changes: number;
  blob_url: string;
  raw_url: string;
  contents_url: string;
}

export default function UpdateDetailPage() {
  const params = useParams();
  const updateId = params.id as string;
  const [update, setUpdate] = useState<Update | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'technical' | 'files'>('overview');

  useEffect(() => {
    async function fetchUpdateDetails() {
      try {
        setLoading(true);
        console.log(`Fetching details for commit: ${updateId}`);
        
        const commitDetails = await getCommitDetails(updateId);
        
        if (!commitDetails) {
          setError('Update not found. Please check your GitHub token and repository access.');
          setUpdate(null);
          return;
        }
        
        // Extract title and description from commit message
        const messageLines = commitDetails.commit.message.split('\n');
        let title = messageLines[0];
        
        // Clean up the title by removing common prefixes
        title = cleanCommitTitle(title);
        
        const description = messageLines.slice(1).join('\n').trim() || title;
        
        // Get list of changed files with their stats
        const files = commitDetails.files?.map((file: GitHubFile) => ({
          filename: file.filename,
          status: file.status,
          additions: file.additions,
          deletions: file.deletions,
          changes: file.changes,
          blob_url: file.blob_url,
          raw_url: file.raw_url
        })) || [];
        
        // Create update object from commit details
        const updateFromCommit: Update = {
          id: commitDetails.sha.substring(0, 7),
          date: new Date(commitDetails.commit.author?.date || ''),
          title: title,
          description: description,
          category: categorizeCommit(commitDetails.commit.message),
          details: description,
          commitUrl: commitDetails.html_url,
          author: commitDetails.commit.author?.name || '',
          files: files
        };
        
        setUpdate(updateFromCommit);
        setError(null);
      } catch (err) {
        console.error('Error fetching update details:', err);
        setError('Failed to load update details. Please check your GitHub token and repository access.');
        setUpdate(null);
      } finally {
        setLoading(false);
      }
    }
    
    fetchUpdateDetails();
  }, [updateId]);

  // Function to clean up commit titles
  const cleanCommitTitle = (title: string): string => {
    // Remove common prefixes like "feat:", "fix:", etc.
    const cleanedTitle = title
      .replace(/^(feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)(\([^)]*\))?:/i, '')
      .replace(/^(feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert):/i, '')
      .trim();
    
    // Capitalize the first letter
    return cleanedTitle.charAt(0).toUpperCase() + cleanedTitle.slice(1);
  };

  const getCategoryColor = (category: Update['category']) => {
    switch (category) {
      case 'feature':
        return 'bg-blue-100 text-blue-800';
      case 'fix':
        return 'bg-red-100 text-red-800';
      case 'improvement':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryLabel = (category: Update['category']) => {
    switch (category) {
      case 'feature':
        return 'New Feature';
      case 'fix':
        return 'Bug Fix';
      case 'improvement':
        return 'Improvement';
      default:
        return category;
    }
  };

  const getFileStatusIcon = (status: string) => {
    switch (status) {
      case 'added':
        return (
          <svg className="h-4 w-4 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
          </svg>
        );
      case 'modified':
        return (
          <svg className="h-4 w-4 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        );
      case 'removed':
        return (
          <svg className="h-4 w-4 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg className="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  const getFileStatusLabel = (status: string) => {
    switch (status) {
      case 'added':
        return 'Added';
      case 'modified':
        return 'Modified';
      case 'removed':
        return 'Removed';
      default:
        return status.charAt(0).toUpperCase() + status.slice(1);
    }
  };

  if (loading) {
    return (
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#e43d30]"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !update) {
    return (
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-8 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Update Not Found</h3>
              <p className="mt-2 text-sm text-gray-500">{error || 'The requested update could not be found.'}</p>
              <div className="mt-6">
                <Link href="/admin/updates" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#e43d30] hover:bg-[#c63529] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e43d30]">
                  <svg className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to Updates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <Link href="/admin/updates" className="inline-flex items-center text-[#e43d30] hover:text-[#c63529]">
              <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Updates
            </Link>
            <Link href="/admin" className="inline-flex items-center text-gray-600 hover:text-gray-900">
              <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              Admin Dashboard
            </Link>
          </div>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{update.title}</h1>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <svg className="mr-1.5 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {format(update.date, 'MMMM d, yyyy')}
                  {update.author && (
                    <span className="ml-2">
                      by {update.author}
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${getCategoryColor(update.category)}`}>
                  {getCategoryLabel(update.category)}
                </span>
              </div>
            </div>
          </div>
          
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-6 text-sm font-medium border-b-2 ${
                  activeTab === 'overview'
                    ? 'border-[#e43d30] text-[#e43d30]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('technical')}
                className={`py-4 px-6 text-sm font-medium border-b-2 ${
                  activeTab === 'technical'
                    ? 'border-[#e43d30] text-[#e43d30]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Technical Details
              </button>
              <button
                onClick={() => setActiveTab('files')}
                className={`py-4 px-6 text-sm font-medium border-b-2 ${
                  activeTab === 'files'
                    ? 'border-[#e43d30] text-[#e43d30]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Changed Files
              </button>
            </nav>
          </div>
          
          <div className="px-6 py-8">
            {activeTab === 'overview' && (
              <div className="prose max-w-none">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                      <h2 className="text-lg font-semibold text-gray-900 mb-4">Overview</h2>
                      <p className="text-gray-700 whitespace-pre-wrap">{update.description}</p>
                    </div>

                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                      <h2 className="text-lg font-semibold text-gray-900 mb-4">Impact</h2>
                      <p className="text-gray-700">
                        {update.impact || 'This update improves the application by adding new functionality or fixing issues.'}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                      <h2 className="text-lg font-semibold text-gray-900 mb-4">Details</h2>
                      <dl className="space-y-4">
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Category</dt>
                          <dd className="mt-1">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${getCategoryColor(update.category)}`}>
                              {getCategoryLabel(update.category)}
                            </span>
                          </dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Author</dt>
                          <dd className="mt-1 text-sm text-gray-900">{update.author || 'Unknown'}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Date</dt>
                          <dd className="mt-1 text-sm text-gray-900">{format(update.date, 'MMMM d, yyyy')}</dd>
                        </div>
                        <div>
                          <dt className="text-sm font-medium text-gray-500">Commit ID</dt>
                          <dd className="mt-1 font-mono text-sm bg-gray-100 px-2 py-1 rounded inline-block">{update.id}</dd>
                        </div>
                      </dl>
                    </div>

                    {update.commitUrl && (
                      <div className="bg-white rounded-lg border border-gray-200 p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">GitHub</h2>
                        <a 
                          href={update.commitUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#e43d30] hover:bg-[#c63529] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e43d30]"
                        >
                          <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                          </svg>
                          View on GitHub
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'technical' && (
              <div className="prose max-w-none">
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Technical Details</h2>
                  <div className="bg-gray-50 rounded-lg p-4 text-gray-700">
                    <p className="mb-4">
                      This update includes changes to the codebase that improve functionality, fix bugs, or enhance performance.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Files Changed</h3>
                        <p className="text-2xl font-semibold text-gray-900">{update.files?.length || 0}</p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Additions</h3>
                        <p className="text-2xl font-semibold text-green-600">
                          {update.files?.reduce((sum, file) => sum + file.additions, 0) || 0}
                        </p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-sm font-medium text-gray-500 mb-1">Deletions</h3>
                        <p className="text-2xl font-semibold text-red-600">
                          {update.files?.reduce((sum, file) => sum + file.deletions, 0) || 0}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Implementation Notes</h2>
                  <div className="bg-gray-50 rounded-lg p-4 text-gray-700">
                    <p>
                      {update.technicalDetails || 'This update implements changes to improve the application. The changes are focused on enhancing functionality, fixing bugs, or improving performance.'}
                    </p>
                  </div>
                </div>
                
                {update.commitUrl && (
                  <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">Commit Information</h2>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">Commit Hash</p>
                          <p className="font-mono text-sm">{update.id}</p>
                        </div>
                        <a 
                          href={update.commitUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#e43d30] hover:text-[#c63529] flex items-center"
                        >
                          <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                          </svg>
                          View on GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'files' && (
              <div className="prose max-w-none">
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Changed Files</h2>
                  
                  {update.files && update.files.length > 0 ? (
                    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              File
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Changes
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {update.files.map((file, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {file.filename}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="flex items-center">
                                  {getFileStatusIcon(file.status)}
                                  <span className="ml-2">{getFileStatusLabel(file.status)}</span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <div className="flex items-center space-x-2">
                                  <span className="text-green-600">+{file.additions}</span>
                                  <span className="text-red-600">-{file.deletions}</span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <a 
                                  href={file.blob_url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-[#e43d30] hover:text-[#c63529]"
                                >
                                  View
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="bg-gray-50 rounded-lg p-4 text-gray-700">
                      No files were changed in this commit.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <Link href="/admin/updates" className="text-sm text-[#e43d30] hover:text-[#c63529]">
                ← Back to Updates
              </Link>
              <div className="text-sm text-gray-500">
                Commit: {update.id}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 