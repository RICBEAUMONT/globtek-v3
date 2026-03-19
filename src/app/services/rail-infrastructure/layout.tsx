import { Metadata } from 'next';
import RailInfrastructurePage from './page';

export const metadata: Metadata = {
  title: 'Infrastructure Inspection & Asset Intelligence | Globtek Engineering',
  description:
    'Integrated infrastructure inspection and asset intelligence services that establish an accurate condition, performance, and risk profile across the full engineering value chain.',
  keywords:
    'rail infrastructure inspection, asset intelligence, on-track machine, OTM, GPR, ultrasonic, data analytics, RUL, risk assessment',
  openGraph: {
    title: 'Infrastructure Inspection & Asset Intelligence | Globtek Engineering',
    description:
      'Integrated infrastructure inspection and asset intelligence services that establish an accurate condition, performance, and risk profile across the full engineering value chain.',
    images: [
      {
        url: '/images/rails/rails_hero_image-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Infrastructure Inspection & Asset Intelligence',
      },
    ],
  },
};

export default function RailInfrastructureLayout() {
  return <RailInfrastructurePage />;
}
