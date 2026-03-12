import { useState } from 'react';
import { Filter, MapPin, Users, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { activities, locationLabels, typeLabels, type Activity } from '@/data/activities';
import { cn } from '@/lib/utils';

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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Experience Taniti</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            From pristine beaches to thrilling adventures, discover everything our island paradise has to offer.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 bg-white border-b border-border py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <Filter className="h-4 w-4" />
              <span>Filters:</span>
            </div>

            {/* Type Filter */}
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value as FilterType)}
              className="px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">All Types</option>
              {Object.entries(typeLabels).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>

            {/* Location Filter */}
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value as FilterLocation)}
              className="px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">All Locations</option>
              {Object.entries(locationLabels).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>

            {/* Family Friendly Toggle */}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={familyOnly}
                onChange={(e) => setFamilyOnly(e.target.checked)}
                className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
              />
              <span className="text-sm flex items-center gap-1">
                <Users className="h-4 w-4" />
                Family Friendly
              </span>
            </label>

            {/* Results Count */}
            <span className="ml-auto text-sm text-muted-foreground">
              {filteredActivities.length} {filteredActivities.length === 1 ? 'activity' : 'activities'}
            </span>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredActivities.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No activities match your filters.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setTypeFilter('all');
                  setLocationFilter('all');
                  setFamilyOnly(false);
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredActivities.map((activity) => (
                <Card
                  key={activity.id}
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    expandedId === activity.id ? 'ring-2 ring-primary' : 'hover:shadow-lg'
                  )}
                >
                  <div className="relative h-48 bg-muted overflow-hidden">
                    <img
                      src={activity.image}
                      alt={activity.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://placehold.co/400x300/0ea5e9/ffffff?text=${encodeURIComponent(activity.name)}`;
                      }}
                    />
                    {activity.familyFriendly && (
                      <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                        Family Friendly
                      </span>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{activity.name}</h3>
                      <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                        {typeLabels[activity.type]}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4" />
                      <span>{locationLabels[activity.location]}</span>
                    </div>

                    {/* Expandable Description */}
                    <button
                      onClick={() => toggleExpand(activity.id)}
                      className="w-full text-left"
                    >
                      <p className={cn(
                        'text-sm text-muted-foreground transition-all',
                        expandedId === activity.id ? '' : 'line-clamp-2'
                      )}>
                        {activity.description}
                      </p>
                      <span className="flex items-center gap-1 text-primary text-sm mt-2 hover:underline">
                        {expandedId === activity.id ? (
                          <>Show less <ChevronUp className="h-4 w-4" /></>
                        ) : (
                          <>Read more <ChevronDown className="h-4 w-4" /></>
                        )}
                      </span>
                    </button>

                    {/* Booking Link */}
                    {activity.bookingUrl && expandedId === activity.id && (
                      <a
                        href={activity.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 block"
                      >
                        <Button variant="primary" size="sm" className="w-full">
                          Book / Reserve
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
