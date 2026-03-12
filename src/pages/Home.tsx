import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { PolaroidCarousel } from '@/components/PolaroidCarousel';

export function Home() {
  const [tripDates, setTripDates] = useState({ arrival: '', departure: '' });
  const [travelers, setTravelers] = useState(2);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Discover <span className="text-primary">Taniti</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A tropical paradise in the Pacific. Pristine beaches, lush rainforests, 
              and an active volcano await your exploration.
            </p>
          </div>

          {/* Polaroid Carousel */}
          <PolaroidCarousel />
        </div>
      </section>

      {/* Trip Planner Section */}
      <section className="py-12 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Plan Your Island Getaway
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                <div className="flex items-end">
                  <Link to="/book" className="w-full">
                    <Button size="lg" className="w-full">
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Start Your Adventure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/experiences" className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Explore Experiences</h3>
                  <p className="text-muted-foreground">
                    Discover beaches, rainforests, volcano tours, and more activities for every traveler.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/island-info" className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Island Information</h3>
                  <p className="text-muted-foreground">
                    Travel tips, area guides, and everything you need to know before you visit.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/book" className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <Calendar className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Book Your Trip</h3>
                  <p className="text-muted-foreground">
                    Find lodging, transportation, and plan your perfect Taniti vacation.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-foreground text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Visit Taniti?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500</div>
              <div className="text-gray-300">Square Miles of Paradise</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-300">Unique Restaurants</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-gray-300">Activities & Attractions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">365</div>
              <div className="text-gray-300">Days of Sunshine</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
