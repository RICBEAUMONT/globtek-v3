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
      <div className="h-[550px] relative">
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
                      className="group relative bg-gradient-to-br from-[#1a1718] to-[#231f20] p-5 rounded-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden min-h-[210px] flex flex-col"
                      style={{
                        backgroundImage: `url(${stat.heroImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-all duration-300" />
                      
                      {/* Gradient overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1718]/80 via-[#231f20]/60 to-transparent" />
                      
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
