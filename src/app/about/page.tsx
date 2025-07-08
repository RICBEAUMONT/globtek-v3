'use client';

import Navbar from '@/components/layout/Navbar';
import { Award, Target, Users, Lightbulb, Globe, Clock, Building2, Heart, ChevronRight, Briefcase, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import GlobtekWay from '@/components/sections/GlobtekWay';
import Journey from '@/components/sections/Journey';

const coreValues = [
  {
    title: 'Integrity, Honesty, and Professionalism',
    description: 'Operating with the highest ethical standards and professional conduct',
    icon: Award,
  },
  {
    title: 'Commitment and Accountability',
    description: 'Taking ownership of our actions and delivering on our promises',
    icon: Target,
  },
  {
    title: 'Learning and Development',
    description: 'Continuously improving and staying at the forefront of engineering innovation',
    icon: Lightbulb,
  },
  {
    title: 'Excellence in All We Do',
    description: 'Striving for the highest quality in every project and interaction',
    icon: Award,
  },
];

const globtekWay = [
  {
    title: 'Get it Right the First Time',
    description: 'Emphasizing precision and accuracy in every aspect of our work',
    focus: 'Quality, efficiency, and client satisfaction',
    impact: 'Reduced revisions, optimized timelines, and enhanced project outcomes',
  },
  {
    title: 'A Pursuit of Excellence, Innovation, and Learning',
    description: 'Continuous improvement and staying at the forefront of engineering advancements',
    focus: 'Research, development, and knowledge sharing',
    impact: 'Cutting-edge solutions and industry leadership',
  },
  {
    title: 'Demonstrated Pro-active Leadership',
    description: 'Taking initiative and guiding projects with vision and expertise',
    focus: 'Strategic planning, risk management, and team guidance',
    impact: 'Successful project delivery and client confidence',
  },
  {
    title: 'People Relationships and Networks',
    description: 'Building strong partnerships and fostering collaborative environments',
    focus: 'Team collaboration, client relationships, and industry connections',
    impact: 'Enhanced project outcomes and sustainable business growth',
  },
];

const companyHighlights = [
  {
    title: 'Global Reach',
    description: 'Connections that extend across borders and internationally',
    icon: Globe,
  },
  {
    title: 'Established in 2013',
    description: 'Over a decade of engineering excellence',
    icon: Clock,
  },
  {
    title: 'South African Based',
    description: 'Proudly serving from our home base',
    icon: Building2,
  },
  {
    title: 'Community Focus',
    description: 'Making a positive impact in our communities',
    icon: Heart,
  },
];

const expertise = [
  {
    area: 'Engineering Design',
    experience: '10+ years',
    description: 'Comprehensive engineering solutions across multiple industries',
    projects: '500+',
    icon: Briefcase,
  },
  {
    area: 'Technical Consulting',
    experience: '10+ years',
    description: 'Expert guidance and innovative problem-solving',
    projects: '300+',
    icon: GraduationCap,
  },
  {
    area: 'Project Management',
    experience: '10+ years',
    description: 'Successful delivery of complex engineering projects',
    projects: '200+',
    icon: Target,
  },
];

const timeline = [
  {
    year: '2013',
    title: 'Foundation',
    description: 'Established in South Africa with a vision for global impact'
  },
  {
    year: '2015',
    title: 'International Expansion',
    description: 'Extended operations beyond South African borders'
  },
  {
    year: '2018',
    title: 'Major Milestones',
    description: 'Completed 250+ successful projects across multiple industries'
  },
  {
    year: '2023',
    title: 'A Decade of Excellence',
    description: 'Celebrating 10 years of engineering innovation and success'
  }
];

const statistics = [
  {
    value: '10+',
    label: 'Years of Excellence',
    description: 'Delivering innovative solutions since 2013',
    icon: Clock,
    color: 'from-blue-500/20 to-transparent'
  },
  {
    value: '500+',
    label: 'Projects Completed',
    description: 'Across multiple industries and continents',
    icon: Briefcase,
    color: 'from-green-500/20 to-transparent'
  },
  {
    value: '150+',
    label: 'Expert Engineers',
    description: 'Diverse team of specialized professionals',
    icon: Users,
    color: 'from-purple-500/20 to-transparent'
  },
  {
    value: '25+',
    label: 'Countries Served',
    description: 'Global reach with local expertise',
    icon: Globe,
    color: 'from-orange-500/20 to-transparent'
  }
];

const heroImages = [
  {
    url: "/images/projects/open-ocean-870/hero.jpg",
    alt: "Open Ocean 870 luxury catamaran"
  },
  {
    url: "/images/projects/open-ocean-870/gallery-1.jpg",
    alt: "Open Ocean 870 design details"
  },
  {
    url: "/images/projects/open-ocean-870/gallery-2.jpg",
    alt: "Open Ocean 870 engineering excellence"
  },
  {
    url: "/images/projects/open-ocean-870/gallery-3.jpg",
    alt: "Open Ocean 870 naval architecture"
  },
  {
    url: "/images/projects/open-ocean-870/gallery-4.jpg",
    alt: "Open Ocean 870 marine innovation"
  }
];

export default function AboutPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-32 md:pt-40 pb-24 sm:pb-32">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Dark Background with enhanced gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-bg-gradient-from)] to-[var(--color-bg-gradient-to)]">
            {/* Animated Grid Pattern with enhanced opacity */}
            <div className="absolute inset-0 opacity-15">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#6b728015_1px,transparent_1px),linear-gradient(to_bottom,#6b728015_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>
            {/* Enhanced Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-dark-transparent)] via-transparent to-[var(--color-bg-dark-transparent)]"></div>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative mx-auto w-full max-w-[1140px] px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="relative space-y-6 sm:space-y-8">
              {/* Accent Line and Label */}
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-[var(--color-accent)]"></div>
                <span className="text-[var(--color-accent)] font-medium uppercase tracking-wider text-sm">About Globtek</span>
              </div>
              
              {/* Main Heading */}
              <div className="relative">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                  Engineering
                  <span className="block mt-2 text-[var(--color-accent)]">Excellence</span>
                  <span className="block mt-2">Redefined</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-[13px] text-gray-300/90 leading-[1.6]">
                We&apos;re not just another engineering firm. We&apos;re a team of passionate professionals who believe in the power of innovation and excellence.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-[var(--color-accent)] text-[var(--color-text-light)] font-medium rounded hover:bg-[var(--color-accent-dark)] transition-colors"
                >
                  Get in Touch
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center px-6 py-3 bg-white/5 text-[var(--color-text-light)] hover:bg-white/10 transition-colors rounded font-medium border border-white/10"
                >
                  View Our Projects
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative lg:h-[600px] mt-8 lg:mt-0">
              {/* Main Image */}
              <div className="relative h-[400px] lg:h-full w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                {heroImages.map((image, index) => (
                  <div
                    key={image.url}
                    className={`absolute inset-0 transition-all duration-[1500ms] transform ${
                      index === currentImageIndex 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                  >
                    <Image
                      src={image.url}
                      alt={`Engineering excellence at Globtek - ${image.alt}`}
                      fill
                      className="object-cover object-center transition-transform duration-[2000ms]"
                      priority={index === 0}
                      sizes="(max-width: 1140px) 100vw, 1140px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/90 via-[var(--color-primary)]/50 to-transparent"></div>
                  </div>
                ))}
              </div>

              {/* Floating Cards */}
              <div className="absolute -right-4 sm:-right-6 top-1/4 transform -translate-y-1/2">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/10 shadow-2xl hover:from-white/15 hover:to-white/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)]/80 rounded-lg">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-base sm:text-lg">Precision Engineering</div>
                      <div className="text-gray-400 text-sm">Industry-leading accuracy</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-4 sm:-left-6 bottom-1/4">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/10 shadow-2xl hover:from-white/15 hover:to-white/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)]/80 rounded-lg">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-base sm:text-lg">Global Impact</div>
                      <div className="text-gray-400 text-sm">Worldwide solutions</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -right-8 bottom-1/3 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] opacity-5 blur-[100px]"></div>
              <div className="absolute left-1/2 top-1/4 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[var(--color-accent)] to-transparent rounded-full blur-xl opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute bottom-0 left-1/4">
          <div className="w-[30rem] h-[30rem] bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] opacity-[0.03] blur-[100px]"></div>
        </div>
        <div className="absolute top-1/4 right-0">
          <div className="w-[30rem] h-[30rem] bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] opacity-[0.03] blur-[100px]"></div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50/50">
        <div className="mx-auto w-full max-w-[1140px] px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="relative space-y-8">
              {/* Section Label */}
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-[var(--color-accent)]"></div>
                <span className="text-[var(--color-accent)] font-medium uppercase tracking-wider text-sm">Our Story</span>
              </div>
              
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Building Tomorrow&apos;s
                  <span className="block mt-2 text-[var(--color-accent)]">Engineering Solutions</span>
                </h2>
                <div className="w-20 h-1 bg-[var(--color-accent)] opacity-20"></div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Globtek is a diverse engineering consulting firm in South Africa with connections that extend across borders and internationally. 
                  Established in 2013, our motivation stems from a desire to foster and enable positive change in infrastructure and industry within 
                  our communities, country, continent, and beyond.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our ambitious vision is realized by harnessing the collective knowledge of various local and global engineering professionals 
                  to achieve outstanding results for our clients. Trust, integrity, and excellence are the cornerstones of our lasting professional 
                  relationships, making us the preferred choice for progress and success.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  href="/contact"
                  className="group inline-flex items-center text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors"
                >
                  Learn more about our approach
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Decorative Element */}
              <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-[var(--color-accent)]/5 rounded-full blur-2xl"></div>
            </div>

            <div className="grid grid-cols-2 gap-6 relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#6b728008_1px,transparent_1px),linear-gradient(to_bottom,#6b728008_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50"></div>
              
              {/* Decorative Corner */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-accent)]/5 rounded-full blur-3xl"></div>

              {companyHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="relative bg-white p-8 rounded-xl hover:shadow-xl transition-all duration-300 group border border-gray-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
                  <div className="relative">
                    <div className="text-[var(--color-accent)] mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--color-accent)]/5 group-hover:scale-110 group-hover:bg-[var(--color-accent)]/10 transition-all duration-500">
                      <highlight.icon className="h-7 w-7 group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#1a222c] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#6b728008_1px,transparent_1px),linear-gradient(to_bottom,#6b728008_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="relative mx-auto w-full max-w-[1140px] px-4 sm:px-6 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Content Column */}
            <div className="lg:sticky lg:top-8 space-y-8">
              {/* Section Label */}
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-[var(--color-accent)]"></div>
                <span className="text-[var(--color-accent)] font-medium uppercase tracking-wider text-sm">Our Foundation</span>
              </div>

              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  Our Core Values
                </h2>
                <div className="w-20 h-1 bg-[var(--color-accent)] opacity-20"></div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-white/90 leading-relaxed">
                  At Globtek, our core values are more than just words – they&apos;re the foundation of everything we do. They guide our decisions, shape our culture, and drive our commitment to excellence in engineering.
                </p>
                <p className="text-lg text-white/90 leading-relaxed">
                  These principles ensure we maintain the highest standards of professionalism while fostering innovation and sustainable development across Africa and beyond.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  href="/contact"
                  className="group inline-flex items-center text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors"
                >
                  Learn more about our approach
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Values Cards Column */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {coreValues.map((value, index) => (
                <div
                  key={value.title}
                  className="group relative bg-[#2d2a2a] rounded-2xl p-6 hover:shadow-xl transition-all duration-500 border border-gray-800"
                >
                  {/* Accent Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/[0.03] to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative">
                    <div className="mb-4 w-12 h-12 rounded-xl bg-[var(--color-accent)]/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--color-accent)]/10 transition-all duration-500">
                      <value.icon className="h-6 w-6 text-[var(--color-accent)]" />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                      {value.title}
                    </h3>

                    <p className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                      {value.description}
                    </p>

                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] transform translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>

                  {/* Number Label */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[var(--color-accent)]/5 flex items-center justify-center text-xs font-medium text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500">
                    {(index + 1).toString().padStart(2, '0')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] opacity-[0.03] blur-[100px]"></div>
        <div className="absolute top-1/4 right-0 w-[30rem] h-[30rem] bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] opacity-[0.03] blur-[100px]"></div>
      </section>

      {/* Company History Timeline */}
      <Journey events={timeline} />

      {/* The Globtek Way */}
      <GlobtekWay pillars={globtekWay} />

      {/* Expertise Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto w-full max-w-[1140px] px-4 sm:px-6">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            {/* Section Label */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-[var(--color-accent)]"></div>
              <span className="text-[var(--color-accent)] font-medium uppercase tracking-wider text-sm">What We Do Best</span>
              <div className="h-px w-12 bg-[var(--color-accent)]"></div>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-500">
              A decade of experience delivering excellence across multiple disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((area) => (
              <div
                key={area.area}
                className="group"
              >
                <div className="relative bg-[#1a222c] p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                  {/* Icon */}
                  <div className="text-[var(--color-accent)] mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <area.icon className="h-7 w-7" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                      {area.area}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {area.description}
                    </p>

                  </div>

                  {/* Bottom Color Animation */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute bottom-0 left-1/4">
          <div className="w-[30rem] h-[30rem] bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] opacity-[0.03] blur-[100px]"></div>
        </div>
        <div className="absolute top-1/4 right-0">
          <div className="w-[30rem] h-[30rem] bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] opacity-[0.03] blur-[100px]"></div>
        </div>
      </section>
    </main>
  );
} 