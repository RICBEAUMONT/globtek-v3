'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { allProjects } from '@/data/projects';

interface ServiceProjectsProps {
  /**
   * The category to filter projects by
   */
  category: string;
  /**
   * Optional title for the section
   */
  title?: string;
  /**
   * Optional description for the section
   */
  description?: string;
  /**
   * Optional className for additional styling
   */
  className?: string;
  /**
   * Maximum number of projects to display
   */
  maxProjects?: number;
  /**
   * Whether to show the "View All Projects" button
   */
  showViewAllButton?: boolean;
  /**
   * Optional project ID to exclude from the results
   */
  excludeProjectId?: string;
}

/**
 * ServiceProjects Component
 * 
 * A component that displays projects filtered by category, designed for service pages.
 * 
 * @component
 */
export default function ServiceProjects({
  category,
  title = "Our Featured Projects",
  description = "Explore our latest engineering achievements and successful project deliveries",
  className = '',
  maxProjects = 3,
  showViewAllButton = true,
  excludeProjectId
}: ServiceProjectsProps) {
  // Filter projects by category and exclude the specified project if any
  const filteredProjects = allProjects
    .filter(project => 
      project.category.toLowerCase().includes(category.toLowerCase()) &&
      (!excludeProjectId || project.id !== excludeProjectId)
    )
    .slice(0, maxProjects);

  // If we don't have enough projects in the category, add featured projects to reach maxProjects
  let displayProjects = [...filteredProjects];
  
  if (displayProjects.length < maxProjects) {
    // Get featured projects that aren't already in the filtered list and aren't the excluded project
    const additionalProjects = allProjects
      .filter(project => 
        project.featured && 
        !displayProjects.some(p => p.id === project.id) &&
        (!excludeProjectId || project.id !== excludeProjectId)
      )
      .slice(0, maxProjects - displayProjects.length);
    
    displayProjects = [...displayProjects, ...additionalProjects];
  }

  // Determine section title based on whether we have category-specific projects
  const sectionTitle = filteredProjects.length > 0 
    ? `Our ${category} Success Stories`
    : title;

  return (
    <div className={`mt-24 ${className}`}>
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-sm font-medium mb-6">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Featured Projects
        </div>
        <h2 className="text-[2.5rem] font-bold tracking-tight text-[var(--color-text-primary)] mb-6 leading-[1.1]">
          {sectionTitle}
        </h2>
        <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
          {filteredProjects.length > 0
            ? `Discover how we've helped transform ${category.toLowerCase()} infrastructure across various projects`
            : description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayProjects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.slug}`}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-sm font-medium mb-4">
                {project.category}
              </div>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                {project.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {showViewAllButton && (
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-accent)] text-white font-medium hover:bg-[var(--color-accent-dark)] transition-colors duration-300"
          >
            View All Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
} 