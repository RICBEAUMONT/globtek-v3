'use client';

import Container from '@/components/layout/Container';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

const services = [
  // Marine Services
  {
    title: 'Naval Design',
    description: 'Comprehensive naval architecture and marine design solutions for vessels of all types.',
    image: '/images/services/naval-design/hero.jpg',
    href: '/services/naval-design',
    color: '#e43d30'
  },
  {
    title: 'Marine Engineering',
    description: 'Advanced engineering services for marine systems and equipment.',
    image: '/images/services/marine-engineering/hero.jpg',
    href: '/services/marine-engineering',
    color: '#e43d30'
  },
  {
    title: 'Coastal Engineering',
    description: 'Expert solutions for coastal infrastructure and environmental protection.',
    image: '/images/services/coastal-engineering/hero.jpg',
    href: '/services/coastal-engineering',
    color: '#e43d30'
  },
  {
    title: 'Project Management',
    description: 'Comprehensive project management services for maritime initiatives.',
    image: '/images/services/project-management/hero.jpg',
    href: '/services/project-management',
    color: '#e43d30'
  },
  {
    title: 'Survey and Inspection',
    description: 'Comprehensive marine surveys and technical inspections.',
    image: '/images/services/survey-inspection/hero.jpg',
    href: '/services/survey-inspection',
    color: '#e43d30'
  },
  {
    title: 'Consulting',
    description: 'Strategic consulting for marine and naval operations.',
    image: '/images/consulting/mega-menu.jpg',
    href: '/services/consulting',
    color: '#e43d30'
  },
  // Multi-Disciplinary Services
  {
    title: 'Roads and Transportation',
    description: 'Infrastructure development and transportation engineering solutions.',
    image: '/images/services/roads-transportations/hero.jpg',
    href: '/services/roads-transportation',
    color: '#e43d30'
  },
  {
    title: 'Civil and Structural Engineering',
    description: 'Comprehensive civil and structural engineering services.',
    image: '/images/civil-structural/hero.jpg',
    href: '/services/civil-structural',
    color: '#e43d30'
  },
  {
    title: 'Electrical Engineering',
    description: 'Advanced electrical systems design and implementation.',
    image: '/images/electrical/hero.jpg',
    href: '/services/electrical',
    color: '#e43d30'
  },
  {
    title: 'Mechanical Engineering',
    description: 'Innovative mechanical engineering solutions.',
    image: '/images/mechanical/hero.jpg',
    href: '/services/mechanical',
    color: '#e43d30'
  },
  {
    title: 'Water Sanitation',
    description: 'Infrastructure & Management Solutions',
    image: '/images/water-sanitation/hero.jpg',
    href: '/services/water-sanitation',
    color: '#e43d30'
  },
  {
    title: 'Energy & Petrochemical',
    description: 'Engineering & Management Solutions',
    image: '/images/energy-petrochemical/hero.jpg',
    href: '/services/energy-petrochemical',
    color: '#e43d30'
  },
  {
    title: 'Environmental Planning',
    description: 'Sustainable Development Solutions',
    image: '/images/environmental-planning/hero.jpg',
    href: '/services/environmental-planning',
    color: '#e43d30'
  }
];

export default function ServicesPage() {
  const { ref } = useScrollReveal();

  return (
    <main className="min-h-screen pt-32 pb-24">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center animate-in">
          <h1 className="text-4xl md:text-5xl font-bold text-[#231f20] mb-6">
            Our Services
          </h1>
          <p className="text-lg text-[#4a4a4a] mb-16">
            Discover our comprehensive range of engineering and consulting services, each designed to deliver excellence and innovation to your projects.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 stagger-children" ref={ref}>
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 scroll-reveal"
              style={{ '--child-index': index } as React.CSSProperties}
            >
              {/* Service Image */}
              <div className="relative aspect-[16/9]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                />
                {/* Color Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="relative flex flex-col h-[180px]">
                <div className="flex-1 p-6">
                  <h3 className="text-xl font-semibold text-[#231f20] mb-2 group-hover:text-[#e43d30] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#4a4a4a] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Line */}
                <div 
                  className="w-full h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ backgroundColor: service.color }}
                />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
} 