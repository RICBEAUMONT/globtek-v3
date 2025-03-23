import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Strategic Maritime Consulting Services | Globtek',
  description: 'Expert maritime consulting services providing guidance on regulations, environmental impact, and operational efficiency. Our team helps clients maintain a competitive advantage in the maritime sector.',
  openGraph: {
    title: 'Strategic Maritime Consulting Services | Globtek',
    description: 'Expert maritime consulting services providing guidance on regulations, environmental impact, and operational efficiency. Our team helps clients maintain a competitive advantage in the maritime sector.',
    images: [
      {
        url: '/images/services/consulting/hero.jpg',
        width: 1920,
        height: 1080,
        alt: 'Globtek Maritime Consulting Services'
      }
    ]
  }
};

export default function ConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 