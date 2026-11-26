import type { Metadata } from 'next';

const OG_IMAGE = '/images/marine/globtek-marine-header.jpg';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.globtek.co.za'),
  title: 'Lungisa Douse | Globtek Marine',
  description:
    'Lungisa Douse — Group COO, CEng & MRINA. Globtek Marine digital contact card.',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: '/card/marine',
    siteName: 'Globtek Marine',
    title: 'Lungisa Douse | Globtek Marine',
    description: 'Lungisa Douse, Group COO at Globtek Marine.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Globtek Marine',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lungisa Douse | Globtek Marine',
    description: 'Lungisa Douse, Group COO at Globtek Marine.',
    images: [OG_IMAGE],
  },
};

export default function MarineCardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
