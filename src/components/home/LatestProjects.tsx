'use client';

import { ArrowRight } from 'lucide-react';
import Container from '@/components/layout/Container';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Project {
  title: string;
  description: string;
  href: string;
  image: string;
  category: string;
  completionDate: string;
}

interface LatestProjectsProps {
  title?: string;
  description?: string;
  projects: Project[];
  className?: string;
}

/**
 * LatestProjects component that displays a grid of recent project cards
 * 
 * @example
 * ```tsx
 * <LatestProjects
 *   title="Latest Projects"
 *   description="Discover our most recent engineering achievements"
 *   projects={[
 *     {
 *       title: "Offshore Platform Design",
 *       description: "Advanced engineering design for deep-water operations",
 *       href: "/projects/offshore-platform",
 *       image: "/images/projects/offshore-platform.jpg",
 *       category: "Naval Architecture",
 *       completionDate: "2024"
 *     },
 *     // ... more projects
 *   ]}
 * />
 * ```
 */
export default function LatestProjects({ 
  title = "Latest Projects", 
  description = "Explore our most recent engineering achievements and innovations", 
  projects, 
  className 
}: LatestProjectsProps) {
  const { ref } = useScrollReveal();

  return (
    <section className={cn("pt-24 bg-gradient-to-b from-white to-gray-50/50", className)} ref={ref}>
      <Container>
        <div className="max-w-3xl mx-auto text-center relative scroll-reveal">
          {/* Section Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#e43d30]"></div>
            <span className="text-[#e43d30] font-semibold uppercase tracking-[0.2em] text-xs">Featured Work</span>
            <div className="h-px w-12 bg-[#e43d30]"></div>
          </div>
          
          <h2 className="text-4xl font-bold text-[#231f20] mb-4 tracking-tight leading-[1.1]">
            {title}
          </h2>
          <p className="text-base md:text-lg text-[#4a4a4a] mb-16 max-w-2xl mx-auto leading-relaxed font-light">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 stagger-children scroll-reveal">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              href={project.href}
              className="group relative bg-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#e43d30]/5 aspect-[1/1.2]"
              style={{ '--child-index': index } as React.CSSProperties}
            >
              {/* Project Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90 to-gray-900/40 opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col p-6">
                <div className="mt-auto">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#e43d30] text-sm font-medium">
                      {project.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#e43d30]"></span>
                    <span className="text-gray-300 text-sm">
                      {project.completionDate}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#e43d30] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-200 leading-relaxed mt-2 font-light line-clamp-2 group-hover:text-white transition-colors">
                    {project.description}
                  </p>
                  
                  {/* View Project Link */}
                  <div className="flex items-center text-[#e43d30] font-medium mt-3 opacity-80 group-hover:opacity-100 transition-opacity">
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#e43d30] to-[#e43d30]/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
} 