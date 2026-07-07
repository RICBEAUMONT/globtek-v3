import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Globtek Rail | Contact',
  description:
    'Globtek Rail digital contact card — rail infrastructure engineering, phone, email, and services.',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Globtek Rail | Contact',
    description: 'Rail infrastructure design, inspection & lifecycle engineering.',
    images: [{ url: '/images/rails/globtek-rail-logo-transparent.png' }],
  },
};

export default function CardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
