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

export default function NavalArchitectPage() {
  useScrollReveal();
  const [expanded, setExpanded] = useState<number | null>(null);

  const timestamp = Date.now();
  const heroImages = [
    `/images/services/naval-design/hero.jpg`,
    `/images/services/naval-design/hero-2.jpg`,
    `/images/services/naval-design/hero-3.jpg`
  ];

  return (
    <main className="min-h-screen">
      <PageHero
        title="Naval Architecture & Marine Systems Engineering"
        subtitle="Maritime Engineering Solutions"
        images={heroImages}
        slideInterval={6000}
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Naval Architect', href: '/services/naval-architect' }
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
              Our Mission-Driven Engineering Philosophy
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                At Globtek, we don't just design—we engineer certainty. Using advanced modelling, fatigue analysis, and real-world data, we deliver naval architecture solutions built for performance and sustainability.
              </p>
              <p className="text-lg text-[#4a4a4a] leading-relaxed">
                We engineer ships and marine platforms that are robust, safe, operable in extreme environments, and optimized for long-term performance. Every hull, system, and component we develop is supported by:
              </p>
              <ul className="space-y-2 text-[#697393] text-sm mt-4">
                <li className="flex items-start gap-2">
                  <span className="mt-1">
                    <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16c1.333-1 2.667-1 4 0s2.667 1 4 0 2.667-1 4 0 2.667 1 4 0" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12c1.333-1 2.667-1 4 0s2.667 1 4 0 2.667-1 4 0 2.667 1 4 0" />
                    </svg>
                  </span>
                  <span>State-of-the-art CFD and seakeeping simulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">
                    <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="4" y="8" width="16" height="8" rx="2" strokeWidth="2" />
                      <path d="M4 12h16" strokeWidth="2" />
                    </svg>
                  </span>
                  <span>Fatigue and structural lifecycle modelling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">
                    <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" strokeWidth="2" />
                      <path d="M12 7v5l3 3" strokeWidth="2" />
                    </svg>
                  </span>
                  <span>Dynamic control and manoeuvring analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">
                    <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    </svg>
                  </span>
                  <span>Risk-informed decision-making using advanced reliability tools</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#231f20] to-[#1a1718] rounded-2xl shadow-xl"></div>
            <div className="relative p-6 md:p-8 rounded-2xl border border-[#e43d30]/10 backdrop-blur-sm">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white tracking-tight">Design to Classification, Build to Performance</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-300 text-base leading-relaxed">
                  Globtek supports naval and commercial shipbuilding from first sketch to final trial. Whether you're developing an offshore support vessel, a planing hull interceptor, or a moored platform in deepwater seas—our solutions are underpinned by:
                </p>
                <ul className="space-y-2 text-[#697393] text-sm font-normal mt-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">
                      <svg className="w-4 h-4 text-[#e43d30]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                    <span>Solid academic grounding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">
                      <svg className="w-4 h-4 text-[#e43d30]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                    <span>Deep software integration (Maxsurf, OrcaFlex, OpenFOAM, ANSYS AQWA, Star-CCM+)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">
                      <svg className="w-4 h-4 text-[#e43d30]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                    <span>Field-proven validation data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">
                      <svg className="w-4 h-4 text-[#e43d30]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                    <span>A structured systems engineering methodology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">
                      <svg className="w-4 h-4 text-[#e43d30]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                    <span>Modern risk-based design and lifecycle optimisation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects Section (hidden for now, restore by changing 'false' to 'true') */}
        {false && (
          <ServiceProjects 
            category="Naval Architecture"
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
          <p className="text-center text-[#4a4a4a] font-medium mb-12 text-base">A focused suite of services for every stage of marine engineering</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-start">
            {/* Service Step 1 */}
            <div className={`bg-[#231f20] rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/10 min-h-[126px]`}
              onClick={() => setExpanded(expanded === 1 ? null : 1)}
              tabIndex={0}
              role="button"
              aria-expanded={expanded === 1}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                  <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="2" rx="1"/><path d="M7 11V7m4 4V7m4 4V7"/></svg>
                </span>
                <h3 className="text-base font-semibold text-white flex-1">Concept, Feasibility & Preliminary Design</h3>
                <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 1 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
              <p className="text-gray-100 text-sm mt-2 mb-1">From hullform selection to multi-domain trade-offs, we establish the design foundation.</p>
              {expanded === 1 && (
                <div className="mt-4 animate-fade-in">
                  <ul className="space-y-3 text-gray-100 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Resistance, propulsion & powering predictions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Weight & balance modelling (including probabilistic weight growth)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Seakeeping & manoeuvring behaviour in regular and irregular seas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Vibration and noise analysis in early-stage layout</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-500 font-medium tracking-wide uppercase">Tools: RANS-CFD, boundary layer modelling, empirical prediction, OpenFOAM-based solvers</p>
                  </div>
                </div>
              )}
            </div>
            {/* Service Step 2 */}
            <div className={`bg-[#231f20] rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/10 min-h-[126px]`}
              onClick={() => setExpanded(expanded === 2 ? null : 2)}
              tabIndex={0}
              role="button"
              aria-expanded={expanded === 2}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                  <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16c1.333-1 2.667-1 4 0s2.667 1 4 0 2.667-1 4 0 2.667 1 4 0" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12c1.333-1 2.667-1 4 0s2.667 1 4 0 2.667-1 4 0 2.667 1 4 0" /></svg>
                </span>
                <h3 className="text-base font-semibold text-white flex-1">Seakeeping & Dynamic Response Analysis</h3>
                <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 2 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
              <p className="text-gray-100 text-sm mt-2 mb-1">We simulate vessel responses to stochastic seas using frequency- and time-domain techniques.</p>
              {expanded === 2 && (
                <div className="mt-4 animate-fade-in">
                  <ul className="space-y-3 text-gray-100 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Strip theory and potential flow methods (2D/3D)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Heave, pitch, roll motion predictions and RAO generation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Wave spectrum formulation using Pierson-Moskowitz, JONSWAP, and real-time hindcast data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Coupled hydroelastic response predictions (including flexural-bending interaction)</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-500 font-medium tracking-wide uppercase">Added Mass & Damping: Computed using potential flow solvers, validated via experimental tank tests</p>
                    <p className="text-xs text-gray-500 font-medium tracking-wide uppercase mt-1">Design Criteria Evaluated: Slamming, deck wetness, parametric rolling, vertical accelerations</p>
                  </div>
                </div>
              )}
            </div>
            {/* Service Step 3 */}
            <div className={`bg-[#231f20] rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/10 min-h-[126px]`}
              onClick={() => setExpanded(expanded === 3 ? null : 3)}
              tabIndex={0}
              role="button"
              aria-expanded={expanded === 3}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                  <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" /></svg>
                </span>
                <h3 className="text-base font-semibold text-white flex-1">Structural Integrity & Fatigue Life Estimation</h3>
                <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 3 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
              <p className="text-gray-100 text-sm mt-2 mb-1">We engineer structural systems for life-cycle performance and durability.</p>
              {expanded === 3 && (
                <div className="mt-4 animate-fade-in">
                  <ul className="space-y-3 text-gray-100 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Application of S-N curves, Miner's Rule, and spectral fatigue techniques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Full mission-profile stress history development using FEA & wave load spectra</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>LEFM and fracture mechanics applied to structural crack progression</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Integration with voyage simulation for fatigue damage prediction</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-500 font-medium tracking-wide uppercase">Validated by experimental campaigns: Tank tests with scaled flexible models for load calibration</p>
                  </div>
                </div>
              )}
            </div>
            {/* Service Step 4 */}
            <div className={`bg-[#231f20] rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/10 min-h-[126px]`}
              onClick={() => setExpanded(expanded === 4 ? null : 4)}
              tabIndex={0}
              role="button"
              aria-expanded={expanded === 4}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                  <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 12c2-2 6-2 8 0s6 2 8 0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <h3 className="text-base font-semibold text-white flex-1">CFD-Driven Performance Evaluation</h3>
                <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 4 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
              <p className="text-gray-100 text-sm mt-2 mb-1">We perform end-to-end hydrodynamic simulations using RANS and LES approaches.</p>
              {expanded === 4 && (
                <div className="mt-4 animate-fade-in">
                  <ul className="space-y-3 text-gray-100 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Geometry refinement and mesh convergence studies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Turbulence model comparison (k-ε, SST, RSM, LES)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Viscous drag breakdown, separation control, and appendage optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Flow-structure interaction for foils, hydroplanes, and planing hulls</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-500 font-medium tracking-wide uppercase">Applications: Lift-drag modelling, flow around hull irregularities, sail performance tuning, hydrofoil cavitation predictions</p>
                  </div>
                </div>
              )}
            </div>
            {/* Service Step 5 */}
            <div className={`bg-[#231f20] rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/10 min-h-[126px]`}
              onClick={() => setExpanded(expanded === 5 ? null : 5)}
              tabIndex={0}
              role="button"
              aria-expanded={expanded === 5}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                  <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2v14m0 0c-3.866 0-7-3.134-7-7m7 7c3.866 0 7-3.134 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="2" r="1.5" /></svg>
                </span>
                <h3 className="text-base font-semibold text-white flex-1">Offshore & Floating System Engineering</h3>
                <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 5 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
              <p className="text-gray-100 text-sm mt-2 mb-1">Designing for offshore demands precision and resilience.</p>
              {expanded === 5 && (
                <div className="mt-4 animate-fade-in">
                  <ul className="space-y-3 text-gray-100 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Vortex-induced vibration (VIV) and Morison-based load estimation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Seabed geotechnics: foundations, drag-embedded anchors, and cable trenching</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Station-keeping systems: mooring stiffness, line dynamics, and failure redundancy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Hovercraft, catamaran and semi-displacement platform design</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-500 font-medium tracking-wide uppercase">Integrated FEA + Hydrodynamic Models ensure structural robustness across mission lifetimes.</p>
                  </div>
                </div>
              )}
            </div>
            {/* Service Step 6 */}
            <div className={`bg-[#231f20] rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/10 min-h-[126px]`}
              onClick={() => setExpanded(expanded === 6 ? null : 6)}
              tabIndex={0}
              role="button"
              aria-expanded={expanded === 6}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                  <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 3l8 4v5c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V7l8-4z" /><path d="M9 12l2 2 4-4" stroke="#22c55e" strokeWidth="2"/></svg>
                </span>
                <h3 className="text-base font-semibold text-white flex-1">Risk & Safety Engineering</h3>
                <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 6 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
              <p className="text-gray-100 text-sm mt-2 mb-1">Safety is embedded into our design process, not applied retroactively.</p>
              {expanded === 6 && (
                <div className="mt-4 animate-fade-in">
                  <ul className="space-y-3 text-gray-100 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Fault Tree Analysis (FTA) and Event Tree Analysis (ETA)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Failure Mode, Effects & Criticality Analysis (FMECA)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Minimum Cut Sets & Fussell-Vesely algorithm</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Poisson and Markov modelling for failure timing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Fuzzy Set Theory for uncertain or vague data domains</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-500 font-medium tracking-wide uppercase">Our systems engineering approach integrates design risk with regulatory compliance, environmental protection, and lifecycle cost-benefit analysis.</p>
                  </div>
                </div>
              )}
            </div>
            {/* Service Step 7 */}
            <div className={`bg-[#231f20] rounded-xl shadow p-5 flex flex-col cursor-pointer transition-all duration-200 border border-[#e43d30]/10 min-h-[126px]`}
              onClick={() => setExpanded(expanded === 7 ? null : 7)}
              tabIndex={0}
              role="button"
              aria-expanded={expanded === 7}
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e43d30]/10">
                  <svg className="w-5 h-5 text-[#e43d30]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" strokeWidth="2"/></svg>
                </span>
                <h3 className="text-base font-semibold text-white flex-1">Ship Control & Manoeuvring</h3>
                <svg className={`w-5 h-5 ml-1 text-[#e43d30] transition-transform duration-200 ${expanded === 7 ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
              <p className="text-gray-100 text-sm mt-2 mb-1">We develop accurate motion models and stability criteria for advanced control systems.</p>
              {expanded === 7 && (
                <div className="mt-4 animate-fade-in">
                  <ul className="space-y-3 text-gray-100 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Nomoto models, T-K parameters, and Routh-Hurwitz stability checks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Control surface response simulation (rudders, thrusters, fins)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>PID-based control loop development using time-domain and Laplace transforms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#e43d30] rounded-full mt-2"></span>
                      <span>Real-time path prediction and turning circle optimization</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-500 font-medium tracking-wide uppercase">Dynamic Stability: We combine first- and second-order motion equations to analyze vessel trajectory under calm and disturbed conditions.</p>
                  </div>
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
            description="Let's discuss how our naval architecture expertise can bring your vision to life."
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