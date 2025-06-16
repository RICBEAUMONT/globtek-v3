import { Metadata } from 'next';
import NavalArchitectPage from './page';

export const metadata: Metadata = {
  title: 'Naval Architecture Services | Globtek Engineering',
  description: 'Specialized naval architecture and marine engineering services for commercial ships, military crafts, and recreational boats.',
  keywords: 'naval architecture, marine engineering, vessel design, ship design, naval consulting, maritime engineering, naval architecture services',
  openGraph: {
    title: 'Naval Architecture Services | Globtek Engineering',
    description: 'Specialized naval architecture and marine engineering services for commercial ships, military crafts, and recreational boats.',
    images: [
      {
        url: '/images/services/naval-design/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Naval Architecture Services'
      }
    ]
  }
};

export default function NavalArchitectLayout() {
  return <NavalArchitectPage />;
} 