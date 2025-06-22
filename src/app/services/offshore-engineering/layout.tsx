import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Offshore Engineering Services | Globtek',
  description: 'Specialized offshore engineering solutions for oil rigs, wind farms, and marine structures. Expert design and analysis for offshore environments.',
  keywords: 'offshore engineering, oil rigs, wind farms, marine structures, offshore platforms, subsea engineering',
};

export default function OffshoreEngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 