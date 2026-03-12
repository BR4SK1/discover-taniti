import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PowerIcon from '@mui/icons-material/Power';
import TranslateIcon from '@mui/icons-material/Translate';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import EventIcon from '@mui/icons-material/Event';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { areas, practicalInfo, faqs } from '@/data/island-info';

const iconMap: Record<string, React.ReactNode> = {
  Wallet: <AccountBalanceWalletIcon />,
  Plug: <PowerIcon />,
  Languages: <TranslateIcon />,
  ShieldCheck: <VerifiedUserIcon />,
  Wine: <LocalBarIcon />,
  Calendar: <EventIcon />,
};

export function IslandInfo() {
  const [expandedFaq, setExpandedFaq] = useState<string | false>(false);

  const handleFaqChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedFaq(isExpanded ? panel : false);
  };

  const getIcon = (iconName: string) => iconMap[iconName] || null;

  return (
    <Box>
      {/* Header */}
      <Box sx={{ background: 'linear-gradient(to bottom, rgba(14, 165, 233, 0.1), transparent)', py: 6 }}>
        <Container maxWidth="xl">
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Island Information
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600 }}>
            Everything you need to know before visiting Taniti. From area guides to practical travel tips.
          </Typography>
        </Container>
      </Box>

      {/* Areas Section */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 4 }}>
            <LocationOnIcon color="primary" />
            <Typography variant="h5" fontWeight={700}>
              Explore Our Areas
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {areas.map((area) => (
              <Grid size={{ xs: 12, md: 6 }} key={area.id}>
                <Card sx={{ height: '100%', '&:hover': { boxShadow: 4 }, transition: 'box-shadow 0.2s' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {area.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {area.description}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      Highlights:
                    </Typography>
                    <Grid container spacing={1}>
                      {area.highlights.map((highlight, index) => (
                        <Grid size={{ xs: 12, sm: 6 }} key={index}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <FiberManualRecordIcon sx={{ fontSize: 8, color: 'primary.main' }} />
                            <Typography variant="body2" color="text.secondary">
                              {highlight}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Practical Information */}
      <Box sx={{ py: 6, bgcolor: 'grey.50' }}>
        <Container maxWidth="xl">
          <Typography variant="h5" fontWeight={700} gutterBottom sx={{ mb: 4 }}>
            Practical Information
          </Typography>
          <Grid container spacing={3}>
            {practicalInfo.map((info, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                <Card sx={{ height: '100%', '&:hover': { boxShadow: 4 }, transition: 'box-shadow 0.2s' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          bgcolor: 'primary.light',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'primary.main',
                        }}
                      >
                        {getIcon(info.icon)}
                      </Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        {info.category}
                      </Typography>
                    </Box>
                    <List dense disablePadding>
                      {info.items.map((item, itemIndex) => (
                        <ListItem key={itemIndex} disablePadding sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 20 }}>
                            <FiberManualRecordIcon sx={{ fontSize: 8, color: 'primary.main' }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
                            primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ py: 6 }}>
        <Container maxWidth="md">
          <Typography variant="h5" fontWeight={700} textAlign="center" gutterBottom sx={{ mb: 4 }}>
            Frequently Asked Questions
          </Typography>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expandedFaq === `faq-${index}`}
              onChange={handleFaqChange(`faq-${index}`)}
              sx={{
                mb: 1,
                '&:before': { display: 'none' },
                boxShadow: expandedFaq === `faq-${index}` ? 3 : 1,
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight={500}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="text.secondary">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>
    </Box>
  );
}
