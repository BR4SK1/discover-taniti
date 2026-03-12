import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'text.primary',
        color: 'white',
        mt: 'auto',
        py: 3,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                textDecoration: 'none',
                color: 'white',
                mb: 2,
              }}
            >
              <Typography variant="h6" fontWeight={700}>
                Discover Taniti
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'grey.400', maxWidth: 400 }}>
              Experience the beauty of Taniti - a tropical paradise in the Pacific.
              From pristine beaches to lush rainforests and an active volcano,
              adventure awaits around every corner.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link
                component={RouterLink}
                to="/experiences"
                sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}
              >
                Experiences
              </Link>
              <Link
                component={RouterLink}
                to="/island-info"
                sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}
              >
                Island Info
              </Link>
              <Link
                component={RouterLink}
                to="/book"
                sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}
              >
                Book Your Trip
              </Link>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              Contact
            </Typography>
            <Stack spacing={1.5}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'grey.400' }}>
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2">Yellow Leaf Bay, Taniti</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'grey.400' }}>
                <EmailIcon fontSize="small" />
                <Typography variant="body2">info@discovertaniti.com</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'grey.400' }}>
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">+1 (555) TANITI</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
