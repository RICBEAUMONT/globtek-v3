'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Link from 'next/link';
import { getRecentCommits, CommitInfo, categorizeCommit } from '@/lib/github';

interface Update {
  id: string;
  date: Date;
  title: string;
  description: string;
  category: 'feature' | 'fix' | 'improvement';
  details?: string;
  commitUrl?: string;
  author?: string;
  stats?: {
    additions: number;
    deletions: number;
    changes: number;
  };
}

export default function UpdatesPage() {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'feature' | 'fix' | 'improvement'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'timeline'>('timeline');

  useEffect(() => {
    async function fetchUpdates() {
      try {
        setLoading(true);
        const commits = await getRecentCommits(30); // Get commits from the last 30 days
        
        if (commits.length === 0) {
          setError('No commits found. Please check your GitHub token and repository access.');
          setUpdates([]);
          return;
        }
        
        // Transform commits into updates
        const updatesFromCommits = commits.map((commit: CommitInfo) => {
          // Extract title and description from commit message
          const messageLines = commit.message.split('\n');
          let title = messageLines[0];
          
          // Clean up the title by removing common prefixes
          title = cleanCommitTitle(title);
          
          const description = messageLines.slice(1).join('\n').trim() || title;
          
          return {
            id: commit.sha.substring(0, 7), // Use first 7 characters of SHA as ID
            date: commit.date,
            title: title,
            description: description,
            category: categorizeCommit(commit.message),
            details: description,
            commitUrl: commit.url,
            author: commit.author,
            stats: {
              additions: commit.stats?.additions || 0,
              deletions: commit.stats?.deletions || 0,
              changes: commit.stats?.total || 0
            }
          };
        });
        
        setUpdates(updatesFromCommits);
        setError(null);
      } catch (err) {
        console.error('Error fetching updates:', err);
        setError('Failed to load updates. Please check your GitHub token and repository access.');
        setUpdates([]);
      } finally {
        setLoading(false);
      }
    }
    
    fetchUpdates();
  }, []);

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
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'fix':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'improvement':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
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

  const getCategoryIcon = (category: Update['category']) => {
    switch (category) {
      case 'feature':
        return (
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
          </svg>
        );
      case 'fix':
        return (
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        );
      case 'improvement':
        return (
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  const filteredUpdates = updates.filter(update => {
    const matchesFilter = filter === 'all' || update.category === filter;
    const matchesSearch = searchTerm === '' || 
      update.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      update.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  // Group updates by date
  const groupedUpdates = filteredUpdates.reduce((groups, update) => {
    const date = format(update.date, 'MMMM d, yyyy');
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(update);
    return groups;
  }, {} as Record<string, Update[]>);

  // Sort dates in descending order
  const sortedDates = Object.keys(groupedUpdates).sort((a, b) => {
    return new Date(b).getTime() - new Date(a).getTime();
  });

  if (loading) {
    return (
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#e43d30]"></div>
            <p className="mt-4 text-gray-500">Loading updates...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-8 text-center">
              <svg className="mx-auto h-12 w-12 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Error Loading Updates</h3>
              <p className="mt-2 text-sm text-gray-500">{error}</p>
              <div className="mt-6">
                <button 
                  onClick={() => window.location.reload()} 
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#e43d30] hover:bg-[#c63529] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#e43d30]"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-4 sm:mb-8">
          <div className="px-3 sm:px-6 py-4 sm:py-5 border-b border-gray-200 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
              <div className="flex items-center flex-wrap w-full sm:w-auto">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 truncate">Updates & Changelog</h1>
                <span className="ml-2 sm:ml-3 px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 whitespace-nowrap">
                  {filteredUpdates.length} updates
                </span>
              </div>
              
              <div className="mt-3 sm:mt-0 flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 sm:p-2 rounded-md ${viewMode === 'list' ? 'bg-gray-200 text-gray-800' : 'text-gray-500 hover:bg-gray-100'}`}
                  title="List view"
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('timeline')}
                  className={`p-1.5 sm:p-2 rounded-md ${viewMode === 'timeline' ? 'bg-gray-200 text-gray-800' : 'text-gray-500 hover:bg-gray-100'}`}
                  title="Timeline view"
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="px-3 sm:px-6 py-3 sm:py-4 bg-gray-50 border-b border-gray-200 w-full">
            <div className="flex flex-col space-y-3 w-full">
              <div className="relative flex-grow w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search updates..."
                  className="w-full pl-9 sm:pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e43d30] focus:border-transparent text-sm sm:text-base"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setSearchTerm('')}
                  >
                    <svg className="h-4 w-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>
              
              <div className="flex flex-wrap gap-1.5 sm:gap-2 w-full">
                <button 
                  className={`px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md ${filter === 'all' ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                  onClick={() => setFilter('all')}
                >
                  All
                </button>
                <button 
                  className={`px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md ${filter === 'feature' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600 hover:bg-blue-50'}`}
                  onClick={() => setFilter('feature')}
                >
                  Features
                </button>
                <button 
                  className={`px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md ${filter === 'fix' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-600 hover:bg-red-50'}`}
                  onClick={() => setFilter('fix')}
                >
                  Fixes
                </button>
                <button 
                  className={`px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-md ${filter === 'improvement' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600 hover:bg-green-50'}`}
                  onClick={() => setFilter('improvement')}
                >
                  Improvements
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {updates.length === 0 ? (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 sm:p-8 text-center w-full">
            <svg className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-medium text-gray-900">No Updates Found</h3>
            <p className="mt-2 text-xs sm:text-sm text-gray-500">There are no updates available at this time.</p>
          </div>
        ) : filteredUpdates.length === 0 ? (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 sm:p-8 text-center w-full">
            <svg className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-3 sm:mt-4 text-base sm:text-lg font-medium text-gray-900">No Matching Updates</h3>
            <p className="mt-2 text-xs sm:text-sm text-gray-500">No updates match your search criteria.</p>
            <button 
              className="mt-3 sm:mt-4 text-xs sm:text-sm text-[#e43d30] hover:text-[#c63529]"
              onClick={() => {
                setFilter('all');
                setSearchTerm('');
              }}
            >
              Clear filters
            </button>
          </div>
        ) : viewMode === 'list' ? (
          <div className="divide-y divide-gray-200 bg-white shadow-lg rounded-lg overflow-hidden w-full">
            {filteredUpdates.map((update, index) => (
              <Link 
                href={`/admin/updates/${update.id}`} 
                key={update.id} 
                className="block hover:bg-gray-50 transition-colors duration-150 w-full"
              >
                <div className="p-3 sm:p-5 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between w-full">
                    <div className="flex-1 min-w-0 w-full sm:w-auto">
                      <div className="flex flex-wrap items-center mb-2 w-full">
                        <h3 className="text-base sm:text-lg font-semibold text-[#e43d30] truncate">{update.title}</h3>
                        <span className={`ml-2 sm:ml-3 px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-medium rounded-full ${getCategoryColor(update.category)} whitespace-nowrap`}>
                          {getCategoryLabel(update.category)}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-2 w-full">{update.description}</p>
                      
                      <div className="flex flex-wrap items-center text-xs text-gray-500 gap-2 sm:gap-4 w-full">
                        <div className="flex items-center">
                          <svg className="mr-1 h-3 w-3 sm:h-4 sm:w-4 text-gray-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          <span className="truncate">{format(update.date, 'MMMM d, yyyy')}</span>
                        </div>
                        
                        {update.author && (
                          <div className="flex items-center">
                            <svg className="mr-1 h-3 w-3 sm:h-4 sm:w-4 text-gray-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            <span className="truncate">{update.author}</span>
                          </div>
                        )}
                        
                        <div className="flex items-center">
                          <svg className="mr-1 h-3 w-3 sm:h-4 sm:w-4 text-gray-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                          </svg>
                          <span className="font-mono text-xs bg-gray-100 px-1 sm:px-1.5 py-0.5 rounded truncate">{update.id}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-2 sm:mt-0 sm:ml-4 flex items-center text-xs sm:text-sm font-medium text-[#e43d30] whitespace-nowrap">
                      View details
                      <svg 
                        className="ml-1 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="space-y-4 sm:space-y-8 w-full">
            {sortedDates.map((date) => (
              <div key={date} className="bg-white shadow-lg rounded-lg overflow-hidden w-full">
                <div className="px-3 sm:px-6 py-3 sm:py-4 bg-gray-50 border-b border-gray-200 w-full">
                  <h2 className="text-base sm:text-lg font-semibold text-gray-900 truncate">{date}</h2>
                </div>
                <div className="divide-y divide-gray-200 w-full">
                  {groupedUpdates[date].map((update) => (
                    <Link 
                      href={`/admin/updates/${update.id}`} 
                      key={update.id} 
                      className="block hover:bg-gray-50 transition-colors duration-150 w-full"
                    >
                      <div className="p-3 sm:p-5 w-full">
                        <div className="flex flex-col sm:flex-row w-full">
                          <div className="flex-shrink-0 mb-2 sm:mb-0 sm:mr-4">
                            <div className={`p-1.5 sm:p-2 rounded-full ${getCategoryColor(update.category)}`}>
                              {getCategoryIcon(update.category)}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0 w-full sm:w-auto">
                            <div className="flex flex-wrap items-center justify-between w-full">
                              <h3 className="text-base sm:text-lg font-semibold text-[#e43d30] truncate">{update.title}</h3>
                              <span className={`mt-1 sm:mt-0 sm:ml-3 px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs font-medium rounded-full ${getCategoryColor(update.category)} whitespace-nowrap`}>
                                {getCategoryLabel(update.category)}
                              </span>
                            </div>
                            <p className="mt-1 text-xs sm:text-sm text-gray-600 line-clamp-2 w-full">{update.description}</p>
                            
                            <div className="mt-2 sm:mt-3 flex flex-wrap items-center text-xs text-gray-500 gap-2 sm:gap-4 w-full">
                              {update.author && (
                                <div className="flex items-center">
                                  <svg className="mr-1 h-3 w-3 sm:h-4 sm:w-4 text-gray-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                  </svg>
                                  <span className="truncate">{update.author}</span>
                                </div>
                              )}
                              
                              <div className="flex items-center">
                                <svg className="mr-1 h-3 w-3 sm:h-4 sm:w-4 text-gray-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                </svg>
                                <span className="font-mono text-xs bg-gray-100 px-1 sm:px-1.5 py-0.5 rounded truncate">{update.id}</span>
                              </div>
                              
                              {update.stats && (
                                <div className="flex items-center space-x-2 whitespace-nowrap">
                                  <span className="text-green-600">+{update.stats.additions}</span>
                                  <span className="text-red-600">-{update.stats.deletions}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 