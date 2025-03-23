'use client';

import Container from '@/components/layout/Container';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { allProjects, Project } from '@/data/projects';

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

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = selectedCategory === 'All Projects' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-40 pb-16 bg-[var(--color-bg-primary)]">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-text-primary)]">
              Our Engineering Projects Portfolio
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Discover our diverse range of engineering projects spanning naval architecture, marine engineering, port infrastructure, and more. From vessel design and infrastructure development to fire safety systems and port surveys, we deliver innovative solutions that set industry standards across South Africa and beyond.
            </p>
          </motion.div>
        </Container>
      </div>

      <Container>
        {/* Search and Filter Section */}
        <div className="pb-40">
          {/* Section Header */}
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-4">
              Browse Our Projects
            </h2>
            <p className="text-[var(--color-text-secondary)]">
              Filter through our diverse portfolio of marine engineering projects. Use the search bar to find specific projects or categories.
            </p>
          </div>

          {/* Search and Filter Container */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <div className="absolute inset-0 bg-gray-50 rounded-lg"></div>
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by project name, description, or client..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="relative w-full pl-12 pr-4 py-3.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent bg-transparent"
                />
              </div>

              {/* Categories Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                      "hover:bg-[var(--color-accent)] hover:text-white",
                      selectedCategory === category 
                        ? "bg-[var(--color-accent)] text-white shadow-sm" 
                        : "bg-gray-50 text-gray-700 hover:shadow-sm"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="text-sm text-[var(--color-text-secondary)] flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
                Showing {filteredProjects.slice(0, displayedProjects).length} of {filteredProjects.length} projects
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.slice(0, displayedProjects).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group relative overflow-hidden rounded-2xl bg-gray-100 block shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  </div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-white/90 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                          {project.category}
                        </span>
                        <span className="text-sm text-white/90">
                          {project.completionDate}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-[var(--color-accent)] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white/80 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="pt-2">
                        <span className="text-sm text-white/90 inline-flex items-center">
                          Client: {project.client}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {displayedProjects < filteredProjects.length && (
            <div className="text-center mt-16">
              <button
                onClick={() => setDisplayedProjects(prev => prev + 6)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-dark)] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Load More Projects
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>
          )}

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[var(--color-text-secondary)]">
                No projects found matching your search criteria. Try adjusting your filters or search terms.
              </p>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
} 