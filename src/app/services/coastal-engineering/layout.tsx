import { Metadata } from 'next';
import CoastalEngineeringPage from './page';

export const metadata: Metadata = {
  title: 'Coastal Engineering Services | Globtek Engineering',
  description: 'Expert coastal engineering services for shoreline protection, beach nourishment, and coastal infrastructure management. Our team specializes in sustainable solutions for coastal challenges.',
  keywords: 'coastal engineering, shoreline protection, beach nourishment, breakwaters, seawalls, coastal management, environmental protection, coastal infrastructure',
  openGraph: {
    title: 'Coastal Engineering Services | Globtek Engineering',
    description: 'Expert coastal engineering services for shoreline protection, beach nourishment, and coastal infrastructure management.',
    images: [
      {
        url: '/images/services/coastal-engineering/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Coastal Engineering Services'
      }
    ]
  }
};

export default function CoastalEngineeringLayout() {
  return <CoastalEngineeringPage />;
} 