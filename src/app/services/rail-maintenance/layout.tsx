import { Metadata } from 'next';
import RailMaintenancePage from './page';

export const metadata: Metadata = {
  title: 'Maintenance & Lifecycle Management | Globtek Engineering',
  description: 'An integrated maintenance and lifecycle offering that helps rail operators and infrastructure owners enhance asset reliability, safety, and lifecycle value — transitioning from reactive to condition-based and predictive approaches.',
  keywords: 'rail maintenance, lifecycle management, OPEX, CAPEX, condition-based maintenance, predictive maintenance, rail asset management',
  openGraph: {
    title: 'Maintenance & Lifecycle Management | Globtek Engineering',
    description: 'Integrated maintenance and lifecycle management for rail — from reactive to predictive approaches.',
    images: [
      {
        url: '/images/rails/rails_hero_image-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Rail Maintenance',
      },
    ],
  },
};

export default function RailMaintenanceLayout() {
  return <RailMaintenancePage />;
}
