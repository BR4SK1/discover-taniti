export interface Activity {
  id: string;
  name: string;
  description: string;
  location: 'rainforest' | 'volcano' | 'taniti-city' | 'merriton-landing' | 'yellow-leaf-bay';
  type: 'adventure' | 'nature' | 'culture' | 'nightlife' | 'relaxation';
  familyFriendly: boolean;
  image: string;
  bookingUrl?: string;
}

export const activities: Activity[] = [
  {
    id: 'beach',
    name: 'White Sandy Beaches',
    description: 'Relax on the pristine white sandy beaches that encircle Yellow Leaf Bay. Perfect for swimming, sunbathing, and enjoying the tropical paradise.',
    location: 'yellow-leaf-bay',
    type: 'relaxation',
    familyFriendly: true,
    image: '/images/beach.jpg',
  },
  {
    id: 'rainforest-hike',
    name: 'Rainforest Hiking',
    description: 'Explore lush tropical rainforests with guided hiking tours. Discover exotic plants, wildlife, and breathtaking views.',
    location: 'rainforest',
    type: 'nature',
    familyFriendly: true,
    image: '/images/rainforest.jpg',
    bookingUrl: '#',
  },
  {
    id: 'volcano',
    name: 'Volcano Tours',
    description: 'Visit Taniti\'s small but active volcano in the mountainous interior. Guided tours ensure safety while providing an unforgettable experience.',
    location: 'volcano',
    type: 'nature',
    familyFriendly: true,
    image: '/images/volcano.jpg',
    bookingUrl: '#',
  },
  {
    id: 'zipline',
    name: 'Rainforest Zip-lining',
    description: 'Soar through the rainforest canopy on an exhilarating zip-line adventure. Multiple lines offer varying difficulty levels.',
    location: 'rainforest',
    type: 'adventure',
    familyFriendly: false,
    image: '/images/zipline.jpg',
    bookingUrl: '#',
  },
  {
    id: 'snorkeling',
    name: 'Snorkeling',
    description: 'Discover the vibrant underwater world of Yellow Leaf Bay. Crystal clear waters reveal colorful coral reefs and tropical fish.',
    location: 'yellow-leaf-bay',
    type: 'adventure',
    familyFriendly: true,
    image: '/images/snorkeling.jpg',
    bookingUrl: '#',
  },
  {
    id: 'fishing',
    name: 'Chartered Fishing Tours',
    description: 'Join experienced local fishermen for deep-sea fishing adventures. Equipment provided, catch your own dinner!',
    location: 'yellow-leaf-bay',
    type: 'adventure',
    familyFriendly: true,
    image: '/images/fishing.jpg',
    bookingUrl: '#',
  },
  {
    id: 'helicopter',
    name: 'Helicopter Tours',
    description: 'See Taniti from above with breathtaking helicopter rides over the volcano, rainforest, and coastline.',
    location: 'taniti-city',
    type: 'adventure',
    familyFriendly: true,
    image: '/images/helicopter.jpg',
    bookingUrl: '#',
  },
  {
    id: 'museum',
    name: 'Local History Museum',
    description: 'Learn about Taniti\'s rich indigenous culture and history. Exhibits feature artifacts, traditional crafts, and interactive displays.',
    location: 'taniti-city',
    type: 'culture',
    familyFriendly: true,
    image: '/images/museum.jpg',
    bookingUrl: '#',
  },
  {
    id: 'microbrewery',
    name: 'Taniti Microbrewery',
    description: 'Sample locally crafted beers at Taniti\'s popular microbrewery. Tours available with tastings of seasonal brews.',
    location: 'merriton-landing',
    type: 'nightlife',
    familyFriendly: false,
    image: '/images/nightlife.jpg',
    bookingUrl: '#',
  },
  {
    id: 'dance-club',
    name: 'Island Dance Club',
    description: 'Dance the night away at Taniti\'s newest entertainment venue. Live DJs and tropical cocktails.',
    location: 'merriton-landing',
    type: 'nightlife',
    familyFriendly: false,
    image: '/images/nightlife.jpg',
    bookingUrl: '#',
  },
  {
    id: 'galleries',
    name: 'Art Galleries',
    description: 'Browse local and international art at several galleries featuring traditional Tanitian crafts and contemporary works.',
    location: 'taniti-city',
    type: 'culture',
    familyFriendly: true,
    image: '/images/city.jpg',
  },
  {
    id: 'bowling',
    name: 'Island Bowling',
    description: 'Family-friendly bowling alley with modern lanes, arcade games, and a snack bar.',
    location: 'merriton-landing',
    type: 'relaxation',
    familyFriendly: true,
    image: '/images/city.jpg',
    bookingUrl: '#',
  },
  {
    id: 'golf',
    name: 'Golf Course (Coming Soon)',
    description: 'A nine-hole golf course is under construction and expected to open next year. Pre-register for updates!',
    location: 'merriton-landing',
    type: 'relaxation',
    familyFriendly: true,
    image: '/images/city.jpg',
  },
];

export const locationLabels: Record<Activity['location'], string> = {
  'rainforest': 'Rainforest',
  'volcano': 'Volcano',
  'taniti-city': 'Taniti City',
  'merriton-landing': 'Merriton Landing',
  'yellow-leaf-bay': 'Yellow Leaf Bay',
};

export const typeLabels: Record<Activity['type'], string> = {
  'adventure': 'Adventure',
  'nature': 'Nature',
  'culture': 'Culture',
  'nightlife': 'Nightlife',
  'relaxation': 'Relaxation',
};
