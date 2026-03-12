export interface Lodging {
  id: string;
  name: string;
  description: string;
  type: 'hostel' | 'hotel' | 'resort' | 'bnb';
  area: 'taniti-city' | 'merriton-landing';
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  image: string;
  bookingUrl: string;
}

export const lodging: Lodging[] = [
  {
    id: 'taniti-resort',
    name: 'Taniti Grand Resort',
    description: 'Four-star beachfront resort with full amenities including pool, spa, restaurants, and direct beach access. The premier lodging option on the island.',
    type: 'resort',
    area: 'taniti-city',
    priceRange: '$$$$',
    image: '/images/resort.jpg',
    bookingUrl: '#',
  },
  {
    id: 'yellow-leaf-hotel',
    name: 'Yellow Leaf Bay Hotel',
    description: 'Family-owned hotel with comfortable rooms and stunning bay views. Walking distance to beaches and downtown Taniti City.',
    type: 'hotel',
    area: 'taniti-city',
    priceRange: '$$',
    image: '/images/hotel.jpg',
    bookingUrl: '#',
  },
  {
    id: 'island-inn',
    name: 'Island Inn',
    description: 'Cozy family hotel in the heart of Taniti City. Clean, comfortable rooms with friendly service and local breakfast included.',
    type: 'hotel',
    area: 'taniti-city',
    priceRange: '$$',
    image: '/images/hotel.jpg',
    bookingUrl: '#',
  },
  {
    id: 'merriton-suites',
    name: 'Merriton Landing Suites',
    description: 'Modern hotel in the rapidly developing Merriton Landing area. Close to nightlife, restaurants, and entertainment.',
    type: 'hotel',
    area: 'merriton-landing',
    priceRange: '$$$',
    image: '/images/hotel.jpg',
    bookingUrl: '#',
  },
  {
    id: 'rainforest-bnb',
    name: 'Rainforest Retreat B&B',
    description: 'Charming bed and breakfast on the edge of the rainforest. Homemade breakfast, peaceful setting, and nature at your doorstep.',
    type: 'bnb',
    area: 'taniti-city',
    priceRange: '$$',
    image: '/images/hotel.jpg',
    bookingUrl: '#',
  },
  {
    id: 'sunset-bnb',
    name: 'Sunset View B&B',
    description: 'Romantic bed and breakfast with spectacular sunset views over Yellow Leaf Bay. Perfect for couples.',
    type: 'bnb',
    area: 'taniti-city',
    priceRange: '$$',
    image: '/images/hotel.jpg',
    bookingUrl: '#',
  },
  {
    id: 'backpacker-hostel',
    name: 'Taniti Backpackers Hostel',
    description: 'Budget-friendly hostel with dorm rooms and private options. Communal kitchen, social atmosphere, and great for solo travelers.',
    type: 'hostel',
    area: 'taniti-city',
    priceRange: '$',
    image: '/images/hostel.jpg',
    bookingUrl: '#',
  },
];

export const lodgingTypeLabels: Record<Lodging['type'], string> = {
  'hostel': 'Hostel',
  'hotel': 'Hotel',
  'resort': 'Resort',
  'bnb': 'Bed & Breakfast',
};

export const areaLabels: Record<Lodging['area'], string> = {
  'taniti-city': 'Taniti City',
  'merriton-landing': 'Merriton Landing',
};
