'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import PageHero from '@/components/layout/PageHero';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  LayoutList,
  DollarSign,
  FileText,
  Eye,
  Network,
  Calendar,
  TrendingUp,
  CircleDollarSign,
  Plus,
  Check,
  ChevronRight,
} from 'lucide-react';

const heroImages = [
  '/images/rails/rails_hero_image-1.jpg',
  '/images/rails/rails_hero_image-2.jpg',
  '/images/rails/rails_hero_image-3.jpg',
];

const statsBand = [
  { value: '8+', label: 'Core Service Capabilities' },
  { value: 'OPEX/CAPEX', label: 'Integrated Budget Planning' },
  { value: 'RUL-Driven', label: 'Renewal Decision Making' },
  { value: 'Zero-Waste', label: 'Lifecycle Cost Approach' },
];

const spectrumSteps = [
  { label: 'Stage 1', title: 'Reactive', desc: 'Fix on failure. High disruption risk, unpredictable costs, and low asset visibility.' },
  { label: 'Stage 2', title: 'Planned Preventative', desc: 'Scheduled interventions based on time or usage cycles. Improved predictability, reduced unplanned outages.' },
  { label: 'Stage 3', title: 'Condition-Based', desc: 'Interventions triggered by actual asset condition. Maximises asset life and targets resources where needed most.' },
  { label: 'Stage 4', title: 'Predictive', desc: 'Data-driven early detection of deterioration. Proactive engineering prevents failures before they occur.' },
];

const capabilities = [
  {
    num: '01',
    title: 'Strategy & Framework Development',
    short: 'Engineering-aligned maintenance strategies built around asset criticality, operational realities, and lifecycle objectives.',
    intro: 'Our specialists develop engineering-aligned maintenance strategies built around asset criticality, operational realities, and lifecycle objectives. Each strategy is tailored to the network context and regulatory environment.',
    bullets: [
      'Strategy frameworks aligned to performance risk and asset importance',
      'Defined regimes for routine, preventative, corrective, and renewal interventions',
      'Integration with operational constraints and access windows',
      'Alignment with asset-management standards and regulatory requirements',
    ],
    icon: LayoutList,
  },
  {
    num: '02',
    title: 'OPEX Maintenance Optimisation',
    short: 'Operational maintenance budgets optimised to deliver highest value through prioritised routine, preventative, and corrective interventions.',
    intro: 'Operational maintenance budgets are optimised to deliver the highest value through structured prioritisation, technical guidance, and coordination with available access windows.',
    bullets: [
      'Prioritisation of routine and preventative interventions',
      'Planning of corrective and defect-driven works',
      'Technical guidance for tamping, rail grinding, and ballast cleaning',
      'Minor renewals and drainage / water-management support',
      'Coordination with available operational access windows',
    ],
    icon: DollarSign,
  },
  {
    num: '03',
    title: 'CAPEX Renewal Planning',
    short: 'Long-term network performance sustained through identification of assets requiring rehabilitation or renewal, informed by condition and Remaining Useful Life.',
    intro: 'Long-term network performance is supported through structured identification of assets requiring rehabilitation or renewal, with phased implementation to minimise operational disruption.',
    bullets: [
      'Identification of assets requiring rehabilitation or renewal',
      'Renewal scopes informed by condition and Remaining Useful Life (RUL)',
      'Phased implementation planning to minimise operational disruption',
      'Technical support for investment cases and prioritisation',
    ],
    icon: FileText,
  },
  {
    num: '04',
    title: 'Condition-Based & Predictive',
    short: 'Predictive maintenance enabled through integration of inspection, OTM, ultrasonic, and GPR data with trend analysis for early deterioration detection.',
    intro: 'Predictive maintenance capability is enabled through integration of multiple inspection and monitoring data streams, combined with engineering analysis to drive proactive interventions.',
    bullets: [
      'Integration of inspection, OTM, ultrasonic, and GPR data',
      'Trend analysis and early detection of deterioration',
      'Reduction of unplanned outages through proactive action',
      'Data-driven, proactive engineering insights and advisories',
    ],
    icon: Eye,
  },
  {
    num: '05',
    title: 'Systems & Interface Maintenance',
    short: 'Support across all major rail infrastructure systems — track, civil, traction power, overhead electrification, signalling, telecommunications, and operational interfaces.',
    intro: 'Maintenance support provided across all major rail infrastructure systems, ensuring that interdependent operational interfaces are managed holistically.',
    bullets: [
      'Track and civil infrastructure',
      'Traction power and overhead electrification',
      'Signalling and train control systems',
      'Telecommunications and operational communications',
      'Interdependent operational interface management',
    ],
    icon: Network,
  },
  {
    num: '06',
    title: 'Planning & Access Coordination',
    short: 'TRIM-aligned maintenance planning, possession planning, access coordination, and optimised task sequencing to align with operational windows.',
    intro: 'Maintenance activities are aligned with operational needs through TRIM-compatible planning and coordinated possession management that optimises task sequencing.',
    bullets: [
      'TRIM-aligned maintenance planning',
      'Possession planning and access coordination',
      'Optimised task sequencing for efficiency',
    ],
    icon: Calendar,
  },
  {
    num: '07',
    title: 'Performance & Continuous Improvement',
    short: 'Maintenance effectiveness enhanced through recurring fault analysis, defect trend tracking, reliability reporting, performance dashboards, and audit support.',
    intro: 'Maintenance effectiveness is monitored and improved continuously through structured performance analysis, reporting, and engineering input to audit and improvement programmes.',
    bullets: [
      'Analysis of recurring faults and defect trends',
      'Reliability reporting and performance dashboards',
      'Engineering input for audits and improvement initiatives',
    ],
    icon: TrendingUp,
  },
  {
    num: '08',
    title: 'Lifecycle Cost Optimisation',
    short: 'Lifecycle value improved by balancing OPEX and CAPEX across the asset life, extending asset life via targeted interventions, and supporting evidence-based investment decisions.',
    intro: 'Lifecycle value is maximised through a structured approach to balancing investment across the asset life, reducing unnecessary spend, and building the evidence base for future capital decisions.',
    bullets: [
      'Balancing OPEX and CAPEX across the asset life',
      'Extending asset life via targeted interventions',
      'Reducing lifecycle cost through early defect identification',
      'Evidence-based investment decisions and business cases',
    ],
    icon: CircleDollarSign,
  },
];

const opexItems = [
  'Routine and preventative interventions',
  'Corrective and defect-driven works',
  'Tamping, rail grinding, and ballast cleaning',
  'Drainage and water-management works',
  'Minor renewals and component replacements',
  'TRIM-aligned access and possession coordination',
];

const capexItems = [
  'Asset rehabilitation and renewal identification',
  'Remaining Useful Life (RUL) assessments',
  'Renewal scopes and specification development',
  'Phased implementation to minimise disruption',
  'Investment case development and prioritisation',
  'Evidence-based capital decision support',
];

const valueBullets = [
  'Higher reliability and availability across rail assets',
  'Reduced service disruptions and unplanned outages',
  'More efficient use of maintenance budgets across OPEX and CAPEX',
  'Enhanced long-term asset value and extended lifecycle',
];

export default function RailMaintenancePage() {
  const { ref } = useScrollReveal();
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  return (
    <main className="min-h-screen">
      <PageHero
        title="Maintenance & Lifecycle Management"
        subtitle="Rail Infrastructure"
        description="An integrated maintenance and lifecycle offering that helps rail operators and infrastructure owners enhance asset reliability, safety, and lifecycle value — transitioning from reactive to condition-based and predictive approaches."
        images={heroImages}
        slideInterval={6000}
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Rail Infrastructure', href: '/services/rail-design' },
          { name: 'Rail Maintenance', href: '/services/rail-maintenance' },
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
                  <>8<span className="text-[var(--color-accent)]">+</span></>
                ) : stat.value.includes('/') ? (
                  <>OPEX<span className="text-[var(--color-accent)]">/</span>CAPEX</>
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

        {/* Overview — text left, image right */}
        <section className="grid md:grid-cols-2 min-h-[480px]">
          <div className="bg-[#f7f6f4] p-10 md:p-16 lg:p-20 flex flex-col justify-center scroll-reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-0.5 rounded-full bg-[var(--color-accent)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Service Overview
              </span>
            </div>
            <div className="inline-flex items-center gap-2 border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 px-4 py-2.5 mb-6 w-fit">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-accent)]">
                Reactive → Planned → Condition-Based → Predictive
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] leading-tight mb-6">
              From Reactive to Predictive: A Smarter Maintenance Model
            </h2>
            <p className="text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed mb-4">
              Globtek Rail provides an integrated Maintenance & Lifecycle Management offering that helps rail operators and infrastructure owners enhance asset reliability, safety, and lifecycle value.
            </p>
            <p className="text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed mb-8">
              The service framework supports a structured transition from reactive maintenance towards planned, condition-based, and predictive approaches that deliver sustained long-term performance and reduce lifecycle cost.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white text-xs font-bold uppercase tracking-wider py-3 px-6 hover:bg-[var(--color-accent-dark)] transition-colors"
              >
                Discuss Your Assets
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
          <div className="relative min-h-[320px] md:min-h-full overflow-hidden bg-[var(--color-bg-dark)]">
            <Image
              src={heroImages[0]}
              alt="Rail maintenance and lifecycle engineering"
              fill
              className="object-cover grayscale-[15%] brightness-[0.85] hover:grayscale-0 hover:brightness-95 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/50" />
            <div className="absolute bottom-6 left-6 bg-[var(--color-accent)] px-4 py-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                Maintenance & Lifecycle Management
              </span>
            </div>
          </div>
        </section>

        {/* Maintenance spectrum — dark, 4 steps with arrows */}
        <section className="bg-[var(--color-bg-dark)] py-16 md:py-24 px-4 md:px-8">
          <Container>
            <div className="scroll-reveal mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-0.5 rounded-full bg-white/30" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                  Approach Framework
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                The Maintenance Maturity Spectrum
              </h2>
              <p className="text-sm text-gray-400 max-w-xl leading-relaxed">
                Globtek Rail supports operators at every stage of this spectrum — from establishing baseline reactive controls through to deploying fully data-driven predictive maintenance programmes.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px mb-6">
              {spectrumSteps.map((step, i) => (
                <div
                  key={i}
                  className="scroll-reveal relative bg-[#1a1a1a] p-6 md:p-7 group hover:bg-[var(--color-accent)]/10 transition-colors"
                >
                  {i < spectrumSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-px -translate-y-1/2 z-[1] text-[var(--color-accent)]/50" aria-hidden>
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  )}
                  <div className="text-[10px] font-bold tracking-widest text-[var(--color-accent)] mb-3">{step.label}</div>
                  <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
            <p className="scroll-reveal text-xs text-white/25 italic text-center max-w-2xl mx-auto">
              Globtek Rail supports clients at all stages — developing the strategy, systems, and engineering capability to advance along this spectrum.
            </p>
          </Container>
        </section>

        {/* 8 Capabilities — 4+4 grid */}
        <section className="bg-white py-16 md:py-24 px-4 md:px-8">
          <Container>
            <div className="scroll-reveal mb-12 md:mb-14">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-0.5 rounded-full bg-[var(--color-accent)]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  Core Service Capabilities
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-2">
                Eight Integrated Maintenance Capabilities
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)] max-w-xl leading-relaxed">
                Each capability addresses a distinct dimension of maintenance and lifecycle management, working together to deliver comprehensive asset performance outcomes.
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
          </Container>
        </section>

        {/* Accordion */}
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
                Detailed Scope of Each Capability
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)] max-w-xl leading-relaxed">
                Explore the full engineering scope delivered within each of the eight maintenance and lifecycle management capabilities.
              </p>
            </div>
            <div className="scroll-reveal border-t border-gray-200">
              {capabilities.map((cap, i) => {
                const isOpen = openAccordion === i;
                const accTitles: Record<number, string> = {
                  0: 'Maintenance Strategy & Framework Development',
                  1: 'OPEX‑Centred Maintenance Optimisation',
                  2: 'CAPEX Maintenance & Renewal Planning',
                  3: 'Condition‑Based & Predictive Maintenance',
                  4: 'Systems & Interface Maintenance',
                  5: 'Maintenance Planning & Access Coordination',
                  6: 'Maintenance Performance & Continuous Improvement',
                  7: 'Lifecycle Cost Optimisation',
                };
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
                        <span className="text-sm font-bold uppercase tracking-wide text-[var(--color-text-primary)]">{accTitles[i]}</span>
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

        {/* OPEX / CAPEX split panels */}
        <section className="grid md:grid-cols-2">
          <div className="bg-[#181818] p-12 md:p-16 scroll-reveal">
            <span className="inline-block bg-[var(--color-accent)] text-white text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 mb-5">
              OPEX
            </span>
            <h3 className="text-xl font-bold text-white mb-4 leading-tight">
              Operational Expenditure Maintenance
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Day-to-day and periodic maintenance activities that keep assets operational, safe, and within regulatory compliance — optimised to deliver maximum value within available budgets.
            </p>
            <ul className="list-none space-y-0">
              {opexItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 py-2.5 border-b border-white/7 text-xs text-white/55">
                  <span className="w-3.5 h-0.5 flex-shrink-0 bg-[var(--color-accent)]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#1f1f1f] p-12 md:p-16 scroll-reveal md:border-l border-white/5">
            <span className="inline-block border border-amber-400/40 text-amber-200/90 text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 mb-5">
              CAPEX
            </span>
            <h3 className="text-xl font-bold text-white mb-4 leading-tight">
              Capital Expenditure Renewal Planning
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Long-term investment planning for asset rehabilitation and renewal — driven by condition data, Remaining Useful Life assessments, and phased implementation to sustain network performance.
            </p>
            <ul className="list-none space-y-0">
              {capexItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 py-2.5 border-b border-white/7 text-xs text-white/55">
                  <span className="w-3.5 h-0.5 flex-shrink-0 bg-[var(--color-accent)]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Value — red strip */}
        <section className="bg-[var(--color-accent)] py-16 md:py-20 px-4 md:px-8">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="scroll-reveal">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-0.5 rounded-full bg-white/50" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">Value Proposition</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                  What Our Integrated Approach Delivers
                </h2>
                <p className="text-sm text-white/90 leading-relaxed">
                  Our integrated maintenance and lifecycle management approach is designed to deliver measurable improvements to asset reliability, operational continuity, and long-term value — across every dimension of the rail infrastructure portfolio.
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

        {/* CTA — dark with ASSET watermark */}
        <section className="bg-[var(--color-bg-dark)] py-24 md:py-32 px-4 md:px-8 text-center relative overflow-hidden">
          <span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(80px,18vw,200px)] font-black text-white/[0.025] tracking-[0.15em] pointer-events-none select-none whitespace-nowrap"
            aria-hidden
          >
            ASSET
          </span>
          <div className="relative">
            <h2 className="text-2xl md:text-4xl font-normal text-white mb-3 leading-tight">
              Extend the Life of
              <br />
              <strong className="text-[var(--color-accent)]">Your Rail Assets</strong>
            </h2>
            <p className="text-sm text-gray-500 max-w-md mx-auto mb-10 leading-relaxed">
              Our maintenance and lifecycle engineering team is ready to help you develop smarter strategies, optimise your budgets, and improve long-term asset performance.
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
