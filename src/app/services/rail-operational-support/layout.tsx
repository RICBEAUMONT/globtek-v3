import { Metadata } from 'next';
import RailOperationalSupportPage from './page';

export const metadata: Metadata = {
  title: 'Operational Support & Slot Optimisation | Globtek Engineering',
  description: 'Specialised engineering support enabling rail operators to plan and execute safe, reliable operations within TRIM‑allocated slots — strengthening system resilience and ensuring full regulatory compliance.',
  keywords: 'rail operational support, TRIM, slot optimisation, rail operations, infrastructure readiness, asset intelligence, rail engineering',
  openGraph: {
    title: 'Operational Support & Slot Optimisation | Globtek Engineering',
    description: 'Specialised engineering support enabling rail operators to plan and execute safe, reliable operations within TRIM‑allocated slots.',
    images: [
      {
        url: '/images/rails/rails_hero_image-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Rail Operational Support',
      },
    ],
  },
};

export default function RailOperationalSupportLayout() {
  return <RailOperationalSupportPage />;
}
