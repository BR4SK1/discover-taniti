export interface Restaurant {
  id: string;
  name: string;
  description: string;
  cuisine: 'local' | 'american' | 'pan-asian';
  priceRange: '$' | '$$' | '$$$';
}

export const restaurants: Restaurant[] = [
  {
    id: 'ocean-catch',
    name: 'Ocean Catch',
    cuisine: 'local',
    description: 'Fresh local fish and traditional rice dishes. Waterfront dining with stunning bay views.',
    priceRange: '$$',
  },
  {
    id: 'taniti-kitchen',
    name: 'Taniti Kitchen',
    cuisine: 'local',
    description: 'Family-run restaurant serving authentic Tanitian cuisine. Try the daily catch special.',
    priceRange: '$',
  },
  {
    id: 'bay-grill',
    name: 'Yellow Leaf Bay Grill',
    cuisine: 'local',
    description: 'Casual beachside dining with grilled fish and local favorites.',
    priceRange: '$',
  },
  {
    id: 'fishermans-table',
    name: "Fisherman's Table",
    cuisine: 'local',
    description: 'Traditional recipes passed down through generations. Fresh seafood daily.',
    priceRange: '$$',
  },
  {
    id: 'island-flavors',
    name: 'Island Flavors',
    cuisine: 'local',
    description: 'Modern take on local cuisine with creative fish and rice dishes.',
    priceRange: '$$',
  },
  {
    id: 'american-diner',
    name: 'Taniti American Diner',
    cuisine: 'american',
    description: 'Classic American comfort food. Burgers, fries, and milkshakes.',
    priceRange: '$',
  },
  {
    id: 'steakhouse',
    name: 'Merriton Steakhouse',
    cuisine: 'american',
    description: 'Premium steaks and American favorites in an upscale setting.',
    priceRange: '$$$',
  },
  {
    id: 'burger-shack',
    name: 'Beach Burger Shack',
    cuisine: 'american',
    description: 'Casual beachfront spot for burgers, hot dogs, and American classics.',
    priceRange: '$',
  },
  {
    id: 'jade-garden',
    name: 'Jade Garden',
    cuisine: 'pan-asian',
    description: 'Pan-Asian cuisine featuring dishes from across the Pacific region.',
    priceRange: '$$',
  },
  {
    id: 'pacific-fusion',
    name: 'Pacific Fusion',
    cuisine: 'pan-asian',
    description: 'Creative Asian fusion with fresh local ingredients. Sushi and noodles.',
    priceRange: '$$$',
  },
];

export const cuisineLabels: Record<Restaurant['cuisine'], string> = {
  'local': 'Local Fish & Rice',
  'american': 'American',
  'pan-asian': 'Pan-Asian',
};
