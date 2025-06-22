import { Metadata } from 'next';
import RailDesignPage from './page';

export const metadata: Metadata = {
  title: 'Rail Design - Technical Capabilities | Globtek Engineering',
  description: 'Specialized rail design and technical capabilities for high-speed, freight, and urban transit systems.',
  keywords: 'rail design, railway engineering, transit design, rail systems, technical capabilities, rail consulting, transportation engineering',
  openGraph: {
    title: 'Rail Design - Technical Capabilities | Globtek Engineering',
    description: 'Specialized rail design and technical capabilities for high-speed, freight, and urban transit systems.',
    images: [
      {
        url: '/images/services/rail-design/hero.jpg', // Placeholder image
        width: 1200,
        height: 630,
        alt: 'Rail Design Services'
      }
    ]
  }
};

export default function RailDesignLayout() {
  return <RailDesignPage />;
} 