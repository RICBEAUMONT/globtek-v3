'use client';

import { useState, useEffect, useRef } from 'react';

const videos = [
  '/videos/homepage/3435043481-preview.mp4',
  '/videos/homepage/1093541759-preview.mp4',
  '/videos/homepage/3455463125-preview.mp4'
];

export default function HeroBackground() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // Initialize video refs array
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
        setIsTransitioning(false);
      }, 1000); // Wait for fade out before changing video
    }, 8000); // Change video every 8 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Play current video and pause others
    videoRefs.current.forEach((videoRef, index) => {
      if (videoRef) {
        if (index === currentVideoIndex) {
          videoRef.currentTime = 0; // Reset to beginning
          videoRef.play().catch(console.error);
        } else {
          videoRef.pause();
        }
      }
    });
  }, [currentVideoIndex]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {videos.map((video, index) => (
        <div
          key={video}
          className={`absolute inset-0 transition-all duration-[2000ms] ${
            index === currentVideoIndex
              ? 'opacity-100 scale-110'
              : 'opacity-0 scale-100'
          }`}
        >
          <video
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            src={video}
            className="object-cover w-full h-full"
            muted
            loop
            playsInline
            autoPlay={index === 0}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
    </div>
  );
} 