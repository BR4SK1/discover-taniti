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

  return (
    <div className="relative w-full">
      <div className="relative h-[320px] sm:h-[380px] md:h-[420px] flex items-center justify-center">
        {/* Stacked photos behind */}
        {[2, 1].map((offset) => {
          const stackIndex = (currentIndex + offset) % slides.length;
          return (
            <div
              key={`stack-${offset}`}
              className="absolute bg-white p-2 sm:p-3 pb-10 sm:pb-12 shadow-lg"
              style={{
                transform: `rotate(${offset === 1 ? -4 : 6}deg) scale(${1 - offset * 0.05})`,
                zIndex: 10 - offset,
              }}
            >
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-muted overflow-hidden">
                <img
                  src={slides[stackIndex].image}
                  alt=""
                  className="w-full h-full object-cover opacity-60"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/400x400/94a3b8/ffffff?text=`;
                  }}
                />
              </div>
            </div>
          );
        })}

        {/* Main photo */}
        <a
          href={slides[currentIndex].link}
          className="relative bg-white p-2 sm:p-3 pb-10 sm:pb-12 shadow-2xl z-20 transition-transform duration-500 hover:scale-[1.02]"
          style={{ transform: 'rotate(-1deg)' }}
        >
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-muted overflow-hidden">
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].caption}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://placehold.co/400x400/0ea5e9/ffffff?text=${encodeURIComponent(slides[currentIndex].caption)}`;
              }}
            />
          </div>
          <p 
            className="absolute bottom-2 sm:bottom-3 left-0 right-0 text-center text-base sm:text-lg text-gray-700"
            style={{ fontFamily: 'var(--font-handwriting)' }}
          >
            {slides[currentIndex].caption}
          </p>
        </a>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
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
