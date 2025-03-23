import { Metadata } from 'next';
import MarineEngineeringPage from './page';

export const metadata: Metadata = {
  title: 'Marine Engineering Services | Globtek Engineering',
  description: 'Expert marine engineering services for offshore structures, vessels, and maritime infrastructure. From oil rigs to offshore wind farms, we deliver innovative solutions.',
  keywords: 'marine engineering, offshore structures, feasibility studies, structural analysis, stability assessment, regulatory compliance, maritime engineering',
  openGraph: {
    title: 'Marine Engineering Services | Globtek Engineering',
    description: 'Expert marine engineering services for offshore structures, vessels, and maritime infrastructure.',
    images: [
      {
        url: '/images/services/marine-engineering/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Marine Engineering Services'
      }
    ]
  }
};

export default function MarineEngineeringLayout() {
  return <MarineEngineeringPage />;
} 