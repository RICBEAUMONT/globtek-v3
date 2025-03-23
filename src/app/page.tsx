'use client';

import { ArrowRight } from 'lucide-react';
import Container from '@/components/layout/Container';
import Link from 'next/link';
import SimpleCTA from '@/components/shared/SimpleCTA';
import LatestProjects from '@/components/home/LatestProjects';
import HeroBackground from '@/components/home/HeroBackground';
import AnimatedStat from '@/components/shared/AnimatedStat';
import { allProjects } from '@/data/projects';

const statistics = [
  {
    number: '50',
    label: 'STATES LICENSED',
  },
  {
    number: '20k+',
    label: 'PROJECTS COMPLETED',
  },
  {
    number: '150+',
    label: 'TECHNICAL EXPERTS',
  },
  {
    number: '10',
    label: 'KEY SERVICES',
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
          <div className="bg-white pt-[40px] pb-8 px-4">
            <Container>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Column - Text */}
                <div className="flex flex-col justify-start">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#231f20]">
                    EXPERT ENGINEERS<span className="text-[#e43d30]">+</span>
                    <br />
                    <span className="font-normal">SURVEYORS</span>
                  </h2>
                  <p className="text-[#4a4a4a] text-lg leading-relaxed max-w-xl">
                    Our engineering and surveying solutions blend cutting-edge innovation with a practical approach that is responsive to your needs.
                  </p>
                </div>
                
                {/* Right Column - Stats Grid */}
                <div className="grid grid-cols-2 gap-8 md:gap-12">
                  {statistics.map((stat, index) => (
                    <AnimatedStat
                      key={index}
                      number={stat.number}
                      label={stat.label}
                      delay={0}
                    />
                  ))}
                </div>
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
