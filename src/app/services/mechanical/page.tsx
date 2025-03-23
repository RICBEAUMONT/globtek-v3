'use client';

import Container from '@/components/layout/Container';
import Image from 'next/image';
import SimpleCTA from '@/components/shared/SimpleCTA';
import PageHero from '@/components/layout/PageHero';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { allProjects } from '@/data/projects';

interface ServiceHighlight {
  title: string;
  description: string;
}

const highlights: ServiceHighlight[] = [
  {
    title: "Petrochemical Systems",
    description: "Expert design and implementation of fuel pipelines, tank farms, and petrochemical installations."
  },
  {
    title: "Water Systems",
    description: "Comprehensive water and wastewater system solutions for industrial and municipal applications."
  },
  {
    title: "Fire Protection",
    description: "Advanced fire protection system design and implementation for maximum safety compliance."
  },
  {
    title: "HVAC Systems",
    description: "State-of-the-art heating, ventilation, and air conditioning solutions for all environments."
  }
];

// Filter mechanical-related projects and sort by completion date
const featuredProjects = allProjects
  .filter(project => 
    project.category.toLowerCase().includes('mechanical') ||
    project.category.toLowerCase().includes('hvac') ||
    project.category.toLowerCase().includes('petrochemical')
  )
  .sort((a, b) => {
    return new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime();
  })
  .slice(0, 3);

// If no mechanical projects found, use latest projects sorted by date
const displayProjects = featuredProjects.length > 0 
  ? featuredProjects 
  : allProjects
      .sort((a, b) => new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime())
      .slice(0, 3);

const sectionTitle = featuredProjects.length > 0 
  ? "Our Mechanical Engineering Success Stories"
  : "Our Featured Projects";

export default function MechanicalPage() {
  const { ref } = useScrollReveal();

  const timestamp = Date.now();
  const heroImages = [
    `/images/mechanical/hero.jpg`,
    `/images/mechanical/hero-2.jpg`,
    `/images/mechanical/hero-3.jpg`
  ];

  return (
    <main className="min-h-screen">
      <PageHero
        title="Mechanical Engineering"
        subtitle="Advanced Systems & Solutions"
        description="Our mechanical division offers comprehensive services for petrochemical installations, water systems, fire protection, and HVAC, utilizing cutting-edge technologies like 3D scanning and BIM."
        images={heroImages}
        slideInterval={6000}
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Mechanical Engineering', href: '/services/mechanical' }
        ]}
        overlayOpacity="medium"
        accentColor="#0066CC"
        align="left"
      />

      {/* Main Content */}
      <Container className="py-16 md:py-24" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Our Expertise
            </div>
            <h2 className="text-[2.5rem] font-bold tracking-tight text-[#231f20] mb-6 leading-[1.1]">
              Advanced Mechanical Engineering Solutions
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                Our mechanical division offers comprehensive services, including petrochemical installations, water and wastewater systems, fire protection systems, and heating, ventilation, and air conditioning systems.
              </p>
              <p className="text-[#4a4a4a] leading-relaxed">
                We utilize advanced technologies like 3D scanning and Building Information Modelling (BIM) to help our clients address their challenges from project inception to commissioning, ensuring optimal performance and efficiency in every system we design and implement.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#e43d30]/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <span className="font-medium text-[#231f20]">3D Scanning</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#e43d30]/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="font-medium text-[#231f20]">BIM Technology</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#e43d30]/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="font-medium text-[#231f20]">Expert Solutions</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#231f20] to-[#1a1718] rounded-2xl shadow-xl"></div>
            <div className="relative p-6 md:p-8 rounded-2xl border border-[#e43d30]/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#e43d30]/10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">Core Expertise</h3>
              </div>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-3 group hover:bg-white/[0.02] p-2.5 -mx-2.5 rounded-lg transition-all duration-300">
                    <div className="w-8 h-8 rounded-lg bg-[#e43d30]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e43d30]/20 group-hover:scale-110 transition-all duration-300">
                      <svg className="w-4 h-4 text-[#e43d30]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium group-hover:text-[#e43d30] transition-colors">{highlight.title}</h4>
                      <p className="text-gray-400 text-sm leading-snug mt-1 group-hover:text-gray-300 transition-colors">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Featured Projects
            </div>
            <h2 className="text-[2.5rem] font-bold tracking-tight text-[#231f20] mb-6 leading-[1.1]">
              {sectionTitle}
            </h2>
            <p className="text-lg text-[#4a4a4a] leading-relaxed">
              Explore our portfolio of successful mechanical engineering projects, showcasing our expertise in petrochemical installations, HVAC systems, and more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 sm:h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                </div>
                <div className="relative p-6">
                  <div className="text-xs font-medium text-[#e43d30] mb-2">{project.category}</div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">{project.description}</p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{project.completionDate}</span>
                    <span className="mx-2">•</span>
                    <span>{project.client}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>

      {/* Call to Action */}
      <SimpleCTA
        title="Ready to Start Your Mechanical Engineering Project?"
        description="Contact us today to discuss your requirements and discover how our expertise can bring your project to life."
        primaryButton={{
          text: "Get Started",
          href: "/contact"
        }}
        secondaryButton={{
          text: "View All Projects",
          href: "/projects"
        }}
      />
    </main>
  );
} 