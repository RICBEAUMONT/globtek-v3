'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  slideInterval?: number;
  breadcrumbs?: { name: string; href: string; }[];
  overlayOpacity?: string;
  accentColor?: string;
  align?: string;
}

export default function PageHero({ title, subtitle, description, images }: PageHeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`${title} - Image ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            <h2 className="text-xl sm:text-2xl text-white/90 mb-6">
              {subtitle}
            </h2>
            <p className="text-lg text-white/80">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 