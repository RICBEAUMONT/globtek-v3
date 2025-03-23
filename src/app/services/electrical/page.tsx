'use client';

import Container from '@/components/layout/Container';
import Image from 'next/image';
import SimpleCTA from '@/components/shared/SimpleCTA';
import PageHero from '@/components/layout/PageHero';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ServiceHighlight {
  title: string;
  description: string;
}

const highlights: ServiceHighlight[] = [
  {
    title: "Power Transmission",
    description: "Expert design and implementation of high-voltage transmission lines and infrastructure."
  },
  {
    title: "Distribution Systems",
    description: "Comprehensive distribution network planning and optimization for reliable power delivery."
  },
  {
    title: "Substation Design",
    description: "Advanced substation engineering with focus on safety and efficiency."
  },
  {
    title: "Technical Consulting",
    description: "Expert guidance in electrical engineering, compliance, and system optimization."
  }
];

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  completionDate: string;
  client: string;
  slug: string;
}

// Import projects from the main projects page
import { allProjects } from '@/data/projects';

// Filter electrical-related projects and sort by completion date
const featuredProjects = allProjects
  .filter(project => 
    project.category.toLowerCase().includes('electrical') ||
    project.category.toLowerCase().includes('power') ||
    project.category.toLowerCase().includes('energy')
  )
  .sort((a, b) => {
    // Sort by completion date in descending order (latest first)
    return new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime();
  })
  .slice(0, 3);

// If no electrical projects found, use latest projects sorted by date
const displayProjects = featuredProjects.length > 0 
  ? featuredProjects 
  : allProjects
      .sort((a, b) => new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime())
      .slice(0, 3);
const sectionTitle = featuredProjects.length > 0 
  ? "Our Electrical Engineering Success Stories"
  : "Our Featured Projects";

export default function ElectricalPage() {
  useScrollReveal();

  const timestamp = Date.now();
  const heroImages = [
    `/images/electrical/hero.jpg`,
    `/images/electrical/hero-2.jpg`,
    `/images/electrical/hero-3.jpg`
  ];

  return (
    <main className="min-h-screen">
      <PageHero
        title="Power Transmission and Distribution"
        subtitle="Electrical Engineering Solutions"
        description="Rapid urbanization and the expansion of cities and services are increasing the demand for power infrastructure and the need for alternative energy sources."
        images={heroImages}
        slideInterval={6000}
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Electrical', href: '/services/electrical' }
        ]}
        overlayOpacity="medium"
        accentColor="#0066CC"
        align="left"
      />

      {/* Main Content */}
      <Container className="py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Our Expertise
            </div>
            <h2 className="text-[2.5rem] font-bold tracking-tight text-[#231f20] mb-6 leading-[1.1]">
              Innovative Power Infrastructure Solutions
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                Our engineers and energy specialists are prepared to address all aspects of transmission line design, 
                power system planning studies, substation design, operation and maintenance, and asset management of power systems.
              </p>
              <p className="text-[#4a4a4a] leading-relaxed">
                With a strong foundation in electrical engineering and power systems, our team is well-equipped 
                to tackle complex challenges and deliver innovative solutions pushing power infrastructure boundaries. 
                Their expertise in creating reliable and efficient power distribution systems sets 
                them apart as a leader in electrical engineering services.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#e43d30]/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="font-medium text-[#231f20]">Expert Team</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#e43d30]/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="font-medium text-[#231f20]">Industry Leader</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#e43d30]/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="font-medium text-[#231f20]">Innovative Solutions</span>
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
                <div className="flex items-center gap-3 group hover:bg-white/[0.02] p-2.5 -mx-2.5 rounded-lg transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-[#e43d30]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e43d30]/20 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-4 h-4 text-[#e43d30]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium group-hover:text-[#e43d30] transition-colors">Power Transmission</h4>
                    <p className="text-gray-400 text-sm leading-snug mt-1 group-hover:text-gray-300 transition-colors">High-voltage transmission line design and optimization</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group hover:bg-white/[0.02] p-2.5 -mx-2.5 rounded-lg transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-[#e43d30]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e43d30]/20 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-4 h-4 text-[#e43d30]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium group-hover:text-[#e43d30] transition-colors">Distribution Systems</h4>
                    <p className="text-gray-400 text-sm leading-snug mt-1 group-hover:text-gray-300 transition-colors">Network planning and power delivery optimization</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group hover:bg-white/[0.02] p-2.5 -mx-2.5 rounded-lg transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-[#e43d30]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e43d30]/20 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-4 h-4 text-[#e43d30]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium group-hover:text-[#e43d30] transition-colors">Substation Design</h4>
                    <p className="text-gray-400 text-sm leading-snug mt-1 group-hover:text-gray-300 transition-colors">Advanced substation engineering and safety systems</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group hover:bg-white/[0.02] p-2.5 -mx-2.5 rounded-lg transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-[#e43d30]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e43d30]/20 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-4 h-4 text-[#e43d30]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium group-hover:text-[#e43d30] transition-colors">Asset Management</h4>
                    <p className="text-gray-400 text-sm leading-snug mt-1 group-hover:text-gray-300 transition-colors">Comprehensive maintenance and system monitoring</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group hover:bg-white/[0.02] p-2.5 -mx-2.5 rounded-lg transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-[#e43d30]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e43d30]/20 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-4 h-4 text-[#e43d30]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium group-hover:text-[#e43d30] transition-colors">Technical Consulting</h4>
                    <p className="text-gray-400 text-sm leading-snug mt-1 group-hover:text-gray-300 transition-colors">Expert guidance and system optimization</p>
                  </div>
                </div>
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
              {featuredProjects.length > 0
                ? "Discover our successful electrical engineering projects and see how we've helped clients achieve their power infrastructure goals."
                : "Explore our diverse portfolio of engineering projects showcasing our expertise across various domains."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-[var(--color-bg-secondary)] block shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
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
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#e43d30] transition-colors duration-300">
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
            ))}
          </div>
        </div>
      </Container>

      {/* CTA Section */}
      <SimpleCTA
        title="Ready to Power Your Project?"
        description="Let our electrical engineering experts help you design and implement your power infrastructure solutions."
        primaryButton={{
          text: 'Get Expert Advice',
          href: '/contact'
        }}
        secondaryButton={{
          text: 'View All Services',
          href: '/services'
        }}
      />
    </main>
  );
} 