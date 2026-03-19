'use client';

import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/layout/Container';
import PageHero from '@/components/layout/PageHero';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Layers,
  TrendingUp,
  CircleDollarSign,
  Target,
  Check,
} from 'lucide-react';

const heroImages = [
  '/images/rails/rails_hero_image-1.jpg',
  '/images/rails/rails_hero_image-2.jpg',
  '/images/rails/rails_hero_image-3.jpg',
];

const statsBand = [
  { value: 'USP/UBM', label: 'Advanced Track Technologies' },
  { value: 'Real-Time', label: 'Digital Monitoring' },
  { value: 'AI+Data', label: 'Asset Intelligence' },
  { value: 'Future-Ready', label: 'Network Resilience' },
];

const uspAdvantages = [
  { num: '01', title: 'Improved Load Distribution', desc: 'Increased vertical and lateral elasticity enabling better stress distribution across the track formation.' },
  { num: '02', title: 'Reduced Ballast Attrition', desc: 'Significantly reduced ballast attrition and formation damage, extending ballast replacement intervals.' },
  { num: '03', title: 'Extended Maintenance Cycles', desc: 'Lower maintenance requirements and extended maintenance cycles delivering measurable OPEX savings.' },
  { num: '04', title: 'Transition Zone Performance', desc: 'Enhanced performance in transition zones and high-impact sections where degradation risk is highest.' },
  { num: '05', title: 'Vibration & Fatigue Reduction', desc: 'Reduced vibration transmission and structural fatigue across track components and adjacent structures.' },
];

const monitoringCaps = [
  { title: 'Stiffness & Deflection', desc: 'Measurement of track stiffness and deflection under load to identify structural anomalies early.' },
  { title: 'Settlement & Deformation', desc: 'Monitoring of settlement and deformation to detect formation instability before it becomes critical.' },
  { title: 'Vibration & Dynamic Response', desc: 'Vibration and dynamic response diagnostics providing insight into track behaviour under operational loading.' },
  { title: 'Environmental & Operational', desc: 'Environmental and operational condition monitoring to contextualise infrastructure performance data.' },
];

const analyticsCards = [
  {
    title: 'Multi-Source Data Integration',
    desc: 'Integration of inspection outputs, OTM data, ultrasonic results, GPR surveys, and operational records into a unified engineering picture.',
    icon: Layers,
  },
  {
    title: 'Performance Trend Analysis',
    desc: 'Systematic trend analysis of asset performance data to identify deterioration patterns and predict future condition states with engineering rigour.',
    icon: TrendingUp,
  },
  {
    title: 'Lifecycle Cost Evaluation',
    desc: 'Lifecycle cost and maintenance effectiveness evaluation to optimise the balance between OPEX intervention and CAPEX renewal investment.',
    icon: CircleDollarSign,
  },
  {
    title: 'Predictive Maintenance Frameworks',
    desc: 'Development of predictive and condition-based maintenance frameworks that move operators from reactive response to proactive asset management.',
    icon: Target,
  },
];

const researchItems = [
  'Collaboration with global rail technology innovators',
  'Engagement with leading academic research institutions',
  'Technical validation of emerging technologies',
  'Adaptation of global best practice to local conditions',
  'Knowledge transfer and skills development',
];

const pilotItems = [
  'Site identification and suitability assessment',
  'Installation support and technical supervision',
  'Performance evaluation under local operating conditions',
  'Data collection and engineering analysis',
  'Best-practice development and knowledge transfer',
];

const futureTimeline = [
  { title: 'Advanced Track Components', desc: 'USP and UBM technologies extend infrastructure life and reduce maintenance intensity across the network.' },
  { title: 'Real-Time Condition Visibility', desc: 'Digital monitoring platforms provide continuous asset intelligence, replacing periodic inspections with live data streams.' },
  { title: 'Data-Driven Decision Making', desc: 'Analytics frameworks transform multi-source datasets into precise maintenance plans and investment decisions.' },
  { title: 'Predictive Operational Control', desc: 'Predictive maintenance frameworks eliminate unplanned outages and sustain high availability across the rail asset portfolio.' },
  { title: 'Validated Local Solutions', desc: 'Pilot programmes and academic partnerships ensure every technology is proven under local conditions before full deployment.' },
];

const valueBullets = [
  'Improved infrastructure reliability and operational availability',
  'Lower lifecycle cost through targeted, data-driven interventions',
  'Enhanced asset condition visibility through real-time monitoring',
  'Increased operational resilience under evolving demand and conditions',
];

export default function RailInnovationPage() {
  const { ref } = useScrollReveal();

  return (
    <main className="min-h-screen">
      <PageHero
        title="Innovation & Digital Rail"
        subtitle="Rail Infrastructure"
        description="Advanced rail technology solutions focused on improving infrastructure performance, resilience, and lifecycle efficiency — applying global best practice through localised research, digital engineering, and strong technical partnerships."
        images={heroImages}
        slideInterval={6000}
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Rail Infrastructure', href: '/services/rail-design' },
          { name: 'Innovation', href: '/services/rail-innovation' },
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
                  <>AI<span className="text-[var(--color-accent)]">+</span>Data</>
                ) : stat.value.includes('/') ? (
                  <>USP<span className="text-[var(--color-accent)]">/</span>UBM</>
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
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] leading-tight mb-6">
              Modernising Rail Networks for Future Operational Demands
            </h2>
            <p className="text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed mb-4">
              Globtek Rail delivers advanced rail technology solutions focused on improving infrastructure performance, resilience, and lifecycle efficiency. The company applies global best practice through localised research, digital engineering, and strong technical partnerships.
            </p>
            <p className="text-[var(--color-text-secondary)] text-sm md:text-base leading-relaxed mb-8">
              From elastic track components that extend structural life to data-driven predictive platforms that eliminate unplanned outages, our innovation programme connects technology to operational outcomes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white text-xs font-bold uppercase tracking-wider py-3 px-6 hover:bg-[var(--color-accent-dark)] transition-colors"
              >
                Explore Technologies
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
              alt="Digital rail innovation"
              fill
              className="object-cover grayscale-[15%] brightness-[0.85] hover:grayscale-0 hover:brightness-95 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/50" />
            <div className="absolute bottom-6 right-6 bg-[var(--color-accent)] px-4 py-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                Innovation & Digital Rail
              </span>
            </div>
          </div>
        </section>

        {/* USP & UBM — dark section, diagonal stripe feel via bg */}
        <section className="bg-[var(--color-bg-dark)] py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none" style={{ backgroundImage: 'repeating-linear-gradient(-55deg, transparent, transparent 40px, var(--color-accent) 40px, var(--color-accent) 41px)' }} aria-hidden />
          <Container className="relative z-10">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
              <div className="scroll-reveal">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-0.5 rounded-full bg-white/30" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">Advanced Track Technologies</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  Under Sleeper Pads & Under‑Ballast Mats
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  The introduction of Under Sleeper Pads (USP) and Under‑Ballast Mats (UBM) enhances the dynamic behaviour of track systems and significantly improves long-term structural performance. These elastic track components enable better stress distribution and mitigate degradation mechanisms common in high-load corridors.
                </p>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  Particularly effective in transition zones, heavy-haul corridors, and high-impact sections, USP and UBM technologies represent one of the most cost-effective tools available for extending track lifecycle and reducing maintenance intensity.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="border-2 border-[var(--color-accent)] px-5 py-3 text-white hover:bg-[var(--color-accent)]/10 transition-colors">
                    <span className="text-xs font-bold uppercase tracking-wider">USP</span>
                    <span className="block text-[10px] text-gray-500 font-normal normal-case tracking-normal mt-0.5">Under Sleeper Pads</span>
                  </div>
                  <div className="border-2 border-[var(--color-accent)] px-5 py-3 text-white hover:bg-[var(--color-accent)]/10 transition-colors">
                    <span className="text-xs font-bold uppercase tracking-wider">UBM</span>
                    <span className="block text-[10px] text-gray-500 font-normal normal-case tracking-normal mt-0.5">Under‑Ballast Mats</span>
                  </div>
                </div>
              </div>
              <div className="scroll-reveal">
                <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-accent)] mb-5 pb-3 border-b border-white/10">
                  Technical Advantages
                </div>
                {uspAdvantages.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 py-5 border-b border-white/7 last:border-0">
                    <span className="text-[10px] font-bold text-[var(--color-accent)] min-w-[24px] mt-0.5">{item.num}</span>
                    <div>
                      <h4 className="text-xs font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Digital Monitoring — light */}
        <section className="bg-white py-16 md:py-24 px-4 md:px-8">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
              <div className="scroll-reveal relative">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 rounded-sm">
                  <Image
                    src={heroImages[1]}
                    alt="Digital monitoring and remote sensing"
                    fill
                    className="object-cover grayscale-[10%]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-5 left-5 flex items-center gap-2 bg-[var(--color-bg-dark)] px-4 py-2.5">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" aria-hidden />
                    <span className="text-[9px] font-bold uppercase tracking-wider text-white">Real-Time Monitoring</span>
                  </div>
                </div>
              </div>
              <div className="scroll-reveal">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-0.5 rounded-full bg-[var(--color-accent)]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">Digital Monitoring</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-4 leading-tight">
                  Digital Monitoring & Remote Sensing
                </h2>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-8">
                  Digital monitoring and remote‑sensing platforms provide real‑time or near‑real‑time condition visibility, enabling informed, proactive intervention well before defects reach operational thresholds. Asset condition is transformed from a periodic snapshot into a continuous data stream.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200">
                  {monitoringCaps.map((cap, i) => (
                    <div key={i} className="bg-white p-5 hover:bg-[#f7f6f4] transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mb-2.5" aria-hidden />
                      <h4 className="text-[11px] font-bold uppercase tracking-wide text-[var(--color-text-primary)] mb-1">{cap.title}</h4>
                      <p className="text-[11.5px] text-[var(--color-text-secondary)] leading-relaxed">{cap.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Data Analytics — dark, DATA watermark */}
        <section className="bg-[#181818] py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
          <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[180px] md:text-[220px] font-black text-white/[0.025] pointer-events-none select-none leading-none" aria-hidden>DATA</span>
          <Container className="relative z-10">
            <div className="scroll-reveal mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-0.5 rounded-full bg-white/30" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Data Analytics</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Data Analytics & Asset Intelligence
              </h2>
              <p className="text-sm text-gray-400 max-w-xl leading-relaxed">
                Turning raw data into engineering intelligence supports precise maintenance planning and optimised lifecycle decision-making. Multi-source datasets are integrated and analysed to generate actionable insights that drive smarter operational and investment decisions.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px">
              {analyticsCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="group scroll-reveal bg-[#1f1f1f] p-6 md:p-7 border-b-2 border-transparent hover:border-[var(--color-accent)] hover:bg-[#252525] transition-all"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-4 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </div>
                    <h3 className="text-xs font-bold uppercase tracking-wide text-white mb-2">{card.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Collaboration & Pilot — two panels */}
        <section className="grid md:grid-cols-2">
          <div className="bg-[#f7f6f4] p-12 md:p-16 scroll-reveal">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-0.5 rounded-full bg-[var(--color-accent)]" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--color-accent)]">Research & Collaboration</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-4 leading-tight">
              Academic & Industry Partnerships
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
              Innovation is supported through collaboration with global technology partners and leading academic institutions, ensuring that solutions are technically validated and thoughtfully adapted to local operating environments and infrastructure conditions.
            </p>
            <ul className="list-none space-y-0">
              {researchItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 py-2.5 border-b border-gray-200 text-xs text-[var(--color-text-secondary)]">
                  <span className="w-4 h-0.5 flex-shrink-0 bg-[var(--color-accent)]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#efefef] p-12 md:p-16 scroll-reveal md:border-l border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-0.5 rounded-full bg-[var(--color-accent)]" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--color-accent)]">Technology Localisation</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-4 leading-tight">
              Pilot Projects & Technology Deployment
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
              Pilot programmes validate technologies under local operating conditions. Rigorous site-specific evaluation ensures that innovations perform as expected before full-scale deployment — covering the complete programme lifecycle from identification through to best-practice development.
            </p>
            <ul className="list-none space-y-0">
              {pilotItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 py-2.5 border-b border-black/8 text-xs text-[var(--color-text-secondary)]">
                  <span className="w-4 h-0.5 flex-shrink-0 bg-[var(--color-accent)]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Future Ready — dark, timeline right */}
        <section className="bg-[var(--color-bg-dark)] py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-[40%] bg-gradient-to-bl from-transparent to-[var(--color-accent)]/5 pointer-events-none" aria-hidden />
          <Container className="relative z-10">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="scroll-reveal">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-0.5 rounded-full bg-white/30" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">Forward-Looking</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  Future‑Ready Rail Infrastructure
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  A forward-looking approach ensures rail systems remain robust under evolving demand patterns, regulatory requirements, and technology shifts. Globtek Rail combines digital intelligence with engineered solutions to prepare networks for future mobility requirements.
                </p>
                <p className="text-sm text-gray-400 leading-relaxed mb-8">
                  By integrating technology at every layer — track components, monitoring systems, data platforms, and maintenance frameworks — operators gain the resilience and agility required to respond to change.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white text-xs font-bold uppercase tracking-wider py-3 px-6 hover:bg-[var(--color-accent-dark)] transition-colors"
                >
                  Discuss Your Network
                  <span aria-hidden>→</span>
                </Link>
              </div>
              <div className="scroll-reveal relative pl-8">
                {/* Vertical line through timeline — full height, centered on dots (dot center = 32px padding + 6px half width = 38px; line 2px wide so left 37px) */}
                <div
                  className="absolute left-[37px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-accent)] to-[var(--color-accent)]/20"
                  aria-hidden
                />
                {futureTimeline.map((item, i) => (
                  <div key={i} className="relative flex gap-4 pb-7 last:pb-0">
                    <span className="relative z-10 mt-1.5 flex h-3 w-3 flex-shrink-0 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg-dark)]" aria-hidden />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wide text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Value — red strip */}
        <section className="bg-[var(--color-accent)] py-16 md:py-20 px-4 md:px-8">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="scroll-reveal">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-0.5 rounded-full bg-white/50" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                    Value to Rail Infrastructure Owners & Operators
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                  What Advanced Technology Delivers
                </h2>
                <p className="text-sm text-white/90 leading-relaxed">
                  Through advanced technology and data-driven methodologies, clients benefit from measurable improvements across reliability, cost efficiency, asset visibility, and operational resilience.
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

        {/* CTA — dark with DIGITAL watermark */}
        <section className="bg-[var(--color-bg-dark)] py-24 md:py-32 px-4 md:px-8 text-center relative overflow-hidden">
          <span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(60px,14vw,200px)] font-black text-white/[0.025] tracking-[0.1em] pointer-events-none select-none whitespace-nowrap"
            aria-hidden
          >
            DIGITAL
          </span>
          <div className="relative">
            <h2 className="text-2xl md:text-4xl font-normal text-white mb-3 leading-tight">
              Ready to Modernise
              <br />
              <strong className="text-[var(--color-accent)]">Your Rail Network?</strong>
            </h2>
            <p className="text-sm text-gray-500 max-w-md mx-auto mb-10 leading-relaxed">
              Our innovation and digital rail team is ready to help you identify, validate, and deploy the right technologies for your network and operational context.
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
                Explore All Rail Services
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
