'use client';

import { ArrowRight, Ship, Award, Globe, Anchor } from 'lucide-react';
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

      {/* Message from COO Section (moved from About page) */}
      <section className="py-24 bg-[#14171c] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          {/* Enhanced Grid Pattern */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#6b728015_1px,transparent_1px),linear-gradient(to_bottom,#6b728015_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[1140px] px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            {/* Enhanced Section Label */}
            <div className="inline-flex items-center justify-center gap-3 mb-6 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
              <div className="h-px w-8 bg-[var(--color-accent)]"></div>
              <span className="text-[var(--color-accent)] font-medium uppercase tracking-wider text-sm">Leadership Insights</span>
              <div className="h-px w-8 bg-[var(--color-accent)]"></div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
              Message from Our Group COO
            </h2>
            <p className="text-xl text-gray-400">
              Leading with vision, innovation, and purpose
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Enhanced Image Column */}
            <div className="relative lg:h-auto order-2 lg:order-1 lg:sticky lg:top-8">
              <div className="relative h-[500px] lg:h-[700px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src="/images/staff-images/MR-LUNGISA-DOUSE_2.png"
                  alt="Lungisa Douse - Chief Group Operations Officer at Globtek"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105 w-full h-full"
                  style={{ position: 'absolute', inset: 0 }}
                />
                {/* Experience Badge */}
                <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
                  <span className="text-white font-medium">25+ Years Experience</span>
                </div>
              </div>

              {/* Enhanced Floating Card - Adjusted positioning */}
              <div className="absolute right-0 sm:right-0 bottom-8 group max-w-[90%] sm:max-w-[320px]">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-2xl hover:from-white/15 hover:to-white/10 transition-all duration-300">
                  <div className="flex items-center gap-6">
                    <div className="shrink-0">
                      <div className="p-3 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)]/80 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" /><circle cx="12" cy="12" r="10" strokeWidth="2" /></svg>
                      </div>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg sm:text-xl mb-1">Lungisa Douse</div>
                      <div className="text-[var(--color-accent)] font-medium text-sm">Chief Group Operations Officer</div>
                      <div className="text-gray-400 text-xs mt-1">MSc Naval Architecture, MRINA</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Decorative Elements - Adjusted positioning */}
              <div className="absolute left-0 top-1/3 w-32 h-32 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] opacity-10 blur-[100px] animate-pulse"></div>
            </div>

            {/* Enhanced Content Column */}
            <div className="space-y-8 order-1 lg:order-2 self-start">
              <div className="space-y-8">
                <blockquote className="text-lg text-gray-300 space-y-6">
                  <p className="relative leading-relaxed">
                    As Africa&apos;s first internationally accredited Naval Architect, I&apos;ve witnessed firsthand the transformative power of engineering innovation in the maritime sector. At Globtek, we&apos;re not just designing vessels and marine infrastructure; we&apos;re charting new waters for sustainable maritime development across the continent.
                  </p>
                  <p className="leading-relaxed">
                    Our approach combines cutting-edge naval architecture with deep understanding of African maritime challenges. We&apos;re committed to developing solutions that enhance marine infrastructure, support coastal communities, and drive sustainable economic growth through advanced engineering.
                  </p>
                  <p className="leading-relaxed">
                    Looking ahead, our vision is to establish Africa as a center of excellence in marine and coastal engineering. Through innovation, expertise, and dedication, we&apos;re building a legacy of maritime engineering excellence that will benefit generations to come.
                  </p>
                </blockquote>

                {/* Enhanced CTA */}
                <div>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] text-white font-medium rounded-lg hover:from-[var(--color-accent-dark)] hover:to-[var(--color-accent)] transition-all duration-300 shadow-lg shadow-[var(--color-accent)]/20"
                  >
                    Schedule a meeting
                    <svg className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="pt-8 mt-8 border-t border-white/10">
                <div className="inline-flex items-center gap-3 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded-full px-6 py-3">
                  <div className="text-2xl font-bold text-[var(--color-accent)]">1st</div>
                  <div className="text-sm text-white font-medium">Black Naval Architect in the South African Maritime Commercial Market</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements - Adjusted positioning */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <div className="relative w-full max-w-[1140px] mx-auto">
            <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2">
              <div className="w-[30rem] h-[30rem] bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] opacity-[0.03] blur-[100px]"></div>
            </div>
            <div className="absolute top-1/4 right-0">
              <div className="w-[30rem] h-[30rem] bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] opacity-[0.03] blur-[100px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Naval Architecture Design Process Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#e43d30]"></div>
              <span className="text-[#e43d30] font-semibold uppercase tracking-[0.2em] text-xs">Our Process</span>
              <div className="h-px w-12 bg-[#e43d30]"></div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-[#14171c] mb-6 tracking-tight">
              Our Naval Architecture Design Process & Development Services
            </h2>
            <p className="text-xl text-[#4a4a4a] leading-relaxed">
              Our engineers combine the use of in-house proprietary naval architecture tools and state of the art software with an extensive technical library to provide accurate naval architecture assessments to our clients.
            </p>
          </div>

          {/* Key Components Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              "Overall ship sizing studies and feasibility assessments",
              "System trade-off studies",
              "Preparation of contract guidance drawings and working drawings",
              "Ship checks",
              "ECP development",
              "Preparation of procurement documents",
              "Selected record plan preparation and updates",
              "Technical manual preparation and revisions",
              "Ship system analysis",
              "Preparation of cost/time/schedule estimates"
            ].map((component, index) => (
              <div key={index} className="bg-gradient-to-br from-[#14171c] to-[#14171c] p-6 rounded-xl text-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#e43d30]/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#e43d30]"></div>
                  </div>
                  <p className="text-sm leading-relaxed">{component}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Design Services Overview */}
          <div className="bg-[#14171c] w-full p-8 md:p-12 mb-16 relative overflow-hidden rounded-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e43d3015_1px,transparent_1px),linear-gradient(to_bottom,#e43d3015_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#e43d30] to-[#e43d30]/20 opacity-10 blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-[#e43d30] to-[#e43d30]/20 opacity-10 blur-[80px]"></div>
            
            <div className="relative z-10">
              {/* Enhanced Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-4 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-[#e43d30]"></div>
                  <span className="text-[#e43d30] font-medium text-sm">Our Services</span>
                  <div className="w-2 h-2 rounded-full bg-[#e43d30]"></div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                  Design & Development Services
                </h3>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Comprehensive naval architecture services from concept to construction
                </p>
              </div>

              {/* Enhanced Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[
                  {
                    title: "Research & Development",
                    description: "Innovation and technology advancement",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    )
                  },
                  {
                    title: "Concept Design Services",
                    description: "Initial design exploration and feasibility",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    )
                  },
                  {
                    title: "Feasibility Design Services",
                    description: "Technical and economic viability assessment",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    )
                  },
                  {
                    title: "Preliminary Design Services",
                    description: "Detailed system integration and optimization",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )
                  },
                  {
                    title: "Contract Design Services",
                    description: "Final system design and specifications",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    )
                  },
                  {
                    title: "Detailed Design Services",
                    description: "Construction-ready technical documentation",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    )
                  },
                  {
                    title: "Construction Services",
                    description: "On-site support and quality assurance",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )
                  },
                  {
                    title: "Production Liaison",
                    description: "Shipyard coordination and oversight",
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    )
                  }
                ].map((service, index) => (
                  <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-[#e43d30]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#e43d30]/10">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#e43d30]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="text-[#e43d30]">
                          {service.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold mb-2 group-hover:text-[#e43d30] transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Hover Indicator */}
                    <div className="mt-4 pt-4 border-t border-white/5 group-hover:border-[#e43d30]/20 transition-colors">
                      <div className="flex items-center text-[#e43d30] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More
                        <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>


            </div>
          </div>

          {/* Process Phases */}
          <div className="space-y-16">
            {/* Concept & Feasibility Design */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-[#14171c] mb-6">Concept & Feasibility Design</h3>
                <p className="text-[#4a4a4a] leading-relaxed mb-6">
                  The Globtek concept design process involves the development of design alternatives based on client requirements. Our team of naval architects and marine engineers adapts a set of top-level requirements into concept-level definitions to evaluate technical feasibility, cost and performance.
                </p>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-[#14171c]">These efforts involve the complete early phase definition of the ship, including:</h4>
                  <ul className="space-y-2">
                    {[
                      "Principal characteristics",
                      "Hullform selection and sizing",
                      "General arrangements",
                      "Weight estimates",
                      "Speed, power and endurance calculations"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#e43d30] mt-2 flex-shrink-0"></div>
                        <span className="text-[#4a4a4a]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-[#14171c] w-full p-8 rounded-2xl relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e43d3015_1px,transparent_1px),linear-gradient(to_bottom,#e43d3015_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-[#e43d30] to-[#e43d30]/20 opacity-10 blur-[80px]"></div>
                
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-white mb-6">Performance Characteristics</h4>
                  <div className="space-y-4">
                    {[
                      "Combat system",
                      "Speed and endurance optimization",
                      "Seakeeping",
                      "Survivability",
                      "Noise and vibration reduction"
                    ].map((characteristic, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#e43d30]/20 flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#e43d30]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <span className="text-white">{characteristic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Preliminary Design */}
            <div className="bg-[#14171c] w-full p-8 md:p-12 rounded-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e43d3015_1px,transparent_1px),linear-gradient(to_bottom,#e43d3015_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#e43d30] to-[#e43d30]/20 opacity-10 blur-[100px]"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-[#e43d30] to-[#e43d30]/20 opacity-10 blur-[80px]"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-6">Preliminary Design</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  The Globtek preliminary design service process includes support to both systems engineering and specific technical areas. The Preliminary Design phase builds on the major ship characteristic/system decisions made during Feasibility Design to achieve a converged baseline design with defined systems requirements.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h4 className="text-lg font-semibold text-white mb-4">Objectives of this phase include:</h4>
                    <ul className="space-y-2">
                      {[
                        "Refining operational requirements",
                        "Assessing ship performance within cost constraints",
                        "Identifying critical system interfaces",
                        "Establishing the functional baseline of the platform"
                      ].map((objective, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#e43d30] mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h4 className="text-lg font-semibold text-white mb-4">Typical Products Developed:</h4>
                    <ul className="space-y-2 text-sm">
                      {[
                        "General arrangements",
                        "Weights",
                        "Trim and stability",
                        "Longitudinal strength and midship section",
                        "Electric load analysis",
                        "Cooling and HVAC Analysis",
                        "Machinery arrangements",
                        "Auxiliary machinery arrangements"
                      ].map((product, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#e43d30]"></div>
                          <span className="text-gray-300">{product}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contract Design */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-[#14171c] w-full p-8 rounded-2xl relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e43d3015_1px,transparent_1px),linear-gradient(to_bottom,#e43d3015_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#e43d30] to-[#e43d30]/20 opacity-10 blur-[80px]"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">Contract Design</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    The Globtek contract design process evaluates the preliminary design further, resulting in a final system design that has sufficient detail and requirements development to begin the detailed design phase.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    The products developed during the Contract Design phase are used by the shipbuilder to develop a cost estimate for bidding purposes. The objectives of this phase are confirmation that the ship design meets the operational requirements and cost, documentation of criteria for acceptance of the ship and identification of technical and schedule risks.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#14171c] mb-6">Detailed Architectural Design and Construction</h3>
                <p className="text-[#4a4a4a] leading-relaxed mb-6">
                  G&C's Detail Design & Construction solutions are highly tailorable to the needs of the program, shipbuilder, and end-customer. Our efforts seek to maximize producibility and affordability while mitigating risk for procurement, planning, construction, test, delivery, and acceptance.
                </p>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-[#14171c]">Generally, a Detail Design program comprises two key phases:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h5 className="font-semibold text-[#14171c] mb-2">Functional Design</h5>
                      <p className="text-sm text-[#4a4a4a]">Maturation of vessel design to comprehensive and consistent set of design products</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h5 className="font-semibold text-[#14171c] mb-2">Production Design</h5>
                      <p className="text-sm text-[#4a4a4a]">3D product model development based on functional drawings and build strategy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

                        {/* Production Liaison */}
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-[#14171c] mb-8 text-center">Production Liaison (Shipyard) Support</h3>
              <p className="text-[#4a4a4a] text-center mb-8">
                During construction, we provide platform development with on-site and off-site support.
              </p>
                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                 {[
                   "Project management",
                   "Port engineering",
                   "Field engineering support",
                   "Weight control",
                   "Calculations for lifts & turns",
                   "Launching and docking",
                   "Stability test/experiments",
                   "Test & trials support"
                 ].map((service, index) => (
                   <div key={index} className="inline-flex items-center justify-center bg-[#14171c] border border-[#14171c]/20 rounded-full px-6 py-3 hover:bg-[#14171c]/80 transition-all duration-300 shadow-sm">
                     <div className="text-sm text-white font-medium">{service}</div>
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
