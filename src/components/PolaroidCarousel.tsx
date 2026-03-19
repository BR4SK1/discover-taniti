import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface PolaroidSlide {
  image: string;
  caption: string;
  link: string;
}

const slides: PolaroidSlide[] = [
  { image: '/images/beach.webm', caption: 'Yellow Leaf Bay Beaches', link: '/experiences' },
  { image: '/images/rainforest.jpg', caption: 'Rainforest Adventures', link: '/experiences' },
  { image: '/images/volcano.webp', caption: 'Volcano Exploration', link: '/experiences' },
  { image: '/images/zipline.jpg', caption: 'Zip-line Thrills', link: '/experiences' },
  { image: '/images/snorkeling.webp', caption: 'Underwater Wonders', link: '/experiences' },
  { image: '/images/city.webp', caption: 'Taniti City Culture', link: '/experiences' },
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

  const polaroidStyles = {
    bgcolor: 'white',
    p: { xs: 1, sm: 1.5 },
    pb: { xs: 5, sm: 6 },
    boxShadow: 3,
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', maxWidth: 700 }}>
      <Box
        sx={{
          position: 'relative',
          height: { xs: 350, sm: 420, lg: 500 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Stacked photos behind */}
        {[2, 1].map((offset) => {
          const stackIndex = (currentIndex + offset) % slides.length;
          return (
            <Box
              key={`stack-${offset}`}
              sx={{
                ...polaroidStyles,
                position: 'absolute',
                transform: `rotate(${offset === 1 ? -4 : 6}deg) scale(${1 - offset * 0.05})`,
                zIndex: 10 - offset,
              }}
            >
              <Box
                sx={{
                  width: { xs: 200, sm: 260, lg: 360 },
                  height: { xs: 200, sm: 260, lg: 360 },
                  bgcolor: 'grey.200',
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src={slides[stackIndex].image}
                  alt=""
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.src = `https://placehold.co/400x400/94a3b8/ffffff?text=`;
                  }}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.6,
                  }}
                />
              </Box>
            </Box>
          );
        })}

        {/* Main photo */}
        <Box
          component={RouterLink}
          to={slides[currentIndex].link}
          sx={{
            ...polaroidStyles,
            position: 'relative',
            transform: 'rotate(-1deg)',
            zIndex: 20,
            textDecoration: 'none',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'rotate(-1deg) scale(1.02)',
            },
          }}
        >
          <Box
            sx={{
              width: { xs: 220, sm: 280, lg: 380 },
              height: { xs: 220, sm: 280, lg: 380 },
              bgcolor: 'grey.200',
              overflow: 'hidden',
            }}
          >
            <Box
              component="img"
              src={slides[currentIndex].image}
              alt={slides[currentIndex].caption}
              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                e.currentTarget.src = `https://placehold.co/400x400/0ea5e9/ffffff?text=${encodeURIComponent(slides[currentIndex].caption)}`;
              }}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
          <Typography
            sx={{
              position: 'absolute',
              bottom: { xs: 8, sm: 12 },
              left: 0,
              right: 0,
              textAlign: 'center',
              fontFamily: '"Caveat", cursive',
              fontSize: { xs: '1rem', sm: '1.25rem' },
              color: 'grey.700',
            }}
          >
            {slides[currentIndex].caption}
          </Typography>
        </Box>
      </Box>

      {/* Navigation Buttons */}
      <IconButton
        onClick={goToPrevious}
        sx={{
          position: 'absolute',
          left: { xs: 0, sm: 16 },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 30,
          bgcolor: 'rgba(255,255,255,0.9)',
          '&:hover': { bgcolor: 'white' },
          boxShadow: 2,
        }}
        aria-label="Previous slide"
      >
        <ChevronLeftIcon />
      </IconButton>
      <IconButton
        onClick={goToNext}
        sx={{
          position: 'absolute',
          right: { xs: 0, sm: 16 },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 30,
          bgcolor: 'rgba(255,255,255,0.9)',
          '&:hover': { bgcolor: 'white' },
          boxShadow: 2,
        }}
        aria-label="Next slide"
      >
        <ChevronRightIcon />
      </IconButton>

      {/* Dots */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 3 }}>
        {slides.map((_, index) => (
          <Box
            key={index}
            component="button"
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentIndex(index);
            }}
            sx={{
              width: index === currentIndex ? 24 : 8,
              height: 8,
              borderRadius: 4,
              border: 'none',
              bgcolor: index === currentIndex ? 'primary.main' : 'grey.300',
              cursor: 'pointer',
              transition: 'all 0.2s',
              '&:hover': {
                bgcolor: index === currentIndex ? 'primary.main' : 'grey.400',
              },
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </Box>
    </Box>
  );
}
