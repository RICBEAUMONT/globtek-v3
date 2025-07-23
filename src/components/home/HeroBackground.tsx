'use client';

import { useState, useEffect, useRef } from 'react';

const videos = [
  '/videos/homepage/shutterstock_1106956765.mov',
  '/videos/homepage/shutterstock_1106956765 copy.mov'
];

export default function HeroBackground() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // Initialize video refs array
    videoRefs.current = videoRefs.current.slice(0, videos.length);
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
          videoRef.currentTime = 0; // Reset other videos
        }
      }
    });
  }, [currentVideoIndex]);

  const handleTimeUpdate = (videoIndex: number) => {
    const video = videoRefs.current[videoIndex];
    if (video && videoIndex === currentVideoIndex) {
      const timeUntilEnd = video.duration - video.currentTime;
      const fadeStartTime = 1; // Start transition 1 second before end
      
      if (timeUntilEnd <= fadeStartTime) {
        // Switch to next video
        const nextIndex = (currentVideoIndex + 1) % videos.length;
        setCurrentVideoIndex(nextIndex);
      }
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {videos.map((video, index) => (
        <div
          key={video}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <video
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            src={video}
            className="object-cover w-full h-full"
            muted
            playsInline
            autoPlay={index === 0}
            onTimeUpdate={() => handleTimeUpdate(index)}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
    </div>
  );
} 