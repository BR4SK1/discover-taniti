import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PolaroidSlide {
  image: string;
  caption: string;
  link: string;
}

const slides: PolaroidSlide[] = [
  { image: '/images/beach.jpg', caption: 'Yellow Leaf Bay Beaches', link: '/experiences' },
  { image: '/images/rainforest.jpg', caption: 'Rainforest Adventures', link: '/experiences' },
  { image: '/images/volcano.jpg', caption: 'Volcano Exploration', link: '/experiences' },
  { image: '/images/zipline.jpg', caption: 'Zip-line Thrills', link: '/experiences' },
  { image: '/images/snorkeling.jpg', caption: 'Underwater Wonders', link: '/experiences' },
  { image: '/images/city.jpg', caption: 'Taniti City Culture', link: '/experiences' },
];

export function PolaroidCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const getRotation = (index: number) => {
    const rotations = [-3, 2, -2, 3, -1, 2];
    return rotations[index % rotations.length];
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-8">
      <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
        {slides.map((slide, index) => {
          const offset = index - currentIndex;
          const isActive = index === currentIndex;
          const isPrev = offset === -1 || (currentIndex === 0 && index === slides.length - 1);
          const isNext = offset === 1 || (currentIndex === slides.length - 1 && index === 0);
          const isVisible = isActive || isPrev || isNext;

          if (!isVisible) return null;

          return (
            <a
              key={index}
              href={slide.link}
              className={cn(
                'absolute transition-all duration-500 ease-out cursor-pointer',
                'bg-white p-3 pb-12 shadow-xl',
                isActive ? 'z-20 scale-100' : 'z-10 scale-90 opacity-70',
                isPrev && '-translate-x-32 md:-translate-x-48',
                isNext && 'translate-x-32 md:translate-x-48'
              )}
              style={{
                transform: `${isPrev ? 'translateX(-8rem)' : isNext ? 'translateX(8rem)' : ''} rotate(${getRotation(index)}deg) ${isActive ? 'scale(1)' : 'scale(0.9)'}`,
              }}
            >
              <div className="w-56 h-56 md:w-72 md:h-72 bg-muted overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.caption}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/400x400/0ea5e9/ffffff?text=${encodeURIComponent(slide.caption)}`;
                  }}
                />
              </div>
              <p className="absolute bottom-3 left-0 right-0 text-center text-lg text-gray-700" style={{ fontFamily: 'var(--font-handwriting)' }}>
                {slide.caption}
              </p>
            </a>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-foreground" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-foreground" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentIndex(index);
            }}
            className={cn(
              'w-2 h-2 rounded-full transition-all',
              index === currentIndex ? 'bg-primary w-6' : 'bg-gray-300 hover:bg-gray-400'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
