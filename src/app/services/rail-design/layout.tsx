import { Metadata } from 'next';
import RailDesignPage from './page';

export const metadata: Metadata = {
  title: 'Rail Design & Engineering | Globtek Engineering',
  description: 'Delivering integrated rail engineering solutions across the full project lifecycle, with designs optimised for operational performance, constructability, safety, and long‑term asset resilience.',
  keywords: 'rail design, railway engineering, permanent way, track engineering, rail systems, rail consulting, transportation engineering',
  openGraph: {
    title: 'Rail Design & Engineering | Globtek Engineering',
    description: 'Delivering integrated rail engineering solutions across the full project lifecycle, with designs optimised for operational performance, constructability, safety, and long‑term asset resilience.',
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