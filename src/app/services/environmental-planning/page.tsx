'use client';

import dynamic from 'next/dynamic';
import Container from '@/components/layout/Container';
import Image from 'next/image';
import SimpleCTA from '@/components/shared/SimpleCTA';
import PageHero from '@/components/layout/PageHero';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ServiceProjects from '@/components/sections/ServiceProjects';

// Dynamically import components that might cause hydration issues
const DynamicPageHero = dynamic(() => import('@/components/layout/PageHero'), {
  ssr: true
});

const DynamicSimpleCTA = dynamic(() => import('@/components/shared/SimpleCTA'), {
  ssr: true
});

interface ServiceHighlight {
  title: string;
  description: string;
}

const highlights: ServiceHighlight[] = [
  {
    title: "Environmental Impact Assessment",
    description: "Comprehensive Environmental Impact Assessments And Management Solutions For Sustainable Development."
  },
  {
    title: "Land & Water Advisory",
    description: "Expert Guidance In Land And Water Resource Management And Conservation Strategies."
  },
  {
    title: "Urban Planning",
    description: "Integrated Urban Planning Solutions For Sustainable City Development."
  },
  {
    title: "GIS Modeling",
    description: "Advanced GIS Modeling And Environmental Compliance Monitoring Solutions."
  }
];

export default function EnvironmentalPlanningPage() {
  const { ref } = useScrollReveal();

  const timestamp = Date.now();
  const heroImages = [
    `/images/environmental-planning/hero.jpg`,
    `/images/environmental-planning/hero-2.jpg`,
    `/images/environmental-planning/hero-3.jpg`
  ];

  return (
    <main className="min-h-screen">
      <DynamicPageHero
        title="Environmental Planning"
        subtitle="Sustainable Development Solutions"
        description="Comprehensive environmental and planning services for sustainable development and climate change adaptation."
        images={heroImages}
        slideInterval={6000}
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Environmental Planning', href: '/services/environmental-planning' }
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
            <h2 className="text-[2.5rem] font-bold tracking-tight text-[#14171c] mb-6 leading-[1.1]">
              Advanced Environmental Solutions
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                At Globtek, we understand the shared global goals of building a safer and more sustainable future and the impacts of climate change. Globtek provides independent planning and environmental services covering multi-disciplinary projects across sectors.
              </p>
              <p className="text-[#4a4a4a] leading-relaxed">
                We offer the services of environmental impact assessments and management, land and water advisory, environmental planning, integrated urban planning, GIS modeling, as well as environmental compliance monitoring solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#e43d30]/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="font-medium text-[#14171c]">Planning</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#e43d30]/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="font-medium text-[#14171c]">Sustainability</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#e43d30]/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <span className="font-medium text-[#14171c]">Monitoring</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#14171c] to-[#14171c] rounded-2xl shadow-xl"></div>
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
      </Container>

      {/* Image Reel Section */}
      <section className="w-full py-8 overflow-hidden">
        <div className="relative w-full">
          <div 
            className="flex items-center gap-8 animate-scroll-left" 
            style={{ width: 'max-content' }}
          >
            {heroImages.concat(heroImages).map((src, idx) => (
              <div 
                key={idx} 
                className="relative h-64 w-[420px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={src}
                  alt={`Environmental planning image ${idx % heroImages.length + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 420px"
                  priority={idx < heroImages.length}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Purpose Section */}
      <Container className="py-4 md:py-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Strategic Purpose
          </div>
          <h2 className="text-[2.5rem] font-bold tracking-tight text-[#14171c] mb-6 leading-[1.1]">
            Building Climate Resilience
          </h2>
          <p className="text-lg text-[#4a4a4a] leading-relaxed max-w-4xl mx-auto">
            At Globtek, we recognize the urgency of climate resilience and the shared global responsibility to build a safer, more sustainable future. Our Environmental Division plays a pivotal role in this mission—delivering independent, multidisciplinary planning and environmental services that enhance the viability, compliance, and sustainability of infrastructure projects across:
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-2xl bg-white border border-[#e43d30]/20 hover:shadow-lg transition-all duration-300 hover:border-[#e43d30]/40">
            <div className="w-16 h-16 rounded-2xl bg-[#e43d30]/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#14171c] mb-3">Naval Architecture & Marine Engineering</h3>
            <p className="text-[#4a4a4a] leading-relaxed">
              Sustainable marine infrastructure and vessel design with environmental compliance at the core.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-white border border-[#e43d30]/20 hover:shadow-lg transition-all duration-300 hover:border-[#e43d30]/40">
            <div className="w-16 h-16 rounded-2xl bg-[#e43d30]/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#14171c] mb-3">Rail Engineering</h3>
            <p className="text-[#4a4a4a] leading-relaxed">
              Eco-friendly rail infrastructure development with minimal environmental footprint and maximum efficiency.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-2xl bg-white border border-[#e43d30]/20 hover:shadow-lg transition-all duration-300 hover:border-[#e43d30]/40">
            <div className="w-16 h-16 rounded-2xl bg-[#e43d30]/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#14171c] mb-3">Multidisciplinary Infrastructure Development</h3>
            <p className="text-[#4a4a4a] leading-relaxed">
              Comprehensive infrastructure solutions that balance development needs with environmental preservation.
            </p>
          </div>
        </div>
      </Container>

      {/* Vision & ESG Commitment Section */}
      <Container className="py-12 md:py-16">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#14171c] to-[#14171c] rounded-2xl shadow-xl"></div>
          <div className="relative p-6 md:p-8 rounded-2xl border border-[#e43d30]/10 backdrop-blur-sm">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Vision & ESG Commitment
              </div>
              <h2 className="text-[2.5rem] font-bold tracking-tight text-white mb-6 leading-[1.1]">
                Strategic Partners in Resilient Infrastructure
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Globtek's Environmental Division is more than a service provider—we are strategic partners in shaping resilient, future-ready infrastructure. We champion:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-start gap-4 p-6 rounded-xl hover:bg-white/[0.02] transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-[#e43d30] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Innovative thinking and climate-smart engineering</h4>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 rounded-xl hover:bg-white/[0.02] transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-[#e43d30] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">ESG integration across project lifecycles</h4>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 rounded-xl hover:bg-white/[0.02] transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-[#e43d30] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Sustainable development aligned with Globtek's pan-African growth strategy</h4>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 rounded-xl hover:bg-white/[0.02] transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-[#e43d30] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Scalable solutions that meet global standards and local realities</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Featured Projects Section */}
      <Container className="py-2 md:py-4">
        <ServiceProjects
          category="Environmental Planning"
          maxProjects={3}
          showViewAllButton={true}
        />
      </Container>

      {/* Call to Action */}
      <DynamicSimpleCTA
        title="Ready to Start Your Environmental Project?"
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