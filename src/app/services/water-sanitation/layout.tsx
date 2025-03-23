import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Water Sanitation Services | Globtek',
  description: 'Comprehensive water infrastructure development, wastewater treatment, and water management solutions for communities and industries.',
  openGraph: {
    title: 'Water Sanitation Services | Globtek',
    description: 'Comprehensive water infrastructure development, wastewater treatment, and water management solutions for communities and industries.',
    images: [
      {
        url: '/images/water-sanitation/hero.jpg',
        width: 1920,
        height: 1080,
        alt: 'Water Sanitation Services'
      }
    ]
  }
};

export default function WaterSanitationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 