import { Metadata } from 'next';
import RoadsTransportationPage from './page';

export const metadata: Metadata = {
  title: 'Roads & Transportation Engineering Services | Globtek Engineering',
  description: 'Expert transportation engineering services including road network design, rail infrastructure development, and urban mobility solutions. Transform your transportation infrastructure with our innovative engineering solutions.',
  keywords: 'transportation engineering, road network design, rail infrastructure, urban mobility, transportation planning, traffic engineering, highway design, railway engineering, transportation consulting',
  openGraph: {
    title: 'Roads & Transportation Engineering Services | Globtek Engineering',
    description: 'Expert transportation engineering services including road network design, rail infrastructure development, and urban mobility solutions.',
    images: [
      {
        url: '/images/services/roads-transportations/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Roads & Transportation Engineering Services'
      }
    ]
  }
};

export default function RoadsTransportationLayout() {
  return <RoadsTransportationPage />;
} 