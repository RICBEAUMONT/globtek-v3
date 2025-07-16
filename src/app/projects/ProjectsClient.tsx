'use client';

import Container from '@/components/layout/Container';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { Search, ChevronDown, Filter, Grid, List, Calendar, Building2, MapPin, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { allProjects } from '@/data/projects';

const categories = [
  'All Projects',
  'Naval Architecture',
  'Marine Engineering',
  'Structural Analysis',
  'Compliance & Certification',
  'Infrastructure Development',
  'Fire Engineering',
  'Port Infrastructure',
  'Water Treatment'
];

export default function ProjectsClient() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [searchQuery, setSearchQuery] = useState('');
  const [displayedProjects, setDisplayedProjects] = useState(6);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isLoading, setIsLoading] = useState(false);

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = selectedCategory === 'All Projects' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Simulate loading state for better UX
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery]);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDisplayedProjects(prev => prev + 6);
      setIsLoading(false);
    }, 500);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative pt-40 pb-20 bg-[#14171c] overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#e43d30] to-transparent opacity-10 blur-[100px]"></div>
        
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-3xl"
          >
            {/* Accent line */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#e43d30]"></div>
              <span className="text-[#e43d30] font-medium uppercase tracking-wider text-sm">Our Portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-[1.1] tracking-tight">
              Engineering Projects
              <span className="block mt-2 text-[#e43d30]">Portfolio</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Discover our diverse range of engineering projects spanning naval architecture, marine engineering, port infrastructure, and more. From vessel design and infrastructure development to fire safety systems and port surveys, we deliver innovative solutions that set industry standards across South Africa and beyond.
            </p>
          </motion.div>
        </Container>
      </div>

      <Container>
        {/* Enhanced Search and Filter Section */}
        <section className="py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 mb-12"
          >
            {/* Section Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-[#14171c] mb-2">
                  Find Your Project
                </h2>
                <p className="text-gray-600">
                  Filter through our diverse portfolio of engineering projects
                </p>
              </div>
              
              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={cn(
                    "p-2 rounded-md transition-all duration-200",
                    viewMode === 'grid' 
                      ? "bg-white text-[#e43d30] shadow-sm" 
                      : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={cn(
                    "p-2 rounded-md transition-all duration-200",
                    viewMode === 'list' 
                      ? "bg-white text-[#e43d30] shadow-sm" 
                      : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Search and Filter Controls */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#e43d30] focus:border-transparent bg-gray-50 hover:bg-white transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#e43d30] focus:border-transparent bg-gray-50 hover:bg-white transition-colors appearance-none"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>

              {/* Quick Stats */}
              <div className="flex items-center justify-center bg-gray-50 rounded-xl px-6 py-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#14171c]">{filteredProjects.length}</div>
                  <div className="text-sm text-gray-600">Projects Found</div>
                </div>
              </div>
            </div>

            {/* Category Pills */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      "hover:bg-[#e43d30] hover:text-white hover:shadow-md",
                      selectedCategory === category 
                        ? "bg-[#e43d30] text-white shadow-md" 
                        : "bg-gray-100 text-gray-700 hover:shadow-sm"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Projects Display */}
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-gray-200 rounded-2xl h-64 mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="projects"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={cn(
                  "transition-all duration-500",
                  viewMode === 'grid' 
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    : "space-y-6"
                )}
              >
                {filteredProjects.slice(0, displayedProjects).map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                                         <Link
                       href={`/projects/${project.slug}`}
                       className={cn(
                         "group block transition-all duration-300 h-full",
                         viewMode === 'grid' 
                           ? "bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 overflow-hidden flex flex-col"
                           : "flex gap-6 bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 hover:-translate-y-1"
                       )}
                     >
                       {/* Project Image */}
                       <div className={cn(
                         "relative overflow-hidden",
                         viewMode === 'grid' 
                           ? "aspect-[4/3]"
                           : "w-48 h-32 rounded-xl flex-shrink-0"
                       )}>
                         <Image
                           src={project.image}
                           alt={project.title}
                           fill
                           className="object-cover transition-transform duration-500 group-hover:scale-110"
                         />
                         
                         {/* Category Badge */}
                         <div className="absolute top-4 left-4">
                           <span className="text-xs text-white bg-[#e43d30] px-3 py-1 rounded-full font-medium shadow-sm">
                             {project.category}
                           </span>
                         </div>
                       </div>

                       {/* Project Content */}
                       <div className={cn(
                         viewMode === 'grid' 
                           ? "p-6 flex-1 flex flex-col"
                           : "flex-1"
                       )}>
                         <div className={cn(
                           "space-y-3 flex-1 flex flex-col",
                           "text-gray-900"
                         )}>
                           {/* Project Title */}
                           <h3 className="text-xl font-bold text-[#14171c] group-hover:text-[#e43d30] transition-colors duration-300">
                             {project.title}
                           </h3>

                           {/* Project Description */}
                           <p className={cn(
                             "text-sm leading-relaxed text-gray-600 flex-1",
                             viewMode === 'grid' 
                               ? "line-clamp-3" 
                               : ""
                           )}>
                             {project.description}
                           </p>

                           {/* View Details Link */}
                           <div className="flex items-center gap-2 text-sm font-medium text-[#e43d30] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-auto">
                             <span>View Details</span>
                             <ArrowRight className="h-4 w-4" />
                           </div>
                         </div>
                       </div>
                     </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Load More Button */}
          {displayedProjects < filteredProjects.length && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center mt-16"
            >
              <button
                onClick={handleLoadMore}
                disabled={isLoading}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#e43d30] text-white hover:bg-[#e43d30]/90 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Loading...
                  </>
                ) : (
                  <>
                    Load More Projects
                    <ChevronDown className="h-5 w-5" />
                  </>
                )}
              </button>
            </motion.div>
          )}

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search criteria or browse all projects
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All Projects');
                    setSearchQuery('');
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#e43d30] text-white hover:bg-[#e43d30]/90 transition-colors"
                >
                  View All Projects
                </button>
              </div>
            </motion.div>
          )}
        </section>
      </Container>
    </main>
  );
} 