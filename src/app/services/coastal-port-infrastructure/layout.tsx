import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coastal & Port Infrastructure Engineering | Globtek',
  description: 'Comprehensive coastal and port infrastructure engineering solutions. From port planning to marine structure design, we deliver resilient maritime infrastructure.',
  keywords: 'coastal engineering, port infrastructure, marine structures, coastal protection, dredging, port planning',
};

export default function CoastalPortInfrastructureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 