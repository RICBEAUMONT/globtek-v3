'use client';

import Container from '@/components/layout/Container';
import Image from 'next/image';
import SimpleCTA from '@/components/shared/SimpleCTA';
import PageHero from '@/components/layout/PageHero';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ServiceProjects from '@/components/sections/ServiceProjects';

interface ServiceHighlight {
  title: string;
  description: string;
}

const highlights: ServiceHighlight[] = [
  {
    title: "Regulatory Compliance",
    description: "Expert guidance on maritime regulations and compliance requirements."
  },
  {
    title: "Environmental Impact",
    description: "Strategies for minimizing ecological footprints and sustainable operations."
  },
  {
    title: "Operational Efficiency",
    description: "Solutions to enhance productivity and maintain competitive advantage."
  },
  {
    title: "Market Analysis",
    description: "Insights on industry trends and market positioning strategies."
  }
];

export default function ConsultingPage() {
  useScrollReveal();

  const timestamp = Date.now();
  const heroImages = [
    `/images/consulting/hero.jpg`,
    `/images/consulting/hero-2.jpg`,
    `/images/consulting/hero-3.jpg`
  ];

  return (
    <main className="min-h-screen">
      <PageHero
        title="Strategic Maritime Consulting"
        subtitle="Expert Advisory Services"
        description="Providing expert guidance on maritime regulations, environmental impact, and operational efficiency to help clients maintain a competitive advantage in a constantly changing market."
        images={heroImages}
        slideInterval={6000}
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Consulting', href: '/services/consulting' }
        ]}
        overlayOpacity="medium"
        accentColor="#0066CC"
        align="left"
      />

      {/* Main Content */}
      <Container className="py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 pb-0 rounded-full bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium mb-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Our Expertise
            </div>
            <h2 className="text-[2.5rem] font-bold tracking-tight text-[#14171c] mb-6 leading-[1.1]">
              Innovative Consulting Solutions
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                Our experienced consultants deliver strategic maritime advisory services using 
                industry expertise and market insights. We help you navigate complex regulations 
                and optimize operations for sustainable growth.
              </p>
              <p className="text-[#4a4a4a] leading-relaxed">
                From regulatory compliance to market analysis, our comprehensive consulting 
                services provide you with the strategic guidance needed to maintain a 
                competitive edge in the maritime industry.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#e43d30]/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="font-medium text-[#14171c]">Expert Team</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#e43d30]/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="font-medium text-[#14171c]">Industry Leader</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#e43d30]/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="font-medium text-[#14171c]">Innovative Solutions</span>
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
                <div className="flex items-center gap-3 group hover:bg-white/[0.02] p-2.5 -mx-2.5 rounded-lg transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-[#e43d30]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e43d30]/20 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-4 h-4 text-[#e43d30]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium group-hover:text-[#e43d30] transition-colors">Regulatory Compliance</h4>
                    <p className="text-gray-400 text-sm leading-snug mt-1 group-hover:text-gray-300 transition-colors">Maritime regulations</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group hover:bg-white/[0.02] p-2.5 -mx-2.5 rounded-lg transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-[#e43d30]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e43d30]/20 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-4 h-4 text-[#e43d30]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium group-hover:text-[#e43d30] transition-colors">Environmental Impact</h4>
                    <p className="text-gray-400 text-sm leading-snug mt-1 group-hover:text-gray-300 transition-colors">Sustainable operations</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group hover:bg-white/[0.02] p-2.5 -mx-2.5 rounded-lg transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-[#e43d30]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e43d30]/20 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-4 h-4 text-[#e43d30]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium group-hover:text-[#e43d30] transition-colors">Operational Efficiency</h4>
                    <p className="text-gray-400 text-sm leading-snug mt-1 group-hover:text-gray-300 transition-colors">Productivity optimization</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group hover:bg-white/[0.02] p-2.5 -mx-2.5 rounded-lg transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-[#e43d30]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e43d30]/20 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-4 h-4 text-[#e43d30]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium group-hover:text-[#e43d30] transition-colors">Market Analysis</h4>
                    <p className="text-gray-400 text-sm leading-snug mt-1 group-hover:text-gray-300 transition-colors">Industry trends and positioning</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group hover:bg-white/[0.02] p-2.5 -mx-2.5 rounded-lg transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-[#e43d30]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e43d30]/20 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-4 h-4 text-[#e43d30]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium group-hover:text-[#e43d30] transition-colors">Strategic Planning</h4>
                    <p className="text-gray-400 text-sm leading-snug mt-1 group-hover:text-gray-300 transition-colors">Long-term business development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects Section (hidden for now, restore by changing 'false' to 'true') */}
        {false && (
        <ServiceProjects 
          category="Consulting"
          maxProjects={3}
          showViewAllButton={true}
        />
        )}

        {/* CTA Section */}
        <div className="mt-24">
          <SimpleCTA
            title="Ready to"
            titleAccent="Get Expert Advice?"
            description="Let's discuss how our consulting expertise can help optimize your maritime operations and maintain a competitive edge."
            primaryButton={{
              text: "Contact Us",
              href: "/contact"
            }}
            secondaryButton={{
              text: "View All Services",
              href: "/services"
            }}
          />
        </div>
      </Container>
    </main>
  );
} 