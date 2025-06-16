# Globtek Marine Engineering Website Sitemap

## Home Page (/)
- Hero Section
- About Section
- Services Section
- Projects Section
- Contact Section

## About Page (/about)
- Company Overview
- Team Section
- Mission & Values
- History & Experience

## Services Page (/services)
- Marine Engineering Services
- Naval Architecture
- Project Management
- Compliance & Certification
- Consulting Services

## Projects Page (/projects)
- Project Portfolio
- Search & Filter Functionality
  - Search by project name, description, or client
  - Filter by category
  - Results count display
- Project Categories
  - All Projects
  - Naval Architecture
  - Marine Engineering
  - Structural Analysis
  - Compliance & Certification
- Project Cards
  - Project image
  - Category tag
  - Completion date
  - Project title
  - Description
  - Client information
- Load More Functionality
- No Results State

## Contact Page (/contact)
- Contact Form
- Office Locations
- Contact Information
- Social Media Links

## Footer (All Pages)
- Company Information
- Quick Links
- Services Links
- Contact Information
- Social Media Links
- Copyright Notice

## Main Navigation Structure

### Primary Pages
- **Home** (`/`)
  - Main landing page
  - Hero section
  - Company highlights
  - Core values
  - Services overview

- **About** (`/about`)
  - Company introduction
  - Our story
  - Team
  - Core values
  - The Globtek Way

### Marine (Mega Menu)
- **Naval Architecture** (`/services/naval-architect`)
- **Marine Engineering** (`/services/marine-engineering`)
- **Coastal Engineering** (`/services/coastal-engineering`)
- **Project Management** (`/services/project-management`)
- **Survey and Inspection** (`/services/survey-inspection`)
- **Consulting** (`/services/consulting`)

### Multi-Disciplinary (Mega Menu)
- **Roads and Transportation** (`/services/roads-transportation`)
- **Civil and Structural Engineering** (`/services/civil-structural`)
- **Electrical Engineering** (`/services/electrical`)
- **Mechanical Engineering** (`/services/mechanical`)
- **Water Sanitation** (`/services/water-sanitation`)
- **Energy and Petrochemical Engineering** (`/services/energy-petrochemical`)
- **Environmental Planning** (`/services/environmental-planning`)

### Projects
- **Featured Projects** (`/projects/featured`)
- **Case Studies** (`/projects/case-studies`)

### Contact
- **Main Contact** (`/contact`)
- **FAQ** (`/contact/faq`)

### Legal
- **Privacy Policy** (`/legal/privacy`)
- **Terms & Conditions** (`/legal/terms`)
- **Accessibility** (`/legal/accessibility`)

## Navigation Implementation

### Desktop Navigation
- Primary navigation items displayed horizontally
- Two main service categories with mega menus:
  - Naval Services
  - Multi-Disciplinary Services
- Each service category expands to show relevant service pages
- Mobile-responsive design with hamburger menu

### Mobile Navigation
- Collapsible menu with all navigation items
- Nested structure for service categories
- Smooth transitions and animations
- Touch-friendly interface

## URL Structure
```
/
├── /about
├── /services/
│   ├── /naval-architect
│   ├── /marine-engineering
│   ├── /coastal-engineering
│   ├── /project-management
│   ├── /survey-inspection
│   ├── /consulting
│   ├── /roads-transportation
│   ├── /civil-structural
│   ├── /electrical
│   ├── /mechanical
│   ├── /water-sanitation
│   ├── /energy-petrochemical
│   └── /environmental-planning
├── /projects/
│   ├── /featured
│   └── /case-studies
├── /contact/
│   └── /faq
└── /legal/
    ├── /privacy
    ├── /terms
    └── /accessibility
```

## Navigation Data Structure
```typescript
interface NavigationItem {
  name: string;
  href?: string;
  children?: NavigationItem[];
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Naval',
    children: [
      { name: 'Naval Architecture', href: '/services/naval-architect' },
      { name: 'Marine Engineering', href: '/services/marine-engineering' },
      { name: 'Coastal Engineering', href: '/services/coastal-engineering' },
      { name: 'Project Management', href: '/services/project-management' },
      { name: 'Survey and Inspection', href: '/services/survey-inspection' },
      { name: 'Consulting', href: '/services/consulting' }
    ]
  },
  {
    name: 'Multi-Disciplinary',
    children: [
      { name: 'Roads and Transportation', href: '/services/roads-transportation' },
      { name: 'Civil and Structural Engineering', href: '/services/civil-structural' },
      { name: 'Electrical Engineering', href: '/services/electrical' },
      { name: 'Mechanical Engineering', href: '/services/mechanical' },
      { name: 'Water Sanitation', href: '/services/water-sanitation' },
      { name: 'Energy and Petrochemical Engineering', href: '/services/energy-petrochemical' },
      { name: 'Environmental Planning', href: '/services/environmental-planning' }
    ]
  },
  {
    name: 'Projects',
    children: [
      { name: 'Featured Projects', href: '/projects/featured' },
      { name: 'Case Studies', href: '/projects/case-studies' }
    ]
  },
  {
    name: 'Contact',
    children: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQ', href: '/contact/faq' }
    ]
  }
];
``` 