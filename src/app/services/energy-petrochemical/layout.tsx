import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Energy & Petrochemical Services | Globtek',
  description: 'Comprehensive energy generation and petrochemical engineering services, from traditional to renewable energy solutions.',
  openGraph: {
    title: 'Energy & Petrochemical Services | Globtek',
    description: 'Comprehensive energy generation and petrochemical engineering services, from traditional to renewable energy solutions.',
    images: [
      {
        url: '/images/energy-petrochemical/hero.jpg',
        width: 1920,
        height: 1080,
        alt: 'Energy & Petrochemical Services'
      }
    ]
  }
};

export default function EnergyPetrochemicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 