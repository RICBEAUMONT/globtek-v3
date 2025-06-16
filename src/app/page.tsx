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
    number: '1st',
    label: '1ST BLACK NAVAL ARCHITECT IN SA',
    description: 'Leading innovation at Globtek, pioneering new standards in naval architecture and inspiring future generations',
    icon: <Ship className="h-8 w-8" />,
    highlight: 'Pioneering Achievement',
  },
  {
    number: '15+',
    label: 'UNPARRALELLED MARINE EXPERIENCE',
    description: 'Leading the industry with extensive expertise in naval architecture and marine engineering',
    icon: <Award className="h-8 w-8" />,
    highlight: 'Industry Leader',
  },
  {
    number: '50+',
    label: 'VESSELS DESIGNED & BUILT',
    description: 'Delivering excellence through innovative vessel designs, setting new benchmarks in maritime engineering and operations',
    icon: <Globe className="h-8 w-8" />,
    highlight: 'Global Impact',
  },
  {
    number: '100%',
    label: 'CLASS APPROVED',
    description: 'Maintaining perfect compliance with international maritime classification standards',
    icon: <Anchor className="h-8 w-8" />,
    highlight: 'Quality Assured',
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
          <div className="bg-white pt-6 pb-6 px-4 rounded-md">
            <Container>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                {statistics.map((stat, index) => (
                  <div 
                    key={index}
                    className="group relative bg-white p-4 rounded-lg border border-gray-200 hover:border-[#e43d30] transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#e43d30]/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="text-[#e43d30] mb-2">
                        {stat.icon}
                      </div>
                      <h3 className="text-base font-semibold text-gray-900 mb-1">
                        {stat.label}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {stat.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="inline-block px-2 py-0.5 text-xs font-medium text-[#e43d30] bg-[#e43d30]/10 rounded-full">
                          {stat.highlight}
                        </span>
                        <Link 
                          href="/about" 
                          className="text-sm text-[#e43d30] hover:text-[#e43d30]/80 transition-colors"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
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
