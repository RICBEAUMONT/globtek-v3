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
    title: "Commercial Vessels",
    description: "Innovative designs for cargo ships, tankers, and passenger vessels optimized for efficiency and safety."
  },
  {
    title: "Military Craft",
    description: "Advanced naval architecture solutions for military vessels with focus on performance and strategic requirements."
  },
  {
    title: "Recreational Boats",
    description: "Custom design services for yachts and recreational watercraft, balancing luxury with functionality."
  },
  {
    title: "Technical Consulting",
    description: "Expert guidance in marine engineering, compliance, and optimization of vessel designs."
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

export default function RailDesignPage() {
  useScrollReveal();
  const [expanded, setExpanded] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const railImages = [
    '/images/services/roads-transportations/hero.jpg',
    '/images/services/roads-transportations/hero-2.jpg',
    '/images/services/roads-transportations/hero-3.jpg'
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev === railImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [railImages.length]);

  const timestamp = Date.now();

  return (
    <main className="min-h-screen">
      <PageHero
        title="Rail Design & Technical Capabilities"
        subtitle="Rail Engineering Solutions"
        description="At Globtek, we don't just design—we engineer certainty. Using advanced modelling, fatigue analysis, and real-world data, we deliver rail design solutions built for performance and sustainability."
        images={railImages}
        slideInterval={6000}
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Rail Design', href: '/services/rail-design' }
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
              Innovative Rail Design Solutions
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                Globtek's Railway Division offers complete engineering solutions for rail infrastructure, incorporating civil, systems, and transport engineering. Their methodology focuses on data-driven design, adherence to regulations, and the use of digital engineering tools such as BIM, GIS, and simulation modeling.
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl shadow-xl overflow-hidden min-h-[500px] h-full">
            {railImages.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`Rail design and engineering solution ${index + 1}`}
                fill
                className={`object-cover transition-opacity duration-1000 ease-in-out ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
                priority={index === 0}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent"></div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {railImages.map((_, index) => (
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

        {/* Featured Projects Section */}
        <ServiceProjects 
          category="Rail Design"
          maxProjects={3}
          showViewAllButton={true}
        />

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
          <p className="text-center text-[#4a4a4a] font-medium mb-12 text-base">A focused suite of services for every stage of rail engineering</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-start">
            {/* Service Step 1 */}
            <div className={`bg-white rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/10 min-h-[126px] ${expanded === 1 ? 'ring-2 ring-[#e43d30]/80' : ''}`}
              onClick={() => setExpanded(expanded === 1 ? null : 1)}
              tabIndex={0}
              role="button"
              aria-expanded={expanded === 1}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                  <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3"/></svg>
                </span>
                <h3 className="text-base font-semibold text-[#e43d30] flex-1">Route Determination & Feasibility Studies</h3>
                <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 1 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
              <p className="text-gray-700 text-sm mt-2 mb-1">Comprehensive route planning and feasibility analysis for rail infrastructure projects.</p>
              {expanded === 1 && (
                <div className="mt-4 animate-fade-in">
                  <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Topographical and geotechnical assessments</strong> using LiDAR, drone surveys, and borehole data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Multi-criteria corridor analysis</strong> (environmental, social, economic, and engineering constraints)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Preliminary horizontal and vertical alignment design</strong> using CAD and GIS platforms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Cost-benefit analysis (CBA) and demand forecasting</strong> using transport modeling tools (e.g., VISUM, EMME)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Environmental Impact Assessments (EIA)</strong> and stakeholder engagement facilitation</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* Service Step 2 */}
            <div className={`bg-white rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/10 min-h-[126px] ${expanded === 2 ? 'ring-2 ring-[#e43d30]/80' : ''}`}
              onClick={() => setExpanded(expanded === 2 ? null : 2)}
              tabIndex={0}
              role="button"
              aria-expanded={expanded === 2}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                  <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                </span>
                <h3 className="text-base font-semibold text-[#e43d30] flex-1">Basic & Detailed Rail Infrastructure Design</h3>
                <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 2 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
              <p className="text-gray-700 text-sm mt-2 mb-1">Comprehensive rail infrastructure design following industry standards and best practices.</p>
              {expanded === 2 && (
                <div className="mt-4 animate-fade-in">
                  <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Track geometry design</strong> (horizontal curves, vertical profiles, cant, transition curves) per PRASA/Transnet standards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Formation layer design</strong> including subgrade, sub-ballast, and ballast specifications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Turnout and crossing layout design</strong> using software like Bentley OpenRail or AutoCAD Civil 3D</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Bridge, culvert, and retaining structure design</strong> in accordance with TMH7 and Eurocode standards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Rail electrification readiness</strong> (clearance envelopes, mast foundations, OHTE interfaces)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Signalling design and installations</strong> of CAS (Condition assessment systems) infrastructure</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* Service Step 3 */}
            <div className={`bg-white rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/10 min-h-[126px] ${expanded === 3 ? 'ring-2 ring-[#e43d30]/80' : ''}`}
              onClick={() => setExpanded(expanded === 3 ? null : 3)}
              tabIndex={0}
              role="button"
              aria-expanded={expanded === 3}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                  <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /><path d="M9 17l3 3 3-3"/><path d="M9 7l3-3 3 3"/></svg>
                </span>
                <h3 className="text-base font-semibold text-[#e43d30] flex-1">Traffic & Transport Engineering</h3>
                <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 3 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
              <p className="text-gray-700 text-sm mt-2 mb-1">Advanced traffic modeling and transport engineering solutions for rail networks.</p>
              {expanded === 3 && (
                <div className="mt-4 animate-fade-in">
                  <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Rail demand modeling</strong> for freight and passenger services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Timetable simulation and capacity analysis</strong> using OpenTrack or RailSys</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Intermodal integration planning</strong> (rail-road-port-air)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Level crossing safety audits</strong> and grade separation feasibility</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Station access and egress flow modeling</strong> using pedestrian simulation tools (e.g., Legion)</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* Service Step 4 */}
            <div className={`bg-white rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/10 min-h-[126px] ${expanded === 4 ? 'ring-2 ring-[#e43d30]/80' : ''}`}
              onClick={() => setExpanded(expanded === 4 ? null : 4)}
              tabIndex={0}
              role="button"
              aria-expanded={expanded === 4}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                  <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" /><path d="M12 12l3-3-3-3"/><path d="M12 12l-3-3 3-3"/></svg>
                </span>
                <h3 className="text-base font-semibold text-[#e43d30] flex-1">Stormwater & Drainage Design for Rail Corridors</h3>
                <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 4 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
              <p className="text-gray-700 text-sm mt-2 mb-1">Comprehensive drainage and stormwater management for rail infrastructure.</p>
              {expanded === 4 && (
                <div className="mt-4 animate-fade-in">
                  <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Hydrological modeling</strong> using HEC-HMS or StormCAD</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Hydraulic design</strong> of culverts, channels, and detention ponds</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Flood risk assessments</strong> and rail embankment protection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Erosion control and slope stabilization</strong> using geotechnical and bioengineering methods</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* Service Step 5 */}
            <div className={`bg-white rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/10 min-h-[126px] ${expanded === 5 ? 'ring-2 ring-[#e43d30]/80' : ''}`}
              onClick={() => setExpanded(expanded === 5 ? null : 5)}
              tabIndex={0}
              role="button"
              aria-expanded={expanded === 5}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                  <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                </span>
                <h3 className="text-base font-semibold text-[#e43d30] flex-1">Rail Rehabilitation & Upgrade Planning</h3>
                <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 5 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
              <p className="text-gray-700 text-sm mt-2 mb-1">Strategic planning and execution of rail infrastructure rehabilitation and upgrades.</p>
              {expanded === 5 && (
                <div className="mt-4 animate-fade-in">
                  <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Track condition assessments</strong> using ultrasonic, radiographic, GPR, and visual inspection data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Life-cycle cost analysis (LCCA)</strong> for asset renewal prioritization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Upgrade design</strong> for axle load, speed, and capacity enhancements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Integration of new signalling and electrification systems</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Construction staging and operational continuity planning</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Exothermic welding</strong> of all rail sections as well as the welding of turnout crossings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Removal and/or rehabilitation of rail defects</strong> using specialised track equipment and On-Track-Machines</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* Service Step 6 */}
            <div className={`bg-white rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/10 min-h-[126px] ${expanded === 6 ? 'ring-2 ring-[#e43d30]/80' : ''}`}
              onClick={() => setExpanded(expanded === 6 ? null : 6)}
              tabIndex={0}
              role="button"
              aria-expanded={expanded === 6}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                  <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </span>
                <h3 className="text-base font-semibold text-[#e43d30] flex-1">Integration with Smart & Intelligent Mobility Systems</h3>
                <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 6 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
              <p className="text-gray-700 text-sm mt-2 mb-1">Next-generation smart rail systems and digital integration solutions.</p>
              {expanded === 6 && (
                <div className="mt-4 animate-fade-in">
                  <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Digital twin development</strong> for rail assets using BIM and IoT sensors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Real-time monitoring systems</strong> for track, rolling stock, and infrastructure health</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Smart ticketing and passenger information systems</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Integration with Mobility-as-a-Service (MaaS) platforms</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Data analytics</strong> for predictive maintenance and operational optimization</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* Service Step 7 */}
            <div className={`bg-white rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/10 min-h-[126px] ${expanded === 7 ? 'ring-2 ring-[#e43d30]/80' : ''}`}
              onClick={() => setExpanded(expanded === 7 ? null : 7)}
              tabIndex={0}
              role="button"
              aria-expanded={expanded === 7}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                  <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </span>
                <h3 className="text-base font-semibold text-[#e43d30] flex-1">Rail Maintenance Compliance and Quality Assurance Services</h3>
                <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 7 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
              <p className="text-gray-700 text-sm mt-2 mb-1">Comprehensive compliance auditing and quality assurance for rail maintenance operations.</p>
              {expanded === 7 && (
                <div className="mt-4 animate-fade-in">
                  <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Process Adherence Audits</strong> are independent audits to verify compliance with internal maintenance practices, ensuring that operational processes are being followed consistently across all levels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Rail and Welding Audits</strong> are focused on evaluating the quality, competence, and compliance of rail and welding maintenance teams. These audits assess adherence to Standard Operating Procedures (SOPs) related to welding, rail repairs, and associated maintenance activities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-[#231f20]">Maintenance Inspection Audits (MICA)</strong> to assess adherence to prescribed maintenance frequencies and inspection cycles. These audits also ensure that inspections are conducted by appropriately qualified personnel in accordance with relevant standards</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-8">
          <SimpleCTA
            title="Ready to"
            titleAccent="Start Your Project?"
            description="Let's discuss how our rail design expertise can bring your vision to life."
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