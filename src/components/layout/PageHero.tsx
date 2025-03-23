'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ChevronDown } from 'lucide-react';
import Container from './Container';
import { cn } from '@/lib/utils';
import { useEffect, useState, useCallback, useMemo } from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  images?: string[];
  slideInterval?: number;
  breadcrumbs?: {
    name: string;
    href: string;
  }[];
  className?: string;
  imageClassName?: string;
  overlayOpacity?: 'light' | 'medium' | 'dark';
  accentColor?: string;
  showScrollIndicator?: boolean;
  align?: 'left' | 'center';
  children?: React.ReactNode;
}

export default function PageHero({
  title,
  subtitle,
  description,
  image,
  images = [],
  slideInterval = 5000,
  breadcrumbs,
  className,
  imageClassName,
  overlayOpacity = 'medium',
  accentColor,
  showScrollIndicator = false,
  align = 'left',
  children,
}: PageHeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const allImages = useMemo(() => {
    const imageArray = [];
    if (image) imageArray.push(image);
    if (images && images.length > 0) imageArray.push(...images);
    return imageArray;
  }, [image, images]);

  // Handle image load success
  const handleImageLoad = useCallback((src: string) => {
    setLoadedImages(prev => [...prev, src]);
    setImageErrors(prev => {
      const newErrors = new Set(prev);
      newErrors.delete(src);
      return newErrors;
    });
  }, []);

  // Handle image load error
  const handleImageError = useCallback((src: string) => {
    console.error(`Failed to load image: ${src}`);
    setImageErrors(prev => new Set([...prev, src]));
  }, []);

  // Safely transition to next image
  const transitionToImage = useCallback((index: number) => {
    if (!loadedImages.includes(allImages[index]) || imageErrors.has(allImages[index])) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setIsTransitioning(false);
    }, 700);
  }, [allImages, loadedImages, imageErrors]);

  // Handle image rotation
  useEffect(() => {
    if (allImages.length <= 1) return;
    if (loadedImages.length === 0) return;

    const timer = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % allImages.length;
      transitionToImage(nextIndex);
    }, slideInterval);

    return () => clearInterval(timer);
  }, [allImages.length, slideInterval, currentImageIndex, loadedImages.length, transitionToImage]);

  // Determine overlay opacity class
  const overlayClass = {
    light: 'from-gray-900/50 to-gray-900/30',
    medium: 'from-gray-900/70 to-gray-900/50',
    dark: 'from-gray-900/90 to-gray-900/70',
  }[overlayOpacity];

  // Handle smooth scroll
  const handleScroll = () => {
    const nextSection = document.querySelector('main > div:nth-child(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrevImage = useCallback(() => {
    if (currentImageIndex > 0) {
      transitionToImage(currentImageIndex - 1);
    }
  }, [currentImageIndex, transitionToImage]);

  const handleNextImage = useCallback(() => {
    if (currentImageIndex < allImages.length - 1) {
      transitionToImage(currentImageIndex + 1);
    }
  }, [currentImageIndex, transitionToImage, allImages.length]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrevImage();
    } else if (e.key === 'ArrowRight') {
      handleNextImage();
    }
  }, [handlePrevImage, handleNextImage]);

  return (
    <div className={cn(
      "relative h-[60vh] min-h-[400px] bg-gray-900 overflow-hidden",
      "group/hero",
      className
    )}>
      {/* Background Images */}
      {allImages.map((img, index) => (
        <div
          key={img}
          className={cn(
            "absolute inset-0 transition-opacity duration-700",
            loadedImages.includes(img) ? (
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            ) : "opacity-0",
            isTransitioning && index === currentImageIndex && "opacity-50"
          )}
        >
          <Image
            src={img}
            alt={`${title} background ${index + 1}`}
            fill
            className={cn(
              "object-cover brightness-50 transition-all duration-700",
              "group-hover/hero:scale-105",
              imageClassName
            )}
            priority={index === 0}
            onLoad={() => handleImageLoad(img)}
            onError={() => handleImageError(img)}
          />
        </div>
      ))}

      {/* Image Indicators */}
      {allImages.length > 1 && loadedImages.length > 0 && (
        <div className={cn(
          "absolute bottom-8 right-8 z-10",
          "flex items-center gap-2"
        )}>
          {allImages.map((img, index) => (
            <button
              key={index}
              onClick={() => transitionToImage(index)}
              disabled={!loadedImages.includes(img)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                !loadedImages.includes(img) && "opacity-50 cursor-not-allowed",
                index === currentImageIndex
                  ? "bg-white w-6"
                  : "bg-white/50 hover:bg-white/75"
              )}
              aria-label={`Show image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Gradient Overlay */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-b",
        overlayClass,
        accentColor && `mix-blend-overlay`
      )} />

      {accentColor && (
        <div 
          className="absolute inset-0 opacity-20 mix-blend-multiply transition-opacity duration-700"
          style={{ backgroundColor: accentColor }}
        />
      )}

      {/* Content */}
      <Container className={cn(
        "relative h-full flex flex-col",
        align === 'center' ? 'items-center' : 'items-start',
        "justify-center pt-16 md:pt-20"
      )}>
        <div className={cn(
          "max-w-3xl",
          align === 'center' && "text-center"
        )}>
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className={cn(
              "flex items-center gap-2 text-gray-300 mb-6 text-sm",
              align === 'center' && "justify-center"
            )}>
              {breadcrumbs.map((item, index) => (
                <div key={item.href} className="flex items-center">
                  {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </nav>
          )}

          {/* Subtitle */}
          {subtitle && (
            <div className={cn(
              "text-sm uppercase tracking-wider mb-4",
              "text-[#e43d30] hover:text-[#e8645a] transition-colors duration-300"
            )}>
              {subtitle}
            </div>
          )}

          {/* Title */}
          <h1 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6",
            "tracking-tight leading-tight"
          )}>
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}

          {/* Optional additional content */}
          {children}
        </div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <button
            onClick={handleScroll}
            className={cn(
              "absolute bottom-8 left-1/2 -translate-x-1/2",
              "flex flex-col items-center gap-2 text-gray-400",
              "hover:text-white transition-colors cursor-pointer",
              "animate-bounce"
            )}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </button>
        )}
      </Container>
    </div>
  );
} 