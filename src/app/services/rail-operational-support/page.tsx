'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import PageHero from '@/components/layout/PageHero';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Calendar,
  ShieldCheck,
  ClipboardList,
  Eye,
  AlertTriangle,
  Network,
  FileText,
  Plus,
  Check,
} from 'lucide-react';

const heroImages = [
  '/images/rails/rails_hero_image-1.jpg',
  '/images/rails/rails_hero_image-2.jpg',
  '/images/rails/rails_hero_image-3.jpg',
];

const statsBand = [
  { value: 'TRIM-Aligned', label: 'Slot Optimisation' },
  { value: '7+', label: 'Support Disciplines' },
  { value: 'Real-Time', label: 'Asset Intelligence' },
  { value: 'End-to-End', label: 'Disruption Response' },
];

const capabilities = [
  {
    num: '01',
    title: 'TRIM Slot Support',
    short: 'Engineering analysis of allocated slots, infrastructure readiness verification, and assurance inputs to promote consistent, predictable operations.',
    intro: 'Rail operators must work within TRIM‑defined capacity, timing, and infrastructure constraints. Our engineering support provides precise technical interpretation to optimise slot utilisation and maintain operational reliability.',
    bullets: [
      'Engineering analysis of allocated slots and infrastructure dependencies',
      'Verification of infrastructure readiness for scheduled operations',
      'Identification of speed, axle-load, structural, and access limitations',
      'Assurance inputs to promote consistent and predictable operations',
    ],
    icon: Calendar,
  },
  {
    num: '02',
    title: 'Infrastructure Readiness',
    short: 'Condition assessments of track, structures, and core system assets to confirm operational capability and identify risks before planned movements.',
    intro: 'Infrastructure must demonstrate full operational capability for planned movements. Our engineering team conducts readiness assessments to identify risks and confirm compliance prior to operations commencing.',
    bullets: [
      'Condition assessments of track, structures, and core system assets',
      'Identification of defects that may compromise operational integrity',
      'Verification of clearances, geometry, and interface compliance',
      'Technical guidance on mitigation strategies for identified constraints',
    ],
    icon: ShieldCheck,
  },
  {
    num: '03',
    title: 'Operational Planning',
    short: 'Technical inputs to operational planning workflows, coordination of cross-system dependencies, and support for access windows and staging sequencing.',
    intro: 'Engineering intelligence is integrated into operational planning to ensure coherent coordination across operational stakeholders and infrastructure managers.',
    bullets: [
      'Technical inputs to strengthen operational planning workflows',
      'Coordination of cross-system engineering dependencies',
      'Identification and control of interface-related risks',
      'Support for sequencing, access windows, and operational staging',
    ],
    icon: ClipboardList,
  },
  {
    num: '04',
    title: 'Asset Intelligence',
    short: 'Real-time asset-condition insights transformed into actionable controls, engineering advisories, temporary speed restriction support, and maintenance window alignment.',
    intro: 'Real-time asset-condition insights enhance operational performance. The team transforms inspection outputs into actionable operational controls, reducing the gap between asset state and operational decisions.',
    bullets: [
      'Engineering advisories informed by asset-condition data',
      'Technical support for temporary speed restrictions',
      'Alignment of maintenance windows with TRIM slot availability',
      'Evaluation of operational trade-off decisions',
    ],
    icon: Eye,
  },
  {
    num: '05',
    title: 'Disruption Response',
    short: 'Technical evaluation of infrastructure-linked incidents, guidance on interim safe-operating conditions, recovery staging support, and post-incident engineering analysis.',
    intro: 'Infrastructure-related disruptions require precise engineering intervention. Our team provides rapid technical evaluation and recovery guidance to restore safe operations as quickly as possible.',
    bullets: [
      'Technical evaluation of infrastructure-linked incidents',
      'Guidance on interim safe-operating conditions',
      'Support for recovery staging and reinstatement',
      'Post-incident engineering analysis and reporting',
    ],
    icon: AlertTriangle,
  },
  {
    num: '06',
    title: 'Systems & Interface Management',
    short: 'Evaluation and coordination of track, civil, traction, electrification, signalling, control, and telecommunications systems for seamless operational performance.',
    intro: 'Reliable operations depend on the seamless performance of interconnected engineering systems. Our team evaluates and coordinates key interfaces to prevent failures and minimise operational risk.',
    bullets: [
      'Track and civil systems evaluation',
      'Traction and electrification asset coordination',
      'Signalling and control system interfaces',
      'Telecommunications and operational communication systems',
    ],
    icon: Network,
  },
  {
    num: '07',
    title: 'Reporting & Performance',
    short: 'Technical reports, trend analysis of recurring constraints, infrastructure-linked performance impact assessments, and support for long-term optimisation initiatives.',
    intro: 'The engineering team produces technical reports and data-driven insights to support continuous improvement and strengthen engagement with infrastructure authorities and regulators.',
    bullets: [
      'Assessments of infrastructure-linked performance impacts',
      'Trend analysis of recurring engineering constraints',
      'Technical input for engaging with infrastructure authorities',
      'Support for long-term operational optimisation initiatives',
    ],
    icon: FileText,
  },
];

const trimPoints = [
  { num: '01', title: 'Slot Capacity Analysis', desc: 'Engineering interpretation of allocated capacity, timing windows, and infrastructure constraints to maximise utilisation.' },
  { num: '02', title: 'Readiness Verification', desc: 'Confirmation that infrastructure meets the technical requirements for planned operations before each movement cycle.' },
  { num: '03', title: 'Risk & Constraint Mapping', desc: 'Identification of speed, axle-load, structural, and access limitations that could affect slot performance or safety.' },
  { num: '04', title: 'Continuous Assurance', desc: 'Ongoing engineering assurance inputs to sustain consistent, predictable operations throughout the slot period.' },
];

const valueBullets = [
  'Improved utilisation of TRIM-allocated operating slots',
  'Reduced engineering-related disruptions to scheduled services',
  'Enhanced operational predictability and network resilience',
  'Strong alignment with infrastructure constraints and system interfaces',
];

export default function RailOperationalSupportPage() {
  const { ref } = useScrollReveal();
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  return (
    <main className="min-h-screen">
      <PageHero
        title="Operational Support & Slot Optimisation"
        subtitle="Rail Infrastructure"
        description="Specialised engineering support enabling rail operators to plan and execute safe, reliable operations within TRIM‑allocated slots — strengthening system resilience and ensuring full regulatory compliance."
        images={heroImages}
        slideInterval={6000}
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Rail Infrastructure', href: '/services/rail-design' },
          { name: 'Operational Support', href: '/services/rail-operational-support' },
        ]}
        overlayOpacity="medium"
        accentColor="#e43d30"
        align="left"
      />

      <div ref={ref}>
        {/* Stats band */}
        <div className="bg-[#181818] grid grid-cols-2 md:grid-cols-4 border-b border-white/5">
          {statsBand.map((stat, i) => (
            <div
              key={i}
              className="scroll-reveal py-8 px-6 md:py-9 md:px-10 border-b md:border-b-0 border-r-0 md:border-r border-white/5 last:border-r-0"
            >
              <div className="text-2xl md:text-3xl font-bold text-white leading-none mb-1">
                {stat.value.includes('+') ? (
                  <>7<span className="text-[var(--color-accent)]">+</span></>
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

        {/* Overview — image LEFT, text right (flipped vs rail-design) */}
        <section className="grid md:grid-cols-2 min-h-[480px]">
          <div className="relative min-h-[320px] md:min-h-full overflow-hidden bg-[var(--color-bg-dark)] order-2 md:order-1">
            <Image
              src={heroImages[0]}
              alt="Rail operations control"
              fill
              className="object-cover grayscale-[15%] brightness-[0.85] hover:grayscale-0 hover:brightness-95 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-black/60" />
            <div className="absolute bottom-6 right-6 bg-[var(--color-accent)] px-4 py-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                Operational Support & Slot Optimisation
              </span>
            </div>
          </div>
          <div className="bg-[#f7f6f4] p-10 md:p-16 lg:p-20 flex flex-col justify-center order-1 md:order-2 scroll-reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-0.5 rounded-full bg-[var(--color-accent)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Service Overview
              </span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[var(--color-bg-dark)] px-5 py-3 mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" aria-hidden />
              <span className="text-[10px] font-bold uppercase tracking-wider text-white">TRIM Slot Framework</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] leading-tight mb-6">
              Engineering Intelligence for Reliable Rail Operations
            </h2>
            <p className="text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed mb-4">
              Globtek Rail delivers specialised engineering support enabling operators to plan and execute safe, reliable operations within TRIM‑allocated slots. Our team enhances operational resilience by strengthening system reliability and reducing infrastructure‑driven disruptions.
            </p>
            <p className="text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed mb-8">
              Engineering analysis, asset condition intelligence, and systems interface management combine to ensure full compliance with regulatory and technical frameworks at every stage of operation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white text-xs font-bold uppercase tracking-wider py-3 px-6 hover:bg-[var(--color-accent-dark)] transition-colors"
              >
                Discuss Your Needs
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/services/rail-design"
                className="inline-flex items-center gap-2 border-2 border-[var(--color-text-primary)] text-[var(--color-text-primary)] text-xs font-bold uppercase tracking-wider py-3 px-6 hover:bg-[var(--color-text-primary)] hover:text-white transition-colors"
              >
                View Rail Services
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Capabilities — 4 + 3 grid (row 1: 4 cards, row 2: 3 cards) */}
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
                Seven Areas of Operational Engineering Support
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)] max-w-xl leading-relaxed">
                A comprehensive suite of engineering disciplines working together to maximise slot utilisation, minimise disruption, and sustain operational performance.
              </p>
            </div>

            <div className="flex flex-col gap-px bg-gray-200">
              {/* Row 1 — 4 cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
                {capabilities.slice(0, 4).map((cap, i) => {
                  const Icon = cap.icon;
                  return (
                    <div
                      key={i}
                      className="scroll-reveal bg-white p-6 md:p-8 relative group transition-colors hover:bg-[#f7f6f4]"
                    >
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[var(--color-accent)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" aria-hidden />
                      <div className="w-10 h-10 flex items-center justify-center rounded border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/10 text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] group-hover:text-white transition-colors mb-4">
                        <Icon className="w-5 h-5" strokeWidth={2} />
                      </div>
                      <div className="text-[10px] font-bold tracking-widest text-[var(--color-accent)]/80 mb-3">{cap.num}</div>
                      <h3 className="text-xs font-bold uppercase tracking-wide text-[var(--color-text-primary)] mb-3 leading-snug">
                        {cap.title}
                      </h3>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{cap.short}</p>
                    </div>
                  );
                })}
              </div>
              {/* Row 2 — 3 cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
                {capabilities.slice(4, 7).map((cap, i) => {
                  const Icon = cap.icon;
                  return (
                    <div
                      key={i}
                      className="scroll-reveal bg-white p-6 md:p-8 relative group transition-colors hover:bg-[#f7f6f4]"
                    >
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[var(--color-accent)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" aria-hidden />
                      <div className="w-10 h-10 flex items-center justify-center rounded border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/10 text-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:border-[var(--color-accent)] group-hover:text-white transition-colors mb-4">
                        <Icon className="w-5 h-5" strokeWidth={2} />
                      </div>
                      <div className="text-[10px] font-bold tracking-widest text-[var(--color-accent)]/80 mb-3">{cap.num}</div>
                      <h3 className="text-xs font-bold uppercase tracking-wide text-[var(--color-text-primary)] mb-3 leading-snug">
                        {cap.title}
                      </h3>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{cap.short}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {/* Accordion — Service Detail */}
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
                In-Depth Support Scope
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)] max-w-xl leading-relaxed">
                Detailed scope of engineering activities within each operational support discipline.
              </p>
            </div>

            <div className="scroll-reveal border-t border-gray-200">
              {capabilities.map((cap, i) => {
                const isOpen = openAccordion === i;
                const accTitle = i === 0 ? 'Support Within TRIM‑Allocated Operating Slots' : i === 1 ? 'Infrastructure Readiness Assessment' : i === 2 ? 'Operational Planning & Coordination' : i === 3 ? 'Asset Intelligence Integration' : i === 4 ? 'Support During Disruptions' : i === 5 ? 'Systems & Interface Management' : 'Reporting & Performance Support';
                return (
                  <div key={i} className="border-b border-gray-200">
                    <button
                      type="button"
                      onClick={() => setOpenAccordion(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-bold tracking-widest text-[var(--color-accent)] min-w-[28px]">{cap.num}</span>
                        <span className="text-sm font-bold uppercase tracking-wide text-[var(--color-text-primary)]">{accTitle}</span>
                      </div>
                      <span
                        className={`flex-shrink-0 w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-500 transition-all ${isOpen ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-white rotate-45' : ''}`}
                        aria-hidden
                      >
                        <Plus className="w-4 h-4" strokeWidth={2} />
                      </span>
                    </button>
                    <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden">
                        <div className="pb-6 pl-0 md:pl-[46px]">
                          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">{cap.intro}</p>
                          <ul className="grid sm:grid-cols-2 gap-0 list-none">
                            {cap.bullets.map((b, j) => (
                              <li key={j} className="flex items-center gap-2 py-2 pr-4 border-b border-gray-200 text-xs text-[var(--color-text-secondary)]">
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

        {/* TRIM Explainer — dark 2-col */}
        <section className="bg-[#181818] grid md:grid-cols-2 min-h-[400px]">
          <div className="p-12 md:p-16 lg:p-20 flex flex-col justify-center border-r border-white/5 scroll-reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-0.5 rounded-full bg-white/30" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Framework</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
              Working Within the <span className="text-[var(--color-accent)]">TRIM</span> Framework
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              TRIM (Train Running and Infrastructure Management) defines the capacity, timing, and infrastructure constraints within which all rail operators must plan and execute movements. Effective slot optimisation requires both operational knowledge and deep engineering capability.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Globtek Rail bridges the gap between infrastructure condition and operational decision-making — ensuring operators can confidently plan within their allocated slots and respond efficiently when conditions change.
            </p>
          </div>
          <div className="p-12 md:p-16 lg:p-20 flex flex-col justify-center">
            {trimPoints.map((point, i) => (
              <div key={i} className="scroll-reveal flex items-start gap-4 py-5 border-b border-white/7 first:border-t border-white/7">
                <span className="text-[11px] font-bold text-[var(--color-accent)] min-w-[28px] mt-0.5">{point.num}</span>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wide text-white mb-1">{point.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Value — red strip */}
        <section className="bg-[var(--color-accent)] py-16 md:py-20 px-4 md:px-8">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="scroll-reveal">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-0.5 rounded-full bg-white/50" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">Value to Rail Operators</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                  Measurable Outcomes for Your Operations
                </h2>
                <p className="text-sm text-white/90 leading-relaxed">
                  Operational Support & Slot Optimisation is designed to deliver tangible, measurable improvements to operational performance, reliability, and regulatory alignment.
                </p>
              </div>
              <ul className="scroll-reveal list-none space-y-0">
                {valueBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-4 py-4 border-b border-white/15 first:border-t border-white/15">
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

        {/* CTA — dark with TRIM watermark */}
        <section className="bg-[var(--color-bg-dark)] py-24 md:py-32 px-4 md:px-8 text-center relative overflow-hidden">
          <span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(80px,18vw,200px)] font-black text-white/[0.04] tracking-[0.2em] pointer-events-none select-none whitespace-nowrap"
            aria-hidden
          >
            TRIM
          </span>
          <div className="relative">
            <h2 className="text-2xl md:text-4xl font-normal text-white mb-3 leading-tight">
              Strengthen Your
              <br />
              <strong className="text-[var(--color-accent)]">Operational Capability</strong>
            </h2>
            <p className="text-sm text-gray-500 max-w-md mx-auto mb-10 leading-relaxed">
              Our rail operational engineering team is ready to help you optimise slot utilisation, manage infrastructure risk, and sustain reliable operations.
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
                href="/services/rail-design"
                className="inline-flex items-center gap-2 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-wider py-3 px-6 hover:border-white hover:text-white transition-colors"
              >
                Explore Rail Design
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
