'use client';

import Container from '@/components/layout/Container';
import Image from 'next/image';
import SimpleCTA from '@/components/shared/SimpleCTA';
import PageHero from '@/components/layout/PageHero';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ServiceProjects from '@/components/sections/ServiceProjects';
import { useState, useEffect } from 'react';

interface ServiceHighlight {
  title: string;
  description: string;
}

const highlights: ServiceHighlight[] = [
  {
    title: "Port Infrastructure",
    description: "Comprehensive design and engineering solutions for modern port facilities and maritime infrastructure."
  },
  {
    title: "Coastal Protection",
    description: "Advanced coastal engineering solutions for erosion control, flood protection, and shoreline stabilization."
  },
  {
    title: "Marine Structures",
    description: "Specialized design of piers, wharves, breakwaters, and other marine infrastructure components."
  },
  {
    title: "Technical Consulting",
    description: "Expert guidance in coastal engineering, port planning, and maritime infrastructure optimization."
  }
];

/**
 * CoreServicesSection
 *
 * This section displays a badge, heading, subheading, and a grid of expandable service cards.
 *
 * - The badge, heading, and subheading can be customized for different pages.
 * - The service cards are controlled by a single expanded state, ensuring only one is open at a time.
 * - The layout is responsive and visually consistent with the site's design system.
 *
 * To reuse:
 *   - Extract this section into a separate component (e.g., components/sections/CoreServicesSection.tsx).
 *   - Pass props for badge text, heading, subheading, and card content.
 *   - Use on any page that needs a similar expandable services/capabilities block.
 */

export default function CoastalPortInfrastructurePage() {
  useScrollReveal();
  const [expanded, setExpanded] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const coastalImages = [
    '/images/coastal-port-infrastructure/coastal-port-infrastructure_hero_image-1.jpg',
    '/images/coastal-port-infrastructure/coastal-port-infrastructure_hero_image-2.jpg',
    '/images/coastal-port-infrastructure/coastal-port-infrastructure_hero_image-3.jpg',
  ];

  const slideshowImages = [
    '/images/coastal-port-infrastructure/coastal-port-infrastructure_image-1.jpg',
    '/images/coastal-port-infrastructure/coastal-port-infrastructure_image-2.jpg',
    '/images/coastal-port-infrastructure/coastal-port-infrastructure_image-3.jpg',
    '/images/coastal-port-infrastructure/coastal-port-infrastructure_image-4.jpg',
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev === slideshowImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [slideshowImages.length]);

  const timestamp = Date.now();

  return (
    <main className="min-h-screen">
      <PageHero
        title="Coastal & Port Infrastructure Engineering"
        subtitle="Maritime Infrastructure Solutions"
        description="At Globtek, our Coastal Engineering services are designed to safeguard and enhance maritime infrastructure in the face of dynamic environmental forces. We integrate the latest coastal modelling tools, structural diagnostics, and the WSCAM evaluation framework to deliver practical, sustainable solutions for port authorities, terminal operators, and coastal developers."
        images={coastalImages}
        slideInterval={6000}
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Coastal & Port Infrastructure', href: '/services/coastal-port-infrastructure' }
        ]}
        overlayOpacity="medium"
        accentColor="#0066CC"
        align="left"
      />

      {/* Main Content */}
      <Container className="py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium mb-6 whitespace-nowrap">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Our Mission-Driven Engineering Philosophy
            </div>
            <h2 className="text-[2.5rem] font-bold tracking-tight text-[#231f20] mb-6 leading-[1.1]">
              Our Commitment to Resilient Shorelines and Functional Port Assets
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                From condition assessments of aging quay walls to the design of adaptive foreshore protections, our coastal and port infrastructure engineering team ensures that coastal assets are safe, compliant, and capable of supporting growing maritime operations.
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl shadow-xl overflow-hidden min-h-[500px] h-full">
            {slideshowImages.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`Coastal and port infrastructure solution ${index + 1}`}
                fill
                className={`object-cover transition-opacity duration-1000 ease-in-out ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
                priority={index === 0}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent"></div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {slideshowImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Featured Projects Section (hidden for now, restore by changing 'false' to 'true') */}
        {false && (
        <ServiceProjects 
          category="Coastal & Port Infrastructure"
          maxProjects={3}
          showViewAllButton={true}
        />
        )}

        {/* Core Services Section - Simplified */}
        <section className="relative pt-36 pb-6 px-2 bg-white">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium mb-6 whitespace-nowrap">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Core Services
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#231f20] mb-4 text-center">
            From Concept to Completion<br />Our Core Capabilities
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-12 text-center max-w-4xl mx-auto">A focused suite of services for every stage of coastal and port infrastructure engineering</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-start">
            {/* Service Step 1 */}
            <div className={`bg-[#231f20] rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 min-h-[126px] ${expanded === 1 ? '' : ''}`}
              onClick={() => setExpanded(expanded === 1 ? null : 1)}
              tabIndex={0}
              role="button"
              aria-expanded={expanded === 1}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/20">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3"/></svg>
                </span>
                <h3 className="text-base font-semibold text-white flex-1">Baseline & In-Depth Condition Assessments</h3>
                <svg className={`w-5 h-5 ml-1 text-white transition-transform duration-200 ${expanded === 1 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
              <p className="text-gray-300 text-sm mt-2 mb-1">Comprehensive inspections using WSCAM's 7-Level rating methodology for marine infrastructure.</p>
              {expanded === 1 && (
                <div className="mt-4 animate-fade-in">
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">We conduct comprehensive inspections of:</p>
                  <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Breakwaters, seawalls, groynes, and revetments</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Quay walls and berthing structures</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Slipways and marine platforms</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Fenders, bollards, ladders, and quay furniture</strong></span>
                    </li>
                  </ul>
                  <p className="text-gray-300 text-sm leading-relaxed mt-4 mb-3">Using WSCAM's 7-Level rating methodology, our assessments classify asset integrity based on visual inspection (Level 1), tactile testing, non-destructive methods (Level 2-3), and advanced structural diagnosis (Level 4-7). Each inspection integrates:</p>
                  <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Defect mapping</strong> (spalling, corrosion, cracking)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Joint and bearing condition evaluations</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Tidal exposure and sediment transport analysis</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Marine growth, debris accumulation, and scour observation</strong></span>
                    </li>
                  </ul>
                  <p className="text-gray-300 text-sm leading-relaxed mt-4"><strong className="text-white">Deliverables include:</strong> Rating matrices, defect severity maps, maintenance prioritization, and remaining life estimations.</p>
                </div>
              )}
            </div>
            {/* Service Step 2 */}
            <div className={`bg-[#231f20] rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 min-h-[126px] ${expanded === 2 ? '' : ''}`}
              onClick={() => setExpanded(expanded === 2 ? null : 2)}
              tabIndex={0}
              role="button"
              aria-expanded={expanded === 2}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/20">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                </span>
                <h3 className="text-base font-semibold text-white flex-1">Coastal Foreshore Protection Design</h3>
                <svg className={`w-5 h-5 ml-1 text-white transition-transform duration-200 ${expanded === 2 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
              <p className="text-gray-300 text-sm mt-2 mb-1">Nature-based and structural protection systems using advanced coastal modelling tools.</p>
              {expanded === 2 && (
                <div className="mt-4 animate-fade-in">
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">Our engineering team develops nature-based and structural protection systems, including:</p>
                  <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Rock revetments and articulated concrete block mats</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Vertical and stepped seawalls</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Sand nourishment and dynamic dune systems</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Geotextile tubes and submerged berms</strong></span>
                    </li>
                  </ul>
                  <p className="text-gray-300 text-sm leading-relaxed mt-4 mb-3">We use coastal modelling tools to assess wave transformation, overtopping rates, longshore drift, and climate change impacts:</p>
                  <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">2D/3D nearshore wave modelling</strong> (MIKE21, SWAN)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Shoreline retreat prediction</strong> using SBEACH and XBeach</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Wave run-up and overtopping</strong> using EurOtop methodologies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Probabilistic analysis</strong> of sea level rise and storm surge</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* Service Step 3 */}
            <div className={`bg-[#231f20] rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 min-h-[126px] ${expanded === 3 ? '' : ''}`}
              onClick={() => setExpanded(expanded === 3 ? null : 3)}
              tabIndex={0}
              role="button"
              aria-expanded={expanded === 3}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/20">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /><path d="M9 17l3 3 3-3"/><path d="M9 7l3-3 3 3"/></svg>
                </span>
                <h3 className="text-base font-semibold text-white flex-1">Structural Assessment of Berths and Quay Furniture</h3>
                <svg className={`w-5 h-5 ml-1 text-white transition-transform duration-200 ${expanded === 3 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
              <p className="text-gray-300 text-sm mt-2 mb-1">Evaluation of load capacity and condition of berthing infrastructure for operational demands.</p>
              {expanded === 3 && (
                <div className="mt-4 animate-fade-in">
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">Globtek evaluates the load capacity and condition of berthing infrastructure, ensuring it meets current and future operational demands.</p>
                  <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Assessment of fender energy absorption</strong>, anchor bolt integrity, and rubber wear</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Bollard load transfer inspection</strong> and corrosion mapping</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Fatigue checks on quay edge beams</strong> and deck slabs using FEA</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Verification of design adequacy</strong> for vessel class compatibility</span>
                    </li>
                  </ul>
                  <p className="text-gray-300 text-sm leading-relaxed mt-4">We combine field observations, structural simulation, and load testing data to recommend refurbishment, replacement, or upgrade strategies.</p>
                </div>
              )}
            </div>
            {/* Service Step 4 */}
            <div className={`bg-[#231f20] rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 min-h-[126px] ${expanded === 4 ? '' : ''}`}
              onClick={() => setExpanded(expanded === 4 ? null : 4)}
              tabIndex={0}
              role="button"
              aria-expanded={expanded === 4}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/20">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" /><path d="M12 12l3-3-3-3"/><path d="M12 12l-3-3 3-3"/></svg>
                </span>
                <h3 className="text-base font-semibold text-white flex-1">Integrated Coastal Risk Management</h3>
                <svg className={`w-5 h-5 ml-1 text-white transition-transform duration-200 ${expanded === 4 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
              <p className="text-gray-300 text-sm mt-2 mb-1">Risk-based design and inspection ethos using quantitative tools and scenario planning.</p>
              {expanded === 4 && (
                <div className="mt-4 animate-fade-in">
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">Risk is at the core of our design and inspection ethos. We apply:</p>
                  <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Hazard identification and ranking</strong> (storm surge, overtopping, wave loading)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Asset vulnerability analysis</strong> using WSCAM trends and failure databases</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Scenario-based planning</strong> for extreme weather and long-term coastal change</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Emergency response infrastructure assessment</strong> (evacuation pathways, flood barriers)</span>
                    </li>
                  </ul>
                  <p className="text-gray-300 text-sm leading-relaxed mt-4">Quantitative tools such as Fault Tree Analysis (FTA) and Failure Mode and Effects Analysis (FMEA) guide prioritization and ensure regulatory compliance.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Why Choose Globtek Section */}
        <section className="relative w-full bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-4 py-2 bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium rounded-full mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Trusted by Industry Leaders
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#231f20] mb-4 text-center">
                Why Choose <span className="text-[#e43d30]">Globtek</span>?
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-4xl mx-auto">
                Delivering engineered certainty across South Africa's coastal infrastructure with world-class expertise, cutting-edge technology, and proven methodologies that stand the test of time.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Expertise & Certification */}
              <div className="group bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#e43d30] to-red-700 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#231f20] group-hover:text-[#e43d30] transition-colors duration-300">Certified Excellence</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our inspectors are certified in WSCAM methodology and international port standards including PIANC, BS6349, and Eurocodes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium rounded-full border border-[#e43d30]/20">WSCAM</span>
                  <span className="px-3 py-1 bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium rounded-full border border-[#e43d30]/20">PIANC</span>
                  <span className="px-3 py-1 bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium rounded-full border border-[#e43d30]/20">BS6349</span>
                  <span className="px-3 py-1 bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium rounded-full border border-[#e43d30]/20">Eurocodes</span>
                </div>
              </div>

              {/* Technology & Innovation */}
              <div className="group bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#e43d30] to-red-700 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#231f20] group-hover:text-[#e43d30] transition-colors duration-300">Advanced Technology</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Leveraging Fulcrum and GIS-linked mobile apps for real-time field data collection and advanced spatial analytics.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    <svg className="w-4 h-4 text-[#e43d30] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Real-time data collection
                  </div>
                  <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    <svg className="w-4 h-4 text-[#e43d30] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Spatial analytics
                  </div>
                  <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    <svg className="w-4 h-4 text-[#e43d30] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    GIS integration
                  </div>
                </div>
              </div>

              {/* Experience & Reach */}
              <div className="group bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#e43d30] to-red-700 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#231f20] group-hover:text-[#e43d30] transition-colors duration-300">Regional Expertise</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Extensive experience across South African ports, SADC coastal infrastructure, and offshore industrial facilities.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-gray-50 rounded-lg p-3 group-hover:bg-[#e43d30]/5 transition-colors duration-300">
                    <div className="text-2xl font-bold text-[#e43d30]">15+</div>
                    <div className="text-sm text-gray-600">South African Ports</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 group-hover:bg-[#e43d30]/5 transition-colors duration-300">
                    <div className="text-2xl font-bold text-[#e43d30]">SADC</div>
                    <div className="text-sm text-gray-600">Regional Coverage</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance & Integration */}
            <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#e43d30]/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#e43d30] to-red-700 rounded-xl flex items-center justify-center mr-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#231f20] mb-2">Compliance & Integration</h3>
                  <p className="text-gray-600">Seamless regulatory adherence and quality assurance</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-[#231f20] text-lg flex items-center">
                    <svg className="w-5 h-5 text-[#e43d30] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    National Integration
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Seamless integration with national coastal datasets and TNPA compliance frameworks, ensuring regulatory adherence and data consistency across all projects.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-[#231f20] text-lg flex items-center">
                    <svg className="w-5 h-5 text-[#e43d30] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Quality Assurance
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Rigorous quality control processes and continuous improvement methodologies to maintain the highest standards in coastal engineering and infrastructure assessment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-8">
          <SimpleCTA
            title="Ready to"
            titleAccent="Start Your Project?"
            description="Let's discuss how our coastal and port infrastructure expertise can bring your vision to life."
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