'use client';

import Container from '@/components/layout/Container';
import PageHero from '@/components/layout/PageHero';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Award } from 'lucide-react';

export default function MarinePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <PageHero
        title="Globtek Marine"
        subtitle="Marine Engineering Excellence"
        description="Leading the industry in naval architecture, marine engineering, and offshore solutions. Our expertise spans from vessel stability to port infrastructure, delivering innovative solutions for the marine environment."
        image="/images/services/marine/hero.jpg"
        overlayOpacity="medium"
        accentColor="#e43d30"
        align="left"
        breadcrumbs={[
          { name: 'Services', href: '/services' },
          { name: 'Globtek Marine', href: '/services/marine' }
        ]}
      />

      {/* About Section */}
      <section className="py-24 bg-[var(--color-bg-primary)]">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-bold text-[var(--color-text-primary)] mb-4 tracking-tight"
            >
              About Us
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="prose prose-lg prose-headings:text-[var(--color-text-primary)] prose-p:text-[var(--color-text-secondary)] prose-strong:text-[var(--color-accent)]"
            >
              <p className="text-lg leading-relaxed mb-6">
                Globtek Marine is a leading engineering consultancy specializing in Naval Architecture, Marine Engineering, Offshore Structures, and Control & Instrumentation (C&I) for the marine environment. We combine advanced numerical modelling, hydrodynamic analysis, and engineering expertise to provide bespoke solutions for ship stability, offshore structures, and port infrastructure projects.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our expertise extends from vessel stability experiments and hydrodynamic classification to marine infrastructure resilience analysis, supporting shipyards, port authorities, offshore energy sectors, and defence industries worldwide.
              </p>
              <p className="text-lg leading-relaxed">
                Backed by a Naval Architect with training from the University of Southampton (UK) and a specialization in Offshore Engineering & Analysis, we ensure state-of-the-art engineering solutions in every project.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Expertise Sections */}
      <section className="py-24 bg-[var(--color-bg-secondary)]">
        <Container>
          {/* Enhanced Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-24">
            {/* Section Label */}
            <div className="inline-flex items-center justify-center gap-3 mb-6 bg-[var(--color-accent)]/5 px-4 py-2 rounded-full">
              <div className="h-px w-8 bg-[var(--color-accent)]"></div>
              <span className="text-[var(--color-accent)] font-medium uppercase tracking-wider text-sm">What We Do</span>
              <div className="h-px w-8 bg-[var(--color-accent)]"></div>
            </div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold text-[var(--color-text-primary)] mb-6 tracking-tight"
            >
              Our Areas of Expertise
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto"
            >
              Comprehensive marine engineering solutions backed by cutting-edge technology and decades of industry expertise
            </motion.p>
          </div>

          {/* Expertise Grid */}
          <div className="space-y-40">
            {/* Naval Architecture & Marine Stability */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  {/* Section Number */}
                  <div className="inline-flex items-center gap-4">
                    <span className="text-[var(--color-accent)]/20 text-8xl font-bold">01</span>
                    <div className="h-px w-12 bg-[var(--color-accent)]/20"></div>
                  </div>

                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight"
                  >
                    Naval Architecture & <br />Marine Stability
                  </motion.h3>

                  <div className="h-px w-20 bg-[var(--color-accent)] opacity-20"></div>

                  <ul className="space-y-6 text-[var(--color-text-secondary)]">
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="flex items-start group"
                    >
                      <span className="text-[var(--color-accent)] mr-3 text-xl group-hover:scale-110 transition-transform">•</span>
                      <span className="text-lg leading-relaxed">
                        <strong className="text-[var(--color-text-primary)]">Inclining Experiments & Stability Reports</strong> – Conducting comprehensive vessel stability assessments and generating IMO-compliant reports.
                      </span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex items-start group"
                    >
                      <span className="text-[var(--color-accent)] mr-3 text-xl group-hover:scale-110 transition-transform">•</span>
                      <span className="text-lg leading-relaxed">
                        <strong className="text-[var(--color-text-primary)]">Ship Response in Stationary Seaway</strong> – Advanced numerical simulations for seakeeping and manoeuvrability.
                      </span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="flex items-start group"
                    >
                      <span className="text-[var(--color-accent)] mr-3 text-xl group-hover:scale-110 transition-transform">•</span>
                      <span className="text-lg leading-relaxed">
                        <strong className="text-[var(--color-text-primary)]">Numerical Prediction of Ship Seakeeping</strong> – Applying Strip Theory, Rankine Singularity, and ITTC standards.
                      </span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="flex items-start group"
                    >
                      <span className="text-[var(--color-accent)] mr-3 text-xl group-hover:scale-110 transition-transform">•</span>
                      <span className="text-lg leading-relaxed">
                        <strong className="text-[var(--color-text-primary)]">Finite Element Modelling of Ships</strong> – Structural analysis for hull integrity and fatigue assessment.
                      </span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="flex items-start group"
                    >
                      <span className="text-[var(--color-accent)] mr-3 text-xl group-hover:scale-110 transition-transform">•</span>
                      <span className="text-lg leading-relaxed">
                        <strong className="text-[var(--color-text-primary)]">Advanced Marine Vehicles</strong> – Hydrofoil design and high-speed craft performance optimization.
                      </span>
                    </motion.li>
                  </ul>
                </div>

                <div className="relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#6b728008_1px,transparent_1px),linear-gradient(to_bottom,#6b728008_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50"></div>
                  
                  <div className="relative grid grid-cols-3 gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="relative col-span-2 aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
                    >
                      <Image
                        src="/images/services/marine/naval-architecture-1.jpg"
                        alt="Naval Architecture"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02, y: 5 }}
                      transition={{ duration: 0.2 }}
                      className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl"
                    >
                      <Image
                        src="/images/services/marine/naval-architecture-2.jpg"
                        alt="Marine Stability"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="relative col-span-2 aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
                    >
                      <Image
                        src="/images/services/marine/naval-architecture-3.jpg"
                        alt="Ship Design"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02, y: 5 }}
                      transition={{ duration: 0.2 }}
                      className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl"
                    >
                      <Image
                        src="/images/services/marine/naval-architecture-4.jpg"
                        alt="Vessel Analysis"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -right-8 bottom-1/3 w-24 h-24 bg-[var(--color-accent)]/5 rounded-full blur-2xl"></div>
                  <div className="absolute -left-8 top-1/3 w-32 h-32 bg-[var(--color-accent)]/5 rounded-full blur-3xl"></div>
                </div>
              </div>
            </motion.div>

            {/* Offshore Engineering & Structural Analysis */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#6b728008_1px,transparent_1px),linear-gradient(to_bottom,#6b728008_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50"></div>
                  
                  <div className="relative grid grid-cols-3 gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl"
                    >
                      <Image
                        src="/images/services/marine/offshore-engineering-1.jpg"
                        alt="Offshore Engineering"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02, y: 5 }}
                      transition={{ duration: 0.2 }}
                      className="relative col-span-2 aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
                    >
                      <Image
                        src="/images/services/marine/offshore-engineering-2.jpg"
                        alt="Structural Analysis"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl"
                    >
                      <Image
                        src="/images/services/marine/offshore-engineering-3.jpg"
                        alt="Platform Design"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02, y: 5 }}
                      transition={{ duration: 0.2 }}
                      className="relative col-span-2 aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
                    >
                      <Image
                        src="/images/services/marine/offshore-engineering-4.jpg"
                        alt="Wave Analysis"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -right-8 bottom-1/3 w-24 h-24 bg-[var(--color-accent)]/5 rounded-full blur-2xl"></div>
                  <div className="absolute -left-8 top-1/3 w-32 h-32 bg-[var(--color-accent)]/5 rounded-full blur-3xl"></div>
                </div>

                <div className="order-1 space-y-8">
                  {/* Section Number */}
                  <div className="inline-flex items-center gap-4">
                    <span className="text-[var(--color-accent)]/20 text-8xl font-bold">02</span>
                    <div className="h-px w-12 bg-[var(--color-accent)]/20"></div>
                  </div>

                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight"
                  >
                    Offshore Engineering & <br />Structural Analysis
                  </motion.h3>

                  <div className="h-px w-20 bg-[var(--color-accent)] opacity-20"></div>

                  <ul className="space-y-6 text-[var(--color-text-secondary)]">
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="flex items-start group"
                    >
                      <span className="text-[var(--color-accent)] mr-3 text-xl group-hover:scale-110 transition-transform">•</span>
                      <span className="text-lg leading-relaxed">
                        <strong className="text-[var(--color-text-primary)]">Hydrodynamic Classification</strong> – Using numerical modelling for wave-structure interactions.
                      </span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex items-start group"
                    >
                      <span className="text-[var(--color-accent)] mr-3 text-xl group-hover:scale-110 transition-transform">•</span>
                      <span className="text-lg leading-relaxed">
                        <strong className="text-[var(--color-text-primary)]">Wave Loading Analysis</strong> – Application of wave force models for offshore platforms and FPSOs.
                      </span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="flex items-start group"
                    >
                      <span className="text-[var(--color-accent)] mr-3 text-xl group-hover:scale-110 transition-transform">•</span>
                      <span className="text-lg leading-relaxed">
                        <strong className="text-[var(--color-text-primary)]">Inertial Loading Analysis</strong> – Structural response assessment of floating and fixed marine structures.
                      </span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="flex items-start group"
                    >
                      <span className="text-[var(--color-accent)] mr-3 text-xl group-hover:scale-110 transition-transform">•</span>
                      <span className="text-lg leading-relaxed">
                        <strong className="text-[var(--color-text-primary)]">Diffraction Analysis</strong> – Simulation of wave effects on bottom-standing offshore structures.
                      </span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="flex items-start group"
                    >
                      <span className="text-[var(--color-accent)] mr-3 text-xl group-hover:scale-110 transition-transform">•</span>
                      <span className="text-lg leading-relaxed">
                        <strong className="text-[var(--color-text-primary)]">Sea Loads Analysis</strong> – Structural force evaluations for harbours and ports.
                      </span>
                    </motion.li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Port & Coastal Infrastructure Analysis */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  {/* Section Number */}
                  <div className="inline-flex items-center gap-4">
                    <span className="text-[var(--color-accent)]/20 text-8xl font-bold">03</span>
                    <div className="h-px w-12 bg-[var(--color-accent)]/20"></div>
                  </div>

                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight"
                  >
                    Port & Coastal <br />Infrastructure Analysis
                  </motion.h3>

                  <div className="h-px w-20 bg-[var(--color-accent)] opacity-20"></div>

                  <ul className="space-y-6 text-[var(--color-text-secondary)]">
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="flex items-start group"
                    >
                      <span className="text-[var(--color-accent)] mr-3 text-xl group-hover:scale-110 transition-transform">•</span>
                      <span className="text-lg leading-relaxed">
                        <strong className="text-[var(--color-text-primary)]">Breakwater & Quay Wall Engineering</strong> – Analysis of wave loading and breakwater resilience.
                      </span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex items-start group"
                    >
                      <span className="text-[var(--color-accent)] mr-3 text-xl group-hover:scale-110 transition-transform">•</span>
                      <span className="text-lg leading-relaxed">
                        <strong className="text-[var(--color-text-primary)]">Bollard Design & Load Analysis</strong> – Assessing bollard strength and mooring loads.
                      </span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="flex items-start group"
                    >
                      <span className="text-[var(--color-accent)] mr-3 text-xl group-hover:scale-110 transition-transform">•</span>
                      <span className="text-lg leading-relaxed">
                        <strong className="text-[var(--color-text-primary)]">Sea-Structure Response Modelling</strong> – Evaluating wave impacts on marine structures.
                      </span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="flex items-start group"
                    >
                      <span className="text-[var(--color-accent)] mr-3 text-xl group-hover:scale-110 transition-transform">•</span>
                      <span className="text-lg leading-relaxed">
                        <strong className="text-[var(--color-text-primary)]">Fluid Motion Analysis</strong> – Predicting sloshing and fluid resonance.
                      </span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="flex items-start group"
                    >
                      <span className="text-[var(--color-accent)] mr-3 text-xl group-hover:scale-110 transition-transform">•</span>
                      <span className="text-lg leading-relaxed">
                        <strong className="text-[var(--color-text-primary)]">Sea Environment Analysis</strong> – Using Regular Wave Theory and Statistical Wave Description.
                      </span>
                    </motion.li>
                  </ul>
                </div>

                <div className="relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#6b728008_1px,transparent_1px),linear-gradient(to_bottom,#6b728008_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50"></div>
                  
                  <div className="relative grid grid-cols-3 gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl"
                    >
                      <Image
                        src="/images/services/marine/port-infrastructure-1.jpg"
                        alt="Port Infrastructure"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02, y: 5 }}
                      transition={{ duration: 0.2 }}
                      className="relative col-span-2 aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
                    >
                      <Image
                        src="/images/services/marine/port-infrastructure-2.jpg"
                        alt="Coastal Analysis"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl"
                    >
                      <Image
                        src="/images/services/marine/port-infrastructure-3.jpg"
                        alt="Breakwater Design"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02, y: 5 }}
                      transition={{ duration: 0.2 }}
                      className="relative col-span-2 aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
                    >
                      <Image
                        src="/images/services/marine/port-infrastructure-4.jpg"
                        alt="Port Analysis"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -right-8 bottom-1/3 w-24 h-24 bg-[var(--color-accent)]/5 rounded-full blur-2xl"></div>
                  <div className="absolute -left-8 top-1/3 w-32 h-32 bg-[var(--color-accent)]/5 rounded-full blur-3xl"></div>
                </div>
              </div>
            </motion.div>

            {/* Control & Instrumentation */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="order-2 relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#6b728008_1px,transparent_1px),linear-gradient(to_bottom,#6b728008_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50"></div>
                  
                  <div className="relative grid grid-cols-3 gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="relative col-span-2 aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
                    >
                      <Image
                        src="/images/services/marine/control-instrumentation-1.jpg"
                        alt="Control Systems"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02, y: 5 }}
                      transition={{ duration: 0.2 }}
                      className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl"
                    >
                      <Image
                        src="/images/services/marine/control-instrumentation-2.jpg"
                        alt="Instrumentation"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-xl"
                    >
                      <Image
                        src="/images/services/marine/control-instrumentation-3.jpg"
                        alt="Automation Systems"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02, y: 5 }}
                      transition={{ duration: 0.2 }}
                      className="relative col-span-2 aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
                    >
                      <Image
                        src="/images/services/marine/control-instrumentation-4.jpg"
                        alt="Monitoring Systems"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -right-8 bottom-1/3 w-24 h-24 bg-[var(--color-accent)]/5 rounded-full blur-2xl"></div>
                  <div className="absolute -left-8 top-1/3 w-32 h-32 bg-[var(--color-accent)]/5 rounded-full blur-3xl"></div>
                </div>

                <div className="order-1 space-y-8">
                  {/* Section Number */}
                  <div className="inline-flex items-center gap-4">
                    <span className="text-[var(--color-accent)]/20 text-8xl font-bold">04</span>
                    <div className="h-px w-12 bg-[var(--color-accent)]/20"></div>
                  </div>

                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl font-semibold text-[var(--color-text-primary)] tracking-tight"
                  >
                    Control & Instrumentation <br />in Marine Environments
                  </motion.h3>

                  <div className="h-px w-20 bg-[var(--color-accent)] opacity-20"></div>

                  <ul className="space-y-6 text-[var(--color-text-secondary)]">
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="flex items-start group"
                    >
                      <span className="text-[var(--color-accent)] mr-3 text-xl group-hover:scale-110 transition-transform">•</span>
                      <span className="text-lg leading-relaxed">
                        <strong className="text-[var(--color-text-primary)]">Marine Automation Systems</strong> – Design and integration of automated control systems.
                      </span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="flex items-start group"
                    >
                      <span className="text-[var(--color-accent)] mr-3 text-xl group-hover:scale-110 transition-transform">•</span>
                      <span className="text-lg leading-relaxed">
                        <strong className="text-[var(--color-text-primary)]">Dynamic Positioning Systems</strong> – Implementation of vessel station-keeping technology.
                      </span>
                    </motion.li>
                    <motion.li 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="flex items-start group"
                    >
                      <span className="text-[var(--color-accent)] mr-3 text-xl group-hover:scale-110 transition-transform">•</span>
                      <span className="text-lg leading-relaxed">
                        <strong className="text-[var(--color-text-primary)]">Structural Health Monitoring</strong> – Installation of real-time monitoring systems.
                      </span>
                    </motion.li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Message from CEO */}
      <section className="py-24 bg-gradient-to-br from-[var(--color-bg-gradient-from)] to-[var(--color-bg-gradient-to)] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          {/* Enhanced Grid Pattern */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#6b728015_1px,transparent_1px),linear-gradient(to_bottom,#6b728015_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          </div>
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-dark-transparent)] via-transparent to-[var(--color-bg-dark-transparent)]"></div>
        </div>

        <Container>
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            {/* Enhanced Section Label */}
            <div className="inline-flex items-center justify-center gap-3 mb-6 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
              <div className="h-px w-8 bg-[var(--color-accent)]"></div>
              <span className="text-[var(--color-accent)] font-medium uppercase tracking-wider text-sm">Leadership Insights</span>
              <div className="h-px w-8 bg-[var(--color-accent)]"></div>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
              Message from Our CEO
            </h2>
            <p className="text-xl text-gray-400">
              Pioneering Marine Engineering Excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Enhanced Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative lg:h-auto order-2 lg:order-1 lg:sticky lg:top-8"
            >
              <div className="relative h-[500px] lg:h-[700px] w-full rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="/images/staff-images/MR-LUNGISA-DOUSE_2.png"
                  alt="Lungisa Douse - Chief Operations Officer at Globtek"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Experience Badge */}
                <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/10">
                  <span className="text-white font-medium">25+ Years Marine Experience</span>
                </div>
              </div>

              {/* Enhanced Floating Card - Adjusted positioning */}
              <div className="absolute right-0 sm:right-0 bottom-8 group max-w-[90%] sm:max-w-[320px]">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-2xl hover:from-white/15 hover:to-white/10 transition-all duration-300">
                  <div className="flex items-center gap-6">
                    <div className="shrink-0">
                      <div className="p-3 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)]/80 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Award className="h-6 w-6 text-white" />
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
            </motion.div>

            {/* Enhanced Content Column */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8 order-1 lg:order-2 self-start"
            >
              <div className="space-y-8">
                <blockquote className="text-lg text-gray-300 space-y-6">
                  <p className="relative leading-relaxed">
                    In the dynamic world of marine engineering, innovation is not just an advantage—it's a necessity. Our marine division stands at the forefront of technological advancement, combining decades of expertise with cutting-edge solutions to address the complex challenges of modern maritime infrastructure.
                  </p>
                  <p className="leading-relaxed">
                    From advanced naval architecture to sophisticated offshore engineering, our team's commitment to excellence has established Globtek as a leader in marine engineering solutions. We understand that each project represents not just an engineering challenge, but an opportunity to enhance maritime safety, efficiency, and sustainability.
                  </p>
                  <p className="leading-relaxed">
                    Our vision extends beyond traditional engineering—we're actively shaping the future of maritime infrastructure through innovative design, sustainable practices, and state-of-the-art technology. Join us in navigating the future of marine engineering excellence.
                  </p>
                </blockquote>

                {/* Enhanced CTA */}
                <div>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-dark)] text-white font-medium rounded-lg hover:from-[var(--color-accent-dark)] hover:to-[var(--color-accent)] transition-all duration-300 shadow-lg shadow-[var(--color-accent)]/20"
                  >
                    Discuss Your Marine Project
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--color-accent)] mb-1">500+</div>
                  <div className="text-sm text-gray-400">Marine Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--color-accent)] mb-1">25+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--color-accent)] mb-1">50+</div>
                  <div className="text-sm text-gray-400">Global Ports</div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>

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

      {/* CTA Section */}
      <section className="py-24 bg-[var(--color-bg-secondary)]">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-bold text-[var(--color-text-primary)] mb-6 tracking-tight"
            >
              Ready to Transform Your Marine Projects?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-2xl mx-auto"
            >
              Let's discuss how our expertise in naval architecture, marine engineering, and offshore solutions can bring your vision to life.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors duration-300"
              >
                Get Started
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 border border-[var(--color-accent)] text-base font-medium rounded-md text-[var(--color-accent)] bg-transparent hover:bg-[var(--color-accent)] hover:text-white transition-colors duration-300"
              >
                Explore Services
              </a>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
} 