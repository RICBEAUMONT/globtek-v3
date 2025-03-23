'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';

export default function ProjectGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Handle modal open
  const openModal = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  // Handle modal close
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <div className="mt-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold">Project Gallery</h2>
          <div className="flex items-center gap-2">
            <button 
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 hover:border-[#e43d30] hover:text-[#e43d30] transition-colors"
              onClick={() => {
                const gallery = document.getElementById('gallery');
                if (gallery) gallery.scrollLeft -= 450;
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 hover:border-[#e43d30] hover:text-[#e43d30] transition-colors"
              onClick={() => {
                const gallery = document.getElementById('gallery');
                if (gallery) gallery.scrollLeft += 450;
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div 
          id="gallery" 
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ 
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {[1, 2, 3, 4].map((_, index) => (
            <div 
              key={index}
              className="relative flex-none w-[450px] h-[320px] rounded-2xl overflow-hidden snap-start cursor-pointer group"
              onClick={() => openModal(index)}
            >
              <Image
                src={`/images/services/naval-design/gallery-${index + 1}.jpg`}
                alt={`Naval Design Project ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-medium text-lg">Project {index + 1}</h3>
                  <p className="text-white/80 text-sm">Naval Design Excellence</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={closeModal}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-[#e43d30] transition-colors"
            onClick={closeModal}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div 
            className="relative w-full max-w-7xl aspect-[16/9] rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/images/services/naval-design/gallery-${selectedImage + 1}.jpg`}
              alt={`Naval Design Project ${selectedImage + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
          </div>

          {/* Navigation buttons */}
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-all"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage > 0 ? selectedImage - 1 : 3);
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-all"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(selectedImage < 3 ? selectedImage + 1 : 0);
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
} 