export interface AreaInfo {
  id: string;
  name: string;
  description: string;
  highlights: string[];
}

export const areas: AreaInfo[] = [
  {
    id: 'taniti-city',
    name: 'Taniti City',
    description: 'The main hub of activity on the island, Taniti City boasts native architecture and is surrounded by white, sandy beaches that encircle Yellow Leaf Bay. Most tourists spend the majority of their time here.',
    highlights: [
      'Native architecture',
      'White sandy beaches',
      'Museums and galleries',
      'Restaurants and shops',
      'Public transportation hub',
    ],
  },
  {
    id: 'merriton-landing',
    name: 'Merriton Landing',
    description: 'A rapidly developing area on the north side of Yellow Leaf Bay. This is where you\'ll find many entertainment options, nightlife, and newer accommodations. Easy to explore on foot.',
    highlights: [
      'Microbrewery and pubs',
      'Dance club',
      'Bowling and arcade',
      'Modern hotels',
      'Waterfront dining',
    ],
  },
  {
    id: 'rainforest',
    name: 'The Rainforest',
    description: 'Lush tropical rainforests cover much of the island\'s interior. Popular for hiking, zip-lining, and nature tours.',
    highlights: [
      'Guided hiking trails',
      'Zip-line adventures',
      'Exotic wildlife',
      'Scenic viewpoints',
    ],
  },
  {
    id: 'volcano',
    name: 'The Volcano',
    description: 'Taniti\'s small but active volcano is located in the mountainous interior. A popular day trip destination with guided tours available.',
    highlights: [
      'Guided volcano tours',
      'Scenic hiking',
      'Unique geological features',
      'Photography opportunities',
    ],
  },
];

export interface PracticalInfo {
  category: string;
  icon: string;
  items: string[];
}

export const practicalInfo: PracticalInfo[] = [
  {
    category: 'Currency & Payment',
    icon: 'Wallet',
    items: [
      'U.S. dollar is the primary currency',
      'Euros and yen widely accepted',
      'Several banks offer currency exchange',
      'Major credit cards accepted at most businesses',
    ],
  },
  {
    category: 'Power & Connectivity',
    icon: 'Plug',
    items: [
      'Power outlets are 120 volts (same as United States)',
      'Standard US-style plugs',
    ],
  },
  {
    category: 'Language',
    icon: 'Languages',
    items: [
      'Many younger Tanitians speak fluent English',
      'Limited English in rural areas, especially among older residents',
      'Hospital has many multilingual employees',
    ],
  },
  {
    category: 'Health & Safety',
    icon: 'ShieldCheck',
    items: [
      'One hospital and several clinics available',
      'Violent crime is very rare',
      'Increasing reports of pickpocketing in tourist areas',
      'Keep valuables secure and be aware of surroundings',
    ],
  },
  {
    category: 'Alcohol',
    icon: 'Wine',
    items: [
      'Drinking age is 18 (not strictly enforced)',
      'Alcohol not sold or served between midnight and 9:00 a.m.',
    ],
  },
  {
    category: 'Holidays',
    icon: 'Calendar',
    items: [
      'Taniti has many national holidays',
      'Tourist attractions and restaurants may close on holidays',
      'Plan accordingly and check schedules in advance',
    ],
  },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: 'What is the best time to visit Taniti?',
    answer: 'Taniti enjoys tropical weather year-round. However, be aware of national holidays when many businesses may be closed.',
  },
  {
    question: 'Do I need a rental car?',
    answer: 'It depends on your plans. Taniti City and Merriton Landing are very walkable, and public buses serve the city. For exploring the rainforest, volcano, or other parts of the island, a rental car or private bus tour is recommended.',
  },
  {
    question: 'Is Taniti safe for tourists?',
    answer: 'Yes, violent crime is very rare. However, as tourism increases, there are more reports of pickpocketing. Keep valuables secure and stay aware of your surroundings.',
  },
  {
    question: 'What currency should I bring?',
    answer: 'U.S. dollars are the primary currency, but euros and yen are also widely accepted. Major credit cards work at most businesses, and banks offer currency exchange.',
  },
  {
    question: 'Do I need a power adapter?',
    answer: 'If you\'re from the United States, no. Taniti uses 120-volt outlets with standard US-style plugs. Visitors from other countries may need an adapter.',
  },
];
