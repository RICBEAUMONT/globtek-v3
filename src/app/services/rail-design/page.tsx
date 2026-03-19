'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import PageHero from '@/components/layout/PageHero';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  MapPin,
  PencilRuler,
  LayoutList,
  Calendar,
  Grid3X3,
  FileText,
  ShieldCheck,
  Wrench,
  Plus,
  Check,
} from 'lucide-react';

const heroImages = [
  '/images/rails/rails_hero_image-1.jpg',
  '/images/rails/rails_hero_image-2.jpg',
  '/images/rails/rails_hero_image-3.jpg',
];

const statsBand = [
  { value: 'Full-Lifecycle', label: 'Project Coverage' },
  { value: '8+', label: 'Specialist Capabilities' },
  { value: 'BIM / CAD', label: 'Digital Delivery' },
  { value: 'Multi-Disc', label: 'Interface Engineering' },
];

const capabilities = [
  {
    num: '01',
    title: 'Rail Planning, Feasibility & Concept Development',
    short: 'Corridor and route feasibility assessments, alignment concept development, and high-level cost modelling to establish a viable technical foundation.',
    intro: 'Early-stage rail planning establishes the technical foundation for viable and operationally efficient rail systems. Services include:',
    bullets: [
      'Corridor and route feasibility assessments',
      'Horizontal and vertical alignment concept development',
      'Preliminary track geometry and layout studies',
      'Early risk identification, constraints mapping, and interface definition',
      'High-level cost modelling and implementation strategies',
    ],
    icon: MapPin,
  },
  {
    num: '02',
    title: 'Permanent Way & Track Engineering',
    short: 'Comprehensive geometric design for mainline, freight, passenger, terminal, yard, and industrial rail systems including turnouts and special trackwork.',
    intro: 'Comprehensive permanent way engineering for mainline, freight, passenger, terminal, yard, and industrial rail systems. Services include:',
    bullets: [
      'Track layout development and geometric design',
      'Horizontal and vertical alignment optimisation',
      'Turnout, crossing, and special trackwork design',
      'Rail, sleeper, fastening, and ballast system specification',
      'Clearance validation and operational interface analysis',
      'Engineering for heavy‑haul, freight, high‑speed, and mixed‑traffic operations',
    ],
    icon: PencilRuler,
  },
  {
    num: '03',
    title: 'Civil, Earthworks & Track Foundation Design',
    short: 'Track formation, subgrade design, ground improvement, cut/fill earthworks, drainage, retaining structures, and level crossing design.',
    intro: 'Civil works and foundation engineering enable durable, high‑performance track systems. Capabilities include:',
    bullets: [
      'Track formation, subgrade design, and ground improvement',
      'Cut/fill earthworks modelling and slope stability engineering',
      'Rail corridor drainage and water management',
      'Design of culverts, embankments, and retaining structures',
      'Level crossings, access road layouts, and civil‑track interfaces',
    ],
    icon: LayoutList,
  },
  {
    num: '04',
    title: 'Systems & Interface Engineering',
    short: 'OHTE/OTE interface engineering, signalling and train control coordination, telecoms routing, clearance envelope assessment, and multi-disciplinary risk management.',
    intro: 'Integration of rail systems to ensure seamless operational and technical compatibility. Services include:',
    bullets: [
      'Overhead traction and electrification (OHTE/OTE) interface engineering',
      'Signalling and train control system coordination',
      'Telecommunications, cabling, and ducting route planning',
      'Clearance envelope assessment and segregation requirements',
      'Multi‑disciplinary interface management and risk mitigation',
    ],
    icon: Calendar,
  },
  {
    num: '05',
    title: 'Digital Engineering & Design Platforms',
    short: 'Civil 3D for terrain modelling, Bentley OpenRail for geometry and turnouts, integrated BIM/CAD workflows, and data-driven quantity extraction.',
    intro: 'Engineering delivery is supported by advanced digital design environments for accuracy, interoperability, and efficiency:',
    bullets: [
      'Autodesk Civil 3D for terrain modelling, corridor design, and earthworks optimisation',
      'Bentley Rail Track / OpenRail for rail geometry, turnouts, and system integration',
      'Integrated CAD/BIM workflows for multi‑discipline coordination',
      'Data‑driven modelling to support quantity extraction and constructability assessment',
    ],
    icon: Grid3X3,
  },
  {
    num: '06',
    title: 'Detailed Design & Technical Documentation',
    short: 'Construction-ready drawings, track layouts, profiles, cross-sections, technical specifications, bills of quantities, and design-stage risk reviews.',
    intro: 'Production of construction‑ready deliverables aligned with regulatory and client requirements:',
    bullets: [
      'Detailed design drawings, track layouts, and plan sets',
      'Profiles, cross‑sections, and standard details',
      'Technical specifications and engineering design reports',
      'Bills of quantities, schedules, and costing inputs',
      'Constructability analyses and design‑stage risk reviews',
    ],
    icon: FileText,
  },
  {
    num: '07',
    title: 'Design Assurance & Engineering Governance',
    short: 'Independent technical reviews, compliance verification, constructability assessments, safety-in-design evaluations, and interface risk mitigation.',
    intro: 'Embedded quality and compliance processes ensure safe, robust, and standards‑aligned designs:',
    bullets: [
      'Independent technical reviews and engineering audits',
      'Compliance verification against applicable standards',
      'Constructability, safety‑in‑design, and hazard assessments',
      'Interface risk identification and mitigation strategies',
    ],
    icon: ShieldCheck,
  },
  {
    num: '08',
    title: 'Construction Support & As‑Built Engineering',
    short: 'Technical support during tender, design clarifications, site inspections, compliance reviews, and full as-built documentation and close-out deliverables.',
    intro: 'Engineering support during construction to ensure accurate implementation of the design intent:',
    bullets: [
      'Technical support during tender and contractor engagement',
      'Response to design clarifications and technical queries',
      'Site inspections, verification checks, and design compliance reviews',
      'As‑built documentation, record drawings, and close‑out deliverables',
    ],
    icon: Wrench,
  },
];

const toolCards = [
  { name: 'Autodesk Civil 3D', desc: 'Terrain modelling, corridor design, and earthworks optimisation for rail corridors.' },
  { name: 'Bentley OpenRail', desc: 'Rail geometry, turnout design, and full system integration for all track types.' },
  { name: 'BIM / CAD Workflows', desc: 'Integrated multi-discipline coordination for compliant, clash-free design outputs.' },
  { name: 'Data-Driven Modelling', desc: 'Quantity extraction, constructability assessment, and model-based cost planning.' },
];

const valueBullets = [
  'Safe, compliant, and reliable rail infrastructure delivery',
  'Reduced construction, systems, and interface risk',
  'Improved constructability and multi‑disciplinary coordination',
  'Designs aligned with operational and maintenance requirements',
  'Enhanced long‑term performance and lifecycle value',
];

export default function RailDesignPage() {
  const { ref } = useScrollReveal();
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  return (
    <main className="min-h-screen">
      <PageHero
        title="Rail Design & Engineering"
        subtitle="Integrated rail engineering solutions"
        description="Delivering integrated rail engineering solutions across the full project lifecycle, with designs optimised for operational performance, constructability, safety, and long‑term asset resilience. Engineering workflows utilise advanced digital platforms to ensure coordinated, compliant, and delivery‑ready outcomes."
        images={heroImages}
        slideInterval={6000}
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Rail Design', href: '/services/rail-design' },
        ]}
        overlayOpacity="medium"
        accentColor="#e43d30"
        align="left"
      />

      <div ref={ref}>
      {/* Stats band — dark strip, 4 cells (from HTML) */}
      <div className="bg-[#181818] grid grid-cols-2 md:grid-cols-4 border-b border-white/5">
        {statsBand.map((stat, i) => (
          <div
            key={i}
            className="scroll-reveal py-8 px-6 md:py-9 md:px-10 border-b md:border-b-0 border-r-0 md:border-r border-white/5 last:border-r-0"
          >
            <div className="text-2xl md:text-3xl font-bold text-white leading-none mb-1">
              {stat.value.includes('+') ? (
                <>8<span className="text-[var(--color-accent)]">+</span></>
              ) : stat.value.includes('/') ? (
                <>BIM<span className="text-[var(--color-accent)]">/</span>CAD</>
              ) : (
                stat.value
              )}
            </div>
            <div className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-gray-500">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Overview — two columns: text left, image right */}
      <section className="grid md:grid-cols-2 min-h-[480px]">
        <div className="bg-[#f7f6f4] p-10 md:p-16 lg:p-20 flex flex-col justify-center scroll-reveal">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-0.5 rounded-full bg-[var(--color-accent)]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Service Overview
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] leading-tight mb-6">
            Delivering Rail Infrastructure That Performs
          </h2>
          <p className="text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed mb-4">
            Globtek&apos;s rail design and engineering service delivers integrated solutions across the full project lifecycle. Our engineering workflows utilise advanced digital platforms to ensure coordinated, compliant, and delivery-ready outcomes.
          </p>
          <p className="text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed mb-8">
            From early-stage planning through to construction support and as-built documentation, our multi-disciplinary team applies rigorous technical governance and design assurance at every phase.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white text-xs font-bold uppercase tracking-wider py-3 px-6 hover:bg-[var(--color-accent-dark)] transition-colors"
            >
              Start a Conversation
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border-2 border-[var(--color-text-primary)] text-[var(--color-text-primary)] text-xs font-bold uppercase tracking-wider py-3 px-6 hover:bg-[var(--color-text-primary)] hover:text-white transition-colors"
            >
              View Our Projects
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
        <div className="relative min-h-[320px] md:min-h-full overflow-hidden bg-[var(--color-bg-dark)]">
          <Image
            src={heroImages[0]}
            alt="Rail infrastructure engineering"
            fill
            className="object-cover grayscale-[15%] brightness-[0.85] hover:grayscale-0 hover:brightness-95 transition-all duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 bg-[var(--color-accent)] px-4 py-2.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-white">
              Rail Design & Engineering
            </span>
          </div>
        </div>
      </section>

      {/* Capabilities — 4-col grid, 8 cards with icon, number, red top bar on hover */}
      <section className="bg-white py-16 md:py-24 px-4 md:px-8">
        <Container>
          <div className="scroll-reveal mb-12 md:mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-0.5 rounded-full bg-[var(--color-accent)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Core Capabilities
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-2">
              Eight Areas of Specialist Expertise
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] max-w-xl leading-relaxed">
              Each capability is delivered by experienced engineers using industry-leading tools and embedded quality assurance processes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div
                  key={i}
                  className="scroll-reveal bg-white p-6 md:p-8 relative group transition-colors hover:bg-[#f7f6f4]"
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 bg-[var(--color-accent)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                    aria-hidden
                  />
                  <div className="w-10 h-10 flex items-center justify-center rounded border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/10 text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] group-hover:text-white transition-colors mb-4">
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div className="text-[10px] font-bold tracking-widest text-[var(--color-accent)]/80 mb-3">
                    {cap.num}
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wide text-[var(--color-text-primary)] mb-3 leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {cap.short}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Deep dive — accordion */}
      <section className="bg-[#f7f6f4] py-16 md:py-24 px-4 md:px-8">
        <Container>
          <div className="scroll-reveal mb-12 md:mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-0.5 rounded-full bg-[var(--color-accent)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Service Detail
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-2">
              In-Depth Capability Overview
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)] max-w-xl leading-relaxed">
              Explore the detailed scope of each engineering discipline delivered by the Globtek rail team.
            </p>
          </div>

          <div className="scroll-reveal border-t border-gray-200">
            {capabilities.map((cap, i) => {
              const isOpen = openAccordion === i;
              return (
                <div
                  key={i}
                  className="border-b border-gray-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-bold tracking-widest text-[var(--color-accent)] min-w-[28px]">
                        {cap.num}
                      </span>
                      <span className="text-sm font-bold uppercase tracking-wide text-[var(--color-text-primary)]">
                        {cap.title}
                      </span>
                    </div>
                    <span
                      className={`flex-shrink-0 w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-500 transition-all ${
                        isOpen ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-white rotate-45' : ''
                      }`}
                      aria-hidden
                    >
                      <Plus className="w-4 h-4" strokeWidth={2} />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-6 pl-0 md:pl-[46px]">
                        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                          {cap.intro}
                        </p>
                        <ul className="grid sm:grid-cols-2 gap-0 list-none">
                          {cap.bullets.map((b, j) => (
                            <li
                              key={j}
                              className="flex items-center gap-2 py-2 pr-4 border-b border-gray-200 text-xs text-[var(--color-text-secondary)]"
                            >
                              <span className="w-4 h-0.5 flex-shrink-0 bg-[var(--color-accent)]" aria-hidden />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Digital tools — dark section */}
      <section className="bg-[var(--color-bg-dark)] py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[120px] md:text-[180px] font-black text-white/[0.03] pointer-events-none select-none"
          aria-hidden
        >
          BIM
        </span>
        <Container className="relative">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="scroll-reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-0.5 rounded-full bg-[var(--color-accent)]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  Digital Engineering
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                Advanced Design Platforms & Digital Delivery
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Engineering delivery is supported by advanced digital design environments built for accuracy, interoperability, and efficiency. Our integrated workflows ensure coordinated, data-rich outputs across all disciplines.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white text-xs font-bold uppercase tracking-wider py-3 px-6 hover:bg-[var(--color-accent-dark)] transition-colors"
              >
                Discuss Your Project
                <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
              {toolCards.map((tool, i) => (
                <div
                  key={i}
                  className="scroll-reveal bg-[#1f1f1f] p-5 md:p-6 border-l-2 border-transparent hover:border-[var(--color-accent)] hover:bg-[#252525] transition-all"
                >
                  <div className="text-xs font-bold uppercase tracking-wide text-white mb-1">
                    {tool.name}
                  </div>
                  <div className="text-xs text-gray-500 leading-relaxed">
                    {tool.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Value — red strip with checkmarks */}
      <section className="bg-[var(--color-accent)] py-16 md:py-20 px-4 md:px-8">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="scroll-reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-0.5 rounded-full bg-white/50" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                  Value to Clients
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                What This Means for Your Project
              </h2>
              <p className="text-sm text-white/90 leading-relaxed">
                Our rail design and engineering capability is structured to deliver measurable outcomes — reducing risk, improving coordination, and enabling long-term asset performance.
              </p>
            </div>
            <ul className="scroll-reveal list-none space-y-0">
              {valueBullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 py-4 border-b border-white/15 first:border-t border-white/15"
                >
                  <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center bg-white/15 text-white mt-0.5">
                    <Check className="w-4 h-4" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-white/95 leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* CTA — dark with RAIL watermark */}
      <section className="bg-[var(--color-bg-dark)] py-24 md:py-32 px-4 md:px-8 text-center relative overflow-hidden">
        <span
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(80px,18vw,200px)] font-black text-white/[0.04] tracking-[0.2em] pointer-events-none select-none whitespace-nowrap"
          aria-hidden
        >
          RAIL
        </span>
        <div className="relative">
          <h2 className="text-2xl md:text-4xl font-normal text-white mb-3 leading-tight">
            Ready to Discuss
            <br />
            <strong className="text-[var(--color-accent)]">Your Rail Project?</strong>
          </h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto mb-10 leading-relaxed">
            Our rail engineering team is ready to support your project from feasibility through to delivery. Get in touch to start the conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white text-xs font-bold uppercase tracking-wider py-3 px-6 hover:bg-[var(--color-accent-dark)] transition-colors"
            >
              Contact Our Team
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-wider py-3 px-6 hover:border-white hover:text-white transition-colors"
            >
              View Rail Projects
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
}
