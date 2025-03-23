'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import Container from './Container';
import { usePathname } from 'next/navigation';

interface NavigationItem {
  name: string;
  href?: string;
  description?: string;
  imageUrl?: string;
  children?: NavigationItem[];
  icon?: React.ReactNode;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Marine',
    children: [
      { 
        name: 'Naval Design', 
        href: '/services/naval-design',
        description: 'Comprehensive naval architecture and marine design solutions for vessels of all types.',
        imageUrl: '/images/services/naval-design/hero.jpg'
      },
      { 
        name: 'Marine Engineering', 
        href: '/services/marine-engineering',
        description: 'Advanced engineering services for marine systems and equipment.',
        imageUrl: '/images/services/marine-engineering/hero.jpg'
      },
      { 
        name: 'Coastal Engineering', 
        href: '/services/coastal-engineering',
        description: 'Expert solutions for coastal infrastructure and environmental protection.',
        imageUrl: '/images/services/coastal-engineering/hero.jpg'
      },
      { 
        name: 'Project Management', 
        href: '/services/project-management',
        description: 'Comprehensive project management services for maritime initiatives.',
        imageUrl: '/images/services/project-management/hero.jpg'
      },
      { 
        name: 'Survey and Inspection', 
        href: '/services/survey-inspection',
        description: 'Comprehensive marine surveys and technical inspections.',
        imageUrl: '/images/services/survey-inspection/hero.jpg'
      },
      { 
        name: 'Consulting', 
        href: '/services/consulting',
        description: 'Strategic consulting for marine and naval operations.',
        imageUrl: '/images/consulting/mega-menu.jpg'
      }
    ]
  },
  {
    name: 'Multi-Disciplinary',
    children: [
      { 
        name: 'Roads and Transportation', 
        href: '/services/roads-transportation',
        description: 'Infrastructure development and transportation engineering solutions.',
        imageUrl: '/images/services/roads-transportations/hero.jpg'
      },
      { 
        name: 'Civil and Structural Engineering', 
        href: '/services/civil-structural',
        description: 'Comprehensive civil and structural engineering services.',
        imageUrl: '/images/civil-structural/hero.jpg'
      },
      { 
        name: 'Electrical Engineering', 
        href: '/services/electrical',
        description: 'Advanced electrical systems design and implementation.',
        imageUrl: '/images/electrical/hero.jpg'
      },
      { 
        name: 'Mechanical Engineering', 
        href: '/services/mechanical',
        description: 'Innovative mechanical engineering solutions.',
        imageUrl: '/images/mechanical/hero.jpg'
      },
      { 
        name: 'Water Sanitation', 
        href: '/services/water-sanitation',
        description: 'Infrastructure & Management Solutions',
        imageUrl: '/images/water-sanitation/hero.jpg',
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      },
      { 
        name: 'Energy & Petrochemical',
        href: '/services/energy-petrochemical',
        description: 'Engineering & Management Solutions',
        imageUrl: '/images/energy-petrochemical/hero.jpg',
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      },
      { 
        name: 'Environmental Planning',
        href: '/services/environmental-planning',
        description: 'Sustainable Development Solutions',
        imageUrl: '/images/environmental-planning/hero.jpg',
        icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      }
    ]
  },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [focusedItem, setFocusedItem] = useState<string | null>(null);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as HTMLElement).closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setActiveDropdown(null);
        setFocusedItem(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Trap focus in mobile menu
  useEffect(() => {
    if (isOpen && mobileMenuRef.current) {
      const focusableElements = mobileMenuRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstFocusable = focusableElements[0] as HTMLElement;
      const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          if (event.shiftKey) {
            if (document.activeElement === firstFocusable) {
              event.preventDefault();
              lastFocusable.focus();
            }
          } else {
            if (document.activeElement === lastFocusable) {
              event.preventDefault();
              firstFocusable.focus();
            }
          }
        }
      };

      document.addEventListener('keydown', handleTabKey);
      firstFocusable.focus();
      return () => document.removeEventListener('keydown', handleTabKey);
    }
  }, [isOpen]);

  const isActive = (href?: string) => {
    if (!href) return false;
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const handleKeyDown = (event: React.KeyboardEvent, itemName: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActiveDropdown(activeDropdown === itemName ? null : itemName);
    }
  };

  return (
    <nav 
      className="fixed w-full z-50 bg-[var(--color-bg-primary)] shadow-sm" 
      role="navigation" 
      aria-label="Main navigation"
    >
      <Container>
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex">
            <Link 
              href="/" 
              className="flex-shrink-0 flex items-center transition-all duration-300 hover:opacity-80 focus:outline-none"
              aria-label="Globtek Home"
            >
              <Image
                src="/globtek-logo.svg"
                alt="Globtek Logo"
                width={140}
                height={37}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative group dropdown-container h-full flex items-center"
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-all duration-300 focus:outline-none focus:text-[var(--color-accent)] ${
                      isActive(item.href)
                        ? 'text-[var(--color-accent)]'
                        : 'text-[var(--color-text-primary)] hover:text-[var(--color-accent)]'
                    }`}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button
                      className={`flex items-center text-sm font-medium transition-all duration-300 focus:outline-none focus:text-[var(--color-accent)] ${
                        isActive(item.href)
                          ? 'text-[var(--color-accent)]'
                          : 'text-[var(--color-text-primary)] hover:text-[var(--color-accent)]'
                      }`}
                      onKeyDown={(e) => handleKeyDown(e, item.name)}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                      tabIndex={0}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                    </button>

                    {/* Mega Menu */}
                    {item.children && (
                      <div 
                        className={`absolute left-0 top-full w-screen bg-transparent hidden md:block`}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {/* Invisible bridge */}
                        <div className="absolute inset-x-0 h-8 -top-8" />
                        
                        {/* Menu Content */}
                        <div
                          className={`fixed left-0 right-0 w-full bg-white/30 dark:bg-black/20 backdrop-blur-md border-t border-white/30 dark:border-white/10 shadow-lg transform transition-all duration-300 ease-in-out ${
                            activeDropdown === item.name
                              ? 'opacity-100 translate-y-0 pointer-events-auto'
                              : 'opacity-0 -translate-y-2 pointer-events-none'
                          }`}
                          style={{ top: '80px' }}
                          role="menu"
                          aria-label={`${item.name} submenu`}
                        >
                          <Container>
                            <div className="relative w-full overflow-hidden">
                              <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide py-8">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.name}
                                    href={child.href || '#'}
                                    className="snap-start flex-none w-[70px] hover:w-[350px] h-[350px] relative group/card mx-1 first:ml-2 last:mr-2 rounded-md overflow-hidden transition-all duration-300 ease-in-out"
                                    role="menuitem"
                                  >
                                    {/* Background Image */}
                                    <div className="absolute inset-0 w-full h-full">
                                      <Image
                                        src={child.imageUrl || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'}
                                        alt=""
                                        fill
                                        className="object-cover object-left transition-transform duration-500 group-hover/card:scale-110"
                                        sizes="(min-width: 350px) 350px, 70px"
                                      />
                                      <div className="absolute inset-0 bg-black/40 group-hover/card:bg-black/50 transition-colors duration-300" />
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="relative h-full flex flex-col justify-between p-6 text-white">
                                      <div className="absolute inset-0 flex items-center justify-center group-hover/card:hidden">
                                        <h3 className="text-base font-medium tracking-wide whitespace-nowrap text-center origin-center -rotate-90">
                                          {child.name}
                                        </h3>
                                      </div>
                                      
                                      <div className="opacity-0 group-hover/card:opacity-100 transition-all duration-300 h-full flex flex-col justify-center px-6">
                                        <h3 className="text-2xl font-semibold mb-3">
                                          {child.name}
                                        </h3>
                                        <p className="text-sm text-white/90 leading-relaxed line-clamp-3">
                                          {child.description}
                                        </p>
                                        <div className="mt-4 inline-flex items-center text-sm font-medium text-white/90 hover:text-white transition-colors">
                                          Discover
                                          <ChevronDown className="ml-1.5 h-4 w-4 rotate-[-90deg]" />
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </Container>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-all duration-300 focus:outline-none focus:text-[var(--color-accent)]"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden bg-[var(--color-bg-primary)] shadow-lg transform transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        id="mobile-menu"
        role="menu"
        aria-label="Mobile navigation"
      >
        <Container>
          <div className="py-2 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 text-sm rounded-md transition-all duration-300 focus:outline-none focus:text-[var(--color-accent)] ${
                      isActive(item.href)
                        ? 'text-[var(--color-accent)] bg-[var(--color-bg-secondary)]'
                        : 'text-[var(--color-text-primary)] hover:text-[var(--color-accent)] hover:bg-[var(--color-bg-secondary)]'
                    }`}
                    role="menuitem"
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      onKeyDown={(e) => handleKeyDown(e, item.name)}
                      className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-all duration-300 focus:outline-none focus:text-[var(--color-accent)] ${
                        activeDropdown === item.name
                          ? 'text-[var(--color-accent)] bg-[var(--color-bg-secondary)]'
                          : 'text-[var(--color-text-primary)] hover:text-[var(--color-accent)] hover:bg-[var(--color-bg-secondary)]'
                      }`}
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                      tabIndex={0}
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeDropdown === item.name ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pl-4 space-y-1">
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href || '#'}
                            className={`block px-3 py-2 text-sm rounded-md transition-all duration-300 focus:outline-none focus:text-[var(--color-accent)] ${
                              isActive(child.href)
                                ? 'text-[var(--color-accent)] bg-[var(--color-bg-secondary)]'
                                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:bg-[var(--color-bg-secondary)]'
                            }`}
                            role="menuitem"
                            aria-current={isActive(child.href) ? 'page' : undefined}
                            onClick={() => setIsOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar; 