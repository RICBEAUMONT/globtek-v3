import { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Our Projects | Globtek Marine Engineering',
  description: 'Explore our portfolio of successful marine engineering projects. Each project showcases our commitment to excellence, innovation, and delivering exceptional results for our clients.',
  openGraph: {
    title: 'Our Projects | Globtek Marine Engineering',
    description: 'Explore our portfolio of successful marine engineering projects. Each project showcases our commitment to excellence, innovation, and delivering exceptional results for our clients.',
    images: [
      {
        url: '/images/projects/open-ocean-870.jpg',
        width: 1920,
        height: 1080,
        alt: 'Globtek Marine Engineering Projects'
      }
    ]
  }
};

export default function ProjectsPage() {
  return <ProjectsClient />;
} 