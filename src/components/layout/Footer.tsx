'use client';

import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';
import { Twitter, Linkedin, Mail, Phone, MapPin, Clock, LucideIcon, Facebook, Instagram } from 'lucide-react';

/**
 * Types for the footer navigation structure
 */
interface FooterLink {
  name: string;
  href: string;
}

interface FooterService {
  name: string;
  href: string;
  items: FooterLink[];
}

interface FooterNavigation {
  company: FooterLink[];
  legal: FooterLink[];
  services: FooterService[];
}

interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

/**
 * Footer navigation data structure
 * This can be moved to a separate config file if needed
 */
const footerNavigation: FooterNavigation = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/projects/featured' },
    { name: 'Case Studies', href: '/projects/case-studies' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/contact/faq' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms of Service', href: '/legal/terms' },
    { name: 'Cookie Policy', href: '/legal/cookies' }
  ],
  services: [
    {
      name: 'Globtek Marine',
      href: '/services/marine',
      items: [
        { name: 'Naval Architecture', href: '/services/naval-architect' },
        { name: 'Marine Engineering', href: '/services/marine-engineering' },
        { name: 'Shipbuilding', href: '/services/shipbuilding' }
      ]
    },
    {
      name: 'Multi-Disciplinary',
      href: '/multi-disciplinary',
      items: [
        { name: 'Roads & Transportation', href: '/multi-disciplinary/roads' },
        { name: 'Civil Engineering', href: '/multi-disciplinary/civil' },
        { name: 'Structural Engineering', href: '/multi-disciplinary/structural' }
      ]
    }
  ]
};

const socialLinks: SocialLink[] = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin }
];

/**
 * Footer Component
 * 
 * A dynamic footer component that displays:
 * - Company information and social links
 * - Quick navigation links
 * - Service categories and sub-services
 * - Contact information and business hours
 * - Legal links and copyright
 * 
 * The component uses CSS variables for theming and is fully responsive.
 * It's structured in a 4-column grid on desktop, 2-column on tablet, and 1-column on mobile.
 * 
 * @example
 * ```tsx
 * <Footer />
 * ```
 */
export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[var(--color-bg-gradient-from)] to-[var(--color-bg-gradient-to)] text-gray-300" role="contentinfo">
      <Container>
        <div className="py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <Link href="/" className="block">
                <Image
                  src="/globtek-logo.svg"
                  alt="Globtek Logo"
                  width={140}
                  height={37}
                  className="h-8 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-sm leading-relaxed text-gray-400">
                Applied Ingenuity in Engineering Excellence
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Our Services</h3>
              <div className="space-y-6">
                {footerNavigation.services.map((service) => (
                  <div key={service.name} className="space-y-2">
                    <Link
                      href={service.href}
                      className="text-sm font-medium text-white hover:text-[var(--color-accent)] transition-colors duration-300"
                    >
                      {service.name}
                    </Link>
                    <ul className="space-y-1">
                      {service.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Get in Touch</h3>
              <div className="space-y-6">
                {/* Address */}
                <div className="group">
                  <h4 className="text-sm font-medium text-white mb-2">Our Office</h4>
                  <div className="text-gray-400">
                    <p className="text-sm">123 Business Street</p>
                    <p className="text-sm">City, State 12345</p>
                    <p className="text-sm">Country</p>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="space-y-3">
                  <a 
                    href="tel:+1234567890" 
                    className="block text-sm text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    +1 (234) 567-890
                  </a>
                  <a 
                    href="mailto:info@globtek.com" 
                    className="block text-sm text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    info@globtek.com
                  </a>
                </div>

                {/* Business Hours */}
                <div className="group">
                  <h4 className="text-sm font-medium text-white mb-2">Business Hours</h4>
                  <div className="text-gray-400">
                    <p className="text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-[var(--color-bg-white-transparent)]">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Globtek. All rights reserved.
              </p>
              <ul className="flex space-x-6">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-500 hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
} 