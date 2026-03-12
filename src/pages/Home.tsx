import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WavesIcon from '@mui/icons-material/Waves';
import EventIcon from '@mui/icons-material/Event';
import { PolaroidCarousel } from '@/components/PolaroidCarousel';

export function Home() {
  const [tripDates, setTripDates] = useState({ arrival: '', departure: '' });
  const [travelers, setTravelers] = useState(2);

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(to bottom, rgba(14, 165, 233, 0.1), transparent)',
          py: { xs: 4, md: 4 },
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 5 } }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              Discover <Box component="span" sx={{ color: 'primary.main' }}>Taniti</Box>
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ fontWeight: 400, maxWidth: 600, mx: 'auto' }}
            >
              A tropical paradise in the Pacific. Pristine beaches, lush rainforests,
              and an active volcano await.
            </Typography>
          </Box>

          {/* Desktop: Side by side | Mobile: Stacked */}
          <Grid container spacing={4} alignItems="flex-start">
            {/* Polaroid Carousel */}
            <Grid size={{ xs: 12, lg: 7 }}>
              <Card
                sx={{
                  p: { xs: 2, md: 3 },
                  display: 'flex',
                  justifyContent: 'center',
                  bgcolor: 'rgba(255,255,255,0.8)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <PolaroidCarousel />
              </Card>
            </Grid>

            {/* Book Now Card */}
            <Grid size={{ xs: 12, lg: 5 }}>
              <Stack spacing={2}>
                <Card>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h5" fontWeight={700} textAlign="center" gutterBottom>
                      Plan Your Getaway
                    </Typography>
                    <Stack spacing={2.5} sx={{ mt: 3 }}>
                      <TextField
                        label="Arrival Date"
                        type="date"
                        value={tripDates.arrival}
                        onChange={(e) => setTripDates({ ...tripDates, arrival: e.target.value })}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                      <TextField
                        label="Departure Date"
                        type="date"
                        value={tripDates.departure}
                        onChange={(e) => setTripDates({ ...tripDates, departure: e.target.value })}
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                      <TextField
                        select
                        label="Travelers"
                        value={travelers}
                        onChange={(e) => setTravelers(Number(e.target.value))}
                        fullWidth
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <MenuItem key={n} value={n}>
                            {n} {n === 1 ? 'Traveler' : 'Travelers'}
                          </MenuItem>
                        ))}
                      </TextField>
                      <Button
                        component={RouterLink}
                        to="/book"
                        variant="contained"
                        size="large"
                        endIcon={<ArrowForwardIcon />}
                        fullWidth
                        sx={{ mt: 1 }}
                      >
                        Start Planning
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>

                {/* Island Conditions */}
                <Card sx={{ bgcolor: 'rgba(14, 165, 233, 0.05)', border: '1px solid rgba(14, 165, 233, 0.2)' }}>
                  <CardContent sx={{ p: 2.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                      <WbSunnyIcon color="primary" fontSize="small" />
                      <Typography variant="subtitle2" fontWeight={600}>
                        Current Island Conditions
                      </Typography>
                    </Box>
                    <Stack spacing={1.5}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
                        <ThermostatIcon fontSize="small" sx={{ color: 'warning.main' }} />
                        <Typography variant="body2">82°F / 28°C - Sunny</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
                        <WavesIcon fontSize="small" sx={{ color: 'primary.main' }} />
                        <Typography variant="body2">Calm seas - Perfect for snorkeling</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
                        <EventIcon fontSize="small" sx={{ color: 'success.main' }} />
                        <Typography variant="body2">Festival of Lights - This Saturday</Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
