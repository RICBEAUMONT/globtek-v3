import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/Providers";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Globtek | Professional Engineering Solutions",
  description: "Globtek provides innovative engineering solutions with expertise in design, development, and implementation of cutting-edge technologies.",
  keywords: "engineering, professional services, technology solutions, innovation, design",
};

const _navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    children: [
      { 
        name: 'Naval Architecture', 
        href: '/services/naval-architect',
        description: 'Innovative vessel design and marine engineering solutions.',
        imageUrl: '/images/services/naval-design/menu.jpg'
      },
      // ... existing services ...
    ]
  },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' }
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </Providers>
      </body>
    </html>
  );
} 