'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import PageHero from '@/components/layout/PageHero';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  LayoutList,
  Grid3X3,
  FileText,
  Network,
  Calendar,
  ShieldCheck,
  ClipboardList,
  Database,
  TrendingUp,
  Check,
} from 'lucide-react';

const heroImages = [
  '/images/rails/rails_hero_image-1.jpg',
  '/images/rails/rails_hero_image-2.jpg',
  '/images/rails/rails_hero_image-3.jpg',
];

type Stats = {
  a: string;
  b?: string;
  c?: string;
  accent: string;
  label: string;
};

const statsBand: Stats[] = [
  { a: '6', b: undefined, accent: '+', c: undefined, label: 'System Disciplines Covered' },
  { a: '5', b: undefined, accent: '+', c: undefined, label: 'Inspection Methodologies' },
  { a: 'RUL', b: 'Risk', accent: '+', c: undefined, label: 'Asset Intelligence Outputs' },
  { a: 'Full', b: 'Chain', accent: '-', c: undefined, label: 'Engineering Value Coverage' },
];

type CoverageCard = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

const coverageCards: CoverageCard[] = [
  {
    title: 'Permanent Way & Track',
    description:
      'Rails, sleepers, fastenings, ballast, geometry, alignment, and formation — assessed for condition, compliance, and operational performance.',
    icon: LayoutList,
  },
  {
    title: 'Civil & Structural Infrastructure',
    description:
      'Bridges, culverts, retaining structures, embankments, cuttings, drainage systems, and level crossings evaluated for structural integrity and serviceability.',
    icon: FileText,
  },
  {
    title: 'Overhead Traction & Electrification',
    description:
      'OHTE and OTE systems including catenary, contact wire, support structures, and earthing — inspected for condition, clearance, and interface compliance.',
    icon: Grid3X3,
  },
  {
    title: 'Signalling Systems',
    description:
      'Trackside signalling equipment, interlockings, detector loops, and control interfaces assessed for condition, operational integrity, and compliance.',
    icon: Network,
  },
  {
    title: 'Telecommunications & Operations',
    description:
      'Telecoms infrastructure, cabling, communication systems, and operational installations reviewed for condition, coverage, and operational interface performance.',
    icon: Calendar,
  },
  {
    title: 'Ancillary & Safety-Critical Assets',
    description:
      'Safety-critical infrastructure including fencing, access points, warning systems, and ancillary assets assessed for compliance and operational risk.',
    icon: ShieldCheck,
  },
];

type MethodKey = 'visual' | 'otm' | 'trolley' | 'ultrasonic' | 'analytics';

type MethodTab = {
  key: MethodKey;
  num: string;
  tabLabel: string;
  title: string;
  description: string;
  list: string[];
  metaTag: string;
  techList: string[];
  useLabel: string;
  useTags: string[];
};

const methodTabs: MethodTab[] = [
  {
    key: 'visual',
    num: '01',
    tabLabel: 'Visual Inspections',
    title: 'Visual Infrastructure Inspections',
    description:
      'Visual inspections deliver baseline condition intelligence through systematic assessment of structural components, track elements, and operational installations. They enable early identification of deterioration and risk and establish the baseline for further investigation, monitoring, and intervention planning.',
    list: [
      'Assessment of rails, sleepers, fastenings, and ballast condition',
      'Identification of geometry irregularities, settlement, and visible wear',
      'Inspection of drainage systems, embankments, structures, and interfaces',
      'Review of OHTE, signalling, and telecommunications installations',
      'Documentation using geo-referenced photography and defect registers',
    ],
    metaTag: 'Inspection Type',
    techList: [
      'Systematic field assessment',
      'Geo-referenced photography',
      'Defect register documentation',
      'Condition baseline establishment',
    ],
    useLabel: 'Best Applied For',
    useTags: ['Baseline Assessment', 'Routine Inspection', 'All System Types', 'Risk Identification'],
  },
  {
    key: 'otm',
    num: '02',
    tabLabel: 'OTM Inspections',
    title: 'On-Track Machine (OTM) Inspections',
    description:
      'OTM inspections utilise high-resolution measurement platforms to evaluate track geometry, rail condition, and subsurface characteristics under operational or near-operational conditions, ensuring consistent, repeatable data acquisition. OTM inspections utilise integrated technologies including Infrastructure Measuring Vehicles (IMVs) and Ground Penetrating Radar (GPR).',
    list: [
      'Track geometry measurement — gauge, alignment, cant, cross-level, twist, and longitudinal level',
      'Identification of geometry defects and compliance exceedances',
      'Assessment of rail surface condition and wear patterns',
      'Dynamic track response under axle loading',
      'GPR-based assessment of ballast condition, fouling, moisture ingress, and formation integrity',
    ],
    metaTag: 'Technologies Used',
    techList: ['Infrastructure Measuring Vehicles (IMV)', 'Ground Penetrating Radar (GPR)', 'High-resolution geometry sensors', 'Dynamic axle-load measurement'],
    useLabel: 'Best Applied For',
    useTags: ['Mainline Track', 'Geometry Assessment', 'Subsurface Condition', 'Network-Scale Surveys'],
  },
  {
    key: 'trolley',
    num: '03',
    tabLabel: 'Trolley Inspections',
    title: 'Trolley-Based Track Inspections',
    description:
      'Trolley inspections provide high-precision, localised measurement of geometry and component condition in constrained or complex operational areas, supporting validation, construction verification, and targeted assessments where OTM access is limited.',
    list: [
      'High-precision geometry measurement in constrained areas',
      'Inspection of yards, sidings, depots, and terminals',
      'Turnouts, crossings, and special trackwork assessment',
      'Validation of OTM data in specific locations',
      'Construction verification and acceptance inspections',
    ],
    metaTag: 'Applications',
    techList: [
      'High-precision manual measurement',
      'Targeted localised assessment',
      'OTM data validation',
      'Acceptance inspection support',
    ],
    useLabel: 'Best Applied For',
    useTags: ['Yards & Sidings', 'Special Trackwork', 'Construction Verification', 'Targeted Assessment'],
  },
  {
    key: 'ultrasonic',
    num: '04',
    tabLabel: 'Ultrasonic Rail',
    title: 'Ultrasonic Rail Inspections',
    description:
      'Ultrasonic inspection identifies internal rail defects — including fatigue cracking, weld anomalies, and structural discontinuities — enabling proactive integrity management and risk mitigation well before surface-visible deterioration occurs. These inspections are critical for managing rail integrity, safety risk, and remaining useful life.',
    list: [
      'Identification of internal fatigue cracking',
      'Detection of weld defects and structural discontinuities',
      'Identification of longitudinal and transverse rail flaws',
      'Proactive integrity management and safety risk mitigation',
      'Input to Remaining Useful Life (RUL) assessments',
    ],
    metaTag: 'Defects Identified',
    techList: ['Internal fatigue cracking', 'Weld defects and anomalies', 'Longitudinal rail flaws', 'Transverse structural discontinuities'],
    useLabel: 'Best Applied For',
    useTags: ['Rail Integrity', 'Safety-Critical Assessment', 'RUL Modelling', 'Heavy-Haul Corridors'],
  },
  {
    key: 'analytics',
    num: '05',
    tabLabel: 'Data & Analytics',
    title: 'Asset Intelligence, Data Analytics & Reporting',
    description:
      'Inspection datasets undergo structured validation, integration, and analytics processes to produce condition scoring, trend analysis, risk identification, and Remaining Useful Life modelling. All outputs are presented in structured, decision-ready formats suitable for executive reporting, technical planning, and asset management systems.',
    list: [
      'Validation, cleansing, and integration of inspection datasets',
      'Analysis of OTM, GPR, ultrasonic, trolley, and visual data',
      'Asset condition scoring and benchmarking',
      'Remaining Useful Life (RUL) assessments',
      'Identification of trends, risks, and deterioration patterns',
    ],
    metaTag: 'Output Formats',
    techList: ['Executive summary reports', 'Technical condition reports', 'Asset condition scoring', 'RUL models and risk registers'],
    useLabel: 'Suitable For',
    useTags: ['Executive Reporting', 'Maintenance Planning', 'Investment Decisions', 'Asset Management Systems'],
  },
];

type IntelligenceStep = {
  num: string;
  title: string;
  desc: string;
};

const intelligenceSteps: IntelligenceStep[] = [
  {
    num: '01',
    title: 'Data Validation & Cleansing',
    desc: 'Inspection datasets are validated, cleansed, and prepared for integration — removing anomalies and ensuring data integrity before analysis.',
  },
  {
    num: '02',
    title: 'Multi-Source Integration',
    desc: 'OTM, GPR, ultrasonic, trolley, and visual inspection data are integrated into a unified, spatially-referenced asset condition picture.',
  },
  {
    num: '03',
    title: 'Condition Scoring & Benchmarking',
    desc: 'Assets are scored against condition standards and benchmarked to identify relative performance across the network and prioritise interventions.',
  },
  {
    num: '04',
    title: 'Remaining Useful Life Modelling',
    desc: 'RUL assessments quantify the expected life of assets under current operating conditions, informing renewal planning and capital investment decisions.',
  },
  {
    num: '05',
    title: 'Risk & Deterioration Analysis',
    desc: 'Trend analysis identifies deterioration patterns and emerging risks — transforming historical inspection data into forward-looking operational intelligence.',
  },
  {
    num: '06',
    title: 'Decision-Ready Reporting',
    desc: 'Outputs are structured for executive, technical, and planning audiences — ensuring that asset intelligence drives informed decisions at every level.',
  },
];

type OutputCard = { title: string; desc: string; icon: React.ComponentType<{ className?: string }> };

const outputCards: OutputCard[] = [
  {
    title: 'Condition Assessment Reports',
    desc: 'Comprehensive technical documentation of asset condition across all inspected systems, with defect registers, geo-referenced photography, and engineering commentary.',
    icon: FileText,
  },
  {
    title: 'Asset Condition Scoring',
    desc: 'Structured condition scores and benchmarking data enabling rapid comparison across assets, corridors, and time periods to prioritise maintenance and renewal investment.',
    icon: TrendingUp,
  },
  {
    title: 'Remaining Useful Life Models',
    desc: 'RUL assessments quantifying expected asset life under current operating conditions — directly informing renewal planning, CAPEX prioritisation, and investment cases.',
    icon: Database,
  },
  {
    title: 'Risk & Trend Analysis',
    desc: 'Identification of deterioration patterns, emerging risks, and system-level interactions — turning historical inspection data into forward-looking operational and maintenance intelligence.',
    icon: Network,
  },
  {
    title: 'Executive & Management Reports',
    desc: 'Decision-ready executive summaries structured for asset owners and senior management, presenting key findings, risk priorities, and recommended actions clearly.',
    icon: ClipboardList,
  },
  {
    title: 'Asset Management System Inputs',
    desc: 'Structured data outputs formatted for integration with asset management platforms — ensuring inspection intelligence is captured, tracked, and accessible for ongoing planning.',
    icon: LayoutList,
  },
];

const valueBullets = [
  'Gain clear visibility of asset condition and risk across all systems',
  'Support data-driven operational and maintenance decisions with defensible evidence',
  'Prioritise interventions based on condition, criticality, and remaining useful life',
  'Reduce unplanned failures and operational disruptions through early risk detection',
  'Optimise long-term asset performance and lifecycle cost',
];

export default function RailInfrastructurePage() {
  const { ref } = useScrollReveal();
  const [activeMethod, setActiveMethod] = useState<MethodKey>('visual');

  const activePane = useMemo(
    () => methodTabs.find((m) => m.key === activeMethod) || methodTabs[0],
    [activeMethod]
  );

  return (
    <main className="min-h-screen">
      <PageHero
        title="Infrastructure Inspection & Asset Intelligence"
        subtitle="Rail Infrastructure"
        description="Integrated field assessments, advanced on-track technologies, and engineered data analytics that establish an accurate condition, performance, and risk profile of rail assets across the full engineering value chain."
        images={heroImages}
        slideInterval={6000}
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Rail Infrastructure', href: '/services/rail-design' },
          { name: 'Infrastructure', href: '/services/rail-infrastructure' },
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
                {stat.b ? (
                  <>
                    {stat.a}
                    <span className="text-[var(--color-accent)]">{stat.accent}</span>
                    {stat.b}
                  </>
                ) : (
                  <>
                    {stat.a}
                    <span className="text-[var(--color-accent)]">{stat.accent}</span>
                  </>
                )}
              </div>
              <div className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Overview */}
        <section className="grid md:grid-cols-2 min-h-[520px]">
          <div className="relative min-h-[320px] md:min-h-full overflow-hidden bg-[var(--color-bg-dark)] order-1">
            <Image
              src={heroImages[0]}
              alt="Rail infrastructure inspection"
              fill
              className="object-cover grayscale-[15%] brightness-[0.85] hover:grayscale-0 hover:brightness-95 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/60" />
            <div className="absolute bottom-6 left-6 bg-[var(--color-accent)] px-4 py-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                Inspection & Asset Intelligence
              </span>
            </div>
          </div>

          <div className="bg-[#f7f6f4] p-10 md:p-16 lg:p-20 flex flex-col justify-center scroll-reveal order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-0.5 rounded-full bg-[var(--color-accent)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Service Overview
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] leading-tight mb-6">
              Accurate Condition Intelligence Across the Full Engineering Value Chain
            </h2>
            <p className="text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed mb-4">
              Globtek Rail provides integrated infrastructure inspection and asset intelligence services that combine field assessments, advanced on-track technologies, and engineered data analytics to establish an accurate condition, performance, and risk profile of rail assets.
            </p>
            <p className="text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed mb-8">
              We assess rail assets across the full engineering value chain, ensuring that decisions related to operations, maintenance, and investment are informed by accurate, defensible information — from track geometry and rail integrity to civil structures, electrification, and signalling systems.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white text-xs font-bold uppercase tracking-wider py-3 px-6 hover:bg-[var(--color-accent-dark)] transition-colors"
              >
                Request an Inspection
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border-2 border-[var(--color-text-primary)] text-[var(--color-text-primary)] text-xs font-bold uppercase tracking-wider py-3 px-6 hover:bg-[var(--color-text-primary)] hover:text-white transition-colors"
              >
                View Rail Services
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Coverage — 6 systems */}
        <section className="bg-[var(--color-bg-dark)] py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none select-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(-55deg, transparent, transparent 40px, rgba(228,61,48,.15) 40px, rgba(228,61,48,.15) 41px)',
            }}
            aria-hidden
          />

          <Container className="relative z-10">
            <div className="scroll-reveal mb-12 md:mb-14">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-0.5 rounded-full bg-white/30" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                  Integrated Coverage
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                Structured Inspection Across Six Engineering Systems
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
                Structured inspections across track, civil, electrification, signalling, and telecommunications systems provide a system-level evaluation of asset condition, component performance, and operational interfaces.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 mb-10">
              {coverageCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="scroll-reveal bg-[#1f1f1f] p-7 md:p-8 relative group border-b-2 border-transparent hover:bg-[#252525] hover:border-[var(--color-accent)] transition-all"
                  >
                    <div className="w-11 h-11 flex items-center justify-center rounded border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-4 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-white mb-3 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{card.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="scroll-reveal bg-[rgba(228,61,48,.08)] border border-[rgba(228,61,48,.25)] p-6 md:p-8 flex items-start gap-4">
              <span className="mt-0.5 inline-flex w-6 h-6 items-center justify-center bg-[rgba(228,61,48,.12)] rounded">
                <ShieldCheck className="w-4 h-4 text-[var(--color-accent)]" />
              </span>
              <p className="text-sm text-white/60 leading-relaxed italic">
                This integrated approach ensures that defects are assessed not only at component level, but also in terms of system interactions and operational impact — providing a true picture of infrastructure risk across interconnected systems.
              </p>
            </div>
          </Container>
        </section>

        {/* Inspection methods — tabs */}
        <section className="bg-white py-16 md:py-24 px-4 md:px-8">
          <Container>
            <div className="scroll-reveal mb-12 md:mb-14">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-0.5 rounded-full bg-[var(--color-accent)]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  Inspection Methodologies
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-3 leading-tight">
                Five Specialised Inspection Methods
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
                Each inspection methodology is selected and deployed based on the asset type, operational context, and level of detail required — from baseline visual assessments through to subsurface machine-based diagnostics.
              </p>
            </div>

            <div className="scroll-reveal flex items-end gap-2 border-b-2 border-gray-200 mb-0 overflow-x-auto pb-2">
              {methodTabs.map((tab) => {
                const isActive = tab.key === activeMethod;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveMethod(tab.key)}
                    className={`flex items-center gap-2 shrink-0 pb-3 px-4 text-[11px] font-bold uppercase tracking-wider transition-colors border-b-3 ${
                      isActive
                        ? 'text-[var(--color-text-primary)] border-[var(--color-accent)]'
                        : 'text-gray-500 border-transparent hover:text-[var(--color-text-primary)]'
                    }`}
                    aria-pressed={isActive}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-extrabold transition-colors ${
                        isActive
                          ? 'bg-[var(--color-accent)] text-white'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                      aria-hidden
                    >
                      {tab.num}
                    </span>
                    {tab.tabLabel}
                  </button>
                );
              })}
            </div>

            <div className="scroll-reveal grid md:grid-cols-[1fr_420px] border border-gray-200 border-t-0">
              <div className="p-6 md:p-10 border-b-0 md:border-r border-gray-200">
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4 leading-tight">
                  {activePane.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                  {activePane.description}
                </p>
                <ul className="list-none">
                  {activePane.list.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 py-2.5 border-b border-gray-200 text-sm text-[var(--color-text-secondary)] last:border-b-0"
                    >
                      <span className="w-4 h-0.5 bg-[var(--color-accent)] mt-3" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#f7f6f4] p-6 md:p-10 flex flex-col justify-center">
                <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">
                  {activePane.metaTag}
                </div>
                <ul className="list-none mb-6">
                  {activePane.techList.map((t, i) => (
                    <li key={i} className="py-2.5 border-b border-gray-200 text-sm text-[var(--color-text-secondary)] last:border-b-0">
                      <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-accent)] mr-2 translate-y-[-1px]" aria-hidden />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="text-[9px] font-bold uppercase tracking-widest text-gray-500 mb-3">
                  {activePane.useLabel}
                </div>
                <div className="flex flex-wrap gap-2">
                  {activePane.useTags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold uppercase tracking-[0.08em] border border-gray-200 text-[var(--color-text-secondary)] px-3 py-2 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Asset intelligence process */}
        <section className="bg-[var(--color-bg-dark)] py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
          <Container className="relative z-10">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
              <div className="scroll-reveal">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-0.5 rounded-full bg-white/30" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Data to Decisions
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                  From Raw Inspection Data to Engineering Intelligence
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  Inspection datasets undergo structured validation, integration, and analytics processes to produce condition scoring, trend analysis, risk identification, and Remaining Useful Life modelling.
                </p>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  All outputs are presented in structured, decision-ready formats suitable for executive reporting, technical planning, and integration with asset management systems — ensuring that engineering intelligence reaches the right people in the right format.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white text-xs font-bold uppercase tracking-wider py-3 px-6 hover:bg-[var(--color-accent-dark)] transition-colors"
                >
                  Discuss Your Data Needs
                  <span aria-hidden>→</span>
                </Link>
              </div>
              <div className="scroll-reveal flex flex-col">
                {intelligenceSteps.map((step, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-6 py-5 border-b border-white/7 last:border-b-0"
                  >
                    <span className="w-10 h-10 rounded flex items-center justify-center bg-[rgba(228,61,48,.12)] border border-[rgba(228,61,48,.3)]">
                      <span className="text-[11px] font-extrabold text-[var(--color-accent)]">{step.num}</span>
                    </span>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wide text-white mb-2">{step.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Outputs */}
        <section className="bg-[#f7f6f4] py-16 md:py-24 px-4 md:px-8">
          <Container>
            <div className="scroll-reveal mb-12 md:mb-14">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-0.5 rounded-full bg-[var(--color-accent)]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  Deliverables
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-3 leading-tight">
                Structured, Decision-Ready Outputs
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
                All inspection and analytics outputs are structured to suit the audience and purpose — from executive summaries and technical reports through to asset management system inputs and investment-grade condition assessments.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {outputCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="scroll-reveal bg-white p-7 md:p-8 border-t-[3px] border-[var(--color-accent)] hover:shadow-lg transition-all"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded border border-[rgba(228,61,48,.2)] bg-[rgba(228,61,48,.08)] text-[var(--color-accent)] mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--color-text-primary)] mb-3 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{card.desc}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Value */}
        <section className="bg-[var(--color-accent)] py-16 md:py-20 px-4 md:px-8">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="scroll-reveal">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-0.5 rounded-full bg-white/50" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                    Value to Asset Owners & Operators
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                  What Integrated Inspection Intelligence Delivers
                </h2>
                <p className="text-sm text-white/90 leading-relaxed">
                  The integrated inspection and analytics framework enhances visibility of asset condition, supports evidence-based maintenance, prioritises interventions, reduces operational disruptions, and optimises lifecycle performance.
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

        {/* CTA */}
        <section className="bg-[#111] py-24 md:py-32 px-4 md:px-8 text-center relative overflow-hidden">
          <span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(60px,12vw,180px)] font-black text-white/[0.03] tracking-[0.1em] pointer-events-none select-none whitespace-nowrap"
            aria-hidden
          >
            INSPECT
          </span>
          <Container className="relative z-10">
            <div className="scroll-reveal">
              <h2 className="text-2xl md:text-4xl font-normal text-white mb-3 leading-tight">
                Know the Condition of
                <br />
                <strong className="text-[var(--color-accent)]">Every Asset on Your Network</strong>
              </h2>
              <p className="text-sm text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">
                Our inspection and asset intelligence team is ready to help you build an accurate, defensible picture of your infrastructure and translate it into better decisions.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white text-xs font-bold uppercase tracking-wider py-3 px-6 hover:bg-[var(--color-accent-dark)] transition-colors"
                >
                  Request an Inspection
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-wider py-3 px-6 hover:border-white hover:text-white transition-colors"
                >
                  Explore Rail Services
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </main>
  );
}

