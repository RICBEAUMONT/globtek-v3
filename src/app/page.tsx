'use client';

import { useState } from 'react';
import { ArrowRight, Ship, Award, Globe, Anchor, Search, Pencil, FileText, Wrench } from 'lucide-react';
import Container from '@/components/layout/Container';
import Link from 'next/link';
import SimpleCTA from '@/components/shared/SimpleCTA';
import LatestProjects from '@/components/home/LatestProjects';
import HeroBackground from '@/components/home/HeroBackground';
import AnimatedStat from '@/components/shared/AnimatedStat';
import { allProjects } from '@/data/projects';

const statistics = [
  {
    number: 'Naval',
    label: 'NAVAL ARCHITECTURE',
    description: 'Comprehensive vessel design and naval architecture services, from concept to construction, ensuring optimal performance and safety standards.',
    icon: <Ship className="h-8 w-8" />,
    highlight: 'Vessel Design',
    link: '/services/naval-architect',
    heroImage: '/images/services/naval-design/hero.jpg',
  },
  {
    number: 'Marine',
    label: 'MARINE ENGINEERING',
    description: 'Advanced marine engineering solutions for propulsion systems, electrical systems, and mechanical components across all vessel types.',
    icon: <Award className="h-8 w-8" />,
    highlight: 'Systems Engineering',
    link: '/services/marine-engineering',
    heroImage: '/images/services/marine-engineering/hero.jpg',
  },
  {
    number: 'Coastal',
    label: 'COASTAL ENGINEERING',
    description: 'Specialized coastal and port infrastructure engineering, including breakwaters, quay walls, and coastal protection systems.',
    icon: <Globe className="h-8 w-8" />,
    highlight: 'Infrastructure',
    link: '/services/coastal-port-infrastructure',
    heroImage: '/images/coastal-port-infrastructure/coastal-port-infrastructure_hero_image-1.jpg',
  },
  {
    number: 'Expert',
    label: 'CONSULTING SERVICES',
    description: 'Strategic maritime consulting and technical advisory services for regulatory compliance, operational efficiency, and project management.',
    icon: <Anchor className="h-8 w-8" />,
    highlight: 'Strategic Advisory',
    link: '/services/consulting',
    heroImage: '/images/consulting/hero.jpg',
  },
  {
    number: 'Survey',
    label: 'SURVEY & INSPECTION',
    description: 'Comprehensive maritime surveys and inspections using advanced technology and industry expertise to ensure safety and compliance.',
    icon: <Ship className="h-8 w-8" />,
    highlight: 'Quality Assurance',
    link: '/services/survey-inspection',
    heroImage: '/images/services/survey-inspection/hero.jpg',
  },
  {
    number: 'Project',
    label: 'PROJECT MANAGEMENT',
    description: 'Leading maritime projects with expertise in planning, coordination, and execution to ensure successful delivery of complex initiatives.',
    icon: <Award className="h-8 w-8" />,
    highlight: 'Project Leadership',
    link: '/services/project-management',
    heroImage: '/images/services/project-management/hero.jpg',
  },
];

export default function Home() {
  // Get featured projects
  const featuredProjects = allProjects
    .filter(project => project.featured)
    .map(project => ({
      title: project.title,
      description: project.description,
      href: `/projects/${project.slug}`,
      image: project.image,
      category: project.category,
      completionDate: project.completionDate
    }));

  type PhaseKey = 'concept' | 'preliminary' | 'contract' | 'detailed';
  const [activePhase, setActivePhase] = useState<PhaseKey>('concept');

  const marqueeItems = [
    'Project Management',
    'Port Engineering',
    'Field Engineering Support',
    'Weight Control',
    'Calculations for Lifts & Turns',
    'Launching and Docking',
    'Stability Test & Experiments',
    'Test & Trials Support',
  ];

  const phaseTabs: { key: PhaseKey; label: string }[] = [
    { key: 'concept', label: 'Concept & Feasibility' },
    { key: 'preliminary', label: 'Preliminary Design' },
    { key: 'contract', label: 'Contract Design' },
    { key: 'detailed', label: 'Detailed Design' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="h-[650px] relative">
        <section className="relative h-full">
          {/* Background Image */}
          <HeroBackground />

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <Container>
              <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12 space-y-8 md:space-y-0">
                {/* Main Heading */}
                <div className="text-white text-center md:text-right">
                  <h1 className="text-4xl md:text-6xl tracking-tight">
                    <span className="font-bold">APPLIED</span>
                    <br />
                    <span className="font-normal text-[#e43d30]">INGENUITY</span>
                  </h1>
                </div>

                {/* Vertical Line - Hidden on mobile */}
                <div className="hidden md:block h-32 w-px bg-[#e43d30]"></div>

                {/* Horizontal Line - Shown on mobile */}
                <div className="md:hidden w-24 h-px bg-[#e43d30]"></div>

                {/* Sub Copy */}
                <div className="text-white text-center md:text-left">
                  <h2 className="text-lg md:text-xl font-normal mb-4 leading-tight tracking-wide">
                    ENGINEERING<span className="text-[#e43d30]">+</span>
                    <br />
                    SURVEYING SOLUTIONS
                  </h2>
                  <Link
                    href="/services"
                    className="inline-flex items-center px-6 py-3 bg-[#e43d30] text-white font-medium rounded hover:bg-[#e43d30]/90 transition-colors"
                  >
                    Explore Our Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        </section>
      </div>

      {/* Expert Engineers Section */}
      <div className="relative -mt-24 z-10">
        <div className="max-w-[1140px] mx-auto">
          <div className="bg-white pt-8 pb-8 px-4 rounded-md">
            <Container>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
                {statistics.map((stat, index) => (
                  <Link href={stat.link} key={index}>
                    <div 
                      className="group relative bg-gradient-to-br from-[#14171c] to-[#14171c] p-5 rounded-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden min-h-[210px] flex flex-col"
                      style={{
                        backgroundImage: `url(${stat.heroImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-all duration-300" />
                      
                      {/* Gradient overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#14171c]/80 via-[#14171c]/60 to-transparent" />
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#e43d30]/20 to-[#e43d30]/10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                            <div className="text-[#e43d30]">
                        {stat.icon}
                      </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#e43d30] transition-colors duration-300 leading-tight">
                        {stat.label}
                      </h3>
                          </div>
                        </div>
                        
                        <div className="flex-1 mb-4">
                          <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
                        {stat.description}
                      </p>
                        </div>
                        
                        <div className="flex justify-between items-center mt-auto">
                          <span className="inline-block px-2.5 py-1 text-xs font-semibold text-white bg-gradient-to-r from-[#e43d30] to-[#e43d30]/80 rounded-full">
                          {stat.highlight}
                        </span>
                          <div className="text-sm text-[#e43d30] hover:text-white transition-colors duration-300 flex items-center gap-1 group-hover:gap-2">
                            Learn More 
                            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Container>
          </div>
        </div>
      </div>

      {/* Message from Our Group COO */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[420px_1fr] min-h-[680px]">
          {/* Image panel */}
          <div className="relative overflow-hidden bg-[#14171c] rounded-2xl lg:rounded-none lg:rounded-l-2xl">
            <img
              src="/images/staff-images/MR-LUNGISA-DOUSE_2.png"
              alt="Lungisa Douse – Chief Group Operations Officer"
              className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.03] filter grayscale-[15%] brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-7">
              <div className="bg-[var(--color-accent)] px-5 py-4">
                <h4 className="font-bold text-white text-sm mb-1">Lungisa Douse</h4>
                <p className="text-white/80 text-[11px] tracking-wide">
                  Chief Group Operations Officer · MSc Naval Architecture, MRINA
                </p>
              </div>

              <div className="flex mt-2">
                <div className="flex-1 bg-black/50 backdrop-blur-md px-4 py-3 border-r border-white/10">
                  <div className="text-white font-extrabold text-base leading-none">
                    25+ <span className="text-[var(--color-accent)]">Years</span>
                  </div>
                  <div className="text-white/45 text-[9px] uppercase tracking-[0.15em] mt-1">Experience</div>
                </div>
                <div className="flex-1 bg-black/50 backdrop-blur-md px-4 py-3">
                  <div className="text-white font-extrabold text-base leading-none">
                    1<span className="text-[var(--color-accent)]">st</span>
                  </div>
                  <div className="text-white/45 text-[9px] uppercase tracking-[0.15em] mt-1">Black Naval Architect SA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text panel */}
          <div className="bg-[#f7f6f4] p-10 md:p-16 rounded-2xl lg:rounded-none lg:rounded-r-2xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-6 h-[2px] bg-[var(--color-accent)]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Leadership Insights
              </span>
              <div className="w-6 h-[2px] bg-[var(--color-accent)]" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#14171c] leading-tight mb-3">
              Message from
              <br />
              Our Group COO
            </h2>

            <p className="text-[11px] text-gray-500 uppercase tracking-[0.15em] mb-7">
              Leading with vision, innovation, and purpose
            </p>

            <p className="text-[#555] text-sm md:text-[13px] leading-relaxed mb-4">
              As Africa&apos;s first internationally accredited Naval Architect, I&apos;ve witnessed firsthand the transformative power of engineering innovation in the maritime sector. At Globtek, we&apos;re not just designing vessels and marine infrastructure; we&apos;re charting new waters for sustainable maritime development across the continent.
            </p>
            <p className="text-[#555] text-sm md:text-[13px] leading-relaxed mb-7">
              Our approach combines cutting-edge naval architecture with deep understanding of African maritime challenges. We&apos;re committed to developing solutions that enhance marine infrastructure, support coastal communities, and drive sustainable economic growth.
            </p>

            <div className="border-l-3 border-[var(--color-accent)] bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,0.05)] mb-8">
              <p className="font-[Montserrat] italic text-[#555] leading-relaxed">
                "Looking ahead, our vision is to establish Africa as a centre of excellence in marine and coastal engineering. Through innovation, expertise, and dedication, we&apos;re building a legacy of maritime engineering excellence that will benefit generations to come."
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center px-7 py-3 bg-[var(--color-accent)] text-white text-[10px] font-bold uppercase tracking-wider hover:bg-[var(--color-accent-dark)] transition-colors"
            >
              Schedule a Meeting
            </Link>
          </div>
        </div>
      </section>

      {/* Our Process — horizontal timeline */}
      <section className="bg-[#111111] py-20 md:py-24">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#e43d30]" />
              <span className="text-[#e43d30] font-semibold uppercase tracking-[0.2em] text-xs">Our Process</span>
              <div className="h-px w-12 bg-[#e43d30]" />
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
              Naval Architecture Design Process &amp; Development Services
            </h2>
            <p className="text-lg text-[#909090] leading-relaxed max-w-2xl mx-auto">
              Our engineers combine in-house proprietary naval architecture tools and state-of-the-art software with an extensive technical library to provide accurate assessments to our clients.
            </p>
          </div>

          <div className="relative mb-6">
            <div className="hidden lg:block absolute top-[36px] left-[18%] right-[18%] h-px bg-gradient-to-r from-[#e43d30] via-[#e43d30]/20 to-[#e43d30] opacity-60" aria-hidden />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
              {[
                {
                  n: 1,
                  title: 'Research & Concept',
                  desc: 'Initial exploration and feasibility studies',
                  icon: <Search className="w-4 h-4 text-white" />,
                },
                {
                  n: 2,
                  title: 'Design & Development',
                  desc: 'Detailed engineering drawings and full system integration across all disciplines',
                  icon: <Pencil className="w-4 h-4 text-white" />,
                },
                {
                  n: 3,
                  title: 'Documentation & Specs',
                  desc: 'Technical documentation, contract drawings and specifications for compliance',
                  icon: <FileText className="w-4 h-4 text-white" />,
                },
                {
                  n: 4,
                  title: 'Construction & Delivery',
                  desc: 'On-site support, quality assurance, trials and final project handover',
                  icon: <Wrench className="w-4 h-4 text-white" />,
                },
              ].map((step) => (
                <div key={step.n} className="flex flex-col items-center text-center">
                  <div className="relative w-[72px] h-[72px] rounded-full border-2 border-[#e43d30] bg-[#111111] flex items-center justify-center mb-6 group transition-colors duration-300 hover:bg-[#e43d30] hover:shadow-[0_0_0_8px_rgba(228,61,48,0.18)]">
                    <span className="text-[22px] font-extrabold text-[#e43d30] group-hover:text-white transition-colors duration-300">
                      {step.n}
                    </span>
                    <div className="absolute bottom-[-4px] right-[-4px] w-[22px] h-[22px] rounded-full bg-[#e43d30] flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-white text-xs font-bold uppercase tracking-[0.1em] mb-2">{step.title}</h3>
                  <p className="text-[#909090] text-xs leading-relaxed max-w-[240px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-24 bg-[#f7f6f4] relative overflow-hidden">
        <Container>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-8 bg-[var(--color-accent)]" />
              <span className="text-[var(--color-accent)] font-medium uppercase tracking-wider text-sm">
                Core Capabilities
              </span>
              <div className="h-px w-8 bg-[var(--color-accent)]" />
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-[#14171c] mb-4 tracking-tight">
              Comprehensive Naval Architecture Services
            </h3>
            <p className="text-[#555] text-[13.5px] max-w-2xl mx-auto leading-relaxed">
              From initial concept to final delivery, we provide end-to-end naval architecture solutions tailored to each client's needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              {
                num: '01 — Concept',
                title: 'Concept & Feasibility',
                description:
                  'Initial design exploration, technical feasibility studies, and economic viability assessment for new builds and modifications.',
                tags: ['Ship Sizing Studies', 'System Trade-Offs', 'Cost Analysis'],
              },
              {
                num: '02 — Design',
                title: 'Design & Engineering',
                description:
                  'Detailed naval architecture, system integration, and technical documentation for vessels of all types and classes.',
                tags: ['Contract Drawings', 'Technical Specifications', 'System Analysis'],
              },
              {
                num: '03 — Build',
                title: 'Construction Support',
                description:
                  'On-site coordination, quality assurance, and production oversight throughout the entire build and commissioning phase.',
                tags: ['Shipyard Liaison', 'Quality Control', 'Commissioning Support'],
              },
            ].map((card) => (
              <div
                key={card.num}
                className="group bg-white p-9 border-t-[3px] border-transparent shadow-[0_2px_0_#efefef] transition-all duration-300 relative overflow-hidden hover:border-[var(--color-accent)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.09)] hover:-translate-y-[4px]"
              >
                <div className="absolute inset-0 bg-[rgba(192,57,43,0.03)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="text-[10px] font-bold tracking-[0.18em] text-[var(--color-accent)] opacity-100 mb-4">
                  {card.num}
                </div>

                <h4 className="text-[14px] font-bold uppercase tracking-[0.05em] text-[#14171c] mb-3">
                  {card.title}
                </h4>
                <p className="text-[12.5px] text-[#555] leading-relaxed mb-5">{card.description}</p>

                <div className="mb-6">
                  {card.tags.map((tag, idx) => (
                    <div
                      key={tag}
                      className={`flex items-center gap-3 py-2 border-b border-[#efefef] ${idx === card.tags.length - 1 ? 'border-b-0' : ''}`}
                    >
                      <span className="w-[16px] h-[2px] bg-[var(--color-accent)] flex-shrink-0" aria-hidden />
                      <span className="text-[11.5px] text-[#555]">{tag}</span>
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 text-[9px] font-bold tracking-[0.2em] uppercase text-[var(--color-accent)] group-hover:gap-3 transition-all">
                  Learn More <span aria-hidden className="inline-flex w-4 h-px bg-[var(--color-accent)] opacity-70" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

            {/* Process Phases Section */}
      <section className="bg-[#f7f6f4] pb-24">
        <Container>
          <div className="border border-[#efefef] bg-white overflow-hidden">
            <div className="flex border-b border-[#efefef] overflow-x-auto">
              {phaseTabs.map((tab) => {
                const isActive = activePhase === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActivePhase(tab.key)}
                    className={`px-7 py-4 text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap transition-colors border-b-3 ${
                      isActive
                        ? 'text-[#14171c] border-[#e43d30]'
                        : 'text-[#909090] border-transparent hover:text-[#555]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="p-12">
              {activePhase === 'concept' && (
                <div className="grid lg:grid-cols-2 gap-14">
                  <div>
                    <h3 className="text-[16px] font-bold text-[#14171c] mb-4">
                      Concept &amp; Feasibility Design
                    </h3>
                    <p className="text-[13px] text-[#555] leading-relaxed mb-4">
                      The Globtek concept design process involves the development of design alternatives based on client requirements. Our team adapts top-level requirements into concept-level definitions to evaluate technical feasibility, cost and performance.
                    </p>
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#c0392b] mb-3 block">
                      Complete early-phase ship definition includes:
                    </span>
                    <ul className="list-none">
                      {[
                        'Principal Characteristics',
                        'Hullform Selection and Sizing',
                        'General Arrangements',
                        'Weight Estimates',
                        'Speed, Power and Endurance Calculations',
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3 py-2 border-b border-[#efefef]">
                          <span className="w-[18px] h-[2px] bg-[#e43d30] flex-shrink-0" aria-hidden />
                          <span className="text-[12.5px] text-[#555]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#e43d30] mb-3 block">
                      Performance Characteristics
                    </span>
                    <ul className="list-none">
                      {[
                        'Combat System Integration',
                        'Speed and Endurance Optimisation',
                        'Seakeeping Analysis',
                        'Survivability Assessment',
                        'Noise and Vibration Reduction',
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3 py-2 border-b border-[#efefef] last:border-b-0">
                          <span className="w-[18px] h-[2px] bg-[#e43d30] flex-shrink-0" aria-hidden />
                          <span className="text-[12.5px] text-[#555]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activePhase === 'preliminary' && (
                <div className="grid lg:grid-cols-2 gap-14">
                  <div>
                    <h3 className="text-[16px] font-bold text-[#14171c] mb-4">Preliminary Design</h3>
                    <p className="text-[13px] text-[#555] leading-relaxed mb-4">
                      The Preliminary Design phase builds on major ship characteristic decisions made during Feasibility Design to achieve a converged baseline design with defined systems requirements.
                    </p>
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#e43d30] mb-3 block">
                      Objectives of this phase:
                    </span>
                    <ul className="list-none">
                      {[
                        'Refining Operational Requirements',
                        'Assessing Ship Performance Within Cost Constraints',
                        'Identifying Critical System Interfaces',
                        'Establishing the Functional Baseline',
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3 py-2 border-b border-[#efefef]">
                          <span className="w-[18px] h-[2px] bg-[#e43d30] flex-shrink-0" aria-hidden />
                          <span className="text-[12.5px] text-[#555]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#e43d30] mb-3 block">
                      Typical Products Developed:
                    </span>
                    <ul className="list-none">
                      {[
                        'General Arrangements',
                        'Weights, Trim and Stability',
                        'Longitudinal Strength and Midship Section',
                        'Electric Load Analysis',
                        'Cooling and HVAC Analysis',
                        'Machinery Arrangements',
                        'Auxiliary Machinery Arrangements',
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3 py-2 border-b border-[#efefef] last:border-b-0">
                          <span className="w-[18px] h-[2px] bg-[#e43d30] flex-shrink-0" aria-hidden />
                          <span className="text-[12.5px] text-[#555]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activePhase === 'contract' && (
                <div className="grid lg:grid-cols-2 gap-14">
                  <div>
                    <h3 className="text-[16px] font-bold text-[#14171c] mb-4">Contract Design</h3>
                    <p className="text-[13px] text-[#555] leading-relaxed mb-4">
                      The contract design process evaluates the preliminary design further, resulting in a final system design with sufficient detail to begin the detailed design phase.
                    </p>
                    <p className="text-[13px] text-[#555] leading-relaxed mb-4">
                      Products developed are used by the shipbuilder to develop a cost estimate for bidding purposes.
                    </p>
                    <ul className="list-none">
                      {[
                        'Confirmation design meets operational requirements',
                        'Documentation of acceptance criteria',
                        'Identification of technical and schedule risks',
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3 py-2 border-b border-[#efefef]">
                          <span className="w-[18px] h-[2px] bg-[#e43d30] flex-shrink-0" aria-hidden />
                          <span className="text-[12.5px] text-[#555]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#e43d30] mb-3 block">
                      Key Deliverables:
                    </span>
                    <ul className="list-none">
                      {[
                        'Final system design convergence',
                        'Shipbuilder cost estimation support',
                        'Risk mitigation planning',
                        'Full compliance documentation',
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3 py-2 border-b border-[#efefef] last:border-b-0">
                          <span className="w-[18px] h-[2px] bg-[#e43d30] flex-shrink-0" aria-hidden />
                          <span className="text-[12.5px] text-[#555]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activePhase === 'detailed' && (
                <div className="grid lg:grid-cols-2 gap-14">
                  <div>
                    <h3 className="text-[16px] font-bold text-[#14171c] mb-4">
                      Detailed Architectural Design &amp; Construction
                    </h3>
                    <p className="text-[13px] text-[#555] leading-relaxed mb-4">
                      Detail Design &amp; Construction solutions are highly tailorable to the needs of the program, shipbuilder, and end-customer. Our efforts maximise producibility and affordability while mitigating risk.
                    </p>
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#e43d30] mb-3 block">
                      Two key phases:
                    </span>
                    <ul className="list-none">
                      {[
                        'Functional Design — maturation to comprehensive design products',
                        'Production Design — 3D product model based on build strategy',
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3 py-2 border-b border-[#efefef] last:border-b-0">
                          <span className="w-[18px] h-[2px] bg-[#e43d30] flex-shrink-0" aria-hidden />
                          <span className="text-[12.5px] text-[#555]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#e43d30] mt-[18px] mb-[10px] block">
                      Production Liaison Services:
                    </span>
                    <ul className="list-none">
                      {[
                        'Project Management & Port Engineering',
                        'Field Engineering Support',
                        'Weight Control',
                        'Calculations for Lifts & Turns',
                        'Launching and Docking',
                        'Stability Test/Experiments',
                        'Test & Trials Support',
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3 py-2 border-b border-[#efefef] last:border-b-0">
                          <span className="w-[18px] h-[2px] bg-[#e43d30] flex-shrink-0" aria-hidden />
                          <span className="text-[12.5px] text-[#555]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Production Liaison Support Section */}
      <section className="pt-0 pb-12 bg-[#181818] border-y border-white/5">
        <div className="pt-20 pb-0">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#e43d30]" aria-hidden />
              <span className="text-[#e43d30] font-semibold uppercase tracking-[0.2em] text-xs">
                Shipyard Support
              </span>
              <div className="h-px w-12 bg-[#e43d30]" aria-hidden />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-2">
              Production Liaison Support
            </h2>
          </div>
        </div>

        <style jsx>{`
          .globtek-marquee-outer {
            position: relative;
            padding: 24px 0 28px;
            overflow: hidden;
            mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          }
          .globtek-marquee-track {
            display: flex;
            width: max-content;
            animation: globtek-marqueeScroll 30s linear infinite;
          }
          .globtek-marquee-outer:hover .globtek-marquee-track {
            animation-play-state: paused;
          }
          @keyframes globtek-marqueeScroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>

        <Container>
          <div className="globtek-marquee-outer">
            <div className="globtek-marquee-track">
              <div className="globtek-marquee-set flex items-center">
                {marqueeItems.map((text) => (
                  <div key={`${text}-a`} className="flex items-center gap-5 px-8 whitespace-nowrap">
                    <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-white/55 hover:text-white transition-colors">
                      {text}
                    </span>
                    <span className="w-[5px] h-[5px] bg-[#e43d30] rotate-45 opacity-70" aria-hidden />
                  </div>
                ))}
              </div>

              <div className="globtek-marquee-set flex items-center" aria-hidden="true">
                {marqueeItems.map((text) => (
                  <div key={`${text}-b`} className="flex items-center gap-5 px-8 whitespace-nowrap">
                    <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-white/55">
                      {text}
                    </span>
                    <span className="w-[5px] h-[5px] bg-[#e43d30] rotate-45 opacity-70" aria-hidden />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Latest Projects Section */}
      <LatestProjects
        title="Latest Projects"
        description="Discover our most recent engineering achievements and innovations"
        projects={featuredProjects}
      />

      {/* CTA */}
      <SimpleCTA
        title="Let's Create"
        titleAccent="Something Great"
        description="Take the first step towards your project's success. Our team is ready to help."
        primaryButton={{
          text: "Start Your Project",
          href: "/contact"
        }}
        secondaryButton={{
          text: "Explore Our Work",
          href: "/services"
        }}
      />
    </main>
  );
}
