import { useState } from 'react';
import { Plane, Ship, Car, Bus, Bike, Footprints, MapPin, ExternalLink, Check, ChevronRight, ChevronLeft, Lightbulb, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { lodging, lodgingTypeLabels, areaLabels, type Lodging } from '@/data/lodging';
import { gettingToTaniti, gettingAroundTaniti } from '@/data/transport';
import { cn } from '@/lib/utils';

const transportIcons: Record<string, React.ReactNode> = {
  Plane: <Plane className="h-5 w-5" />,
  Ship: <Ship className="h-5 w-5" />,
  Car: <Car className="h-5 w-5" />,
  Bus: <Bus className="h-5 w-5" />,
  Bike: <Bike className="h-5 w-5" />,
  Footprints: <Footprints className="h-5 w-5" />,
};

type AreaFilter = Lodging['area'] | 'all';

const steps = [
  { id: 1, title: 'Getting There', description: 'How will you arrive?' },
  { id: 2, title: 'Getting Around', description: 'Island transportation' },
  { id: 3, title: 'Where to Stay', description: 'Find your accommodation' },
];

export function Book() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedArrival, setSelectedArrival] = useState<string | null>(null);
  const [needsRentalCar, setNeedsRentalCar] = useState<boolean | null>(null);
  const [areaFilter, setAreaFilter] = useState<AreaFilter>('all');

  const filteredLodging = lodging.filter((l) => {
    if (areaFilter !== 'all' && l.area !== areaFilter) return false;
    return true;
  });

  const goToStep = (step: number) => {
    if (step >= 1 && step <= 3) {
      setCurrentStep(step);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Progress */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 text-center">Plan Your Trip</h1>
          <p className="text-muted-foreground text-center mb-8">
            Let's plan your perfect Taniti adventure step by step.
          </p>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => goToStep(step.id)}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 rounded-full transition-all',
                    currentStep === step.id
                      ? 'bg-primary text-white'
                      : currentStep > step.id
                      ? 'bg-green-100 text-green-700'
                      : 'bg-secondary text-muted-foreground'
                  )}
                >
                  {currentStep > step.id ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
                      {step.id}
                    </span>
                  )}
                  <span className="hidden sm:inline text-sm font-medium">{step.title}</span>
                </button>
                {index < steps.length - 1 && (
                  <ChevronRight className="h-4 w-4 text-muted-foreground mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step 1: Getting TO Taniti */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">How will you get to Taniti?</h2>
                <p className="text-muted-foreground">Most visitors arrive by air, but a cruise ship visits weekly.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {gettingToTaniti.map((option) => (
                  <Card
                    key={option.id}
                    className={cn(
                      'cursor-pointer transition-all hover:shadow-lg',
                      selectedArrival === option.id ? 'ring-2 ring-primary' : ''
                    )}
                    onClick={() => setSelectedArrival(option.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={cn(
                          'w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0',
                          selectedArrival === option.id ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                        )}>
                          {transportIcons[option.icon]}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2">{option.name}</h3>
                          <p className="text-sm text-muted-foreground">{option.description}</p>
                        </div>
                        {selectedArrival === option.id && (
                          <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <Button onClick={() => goToStep(2)} disabled={!selectedArrival}>
                  Continue
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Getting AROUND Taniti */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Will you need a rental car?</h2>
                <p className="text-muted-foreground">Choose based on your planned activities.</p>
              </div>

              {/* Rental Car Decision */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card
                  className={cn(
                    'cursor-pointer transition-all hover:shadow-lg',
                    needsRentalCar === true ? 'ring-2 ring-primary' : ''
                  )}
                  onClick={() => setNeedsRentalCar(true)}
                >
                  <CardContent className="p-6 text-center">
                    <div className={cn(
                      'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4',
                      needsRentalCar === true ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                    )}>
                      <Car className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Yes, I'll rent a car</h3>
                    <p className="text-sm text-muted-foreground">Best for exploring the whole island at your own pace</p>
                  </CardContent>
                </Card>

                <Card
                  className={cn(
                    'cursor-pointer transition-all hover:shadow-lg',
                    needsRentalCar === false ? 'ring-2 ring-primary' : ''
                  )}
                  onClick={() => setNeedsRentalCar(false)}
                >
                  <CardContent className="p-6 text-center">
                    <div className={cn(
                      'w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4',
                      needsRentalCar === false ? 'bg-primary text-white' : 'bg-accent/10 text-accent'
                    )}>
                      <Footprints className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">No, I'll use alternatives</h3>
                    <p className="text-sm text-muted-foreground">Walking, buses, taxis, and bikes</p>
                  </CardContent>
                </Card>
              </div>

              {/* Tips based on selection */}
              {needsRentalCar === true && (
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="p-5">
                    <div className="flex gap-3">
                      <Lightbulb className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Rental Car Tips</h4>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• Rentals available near the airport from local agencies</li>
                          <li>• Recommended for volcano visits and rainforest exploration</li>
                          <li>• Roads are well-maintained throughout the island</li>
                          <li>• Book in advance during peak season</li>
                        </ul>
                        <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-green-700 hover:text-green-800 mt-3">
                          Browse Rental Cars <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {needsRentalCar === false && (
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-5">
                    <div className="flex gap-3">
                      <Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Alternative Transportation</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                          {gettingAroundTaniti.filter(t => t.id !== 'rental-car').map((option) => (
                            <div key={option.id} className="flex items-start gap-2">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                                {transportIcons[option.icon]}
                              </div>
                              <div>
                                <p className="text-sm font-medium text-blue-800">{option.name}</p>
                                <p className="text-xs text-blue-600">{option.description.split('.')[0]}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex items-start gap-2 mt-4 pt-3 border-t border-blue-200">
                          <AlertCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <p className="text-xs text-blue-700">
                            <strong>Tip:</strong> Taniti City and Merriton Landing are very walkable. 
                            For volcano/rainforest trips, consider a private bus tour.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => goToStep(1)}>
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button onClick={() => goToStep(3)} disabled={needsRentalCar === null}>
                  Continue
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Where to Stay */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">Where would you like to stay?</h2>
                <p className="text-muted-foreground">Choose an area based on your interests.</p>
              </div>

              {/* Area Selection */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <Button
                  variant={areaFilter === 'all' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setAreaFilter('all')}
                >
                  All Areas
                </Button>
                {Object.entries(areaLabels).map(([value, label]) => (
                  <Button
                    key={value}
                    variant={areaFilter === value ? 'primary' : 'outline'}
                    size="sm"
                    onClick={() => setAreaFilter(value as AreaFilter)}
                  >
                    {label}
                  </Button>
                ))}
              </div>

              {/* Area Tips */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <Card className={cn('transition-all', areaFilter === 'taniti-city' ? 'ring-2 ring-primary' : '')}>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-1">Taniti City</h4>
                    <p className="text-sm text-muted-foreground">
                      Main hub with beaches, museums, restaurants. Best for first-time visitors and families.
                    </p>
                  </CardContent>
                </Card>
                <Card className={cn('transition-all', areaFilter === 'merriton-landing' ? 'ring-2 ring-primary' : '')}>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-1">Merriton Landing</h4>
                    <p className="text-sm text-muted-foreground">
                      Newer area with nightlife, modern hotels. Best for couples and nightlife seekers.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Lodging Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredLodging.map((place) => (
                  <Card key={place.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-32 bg-muted">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://placehold.co/400x200/0ea5e9/ffffff?text=${encodeURIComponent(place.name)}`;
                        }}
                      />
                      <span className="absolute top-2 right-2 bg-white/90 text-foreground text-xs font-semibold px-2 py-1 rounded">
                        {place.priceRange}
                      </span>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-semibold text-foreground text-sm">{place.name}</h3>
                        <span className="text-xs bg-secondary text-secondary-foreground px-1.5 py-0.5 rounded">
                          {lodgingTypeLabels[place.type]}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                        <MapPin className="h-3 w-3" />
                        <span>{areaLabels[place.area]}</span>
                      </div>
                      <a href={place.bookingUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="primary" size="sm" className="w-full text-xs">
                          Check Availability
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredLodging.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">No lodging found in this area.</p>
                  <Button variant="outline" size="sm" className="mt-2" onClick={() => setAreaFilter('all')}>
                    Show All
                  </Button>
                </div>
              )}

              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => goToStep(2)}>
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
