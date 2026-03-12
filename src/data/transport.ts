export interface TransportOption {
  id: string;
  name: string;
  description: string;
  icon: string;
  bookingUrl?: string;
}

export const gettingToTaniti: TransportOption[] = [
  {
    id: 'air',
    name: 'By Air',
    description: 'Taniti is served by a small airport that accommodates small jets and propeller planes. The airport is expanding to handle larger jets within the next few years. Most visitors arrive by air.',
    icon: 'Plane',
    bookingUrl: '#',
  },
  {
    id: 'cruise',
    name: 'By Cruise Ship',
    description: 'A small cruise ship docks in Yellow Leaf Bay one night per week. This is a scenic option for those with flexible schedules.',
    icon: 'Ship',
    bookingUrl: '#',
  },
];

export const gettingAroundTaniti: TransportOption[] = [
  {
    id: 'rental-car',
    name: 'Rental Cars',
    description: 'Available from a local rental agency near the airport. Recommended for exploring the entire island at your own pace.',
    icon: 'Car',
    bookingUrl: '#',
  },
  {
    id: 'public-bus',
    name: 'Public Buses',
    description: 'Serve Taniti City from 5 a.m. to 11 p.m. daily. An affordable way to get around the main city area.',
    icon: 'Bus',
  },
  {
    id: 'private-bus',
    name: 'Private Buses',
    description: 'Serve the rest of the island outside Taniti City. Good for reaching the rainforest and volcano areas.',
    icon: 'Bus',
    bookingUrl: '#',
  },
  {
    id: 'taxi',
    name: 'Taxis',
    description: 'Available throughout Taniti City. Convenient for short trips and airport transfers.',
    icon: 'Car',
  },
  {
    id: 'bike',
    name: 'Bike Rentals',
    description: 'Bikes and helmets available from several vendors. Helmets are required by law. Great for exploring flat areas like Taniti City and Merriton Landing.',
    icon: 'Bike',
    bookingUrl: '#',
  },
  {
    id: 'walking',
    name: 'Walking',
    description: 'Taniti City is fairly flat and very walkable. Merriton Landing is also easy to explore on foot.',
    icon: 'Footprints',
  },
];
