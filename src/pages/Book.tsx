import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import FlightIcon from '@mui/icons-material/Flight';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import InfoIcon from '@mui/icons-material/Info';
import { lodging, lodgingTypeLabels, areaLabels, type Lodging } from '@/data/lodging';
import { gettingToTaniti, gettingAroundTaniti } from '@/data/transport';

const transportIcons: Record<string, React.ReactNode> = {
  Plane: <FlightIcon />,
  Ship: <DirectionsBoatIcon />,
  Car: <DirectionsCarIcon />,
  Bus: <DirectionsBusIcon />,
  Bike: <DirectionsBikeIcon />,
  Footprints: <DirectionsWalkIcon />,
};

type AreaFilter = Lodging['area'] | 'all';

const steps = ['Getting There', 'Getting Around', 'Where to Stay'];

export function Book() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedArrival, setSelectedArrival] = useState<string | null>(null);
  const [needsRentalCar, setNeedsRentalCar] = useState<boolean | null>(null);
  const [areaFilter, setAreaFilter] = useState<AreaFilter>('all');

  const filteredLodging = lodging.filter((l) => {
    if (areaFilter !== 'all' && l.area !== areaFilter) return false;
    return true;
  });

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  return (
    <Box>
      {/* Header with Stepper */}
      <Box sx={{ background: 'linear-gradient(to bottom, rgba(14, 165, 233, 0.1), transparent)', py: 4 }}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight={700} textAlign="center" gutterBottom>
            Plan Your Trip
          </Typography>
          <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
            Let's plan your perfect Taniti adventure step by step.
          </Typography>

          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Container>
      </Box>

      {/* Step Content */}
      <Box sx={{ py: 4 }}>
        <Container maxWidth="md">
          {/* Step 1: Getting TO Taniti */}
          {activeStep === 0 && (
            <Box>
              <Typography variant="h5" fontWeight={600} textAlign="center" gutterBottom>
                How will you get to Taniti?
              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
                Most visitors arrive by air, but a cruise ship visits weekly.
              </Typography>

              <Grid container spacing={2}>
                {gettingToTaniti.map((option) => (
                  <Grid size={{ xs: 12, md: 6 }} key={option.id}>
                    <Card
                      onClick={() => setSelectedArrival(option.id)}
                      sx={{
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        border: 2,
                        borderColor: selectedArrival === option.id ? 'primary.main' : 'transparent',
                        '&:hover': { boxShadow: 4 },
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                          <Box
                            sx={{
                              width: 48,
                              height: 48,
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              bgcolor: selectedArrival === option.id ? 'primary.main' : 'primary.light',
                              color: selectedArrival === option.id ? 'white' : 'primary.main',
                            }}
                          >
                            {transportIcons[option.icon]}
                          </Box>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="subtitle1" fontWeight={600}>
                              {option.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {option.description}
                            </Typography>
                          </Box>
                          {selectedArrival === option.id && (
                            <CheckCircleIcon color="primary" />
                          )}
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  disabled={!selectedArrival}
                  endIcon={<ChevronRightIcon />}
                >
                  Continue
                </Button>
              </Box>
            </Box>
          )}

          {/* Step 2: Getting AROUND Taniti */}
          {activeStep === 1 && (
            <Box>
              <Typography variant="h5" fontWeight={600} textAlign="center" gutterBottom>
                Will you need a rental car?
              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
                Choose based on your planned activities.
              </Typography>

              <Grid container spacing={2} sx={{ mb: 4 }}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Card
                    onClick={() => setNeedsRentalCar(true)}
                    sx={{
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'all 0.2s',
                      border: 2,
                      borderColor: needsRentalCar === true ? 'primary.main' : 'transparent',
                      '&:hover': { boxShadow: 4 },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: needsRentalCar === true ? 'primary.main' : 'primary.light',
                          color: needsRentalCar === true ? 'white' : 'primary.main',
                          mx: 'auto',
                          mb: 2,
                        }}
                      >
                        <DirectionsCarIcon sx={{ fontSize: 32 }} />
                      </Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        Yes, I'll rent a car
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Best for exploring the whole island at your own pace
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Card
                    onClick={() => setNeedsRentalCar(false)}
                    sx={{
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'all 0.2s',
                      border: 2,
                      borderColor: needsRentalCar === false ? 'primary.main' : 'transparent',
                      '&:hover': { boxShadow: 4 },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: needsRentalCar === false ? 'primary.main' : 'warning.light',
                          color: needsRentalCar === false ? 'white' : 'warning.main',
                          mx: 'auto',
                          mb: 2,
                        }}
                      >
                        <DirectionsWalkIcon sx={{ fontSize: 32 }} />
                      </Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        No, I'll use alternatives
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Walking, buses, taxis, and bikes
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              {needsRentalCar === true && (
                <Alert severity="success" icon={<LightbulbIcon />} sx={{ mb: 3 }}>
                  <AlertTitle>Rental Car Tips</AlertTitle>
                  <ul style={{ margin: 0, paddingLeft: 20 }}>
                    <li>Rentals available near the airport from local agencies</li>
                    <li>Recommended for volcano visits and rainforest exploration</li>
                    <li>Roads are well-maintained throughout the island</li>
                    <li>Book in advance during peak season</li>
                  </ul>
                  <Button
                    size="small"
                    endIcon={<OpenInNewIcon />}
                    sx={{ mt: 1 }}
                  >
                    Browse Rental Cars
                  </Button>
                </Alert>
              )}

              {needsRentalCar === false && (
                <Alert severity="info" icon={<LightbulbIcon />} sx={{ mb: 3 }}>
                  <AlertTitle>Alternative Transportation</AlertTitle>
                  <Grid container spacing={2} sx={{ mt: 1 }}>
                    {gettingAroundTaniti.filter(t => t.id !== 'rental-car').map((option) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={option.id}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                          <Box
                            sx={{
                              width: 32,
                              height: 32,
                              borderRadius: '50%',
                              bgcolor: 'info.light',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'info.main',
                              flexShrink: 0,
                            }}
                          >
                            {transportIcons[option.icon]}
                          </Box>
                          <Box>
                            <Typography variant="body2" fontWeight={500}>{option.name}</Typography>
                            <Typography variant="caption" color="text.secondary">
                              {option.description.split('.')[0]}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mt: 2, pt: 2, borderTop: 1, borderColor: 'divider' }}>
                    <InfoIcon fontSize="small" />
                    <Typography variant="caption">
                      <strong>Tip:</strong> Taniti City and Merriton Landing are very walkable.
                      For volcano/rainforest trips, consider a private bus tour.
                    </Typography>
                  </Box>
                </Alert>
              )}

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                <Button variant="outlined" onClick={handleBack} startIcon={<ChevronLeftIcon />}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  disabled={needsRentalCar === null}
                  endIcon={<ChevronRightIcon />}
                >
                  Continue
                </Button>
              </Box>
            </Box>
          )}

          {/* Step 3: Where to Stay */}
          {activeStep === 2 && (
            <Box>
              <Typography variant="h5" fontWeight={600} textAlign="center" gutterBottom>
                Where would you like to stay?
              </Typography>
              <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mb: 3 }}>
                Choose an area based on your interests.
              </Typography>

              {/* Area Selection */}
              <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" sx={{ mb: 3, gap: 1 }}>
                <Chip
                  label="All Areas"
                  onClick={() => setAreaFilter('all')}
                  color={areaFilter === 'all' ? 'primary' : 'default'}
                  variant={areaFilter === 'all' ? 'filled' : 'outlined'}
                />
                {Object.entries(areaLabels).map(([value, label]) => (
                  <Chip
                    key={value}
                    label={label}
                    onClick={() => setAreaFilter(value as AreaFilter)}
                    color={areaFilter === value ? 'primary' : 'default'}
                    variant={areaFilter === value ? 'filled' : 'outlined'}
                  />
                ))}
              </Stack>

              {/* Area Tips */}
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Card
                    variant="outlined"
                    sx={{ border: areaFilter === 'taniti-city' ? 2 : 1, borderColor: areaFilter === 'taniti-city' ? 'primary.main' : 'divider' }}
                  >
                    <CardContent sx={{ p: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600}>Taniti City</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Main hub with beaches, museums, restaurants. Best for first-time visitors and families.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Card
                    variant="outlined"
                    sx={{ border: areaFilter === 'merriton-landing' ? 2 : 1, borderColor: areaFilter === 'merriton-landing' ? 'primary.main' : 'divider' }}
                  >
                    <CardContent sx={{ p: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600}>Merriton Landing</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Newer area with nightlife, modern hotels. Best for couples and nightlife seekers.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              {/* Lodging Grid */}
              <Grid container spacing={2}>
                {filteredLodging.map((place) => (
                  <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={place.id}>
                    <Card sx={{ '&:hover': { boxShadow: 4 }, transition: 'box-shadow 0.2s' }}>
                      <CardMedia
                        component="img"
                        height="120"
                        image={place.image}
                        alt={place.name}
                        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                          e.currentTarget.src = `https://placehold.co/400x200/0ea5e9/ffffff?text=${encodeURIComponent(place.name)}`;
                        }}
                        sx={{ position: 'relative' }}
                      />
                      <Chip
                        label={place.priceRange}
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 8,
                          right: 8,
                          bgcolor: 'rgba(255,255,255,0.9)',
                        }}
                      />
                      <CardContent sx={{ p: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.5 }}>
                          <Typography variant="subtitle2" fontWeight={600}>
                            {place.name}
                          </Typography>
                          <Chip label={lodgingTypeLabels[place.type]} size="small" variant="outlined" />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1.5, color: 'text.secondary' }}>
                          <LocationOnIcon sx={{ fontSize: 14 }} />
                          <Typography variant="caption">{areaLabels[place.area]}</Typography>
                        </Box>
                        <Button
                          variant="contained"
                          size="small"
                          fullWidth
                          endIcon={<OpenInNewIcon />}
                          href={place.bookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Check Availability
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {filteredLodging.length === 0 && (
                <Box sx={{ textAlign: 'center', py: 4 }}>
                  <Typography color="text.secondary" gutterBottom>
                    No lodging found in this area.
                  </Typography>
                  <Button variant="outlined" size="small" onClick={() => setAreaFilter('all')}>
                    Show All
                  </Button>
                </Box>
              )}

              <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 4 }}>
                <Button variant="outlined" onClick={handleBack} startIcon={<ChevronLeftIcon />}>
                  Back
                </Button>
              </Box>
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
}
