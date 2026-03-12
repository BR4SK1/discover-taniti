import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, ArrowRight, Info, Sun, Waves, ThermometerSun } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { PolaroidCarousel } from '@/components/PolaroidCarousel';

export function Home() {
  const [tripDates, setTripDates] = useState({ arrival: '', departure: '' });
  const [travelers, setTravelers] = useState(2);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Carousel + Book Now side by side on desktop */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
              Discover <span className="text-primary">Taniti</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              A tropical paradise in the Pacific. Pristine beaches, lush rainforests, 
              and an active volcano await.
            </p>
          </div>

          {/* Desktop: Side by side | Mobile: Stacked */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center lg:items-start justify-center max-w-6xl mx-auto">
            {/* Polaroid Carousel */}
            <div className="w-full lg:flex-1 flex justify-center">
              <PolaroidCarousel />
            </div>

            {/* Book Now Card - Side panel on desktop */}
            <div className="w-full max-w-sm lg:w-96 lg:flex-shrink-0">
              <Card className="shadow-lg">
                <CardContent className="p-5 md:p-6">
                  <h2 className="text-xl font-bold text-foreground mb-5 text-center">
                    Plan Your Getaway
                  </h2>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        Arrival Date
                      </label>
                      <input
                        type="date"
                        value={tripDates.arrival}
                        onChange={(e) => setTripDates({ ...tripDates, arrival: e.target.value })}
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        Departure Date
                      </label>
                      <input
                        type="date"
                        value={tripDates.departure}
                        onChange={(e) => setTripDates({ ...tripDates, departure: e.target.value })}
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        Travelers
                      </label>
                      <select
                        value={travelers}
                        onChange={(e) => setTravelers(Number(e.target.value))}
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? 'Traveler' : 'Travelers'}</option>
                        ))}
                      </select>
                    </div>
                    <Link to="/book" className="block pt-2">
                      <Button size="lg" className="w-full">
                        Start Planning
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Island Conditions - Below booking card */}
              <Card className="mt-4 bg-primary/5 border-primary/20">
                <CardContent className="p-4">
                  <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Sun className="h-4 w-4 text-primary" />
                    Current Island Conditions
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <ThermometerSun className="h-4 w-4 text-amber-500" />
                      <span>82°F / 28°C - Sunny</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Waves className="h-4 w-4 text-blue-500" />
                      <span>Calm seas - Perfect for snorkeling</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4 text-green-500" />
                      <span>Festival of Lights - This Saturday</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section - Horizontal on desktop */}
      <section className="py-10 md:py-12 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <Link to="/experiences" className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Experiences</h3>
                    <p className="text-sm text-muted-foreground">Beaches, tours & more</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/island-info" className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Info className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Island Info</h3>
                    <p className="text-sm text-muted-foreground">Tips & travel guides</p>
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link to="/book" className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                    <Calendar className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Book Trip</h3>
                    <p className="text-sm text-muted-foreground">Lodging & transport</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section - Compact */}
      <section className="py-10 md:py-12 bg-foreground text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">500</div>
              <div className="text-sm text-gray-300">Square Miles</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-gray-300">Restaurants</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">20+</div>
              <div className="text-sm text-gray-300">Activities</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">365</div>
              <div className="text-sm text-gray-300">Days of Sun</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
