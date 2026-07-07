'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const HERO_IMAGES = [
  '/images/rails/rails_hero_image-1.jpg',
  '/images/rails/rails_hero_image-2.jpg',
  '/images/rails/rails_hero_image-3.jpg',
];

const INTERVAL_MS = 5500;

export default function CardRailHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % HERO_IMAGES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#181818]">
      <div className="absolute inset-0 motion-reduce:hidden">
        {HERO_IMAGES.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="(max-width: 640px) 100vw, 520px"
            className={`object-cover object-center grayscale-[15%] brightness-[0.72] transition-opacity duration-[1200ms] ease-out ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      <Image
        src={HERO_IMAGES[0]}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, 520px"
        className="hidden object-cover object-center grayscale-[15%] brightness-[0.72] motion-reduce:block"
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/90 via-[#0a0a0a]/25 to-[#0a0a0a]"
        aria-hidden
      />
    </div>
  );
}
