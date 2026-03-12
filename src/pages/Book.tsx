import { useState } from 'react';
import { Plane, Ship, Car, Bus, Bike, Footprints, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { lodging, lodgingTypeLabels, areaLabels, type Lodging } from '@/data/lodging';
import { gettingToTaniti, gettingAroundTaniti } from '@/data/transport';

const transportIcons: Record<string, React.ReactNode> = {
  Plane: <Plane className="h-6 w-6" />,
  Ship: <Ship className="h-6 w-6" />,
  Car: <Car className="h-6 w-6" />,
  Bus: <Bus className="h-6 w-6" />,
  Bike: <Bike className="h-6 w-6" />,
  Footprints: <Footprints className="h-6 w-6" />,
};

type AreaFilter = Lodging['area'] | 'all';

export function Book() {
  const [areaFilter, setAreaFilter] = useState<AreaFilter>('all');

  const filteredLodging = lodging.filter((l) => {
    if (areaFilter !== 'all' && l.area !== areaFilter) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Book Your Trip</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Find the perfect accommodations and transportation for your Taniti adventure.
          </p>
        </div>
      </section>

      {/* Getting TO Taniti */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Getting TO Taniti</h2>
          <p className="text-muted-foreground mb-6">Choose how you'll arrive on our island paradise.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gettingToTaniti.map((option) => (
              <Card key={option.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                      {transportIcons[option.icon]}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{option.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
                      {option.bookingUrl && (
                        <a href={option.bookingUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm">
                            View Options
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Getting AROUND Taniti */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Getting AROUND Taniti</h2>
          <p className="text-muted-foreground mb-6">Explore the island with these transportation options.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gettingAroundTaniti.map((option) => (
              <Card key={option.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent flex-shrink-0">
                      {transportIcons[option.icon]}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{option.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                      {option.bookingUrl && (
                        <a href={option.bookingUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm" className="text-primary p-0 h-auto">
                            Book Now <ExternalLink className="ml-1 h-3 w-3" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lodging Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Where to Stay</h2>
              <p className="text-muted-foreground">From budget hostels to luxury resorts, find your perfect accommodation.</p>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Filter by area:</span>
              <select
                value={areaFilter}
                onChange={(e) => setAreaFilter(e.target.value as AreaFilter)}
                className="px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Areas</option>
                {Object.entries(areaLabels).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLodging.map((place) => (
              <Card key={place.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-40 bg-muted">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://placehold.co/400x200/0ea5e9/ffffff?text=${encodeURIComponent(place.name)}`;
                    }}
                  />
                  <span className="absolute top-2 right-2 bg-white/90 text-foreground text-sm font-semibold px-2 py-1 rounded">
                    {place.priceRange}
                  </span>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{place.name}</h3>
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                      {lodgingTypeLabels[place.type]}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{areaLabels[place.area]}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{place.description}</p>
                  <a href={place.bookingUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="sm" className="w-full">
                      Check Availability
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredLodging.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No lodging found in this area.</p>
              <Button variant="outline" className="mt-4" onClick={() => setAreaFilter('all')}>
                Show All
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Taniti?</h2>
          <p className="text-lg text-white/80 mb-6">
            Start planning your tropical adventure today. Our team is here to help make your trip unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Contact Us
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Download Travel Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
