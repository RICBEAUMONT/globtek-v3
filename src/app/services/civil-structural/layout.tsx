import { Metadata } from 'next';
import CivilStructuralPage from './page';

export const metadata: Metadata = {
  title: 'Civil & Structural Engineering | Globtek Engineering',
  description: 'Expert structural engineering services for buildings, bridges, and infrastructure projects using advanced BIM technology for optimal project visualization and delivery.',
  keywords: 'structural engineering, civil engineering, BIM, building design, bridge design, infrastructure engineering, construction engineering, structural analysis',
  openGraph: {
    title: 'Civil & Structural Engineering | Globtek Engineering',
    description: 'Expert structural engineering services for buildings, bridges, and infrastructure projects using advanced BIM technology for optimal project visualization and delivery.',
    images: [
      {
        url: '/images/services/civil-structural/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Civil & Structural Engineering Services'
      }
    ]
  }
};

export default function CivilStructuralLayout() {
  return <CivilStructuralPage />;
} 