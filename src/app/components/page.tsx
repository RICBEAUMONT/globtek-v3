import SimpleCTA from '@/components/shared/SimpleCTA';
import CoreValues from '@/components/shared/CoreValues';
import Container from '@/components/layout/Container';
import { Award, Target, Lightbulb, ChevronDown, ChevronRight } from 'lucide-react';
import Services from '@/components/shared/Services';
import Navbar from '@/components/layout/Navbar';
import GlobtekWay from '@/components/sections/GlobtekWay';
import ProjectGallery from '@/components/sections/ProjectGallery';
import LatestProjects from '@/components/home/LatestProjects';

const exampleCoreValues = [
  {
    title: 'Integrity, Honesty, and Professionalism',
    description: 'Operating with the highest ethical standards and professional conduct',
    icon: Award,
    image: '/images/core-values/integrity.jpg'
  },
  {
    title: 'Commitment and Accountability',
    description: 'Taking ownership of our actions and delivering on our promises',
    icon: Target,
    image: '/images/core-values/commitment.jpg'
  },
  {
    title: 'Learning and Development',
    description: 'Continuously improving and staying at the forefront of engineering innovation',
    icon: Lightbulb,
    image: '/images/core-values/learning.jpg'
  },
];

const exampleServices = [
  {
    title: "Engineering Design",
    description: "Comprehensive engineering solutions for complex projects",
    href: "/services/engineering-design"
  },
  {
    title: "Technical Consulting",
    description: "Expert guidance for technical challenges and optimization",
    href: "/services/technical-consulting"
  },
  {
    title: "Project Management",
    description: "End-to-end project oversight and delivery",
    href: "/services/project-management"
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality control and compliance standards",
    href: "/services/quality-assurance"
  }
];

const exampleNavigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    children: [
      { 
        name: 'Engineering Design', 
        href: '/services/engineering',
        description: 'Comprehensive engineering solutions for complex projects.',
        imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80'
      },
      { 
        name: 'Consulting', 
        href: '/services/consulting',
        description: 'Expert guidance and strategic consulting services.',
        imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80'
      }
    ]
  },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' }
];

const exampleGlobtekWay = [
  {
    title: "Excellence in Execution",
    description: "We believe in getting it right the first time, focusing on precision and attention to detail in every project we undertake.",
    focus: "Quality control, process optimization, and continuous improvement methodologies.",
    impact: "Reduced revisions, optimized timelines, and consistently high-quality deliverables."
  },
  {
    title: "Innovation-Driven Solutions",
    description: "Embracing cutting-edge technologies and methodologies to solve complex engineering challenges.",
    focus: "Research and development, technology integration, and creative problem-solving.",
    impact: "Breakthrough solutions, enhanced efficiency, and competitive advantage."
  },
  {
    title: "Client-Centric Approach",
    description: "Understanding and exceeding client expectations through close collaboration and clear communication.",
    focus: "Client engagement, requirement analysis, and tailored solutions.",
    impact: "High client satisfaction, long-term partnerships, and project success."
  },
  {
    title: "Sustainable Engineering",
    description: "Incorporating environmental consciousness and sustainability into our engineering practices.",
    focus: "Green technologies, resource efficiency, and environmental impact assessment.",
    impact: "Reduced environmental footprint, cost savings, and future-proof solutions."
  }
];

const exampleProjects = [
  {
    title: 'Offshore Platform Design',
    description: 'Advanced engineering design for deep-water operations in the Gulf of Mexico, incorporating innovative safety features and sustainable technologies.',
    href: '/projects/offshore-platform',
    image: '/images/projects/offshore-platform.jpg',
    category: 'Naval Architecture',
    completionDate: '2024'
  },
  {
    title: 'Port Infrastructure Upgrade',
    description: 'Comprehensive modernization of port facilities including automated cargo handling systems and enhanced security measures.',
    href: '/projects/port-infrastructure',
    image: '/images/projects/port-infrastructure.jpg',
    category: 'Civil Engineering',
    completionDate: '2023'
  },
  {
    title: 'Marine Survey System',
    description: 'Development of an advanced hydrographic survey system for precise underwater mapping and environmental monitoring.',
    href: '/projects/marine-survey',
    image: '/images/projects/marine-survey.jpg',
    category: 'Surveying',
    completionDate: '2023'
  },
  {
    title: 'Vessel Design Innovation',
    description: 'Revolutionary vessel design incorporating hybrid propulsion systems and optimized hydrodynamics for improved efficiency.',
    href: '/projects/vessel-design',
    image: '/images/projects/vessel-design.jpg',
    category: 'Naval Architecture',
    completionDate: '2023'
  }
];

export default function ComponentsPage() {
  return (
    <main className="min-h-screen py-16">
      <Container>
        <h1 className="text-4xl font-bold mb-12">Component Library</h1>

        {/* Navbar Documentation */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">Navbar</h2>
          <div className="prose max-w-none mb-12">
            <p>
              A modern, responsive navigation bar with mega menu dropdowns, mobile responsiveness, and glassmorphism effects.
              Features expandable cards in dropdowns, smooth transitions, and accessibility support.
            </p>
            <h3>Key Features:</h3>
            <ul>
              <li>Responsive design with mobile menu support</li>
              <li>Mega menu dropdowns with expandable cards</li>
              <li>Glassmorphism effect on dropdowns</li>
              <li>Keyboard navigation and accessibility</li>
              <li>Smooth transitions and hover effects</li>
              <li>Dark mode support</li>
            </ul>
            <h3>Usage Example:</h3>
            <pre className="bg-gray-50 p-4 rounded-lg">
              {`const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    children: [
      { 
        name: 'Engineering Design',
        href: '/services/engineering',
        description: 'Comprehensive engineering solutions.',
        imageUrl: '/path/to/image.jpg'
      },
      // ... more items
    ]
  },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' }
];

<Navbar />`}
            </pre>
            <h3>Props and Types:</h3>
            <pre className="bg-gray-50 p-4 rounded-lg">
              {`interface NavigationItem {
  name: string;
  href?: string;
  description?: string;
  imageUrl?: string;
  children?: NavigationItem[];
}`}
            </pre>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg relative h-[500px] overflow-hidden">
            <div className="absolute inset-0">
              <Navbar />
            </div>
          </div>
        </section>

        {/* SimpleCTA Documentation */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">SimpleCTA</h2>
          <div className="prose max-w-none mb-12">
            <p>
              A versatile call-to-action component with a clean, modern design. Supports primary and secondary buttons,
              with customizable title, accent text, and description.
            </p>
            <h3>Usage Example:</h3>
            <pre className="bg-gray-50 p-4 rounded-lg">
              {`<SimpleCTA
  title="Let's Create"
  titleAccent="Something Great"
  description="Take the first step towards your project's success."
  primaryButton={{
    text: "Start Your Project",
    href: "/contact"
  }}
  secondaryButton={{
    text: "Learn More",
    href: "/about"
  }}
/>`}
            </pre>
            <h3>Props:</h3>
            <ul>
              <li><code>title</code> - Main heading text</li>
              <li><code>titleAccent</code> - Accent text for the heading</li>
              <li><code>description</code> - Descriptive text below the heading</li>
              <li><code>primaryButton</code> - Object with text and href for primary button</li>
              <li><code>secondaryButton</code> - Object with text and href for secondary button</li>
              <li><code>className</code> - Optional additional classes</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <SimpleCTA
              title="Let's Create"
              titleAccent="Something Great"
              description="Take the first step towards your project's success."
              primaryButton={{
                text: "Start Your Project",
                href: "/contact"
              }}
              secondaryButton={{
                text: "Learn More",
                href: "/about"
              }}
            />
          </div>
        </section>

        {/* Services Component */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">Services</h2>
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              A modern, interactive grid of service cards that showcase key business offerings. Features a clean layout,
              smooth hover transitions, and a sophisticated numbering system. Optimized for both desktop and mobile viewing
              with responsive design and consistent spacing.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8 mt-8">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#e43d30] mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Responsive grid layout that adapts from 1 to 4 columns</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#e43d30] mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Interactive cards with smooth hover effects and transitions</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#e43d30] mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Automatic numbering system with accent colors</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#e43d30] mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Clean typography with clear visual hierarchy</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#e43d30] mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Optimized spacing and padding for content readability</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Usage Example</h3>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`import Services from '@/components/shared/Services';

const services = [
  {
    title: "Engineering Design",
    description: "Comprehensive engineering solutions for complex projects",
    href: "/services/engineering-design"
  },
  {
    title: "Technical Consulting",
    description: "Expert guidance for technical challenges",
    href: "/services/technical-consulting"
  }
];

<Services
  title="Our Services"
  description="Comprehensive engineering solutions for your needs"
  services={services}
/>`}</code>
              </pre>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Props</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">title</h4>
                  <p className="text-gray-600">The main heading of the services section</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">description</h4>
                  <p className="text-gray-600">A brief description that appears below the heading</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">services</h4>
                  <p className="text-gray-600">Array of service objects with title, description, and href</p>
                  <pre className="bg-gray-100 p-2 rounded mt-2 text-sm">
                    {`interface Service {
  title: string;
  description: string;
  href: string;
}`}
                  </pre>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">className</h4>
                  <p className="text-gray-600">Optional additional classes for custom styling</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Styling Details</h3>
              <div className="space-y-3 text-gray-600">
                <p><strong>Typography:</strong> Section title (text-4xl), card titles (text-xl), descriptions (text-base/text-gray-600)</p>
                <p><strong>Layout:</strong> Responsive grid with gap-8, automatic column adjustment based on screen size</p>
                <p><strong>Cards:</strong> Consistent padding (p-6), rounded corners (rounded-xl), and hover transitions</p>
                <p><strong>Animations:</strong> Smooth hover effects with scale and shadow transitions (duration-300)</p>
                <p><strong>Colors:</strong> Uses brand color variables for accents and gradients</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Live Example</h3>
            <Services
              title="Our Services"
              description="Comprehensive engineering solutions for your needs"
              services={exampleServices}
            />
          </div>
        </section>

        {/* CoreValues Documentation */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">CoreValues</h2>
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              A modern, responsive section for displaying company core values with a sophisticated dark theme, interactive cards, and subtle animations.
              Features background images, hover effects, and a clean typographic hierarchy that emphasizes content while maintaining visual interest.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8 mt-8">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#e43d30] mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Responsive grid layout with 2-column desktop view</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#e43d30] mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Interactive cards with background images and hover effects</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#e43d30] mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Elegant typography with consistent spacing and hierarchy</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#e43d30] mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Accent line animations and gradient overlays</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#e43d30] mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Numbered labels with subtle hover transitions</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Usage Example</h3>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`import { Award } from 'lucide-react';

const values = [
  {
    title: "Integrity",
    description: "Operating with the highest ethical standards",
    icon: Award,
    image: "/images/core-values/integrity.jpg"
  }
];

<CoreValues
  title="Our Core Values"
  description="The principles that guide everything we do"
  values={values}
/>`}</code>
              </pre>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Props</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">title</h4>
                  <p className="text-gray-600">Main heading text for the section</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">description</h4>
                  <p className="text-gray-600">Descriptive text that appears below the heading</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">values</h4>
                  <p className="text-gray-600">Array of value objects containing title, description, icon, and optional image</p>
                  <pre className="bg-gray-100 p-2 rounded mt-2 text-sm">
                    {`interface CoreValue {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}`}
                  </pre>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">className</h4>
                  <p className="text-gray-600">Optional additional classes for custom styling</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Styling Details</h3>
              <div className="space-y-3 text-gray-600">
                <p><strong>Typography:</strong> Uses brand text sizes with refined hierarchy - section title (text-4xl), card titles (text-lg/xl), and descriptions (text-[15px])</p>
                <p><strong>Colors:</strong> Implements brand color variables for consistent theming and dark mode support</p>
                <p><strong>Spacing:</strong> Consistent padding (p-6/p-8) and margins for optimal readability</p>
                <p><strong>Animations:</strong> Smooth transitions for hover states and line animations (duration-700)</p>
                <p><strong>Responsive:</strong> Adapts from single column on mobile to two columns on larger screens</p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-bg-gradient-from)] p-8 rounded-lg">
            <CoreValues
              title="Our Core Values"
              description="The principles that guide everything we do"
              values={exampleCoreValues}
            />
          </div>
        </section>

        {/* GlobtekWay Documentation */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">GlobtekWay</h2>
          <div className="prose max-w-none mb-12">
            <p>
              A dynamic section showcasing company pillars with expandable cards. Features smooth animations,
              responsive design, and interactive elements that reveal detailed information about each pillar.
            </p>
            <h3>Key Features:</h3>
            <ul>
              <li>Expandable cards with smooth transitions</li>
              <li>Responsive grid layout</li>
              <li>Numbered badges with accent colors</li>
              <li>Focus areas and impact sections</li>
              <li>Hover effects and visual feedback</li>
              <li>Accessibility support</li>
            </ul>
            <h3>Usage Example:</h3>
            <pre className="bg-gray-50 p-4 rounded-lg">
              {`const pillars = [
  {
    title: "Excellence in Execution",
    description: "We believe in getting it right the first time...",
    focus: "Quality control, process optimization...",
    impact: "Reduced revisions, optimized timelines..."
  },
  // ... more pillars
];

<GlobtekWay pillars={pillars} />`}
            </pre>
            <h3>Props and Types:</h3>
            <pre className="bg-gray-50 p-4 rounded-lg">
              {`interface GlobtekWayPillar {
  title: string;
  description: string;
  focus: string;
  impact: string;
}

interface GlobtekWayProps {
  pillars: GlobtekWayPillar[];
  className?: string;
}`}
            </pre>
          </div>
          <div className="bg-[var(--color-bg-gradient-from)] p-8 rounded-lg">
            <GlobtekWay pillars={exampleGlobtekWay} />
          </div>
        </section>

        {/* ProjectGallery Documentation */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">ProjectGallery</h2>
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              A modern, horizontal scrolling image gallery with smooth transitions and interactive controls.
              Features image loading states, hover effects, and navigation buttons for an engaging user experience.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8 mt-8">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#e43d30] mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Smooth horizontal scrolling with snap points for precise navigation</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#e43d30] mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Interactive navigation buttons with hover effects</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#e43d30] mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Image hover effects with smooth zoom and overlay transitions</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#e43d30] mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Responsive design that adapts to different screen sizes</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#e43d30] mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Smart image loading states with fallback handling</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Usage Example</h3>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`// Basic usage
<ProjectGallery />

// With custom images
<ProjectGallery 
  images={[
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg',
    '/path/to/image4.jpg'
  ]}
/>`}</code>
              </pre>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Props</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">images</h4>
                  <p className="text-gray-600">Array of image paths to display in the gallery. Defaults to placeholder images if not provided.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">className</h4>
                  <p className="text-gray-600">Optional additional classes for custom styling.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Live Example</h3>
            <ProjectGallery />
          </div>
        </section>

        {/* Latest Projects Documentation */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">Latest Projects</h2>
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              A dynamic grid showcase of recent projects with rich visual presentation. Features responsive image cards
              with category tags, completion dates, and smooth hover effects. Optimized for visual impact while maintaining
              readability and accessibility.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8 mt-8">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#e43d30] mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Responsive grid layout with 1-4 columns based on screen size</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#e43d30] mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Image cards with gradient overlays and zoom effects</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#e43d30] mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Category tags and completion dates for each project</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#e43d30] mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Interactive hover states with smooth transitions</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#e43d30] mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Optimized image loading with Next.js Image component</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Usage Example</h3>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`import LatestProjects from '@/components/home/LatestProjects';

const projects = [
  {
    title: "Offshore Platform Design",
    description: "Advanced engineering design for deep-water operations",
    href: "/projects/offshore-platform",
    image: "/images/projects/offshore-platform.jpg",
    category: "Naval Architecture",
    completionDate: "2024"
  }
  // ... more projects
];

<LatestProjects
  title="Latest Projects"
  description="Discover our most recent engineering achievements"
  projects={projects}
/>`}</code>
              </pre>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Props</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">title</h4>
                  <p className="text-gray-600">Main heading text for the projects section (optional, defaults to "Latest Projects")</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">description</h4>
                  <p className="text-gray-600">Descriptive text that appears below the heading (optional)</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">projects</h4>
                  <p className="text-gray-600">Array of project objects containing title, description, href, image, category, and completionDate</p>
                  <pre className="bg-gray-100 p-2 rounded mt-2 text-sm">
                    {`interface Project {
  title: string;       // Project title
  description: string; // Brief project description
  href: string;        // Link to project details page
  image: string;       // Path to project image
  category: string;    // Project category/type
  completionDate: string; // Year or date of completion
}`}
                  </pre>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">className</h4>
                  <p className="text-gray-600">Optional additional classes for custom styling</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Styling Details</h3>
              <div className="space-y-3 text-gray-600">
                <p><strong>Grid Layout:</strong> Responsive grid with 1 column (mobile), 2 columns (sm), and 4 columns (lg) with consistent gap spacing</p>
                <p><strong>Card Design:</strong> Aspect ratio of 1:1.2, rounded corners (rounded-2xl), and hover shadow effects</p>
                <p><strong>Images:</strong> Full coverage with object-fit: cover, gradient overlay from 40% to 90% opacity</p>
                <p><strong>Typography:</strong> Consistent hierarchy with title (text-xl), category (text-sm), and description (text-sm) with line clamping</p>
                <p><strong>Animations:</strong> Smooth transitions for image zoom (scale-105), overlay opacity, and hover line expansion</p>
                <p><strong>Colors:</strong> Uses brand color variables for accents and gradients with dark overlay for text contrast</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#e43d30] mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Use high-quality images with 16:9 or 4:3 aspect ratios for best visual presentation</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#e43d30] mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Keep descriptions concise (2-3 lines) for consistent card heights</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#e43d30] mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Use meaningful categories that align with your business domains</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-[#e43d30] mt-0.5 flex-shrink-0" />
                  <span className="ml-2">Ensure all images have good contrast with the overlay for text readability</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <LatestProjects
              title="Latest Projects"
              description="Discover our most recent engineering achievements"
              projects={exampleProjects}
            />
          </div>
        </section>

        {/* Projects Pages Documentation */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">Projects Pages</h2>
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              The Projects section consists of two main pages: a listing page that displays all projects in a grid layout,
              and individual project detail pages. These pages showcase our engineering projects with rich visual presentation
              and detailed information.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8 mt-8">
              <h3 className="text-xl font-semibold mb-4">Projects Listing Page</h3>
              <p className="text-gray-600 mb-4">
                Located at <code>/projects/page.tsx</code>, this page displays a grid of project cards with filtering capabilities.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Key Features</h4>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-[#e43d30] mt-2 mr-3 flex-shrink-0" />
                      <span>Responsive grid layout (1 column mobile, 2 columns tablet, 3 columns desktop)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-[#e43d30] mt-2 mr-3 flex-shrink-0" />
                      <span>Category filtering with interactive buttons</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-[#e43d30] mt-2 mr-3 flex-shrink-0" />
                      <span>Project cards with hover effects and image zoom</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-[#e43d30] mt-2 mr-3 flex-shrink-0" />
                      <span>Gradient overlays for better text readability</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900">Project Interface</h4>
                  <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
                    <code>{`interface Project {
  id: string;          // Unique identifier
  title: string;       // Project title
  description: string; // Brief project description
  category: string;    // Project category for filtering
  image: string;       // Path to project image
  completionDate: string; // Year of completion
  client: string;      // Client name
  slug: string;        // URL-friendly identifier
}`}</code>
                  </pre>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900">Usage Example</h4>
                  <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
                    <code>{`const projects: Project[] = [
  {
    id: '1',
    title: 'Project Title',
    description: 'Project description...',
    category: 'Naval Architecture',
    image: '/images/projects/project-image.jpg',
    completionDate: '2024',
    client: 'Client Name',
    slug: 'project-slug'
  }
];`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Project Detail Page</h3>
              <p className="text-gray-600 mb-4">
                Located at <code>/projects/[slug]/page.tsx</code>, this page provides detailed information about individual projects.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Key Features</h4>
                  <ul className="mt-2 space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-[#e43d30] mt-2 mr-3 flex-shrink-0" />
                      <span>Full-width hero image with gradient overlay</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-[#e43d30] mt-2 mr-3 flex-shrink-0" />
                      <span>Detailed project information with scope of work</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-[#e43d30] mt-2 mr-3 flex-shrink-0" />
                      <span>Sidebar with project metadata</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-[#e43d30] mt-2 mr-3 flex-shrink-0" />
                      <span>Optional external links</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900">Extended Project Interface</h4>
                  <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
                    <code>{`interface Project {
  // ... base Project interface ...
  scope: string[];     // Array of scope items
  externalLink?: {     // Optional external reference
    url: string;
    label: string;
  };
}`}</code>
                  </pre>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900">Project Data Structure</h4>
                  <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2 overflow-x-auto">
                    <code>{`const projects: Record<string, Project> = {
  'project-slug': {
    id: '1',
    title: 'Project Title',
    description: 'Full project description...',
    category: 'Category',
    image: '/images/projects/image.jpg',
    completionDate: '2024',
    client: 'Client Name',
    slug: 'project-slug',
    scope: [
      'Scope item 1...',
      'Scope item 2...'
    ],
    externalLink: {
      url: 'https://example.com',
      label: 'View Details'
    }
  }
};`}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-[#e43d30] mt-2 mr-3 flex-shrink-0" />
                  <span>Use high-quality images with 4:3 aspect ratio for consistent grid layout</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-[#e43d30] mt-2 mr-3 flex-shrink-0" />
                  <span>Keep project descriptions concise on the listing page (2-3 lines)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-[#e43d30] mt-2 mr-3 flex-shrink-0" />
                  <span>Use meaningful slugs that reflect the project title</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-[#e43d30] mt-2 mr-3 flex-shrink-0" />
                  <span>Ensure scope items are clear and start with action verbs</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-[#e43d30] mt-2 mr-3 flex-shrink-0" />
                  <span>Include relevant external links when available</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
} 