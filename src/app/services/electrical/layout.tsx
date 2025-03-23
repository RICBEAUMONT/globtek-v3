import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Power Transmission and Distribution | Globtek',
  description: 'Expert electrical engineering services for power transmission, distribution systems, and substation design. Our specialists address all aspects of power infrastructure development.',
  openGraph: {
    title: 'Power Transmission and Distribution | Globtek',
    description: 'Expert electrical engineering services for power transmission, distribution systems, and substation design. Our specialists address all aspects of power infrastructure development.',
    images: [
      {
        url: '/images/electrical/hero.jpg',
        width: 1920,
        height: 1080,
        alt: 'Globtek Electrical Engineering Services'
      }
    ]
  }
};

export default function ElectricalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 