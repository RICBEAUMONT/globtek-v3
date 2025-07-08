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
                      className="group relative bg-gradient-to-br from-[#1a1718] to-[#1a222c] p-5 rounded-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden min-h-[210px] flex flex-col"
                      style={{
                        backgroundImage: `url(${stat.heroImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-all duration-300" />
                      
                      {/* Gradient overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1718]/80 via-[#1a222c]/60 to-transparent" />
                      
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
      <section className="py-24 bg-[#1a222c] relative overflow-hidden">
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
              Message from Our COO
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
                  alt="Lungisa Douse - Chief Operations Officer at Globtek"
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
                      <div className="text-[var(--color-accent)] font-medium text-sm">Chief Operations Officer</div>
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
                  <div className="text-sm text-white font-medium">Black Naval Architect in the South African maritime commercial market</div>
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
