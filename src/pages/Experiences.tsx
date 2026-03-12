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
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import FilterListIcon from '@mui/icons-material/FilterList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { activities, locationLabels, typeLabels, type Activity } from '@/data/activities';

type FilterType = Activity['type'] | 'all';
type FilterLocation = Activity['location'] | 'all';

export function Experiences() {
  const [typeFilter, setTypeFilter] = useState<FilterType>('all');
  const [locationFilter, setLocationFilter] = useState<FilterLocation>('all');
  const [familyOnly, setFamilyOnly] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredActivities = activities.filter((activity) => {
    if (typeFilter !== 'all' && activity.type !== typeFilter) return false;
    if (locationFilter !== 'all' && activity.location !== locationFilter) return false;
    if (familyOnly && !activity.familyFriendly) return false;
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ background: 'linear-gradient(to bottom, rgba(14, 165, 233, 0.1), transparent)', py: 6 }}>
        <Container maxWidth="xl">
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Experience Taniti
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600 }}>
            From pristine beaches to thrilling adventures, discover everything our island paradise has to offer.
          </Typography>
        </Container>
      </Box>

      {/* Filters */}
      <Box
        sx={{
          position: 'sticky',
          top: 64,
          zIndex: 10,
          bgcolor: 'background.paper',
          borderBottom: 1,
          borderColor: 'divider',
          py: 2,
          boxShadow: 1,
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <FilterListIcon fontSize="small" />
              <Typography variant="body2" fontWeight={500}>Filters:</Typography>
            </Box>

            <FormControl size="small" sx={{ minWidth: 140 }}>
              <InputLabel>Type</InputLabel>
              <Select
                value={typeFilter}
                label="Type"
                onChange={(e) => setTypeFilter(e.target.value as FilterType)}
              >
                <MenuItem value="all">All Types</MenuItem>
                {Object.entries(typeLabels).map(([value, label]) => (
                  <MenuItem key={value} value={value}>{label}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl size="small" sx={{ minWidth: 160 }}>
              <InputLabel>Location</InputLabel>
              <Select
                value={locationFilter}
                label="Location"
                onChange={(e) => setLocationFilter(e.target.value as FilterLocation)}
              >
                <MenuItem value="all">All Locations</MenuItem>
                {Object.entries(locationLabels).map(([value, label]) => (
                  <MenuItem key={value} value={value}>{label}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControlLabel
              control={
                <Checkbox
                  checked={familyOnly}
                  onChange={(e) => setFamilyOnly(e.target.checked)}
                  size="small"
                />
              }
              label={
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <PeopleIcon fontSize="small" />
                  <Typography variant="body2">Family Friendly</Typography>
                </Box>
              }
            />

            <Typography variant="body2" color="text.secondary" sx={{ ml: 'auto' }}>
              {filteredActivities.length} {filteredActivities.length === 1 ? 'activity' : 'activities'}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Activities Grid */}
      <Box sx={{ py: 4 }}>
        <Container maxWidth="xl">
          {filteredActivities.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 6 }}>
              <Typography color="text.secondary" gutterBottom>
                No activities match your filters.
              </Typography>
              <Button
                variant="outlined"
                onClick={() => {
                  setTypeFilter('all');
                  setLocationFilter('all');
                  setFamilyOnly(false);
                }}
              >
                Clear Filters
              </Button>
            </Box>
          ) : (
            <Grid container spacing={3}>
              {filteredActivities.map((activity) => (
                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={activity.id}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.2s',
                      ...(expandedId === activity.id
                        ? { boxShadow: 6, border: 2, borderColor: 'primary.main' }
                        : { '&:hover': { boxShadow: 4 } }),
                    }}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia
                        component="img"
                        height="180"
                        image={activity.image}
                        alt={activity.name}
                        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                          e.currentTarget.src = `https://placehold.co/400x300/0ea5e9/ffffff?text=${encodeURIComponent(activity.name)}`;
                        }}
                        sx={{ objectFit: 'cover' }}
                      />
                      {activity.familyFriendly && (
                        <Chip
                          label="Family Friendly"
                          size="small"
                          color="success"
                          sx={{ position: 'absolute', top: 8, right: 8 }}
                        />
                      )}
                    </Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                        <Typography variant="h6" fontWeight={600}>
                          {activity.name}
                        </Typography>
                        <Chip label={typeLabels[activity.type]} size="small" variant="outlined" />
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 2, color: 'text.secondary' }}>
                        <LocationOnIcon fontSize="small" />
                        <Typography variant="body2">{locationLabels[activity.location]}</Typography>
                      </Box>

                      <Box
                        onClick={() => toggleExpand(activity.id)}
                        sx={{ cursor: 'pointer' }}
                      >
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            display: '-webkit-box',
                            WebkitLineClamp: expandedId === activity.id ? 'unset' : 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          {activity.description}
                        </Typography>
                        <Button
                          size="small"
                          endIcon={expandedId === activity.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                          sx={{ mt: 1, p: 0 }}
                        >
                          {expandedId === activity.id ? 'Show less' : 'Read more'}
                        </Button>
                      </Box>

                      <Collapse in={expandedId === activity.id && !!activity.bookingUrl}>
                        <Button
                          variant="contained"
                          fullWidth
                          endIcon={<OpenInNewIcon />}
                          component="a"
                          href={activity.bookingUrl || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ mt: 2 }}
                        >
                          Book / Reserve
                        </Button>
                      </Collapse>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>
    </Box>
  );
}
