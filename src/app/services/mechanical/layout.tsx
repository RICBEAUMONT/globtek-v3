import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mechanical Engineering Services | Globtek Engineering',
  description: 'Advanced mechanical engineering solutions including petrochemical installations, water systems, fire protection, and HVAC systems. Utilizing cutting-edge 3D scanning and BIM technology.',
  openGraph: {
    title: 'Mechanical Engineering Services | Globtek Engineering',
    description: 'Advanced mechanical engineering solutions including petrochemical installations, water systems, fire protection, and HVAC systems. Utilizing cutting-edge 3D scanning and BIM technology.',
    images: [
      {
        url: '/images/mechanical/hero.jpg',
        width: 1920,
        height: 1080,
        alt: 'Globtek Mechanical Engineering Services'
      }
    ]
  }
};

export default function MechanicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 