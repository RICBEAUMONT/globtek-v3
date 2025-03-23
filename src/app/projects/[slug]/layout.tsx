import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Details | Globtek Marine Engineering',
  description: 'Explore our portfolio of successful maritime engineering projects and see how we\'ve helped clients achieve their goals.',
  openGraph: {
    title: 'Project Details | Globtek Marine Engineering',
    description: 'Explore our portfolio of successful maritime engineering projects and see how we\'ve helped clients achieve their goals.',
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

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 