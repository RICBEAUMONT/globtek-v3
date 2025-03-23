'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/home/hero/hero-1.jpg',
  '/images/home/hero/hero-2.jpg',
  '/images/home/hero/hero-3.jpg',
  '/images/home/hero/hero-4.jpg'
];

export default function HeroBackground() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setIsTransitioning(false);
      }, 1000); // Wait for fade out before changing image
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-all duration-[2000ms] ${
            index === currentImageIndex
              ? 'opacity-100 scale-110'
              : 'opacity-0 scale-100'
          }`}
        >
          <Image
            src={img}
            alt={`Background ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
    </div>
  );
} 