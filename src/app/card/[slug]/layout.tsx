import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCardProfileBySlug, getCardUrl } from '@/data/rail-card-profiles';

const OG_IMAGE = '/images/rails/globtek-rail-og.jpg';

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = getCardProfileBySlug(slug);

  if (!profile || profile.isCompany) {
    return { title: 'Not Found' };
  }

  const cardUrl = getCardUrl(slug);

  return {
    metadataBase: new URL('https://www.globtek.co.za'),
    title: `${profile.name} | Globtek Rail`,
    description: `${profile.name} — ${profile.title}. ${profile.phone}`,
    robots: { index: true, follow: true },
    openGraph: {
      type: 'website',
      url: cardUrl,
      siteName: 'Globtek Rail',
      title: `${profile.name} | Globtek Rail`,
      description: `${profile.name}, ${profile.title} at Globtek Rail.`,
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
      title: `${profile.name} | Globtek Rail`,
      description: `${profile.name}, ${profile.title} at Globtek Rail.`,
      images: [OG_IMAGE],
    },
  };
}

export default async function TeamCardLayout({ children, params }: LayoutProps) {
  const { slug } = await params;
  const profile = getCardProfileBySlug(slug);

  if (!profile || profile.isCompany) {
    notFound();
  }

  return children;
}
