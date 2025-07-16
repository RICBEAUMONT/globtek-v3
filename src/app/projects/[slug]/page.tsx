'use client';

import { useParams } from 'next/navigation';
import Container from '@/components/layout/Container';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { allProjects } from '@/data/projects';
import { useState } from 'react';
import ServiceProjects from '@/components/sections/ServiceProjects';

export default function ProjectDetailPage() {
  const params = useParams();
  const project = allProjects.find(p => p.slug === params.slug);
  const { ref } = useScrollReveal();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    return (
      <Container className="py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#14171c] mb-4">Project Not Found</h1>
          <p className="text-[#4a4a4a] mb-8">The project you're looking for doesn't exist or has been moved.</p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#e43d30] text-white font-medium hover:bg-[#e43d30]/90 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </Container>
    );
  }

  // Find related projects in the same category
  const relatedProjects = allProjects
    .filter(p => p.featured && p.id !== project.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <Container className="relative h-full flex items-center">
          <div className="max-w-3xl pt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium mb-6">
              {project.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {project.title}
            </h1>
            <p className="text-lg text-white/90 mb-8">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                {project.client}
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Completed {project.completionDate}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Project Details */}
      <Container className="py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-[#14171c] mb-6">Project Overview</h2>
              <p className="text-[#4a4a4a] leading-relaxed whitespace-pre-line">
                {project.details.overview}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#14171c] mb-6">The Challenge</h2>
              <p className="text-[#4a4a4a] leading-relaxed whitespace-pre-line">
                {project.details.challenge}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#14171c] mb-6">Our Solution</h2>
              <p className="text-[#4a4a4a] leading-relaxed whitespace-pre-line">
                {project.details.solution}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#14171c] mb-6">Results</h2>
              <p className="text-[#4a4a4a] leading-relaxed whitespace-pre-line">
                {project.details.results}
              </p>
            </section>

            {project.details.keyFeatures && (
              <section>
                <h2 className="text-2xl font-bold text-[#14171c] mb-6">Key Features</h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {project.details.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50">
                      <div className="w-6 h-6 rounded-full bg-[#e43d30]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-[#e43d30]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-[#4a4a4a]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.details.gallery && (
              <section>
                <h2 className="text-2xl font-bold text-[#14171c] mb-6">Project Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.details.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(image)}
                      className="relative aspect-square rounded-xl overflow-hidden group"
                    >
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </button>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-[#14171c] mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-[#4a4a4a]">Client</div>
                    <div className="font-medium text-[#14171c]">{project.client}</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#4a4a4a]">Category</div>
                    <div className="font-medium text-[#14171c]">{project.category}</div>
                  </div>
                  <div>
                    <div className="text-sm text-[#4a4a4a]">Completion Date</div>
                    <div className="font-medium text-[#14171c]">{project.completionDate}</div>
                  </div>
                </div>
              </div>

              {project.details.specifications && (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-[#14171c] mb-4">Specifications</h3>
                  <div className="space-y-4">
                    {Object.entries(project.details.specifications).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-sm text-[#4a4a4a]">{key}</div>
                        <div className="font-medium text-[#14171c]">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 rounded-full bg-[#e43d30] text-white font-medium hover:bg-[#e43d30]/90 transition-colors"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="mt-24">
            <ServiceProjects
              category={project.category}
              maxProjects={3}
              showViewAllButton={true}
              excludeProjectId={project.id}
            />
          </section>
        )}
      </Container>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative w-full max-w-5xl aspect-video">
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
} 