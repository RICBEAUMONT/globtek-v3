import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Survey & Inspection Services | Globtek',
  description: 'Expert maritime survey and inspection services using advanced technology and industry best practices. Comprehensive vessel, equipment, and facility evaluations with detailed analyses and strategic recommendations.',
  keywords: 'maritime survey, vessel inspection, equipment inspection, safety audit, pre-purchase survey, maritime compliance, maritime safety, vessel condition assessment, maritime equipment evaluation, maritime facility inspection',
  openGraph: {
    title: 'Survey & Inspection Services | Globtek',
    description: 'Expert maritime survey and inspection services using advanced technology and industry best practices. Comprehensive vessel, equipment, and facility evaluations with detailed analyses and strategic recommendations.',
    images: [
      {
        url: '/images/services/survey-inspection/hero.jpg',
        width: 1920,
        height: 1080,
        alt: 'Globtek Survey & Inspection Services'
      }
    ]
  }
};

export default function SurveyInspectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 