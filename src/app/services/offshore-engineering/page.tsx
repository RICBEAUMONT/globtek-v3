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
    title: "Offshore Platforms",
    description: "Comprehensive design and engineering solutions for offshore oil and gas platforms."
  },
  {
    title: "Wind Farm Engineering",
    description: "Specialized engineering for offshore wind farms and renewable energy infrastructure."
  },
  {
    title: "Subsea Engineering",
    description: "Advanced subsea engineering solutions for underwater structures and systems."
  },
  {
    title: "Technical Consulting",
    description: "Expert guidance in offshore engineering, platform design, and marine operations."
  }
];

export default function OffshoreEngineeringPage() {
  useScrollReveal();
  const [expanded, setExpanded] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

  const offshoreImages = [
    '/images/services/marine/offshore-engineering-1.jpg',
    '/images/services/marine/offshore-engineering-2.jpg',
    '/images/services/marine/offshore-engineering-3.jpg'
  ];

  const slides = [
    ...offshoreImages,
    'text-slide' // New text slide
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const handleImageClick = (src: string) => {
    setEnlargedImage(src);
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

  return (
    <main className="min-h-screen">
      <PageHero
        title="Offshore Engineering Services"
        subtitle="Offshore Infrastructure Solutions"
        description="At Globtek, we specialize in offshore engineering solutions for oil rigs, wind farms, and marine structures. Our expertise spans from concept to construction, delivering innovative solutions for challenging offshore environments."
        images={offshoreImages}
        slideInterval={6000}
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Offshore Engineering', href: '/services/offshore-engineering' }
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
              Our Offshore Engineering Expertise
            </div>
            <h2 className="text-[2.5rem] font-bold tracking-tight text-[#14171c] mb-6 leading-[1.1]">
              Engineering Resilience. Navigating Deepwater Complexity.
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                At Globtek, we engineer offshore infrastructure with a deep understanding of the ocean's extremes. From floating platforms and subsea systems to mooring analysis and foundation design, our offshore engineering practice combines physics-based simulation, empirical design codes, and field data integration to deliver high-performance solutions for energy, industrial, and coastal sectors.
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
                {/* Main heading */}
                <h3 className="text-2xl font-bold mb-6 leading-tight">
                  Engineered for
                  <span className="block text-[#e43d30] mt-1">Harsh Realities</span>
                </h3>
                
                {/* Description */}
                <p className="text-base leading-relaxed text-gray-300 mb-6">
                  Offshore structures demand uncompromising design integrity and operational reliability. At Globtek, we bring together hydrodynamic modelling, structural mechanics, and risk-informed design to ensure our solutions are fit-for-purpose, lifecycle-efficient, and regulatory compliant.
                </p>
                
                {/* Key points */}
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                  <span className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#e43d30] rounded-full mr-2"></div>
                    Physics-based simulation
                  </span>
                  <span className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#e43d30] rounded-full mr-2"></div>
                    Risk-informed design
                  </span>
                  <span className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-[#e43d30] rounded-full mr-2"></div>
                    Regulatory compliance
                  </span>
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
            {offshoreImages.concat(offshoreImages).map((src, idx) => (
              <div 
                key={idx} 
                className="relative h-64 w-[420px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => handleImageClick(src)}
              >
                <Image
                  src={src}
                  alt={`Offshore engineering slider image ${idx % offshoreImages.length + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 420px"
                  priority={idx < offshoreImages.length}
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
              alt="Enlarged offshore engineering image"
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

      {/* Featured Projects Section (hidden for now, restore by changing 'false' to 'true') */}
      {false && (
      <ServiceProjects 
        category="Offshore Engineering"
        maxProjects={3}
        showViewAllButton={true}
      />
      )}

      {/* Core Services Section */}
      <Container className="py-16 md:py-24">
        <section className="relative pt-0 pb-0 px-2 bg-white">
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
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-12 text-center max-w-4xl mx-auto">A focused suite of services for every stage of offshore engineering</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-start">
            {/* Service Step 1 */}
            <div className={`bg-[#14171c] rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/10 min-h-[126px]`}
              onClick={() => setExpanded(expanded === 1 ? null : 1)}
              tabIndex={0}
              role="button"
              aria-expanded={expanded === 1}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                  <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                </span>
                <h3 className="text-base font-semibold text-white flex-1">Floating and Fixed Platform Design</h3>
                <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 1 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
              <p className="text-gray-100 text-sm mt-2 mb-1">Comprehensive design and analysis of offshore platforms and structures.</p>
              {expanded === 1 && (
                <div className="mt-4 animate-fade-in">
                  <p className="text-gray-100 text-sm leading-relaxed mb-3">We support the design and analysis of a wide range of offshore units:</p>
                  <ul className="space-y-3 text-gray-100 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Monopile, jacket and gravity-based structures</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Semi-submersibles, SPARs, TLPs and FPSOs</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Buoyancy tanks, pontoons, and articulated columns</strong></span>
                    </li>
                  </ul>
                  <p className="text-gray-100 text-sm leading-relaxed mt-4 mb-3">We evaluate:</p>
                  <ul className="space-y-3 text-gray-100 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Static and dynamic loading</strong> under metocean conditions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Global and local structural integrity</strong> using ANSYS AQWA, OrcaFlex, and SACS</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Motion responses (RAOs)</strong>, mooring loads, and accelerations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Fatigue life</strong> based on wave spectra and operational scenarios</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Service Step 2 */}
            <div className={`bg-[#14171c] rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/10 min-h-[126px]`}
              onClick={() => setExpanded(expanded === 2 ? null : 2)}
              tabIndex={0}
              role="button"
              aria-expanded={expanded === 2}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                  <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/><path d="M12 12l3-3-3-3"/><path d="M12 12l-3-3 3-3"/></svg>
                </span>
                <h3 className="text-base font-semibold text-white flex-1">Mooring Systems & Station-Keeping Analysis</h3>
                <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 2 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
              <p className="text-gray-100 text-sm mt-2 mb-1">Reliable anchoring and station-keeping for offshore asset stability.</p>
              {expanded === 2 && (
                <div className="mt-4 animate-fade-in">
                  <p className="text-gray-100 text-sm leading-relaxed mb-3">Our capabilities include:</p>
                  <ul className="space-y-3 text-gray-100 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Catenary, taut-leg, and hybrid mooring analysis</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Dynamic response</strong> of mooring lines, fairleads, and winches</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Anchor design</strong>: drag embedment, suction pile, and vertical load anchors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Redundancy checks</strong> under accidental and failure scenarios</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Line tensions, stiffness matrices</strong>, and fatigue damage accumulation</span>
                    </li>
                  </ul>
                  <p className="text-gray-100 text-sm leading-relaxed mt-4"><strong className="text-white">Tools:</strong> OrcaFlex, DeepLines, RAMS analysis modules</p>
                </div>
              )}
            </div>

            {/* Service Step 3 */}
            <div className={`bg-[#14171c] rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/10 min-h-[126px]`}
              onClick={() => setExpanded(expanded === 3 ? null : 3)}
              tabIndex={0}
              role="button"
              aria-expanded={expanded === 3}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                  <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                </span>
                <h3 className="text-base font-semibold text-white flex-1">Subsea Infrastructure and Pipelines</h3>
                <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 3 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
              <p className="text-gray-100 text-sm mt-2 mb-1">Design and verification of critical subsea systems and pipeline networks.</p>
              {expanded === 3 && (
                <div className="mt-4 animate-fade-in">
                  <p className="text-gray-100 text-sm leading-relaxed mb-3">We design and verify critical subsea systems:</p>
                  <ul className="space-y-3 text-gray-100 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Subsea cable routing</strong> and trenching profiles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Umbilical, riser and flowline (URF)</strong> layout optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Free span and vortex-induced vibration (VIV)</strong> mitigation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Rigid and flexible pipeline stress checks</strong> under current, wave, and temperature gradients</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Touchdown point prediction</strong> and pipe-soil interaction</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Service Step 4 */}
            <div className={`bg-[#14171c] rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/10 min-h-[126px]`}
              onClick={() => setExpanded(expanded === 4 ? null : 4)}
              tabIndex={0}
              role="button"
              aria-expanded={expanded === 4}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                  <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </span>
                <h3 className="text-base font-semibold text-white flex-1">Geotechnical & Foundation Engineering</h3>
                <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 4 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
              <p className="text-gray-100 text-sm mt-2 mb-1">Seabed and soil interaction engineering for offshore structure stability.</p>
              {expanded === 4 && (
                <div className="mt-4 animate-fade-in">
                  <p className="text-gray-100 text-sm leading-relaxed mb-3">Globtek provides seabed and soil interaction engineering to support offshore structure stability:</p>
                  <ul className="space-y-3 text-gray-100 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Site-specific geotechnical investigation</strong> interpretation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Bearing capacity and settlement</strong> prediction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Foundation options</strong>: monopile, suction caissons, rock sockets, and spudcan analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Liquefaction, scour protection</strong>, and cyclic degradation modelling</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Service Step 5 */}
            <div className={`bg-[#14171c] rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/10 min-h-[126px]`}
              onClick={() => setExpanded(expanded === 5 ? null : 5)}
              tabIndex={0}
              role="button"
              aria-expanded={expanded === 5}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                  <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>
                </span>
                <h3 className="text-base font-semibold text-white flex-1">Metocean Analysis & Environmental Loading</h3>
                <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 5 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
              <p className="text-gray-100 text-sm mt-2 mb-1">Site-specific conditions simulation for design and operational load cases.</p>
              {expanded === 5 && (
                <div className="mt-4 animate-fade-in">
                  <p className="text-gray-100 text-sm leading-relaxed mb-3">We simulate site-specific conditions to derive design and operational load cases:</p>
                  <ul className="space-y-3 text-gray-100 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Extreme wave, wind, and current characterization</strong> using hindcast datasets</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Joint probability and directional analysis</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Wave transformation modelling</strong> and spectral composition (JONSWAP, Pierson-Moskowitz)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Load combinations</strong> for structural, fatigue, and accidental limit states (ULS, FLS, ALS)</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Service Step 6 */}
            <div className={`bg-[#14171c] rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/10 min-h-[126px]`}
              onClick={() => setExpanded(expanded === 6 ? null : 6)}
              tabIndex={0}
              role="button"
              aria-expanded={expanded === 6}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                  <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                </span>
                <h3 className="text-base font-semibold text-white flex-1">Offshore Risk & Reliability Engineering</h3>
                <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 6 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
              <p className="text-gray-100 text-sm mt-2 mb-1">Safety integration into design and operational planning.</p>
              {expanded === 6 && (
                <div className="mt-4 animate-fade-in">
                  <p className="text-gray-100 text-sm leading-relaxed mb-3">We integrate safety into design and operational planning:</p>
                  <ul className="space-y-3 text-gray-100 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">HAZID/HAZOP workshops</strong> and consequence modelling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Fault Tree Analysis (FTA)</strong> and Event Tree Analysis (ETA)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Failure Mode, Effects & Criticality Analysis (FMECA)</strong></span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span><strong className="text-white">Human reliability</strong> and emergency response modelling</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      </Container>

      {/* Why Choose Globtek Section */}
      <Container className="pt-8 md:pt-12 pb-0">
        <section className="relative w-full bg-white pt-0 pb-0 px-4">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium rounded-full mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Trusted by Industry Leaders
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#14171c] mb-4 text-center">
              Why Choose <span className="text-[#e43d30]">Globtek</span>?
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-4xl mx-auto">
              Delivering engineered certainty across offshore environments with world-class expertise, cutting-edge technology, and proven methodologies that stand the test of time.
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
                <h3 className="text-xl font-bold text-[#14171c] group-hover:text-[#e43d30] transition-colors duration-300">Deepwater Expertise</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Experienced in both nearshore transitional waters and deepwater developments, with comprehensive knowledge of offshore engineering challenges across all water depths.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium rounded-full border border-[#e43d30]/20">Nearshore</span>
                <span className="px-3 py-1 bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium rounded-full border border-[#e43d30]/20">Deepwater</span>
                <span className="px-3 py-1 bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium rounded-full border border-[#e43d30]/20">Transitional</span>
              </div>
            </div>

            {/* Standards & Compliance */}
            <div className="group bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#e43d30] to-red-700 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#14171c] group-hover:text-[#e43d30] transition-colors duration-300">Industry<br />Standards</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Familiarity with ISO 19900 series, DNV-ST standards, API RP 2A/2RD, and other international offshore engineering standards ensuring regulatory compliance.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  <svg className="w-4 h-4 text-[#e43d30] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  ISO 19900 series
                </div>
                <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  <svg className="w-4 h-4 text-[#e43d30] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  DNV-ST standards
                </div>
                <div className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  <svg className="w-4 h-4 text-[#e43d30] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  API RP 2A/2RD
                </div>
              </div>
            </div>

            {/* Team Integration */}
            <div className="group bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#e43d30] to-red-700 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#14171c] group-hover:text-[#e43d30] transition-colors duration-300">Seamless Integration</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ability to integrate with your design team from concept through to commissioning, providing continuous support throughout the project lifecycle.
              </p>
              <div className="grid grid-cols-1 gap-3 text-center">
                <div className="bg-gray-50 rounded-lg p-4 group-hover:bg-[#e43d30]/5 transition-colors duration-300">
                  <div className="text-base font-bold text-[#e43d30]">Concept to Commissioning</div>
                  <div className="text-sm text-gray-600">Full lifecycle support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Technology Section */}
          <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100 relative overflow-hidden mb-0">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#e43d30]/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#e43d30] to-red-700 rounded-xl flex items-center justify-center mr-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#14171c] mb-2">Advanced Simulation Software</h3>
                <p className="text-gray-600">Cutting-edge tools for accurate offshore engineering analysis</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-[#14171c] text-lg flex items-center">
                  <svg className="w-5 h-5 text-[#e43d30] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Simulation Tools
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Use of advanced simulation software including OpenFAST, AQWA, SACS, OrcaFlex, and MOSES for comprehensive offshore engineering analysis and design validation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium rounded-full">OpenFAST</span>
                  <span className="px-3 py-1 bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium rounded-full">AQWA</span>
                  <span className="px-3 py-1 bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium rounded-full">SACS</span>
                  <span className="px-3 py-1 bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium rounded-full">OrcaFlex</span>
                  <span className="px-3 py-1 bg-[#e43d30]/10 text-[#e43d30] text-sm font-medium rounded-full">MOSES</span>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-[#14171c] text-lg flex items-center">
                  <svg className="w-5 h-5 text-[#e43d30] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  Field Validation
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Field validation from marine surveys, ROV footage, and sensor data ensures our designs are validated against real-world conditions and operational requirements.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[#e43d30] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Marine surveys
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[#e43d30] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    ROV footage
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[#e43d30] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Sensor data
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>

      {/* CTA Section */}
      <div className="mt-8">
        <SimpleCTA
          title="Ready to"
          titleAccent="Start Your Offshore Engineering Project?"
          description="Let's discuss how our offshore engineering expertise can bring your vision to life."
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
    </main>
  );
} 