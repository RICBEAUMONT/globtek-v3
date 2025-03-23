import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Environmental Planning Services | Globtek',
  description: 'Comprehensive environmental and planning services for sustainable development and climate change adaptation.',
  openGraph: {
    title: 'Environmental Planning Services | Globtek',
    description: 'Comprehensive environmental and planning services for sustainable development and climate change adaptation.',
    images: [
      {
        url: '/images/environmental-planning/hero.jpg',
        width: 1920,
        height: 1080,
        alt: 'Environmental Planning Services'
      }
    ]
  }
};

interface EnvironmentalPlanningLayoutProps {
  children: React.ReactNode;
}

export default function EnvironmentalPlanningLayout({
  children,
}: EnvironmentalPlanningLayoutProps) {
  return <>{children}</>;
} 