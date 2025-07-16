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
  const [isHovered, setIsHovered] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const heroImages = [
    '/images/rails/rails_hero_image-1.jpg',
    '/images/rails/rails_hero_image-2.jpg',
    '/images/rails/rails_hero_image-3.jpg',
  ];

  const railImages = [
    '/images/rails/rails_image-1.jpg',
    '/images/rails/rails_image-2.jpg',
    '/images/rails/rails_image-3.jpg',
    '/images/rails/rails_image-4.jpg',
    '/images/rails/rails_image-5.jpg',
    '/images/rails/rails_image-6.jpg',
    '/images/rails/rails_image-7.jpg',
    '/images/rails/rails_image-8.jpg',
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev === railImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [railImages.length]);

  const handleImageClick = (src: string) => {
    setEnlargedImage(src);
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  const timestamp = Date.now();

  return (
    <main className="min-h-screen">
      <PageHero
        title="Rail Design & Technical Capabilities"
        subtitle="Rail Engineering Solutions"
        description="At Globtek, we don't just design—we engineer certainty. Using advanced modelling, fatigue analysis, and real-world data, we deliver rail design solutions built for performance and sustainability."
        images={heroImages}
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
              Our Rail Engineering Expertise
            </div>
            <h2 className="text-[2.5rem] font-bold tracking-tight text-[#14171c] mb-6 leading-[1.1]">
              Engineering Reliability. Driving Rail Innovation.
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                Rail engineering is a key area of our expertise, aimed at enhancing your transportation infrastructure capabilities.<br />
                Our team of seasoned engineers excels in the design, planning, and management of rail projects, regardless of their scale.<br /><br />
                From developing new tracks to maintaining and enhancing them, our expertise guarantees the secure and effective functioning of your rail network. If you aim to improve your current railway system or need support for a new initiative, we offer the specialized knowledge necessary for your success. Reach out to us today to explore how our rail engineering services can support your transportation objectives.
              </p>
            </div>
          </div>
          <div className="relative rounded-2xl shadow-xl overflow-hidden min-h-[500px] h-full">
            {/* Text card with dark background */}
            <div className="w-full h-full bg-[#14171c] flex items-center justify-center pt-4 pb-12 px-12 relative">
              {/* Subtle accent elements */}
              <div className="absolute top-8 right-8 w-2 h-2 bg-[#e43d30] rounded-full opacity-60"></div>
              <div className="absolute bottom-8 left-8 w-1 h-1 bg-[#e43d30] rounded-full opacity-40"></div>
              {/* Content */}
              <div className="text-center text-white max-w-md">
                <h3 className="text-2xl font-bold mb-6 leading-tight">
                  Engineered for
                  <span className="block text-[#e43d30] mt-1">Performance & Safety</span>
                </h3>
                <p className="text-base leading-relaxed text-gray-300 mb-6">
                  Globtek’s Railway Division offers complete engineering solutions for Rail Infrastructure, incorporating civil, systems, and transport engineering.
                </p>
                 {/* Group the header and bullets */}
                 <div className="mb-4">
                   <h4 className="text-sm text-gray-300 font-medium mb-2 text-center">Our methodology focuses on:</h4>
                   <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                     <span className="flex items-center">
                       <div className="w-1.5 h-1.5 bg-[#e43d30] rounded-full mr-2"></div>
                       Data-driven Design
                     </span>
                     <span className="flex items-center">
                       <div className="w-1.5 h-1.5 bg-[#e43d30] rounded-full mr-2"></div>
                       Adherence to Regulations
                     </span>
                   </div>
                 </div>
                 <div className="mb-4">
                   <h4 className="text-sm text-gray-300 font-medium mb-2 text-center">Use of digital engineering tools such as:</h4>
                   <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                     <span className="flex items-center">
                       <div className="w-1.5 h-1.5 bg-[#e43d30] rounded-full mr-2"></div>
                       BIS
                     </span>
                     <span className="flex items-center">
                       <div className="w-1.5 h-1.5 bg-[#e43d30] rounded-full mr-2"></div>
                       GIS
                     </span>
                     <span className="flex items-center">
                       <div className="w-1.5 h-1.5 bg-[#e43d30] rounded-full mr-2"></div>
                       Simulation modeling
                     </span>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scrolling Image Slider Section */}
      <section className="w-full py-8 overflow-hidden">
        <div className="relative w-full">
          <div 
            className={`flex items-center gap-8 animate-scroll-left ${isHovered ? 'paused' : ''}`} 
            style={{ width: 'max-content' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {railImages.concat(railImages).map((src, idx) => (
              <div 
                key={idx} 
                className="relative h-64 w-[420px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => handleImageClick(src)}
              >
                <Image
                  src={src}
                  alt={`Rail engineering slider image ${idx % railImages.length + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 420px"
                  priority={idx < railImages.length}
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
              alt="Enlarged rail engineering image"
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

      {/* Core Services Section - Expandable Cards */}
      <section className="relative pt-36 pb-6 px-2 bg-white">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium mb-6 whitespace-nowrap">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Core Services
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#14171c] mb-4 text-center">
          From Concept to Completion<br />Our Core Capabilities
        </h2>
        <p className="text-center text-[#4a4a4a] font-medium mb-12 text-base">A focused suite of services for every stage of rail engineering</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-start">
          {/* Service Step 1 */}
          <div className={`bg-[#14171c] text-white rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/20 min-h-[126px] ${expanded === 1 ? 'ring-2 ring-[#e43d30]/80' : ''}`}
            onClick={() => setExpanded(expanded === 1 ? null : 1)}
            tabIndex={0}
            role="button"
            aria-expanded={expanded === 1}
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m-6 3l6-3"/></svg>
              </span>
              <h3 className="text-base font-semibold text-[#e43d30] flex-1 text-white">Route Determination & Feasibility Studies</h3>
              <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 1 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </div>
            {expanded === 1 && (
              <ul className="mt-4 space-y-2 text-white text-sm leading-relaxed animate-fade-in list-disc pl-5 brand-bullets">
                <li className="text-white">Topographical and geotechnical assessments using LiDAR, drone surveys, and borehole data</li>
                <li className="text-white">Multi-criteria corridor analysis (environmental, social, economic, and engineering constraints)</li>
                <li className="text-white">Preliminary horizontal and vertical alignment design using CAD and GIS platforms</li>
                <li className="text-white">Cost-benefit analysis (CBA) and demand forecasting using transport modeling tools (e.g., VISUM, EMME)</li>
                <li className="text-white">Environmental Impact Assessments (EIA) and stakeholder engagement facilitation</li>
              </ul>
            )}
          </div>
          {/* Service Step 2 */}
          <div className={`bg-[#14171c] text-white rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/20 min-h-[126px] ${expanded === 2 ? 'ring-2 ring-[#e43d30]/80' : ''}`}
            onClick={() => setExpanded(expanded === 2 ? null : 2)}
            tabIndex={0}
            role="button"
            aria-expanded={expanded === 2}
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </span>
              <h3 className="text-base font-semibold text-[#e43d30] flex-1 text-white">Basic & Detailed Rail Infrastructure Design</h3>
              <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 2 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </div>
            {expanded === 2 && (
              <ul className="mt-4 space-y-2 text-white text-sm leading-relaxed animate-fade-in list-disc pl-5 brand-bullets">
                <li className="text-white">Track geometry design (horizontal curves, vertical profiles, cant, transition curves) per PRASA/Transnet standards</li>
                <li className="text-white">Formation layer design including subgrade, sub-ballast, and ballast specifications</li>
                <li className="text-white">Turnout and crossing layout design using software like Bentley OpenRail or AutoCAD Civil 3D</li>
                <li className="text-white">Bridge, culvert, and retaining structure design in accordance with TMH7 and Eurocode standards</li>
                <li className="text-white">Rail electrification readiness (clearance envelopes, mast foundations, OHTE interfaces)</li>
                <li className="text-white">Signalling design and installations of CAS (Condition assessment systems) infrastructure</li>
              </ul>
            )}
          </div>
          {/* Service Step 3 */}
          <div className={`bg-[#14171c] text-white rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/20 min-h-[126px] ${expanded === 3 ? 'ring-2 ring-[#e43d30]/80' : ''}`}
            onClick={() => setExpanded(expanded === 3 ? null : 3)}
            tabIndex={0}
            role="button"
            aria-expanded={expanded === 3}
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /><path d="M9 17l3 3 3-3"/><path d="M9 7l3-3 3 3"/></svg>
              </span>
              <h3 className="text-base font-semibold text-[#e43d30] flex-1 text-white">Traffic & Transport Engineering</h3>
              <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 3 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </div>
            {expanded === 3 && (
              <ul className="mt-4 space-y-2 text-white text-sm leading-relaxed animate-fade-in list-disc pl-5 brand-bullets">
                <li className="text-white">Rail demand modeling for freight and passenger services</li>
                <li className="text-white">Timetable simulation and capacity analysis using OpenTrack or RailSys</li>
                <li className="text-white">Intermodal integration planning (rail-road-port-air)</li>
                <li className="text-white">Level crossing safety audits and grade separation feasibility</li>
                <li className="text-white">Station access and egress flow modeling using pedestrian simulation tools (e.g., Legion)</li>
              </ul>
            )}
          </div>
          {/* Service Step 4 */}
          <div className={`bg-[#14171c] text-white rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/20 min-h-[126px] ${expanded === 4 ? 'ring-2 ring-[#e43d30]/80' : ''}`}
            onClick={() => setExpanded(expanded === 4 ? null : 4)}
            tabIndex={0}
            role="button"
            aria-expanded={expanded === 4}
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" /><path d="M12 12l3-3-3-3"/><path d="M12 12l-3-3 3-3"/></svg>
              </span>
              <h3 className="text-base font-semibold text-[#e43d30] flex-1 text-white">Stormwater & Drainage Design for Rail Corridors</h3>
              <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 4 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </div>
            {expanded === 4 && (
              <ul className="mt-4 space-y-2 text-white text-sm leading-relaxed animate-fade-in list-disc pl-5 brand-bullets">
                <li className="text-white">Hydrological modeling using HEC-HMS or StormCAD</li>
                <li className="text-white">Hydraulic design of culverts, channels, and detention ponds</li>
                <li className="text-white">Flood risk assessments and rail embankment protection</li>
                <li className="text-white">Erosion control and slope stabilization using geotechnical and bioengineering methods</li>
              </ul>
            )}
          </div>
          {/* Service Step 5 */}
          <div className={`bg-[#14171c] text-white rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/20 min-h-[126px] ${expanded === 5 ? 'ring-2 ring-[#e43d30]/80' : ''}`}
            onClick={() => setExpanded(expanded === 5 ? null : 5)}
            tabIndex={0}
            role="button"
            aria-expanded={expanded === 5}
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </span>
              <h3 className="text-base font-semibold text-[#e43d30] flex-1 text-white">Rail Rehabilitation & Upgrade Planning</h3>
              <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 5 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </div>
            {expanded === 5 && (
              <ul className="mt-4 space-y-2 text-white text-sm leading-relaxed animate-fade-in list-disc pl-5 brand-bullets">
                <li className="text-white">Track condition assessments using ultrasonic, radiographic, GPR, and visual inspection data</li>
                <li className="text-white">Life-cycle cost analysis (LCCA) for asset renewal prioritization</li>
                <li className="text-white">Upgrade design for axle load, speed, and capacity enhancements</li>
                <li className="text-white">Integration of new signalling and electrification systems</li>
                <li className="text-white">Construction staging and operational continuity planning</li>
                <li className="text-white">Exothermic welding of all rail sections as well as the welding of turnout crossings</li>
                <li className="text-white">Removal and/or rehabilitation of rail defects using specialised track equipment and On-Track-Machines</li>
              </ul>
            )}
          </div>
          {/* Service Step 6 */}
          <div className={`bg-[#14171c] text-white rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/20 min-h-[126px] ${expanded === 6 ? 'ring-2 ring-[#e43d30]/80' : ''}`}
            onClick={() => setExpanded(expanded === 6 ? null : 6)}
            tabIndex={0}
            role="button"
            aria-expanded={expanded === 6}
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </span>
              <h3 className="text-base font-semibold text-[#e43d30] flex-1 text-white">Integration with Smart & Intelligent Mobility Systems</h3>
              <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 6 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </div>
            {expanded === 6 && (
              <ul className="mt-4 space-y-2 text-white text-sm leading-relaxed animate-fade-in list-disc pl-5 brand-bullets">
                <li className="text-white">Digital twin development for rail assets using BIM and IoT sensors</li>
                <li className="text-white">Real-time monitoring systems for track, rolling stock, and infrastructure health</li>
                <li className="text-white">Smart ticketing and passenger information systems</li>
                <li className="text-white">Integration with Mobility-as-a-Service (MaaS) platforms</li>
                <li className="text-white">Data analytics for predictive maintenance and operational optimization</li>
              </ul>
            )}
          </div>
          {/* Service Step 7 */}
          <div className={`bg-[#14171c] text-white rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/20 min-h-[126px] ${expanded === 7 ? 'ring-2 ring-[#e43d30]/80' : ''}`}
            onClick={() => setExpanded(expanded === 7 ? null : 7)}
            tabIndex={0}
            role="button"
            aria-expanded={expanded === 7}
          >
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </span>
              <h3 className="text-base font-semibold text-[#e43d30] flex-1 text-white">Rail Maintenance Compliance and Quality Assurance Services</h3>
              <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 7 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
            </div>
            {expanded === 7 && (
              <ul className="mt-4 space-y-2 text-white text-sm leading-relaxed animate-fade-in list-disc pl-5 brand-bullets">
                <li className="text-white">Process Adherence Audits are independent audits to verify compliance with internal maintenance practices, ensuring that operational processes are being followed consistently across all levels.</li>
                <li className="text-white">Rail and Welding Audits are focused on evaluating the quality, competence, and compliance of rail and welding maintenance teams. These audits assess adherence to Standard Operating Procedures (SOPs) related to welding, rail repairs, and associated maintenance activities</li>
                <li className="text-white">Maintenance Inspection Audits (commonly referred to as MICA within Transnet) to assess adherence to prescribed maintenance frequencies and inspection cycles. These audits also ensure that inspections are conducted by appropriately qualified personnel in accordance with relevant standards.</li>
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="mt-24">
        <SimpleCTA
          title="Ready to Build"
          titleAccent="Your Rail Project?"
          description="Let's discuss how our rail engineering expertise can bring your vision to life."
          primaryButton={{
            text: "Start Your Project",
            href: "/contact"
          }}
          secondaryButton={{
            text: "View All Services",
            href: "/services"
          }}
        />
      </div>
    </main>
  );
} 