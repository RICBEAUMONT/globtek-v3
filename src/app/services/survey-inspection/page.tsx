'use client';

import Container from '@/components/layout/Container';
import Image from 'next/image';
import SimpleCTA from '@/components/shared/SimpleCTA';
import PageHero from '@/components/layout/PageHero';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ServiceProjects from '@/components/sections/ServiceProjects';
import { useState } from 'react';

interface ServiceHighlight {
  title: string;
  description: string;
}

const highlights: ServiceHighlight[] = [
  {
    title: "Vessel Surveys",
    description: "Comprehensive vessel condition assessments and compliance verification."
  },
  {
    title: "Equipment Inspection",
    description: "Thorough evaluation of maritime equipment and systems."
  },
  {
    title: "Safety Audits",
    description: "Detailed safety compliance and operational effectiveness reviews."
  },
  {
    title: "Pre-Purchase Surveys",
    description: "Expert evaluation for informed maritime asset acquisition decisions."
  }
];

export default function SurveyInspectionPage() {
  useScrollReveal();
  const [isHovered, setIsHovered] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const timestamp = Date.now();
  const heroImages = [
    `/images/services/survey-inspection/hero.jpg`,
    `/images/services/survey-inspection/hero-2.jpg`,
    `/images/services/survey-inspection/hero-3.jpg`
  ];

  const surveyImages = [
    '/images/survey-and-inspection/survey-1.png',
    '/images/survey-and-inspection/survey-2.png',
    '/images/survey-and-inspection/survey-3.png',
    '/images/survey-and-inspection/survey-4.png',
    '/images/survey-and-inspection/survey-5.png',
    '/images/survey-and-inspection/survey-6.png',
    '/images/survey-and-inspection/survey-7.png',
    '/images/survey-and-inspection/survey-8.png',
    '/images/survey-and-inspection/survey-9.png',
    '/images/survey-and-inspection/survey-10.png',
    '/images/survey-and-inspection/survey-11.png'
  ];

  const handleImageClick = (src: string) => {
    setEnlargedImage(src);
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  return (
    <main className="min-h-screen">
      <PageHero
        title="Survey Inspection Excellence"
        subtitle="Maritime Assessment Leadership"
        description="Leading maritime surveys and inspections with advanced technology and industry expertise to ensure safety, compliance, and operational effectiveness."
        images={heroImages}
        slideInterval={6000}
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Survey Inspection', href: '/services/survey-inspection' }
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
            <h2 className="text-[2.5rem] font-bold tracking-tight text-[#14171c] mb-6 leading-[1.1]">
              Innovative Survey & Inspection Solutions
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                Our experienced surveyors and inspectors deliver comprehensive maritime assessments using 
                cutting-edge technology and industry expertise. We ensure your vessels and equipment meet 
                the highest safety and compliance standards.
              </p>
              <p className="text-[#4a4a4a] leading-relaxed">
                From pre-purchase surveys to safety audits, our detailed evaluations provide you with 
                the insights needed to make informed decisions and maintain operational excellence.
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
                    <h4 className="text-white font-medium group-hover:text-[#e43d30] transition-colors">Vessel Surveys</h4>
                    <p className="text-gray-400 text-sm leading-snug mt-1 group-hover:text-gray-300 transition-colors">Condition Assessment</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group hover:bg-white/[0.02] p-2.5 -mx-2.5 rounded-lg transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-[#e43d30]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e43d30]/20 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-4 h-4 text-[#e43d30]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium group-hover:text-[#e43d30] transition-colors">Equipment Inspection</h4>
                    <p className="text-gray-400 text-sm leading-snug mt-1 group-hover:text-gray-300 transition-colors">System Evaluation</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group hover:bg-white/[0.02] p-2.5 -mx-2.5 rounded-lg transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-[#e43d30]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e43d30]/20 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-4 h-4 text-[#e43d30]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium group-hover:text-[#e43d30] transition-colors">Safety Audits</h4>
                    <p className="text-gray-400 text-sm leading-snug mt-1 group-hover:text-gray-300 transition-colors">Compliance Verification</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 group hover:bg-white/[0.02] p-2.5 -mx-2.5 rounded-lg transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-[#e43d30]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#e43d30]/20 group-hover:scale-110 transition-all duration-300">
                    <svg className="w-4 h-4 text-[#e43d30]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium group-hover:text-[#e43d30] transition-colors">Pre-Purchase Surveys</h4>
                    <p className="text-gray-400 text-sm leading-snug mt-1 group-hover:text-gray-300 transition-colors">Asset Evaluation</p>
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
                    <p className="text-gray-400 text-sm leading-snug mt-1 group-hover:text-gray-300 transition-colors">Expert Guidance And Recommendations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects Section (hidden for now, restore by changing 'false' to 'true') */}
        {false && (
        <ServiceProjects 
          category="Survey Inspection"
          maxProjects={3}
          showViewAllButton={true}
        />
        )}

      </Container>

      {/* Scrolling Image Slider Section - Full Width */}
      <section className="w-full py-8 pb-16 overflow-hidden">
        <div className="relative w-full">
          <div 
            className={`flex items-center gap-8 animate-scroll-left ${isHovered ? 'paused' : ''}`} 
            style={{ width: 'max-content' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {surveyImages.concat(surveyImages).map((src, idx) => (
              <div 
                key={idx} 
                className="relative h-64 w-[420px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => handleImageClick(src)}
              >
                <Image
                  src={src}
                                          alt={`Survey inspection image ${idx % surveyImages.length + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 420px"
                  priority={idx < surveyImages.length}
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-0 hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enlarged Image Modal */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeEnlargedImage}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={enlargedImage}
              alt="Enlarged survey inspection image"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 90vw, 80vw"
            />
            <button
              onClick={closeEnlargedImage}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
              aria-label="Close enlarged image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Video Section */}
              <section className="w-full pt-16 pb-18 bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium rounded-full mb-6 border border-[#e43d30]/20">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Survey Operations
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                See Our Survey & Inspection Process
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Watch how our expert team conducts comprehensive maritime surveys and inspections with precision and attention to detail. Our experienced professionals use advanced technology and proven methodologies to ensure your vessels and equipment meet the highest safety and compliance standards.
              </p>
            </div>
            
            {/* Right Column - Video */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl max-w-lg mx-auto">
                <video 
                  className="w-full h-96 object-cover"
                  controls
                  muted
                  autoPlay
                  loop
                  playsInline
                >
                  <source src="/images/survey-and-inspection/video/20250610_100401.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <Container>
        <div className="mt-0">
          <SimpleCTA
            title="Ready to"
            titleAccent="Start Your Survey?"
            description="Let's discuss how our survey and inspection expertise can help ensure your maritime operations meet the highest standards."
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