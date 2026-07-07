import { notFound } from 'next/navigation';
import DigitalBusinessCard from '@/components/card/DigitalBusinessCard';
import {
  getCardProfileBySlug,
  teamCardProfiles,
} from '@/data/rail-card-profiles';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return teamCardProfiles.map((profile) => ({ slug: profile.slug }));
}

export default async function TeamCardPage({ params }: PageProps) {
  const { slug } = await params;
  const profile = getCardProfileBySlug(slug);

  if (!profile || profile.isCompany) {
    notFound();
  }

  return <DigitalBusinessCard profile={profile} />;
}
