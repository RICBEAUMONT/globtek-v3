import type { Metadata } from 'next';

const OG_IMAGE = '/images/rails/globtek-rail-og.jpg';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.globtek.co.za'),
  title: 'Globtek Rail | Contact',
  description:
    'Globtek Rail digital contact card — rail infrastructure engineering, phone, email, and services.',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: '/card',
    siteName: 'Globtek Rail',
    title: 'Globtek Rail | Contact',
    description: 'Rail infrastructure design, inspection & lifecycle engineering.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Globtek Rail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Globtek Rail | Contact',
    description: 'Rail infrastructure design, inspection & lifecycle engineering.',
    images: [OG_IMAGE],
  },
};

export default function CardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
