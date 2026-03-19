import { Metadata } from 'next';
import RailInnovationPage from './page';

export const metadata: Metadata = {
  title: 'Innovation, Digital Rail & New Technology | Globtek Engineering',
  description: 'Advanced rail technology solutions focused on improving infrastructure performance, resilience, and lifecycle efficiency — applying global best practice through localised research, digital engineering, and strong technical partnerships.',
  keywords: 'rail innovation, digital rail, USP, UBM, under sleeper pads, under ballast mats, rail technology, predictive maintenance, asset intelligence',
  openGraph: {
    title: 'Innovation, Digital Rail & New Technology | Globtek Engineering',
    description: 'Advanced rail technology solutions — digital monitoring, data analytics, and future-ready infrastructure.',
    images: [
      {
        url: '/images/rails/rails_hero_image-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Rail Innovation',
      },
    ],
  },
};

export default function RailInnovationLayout() {
  return <RailInnovationPage />;
}
