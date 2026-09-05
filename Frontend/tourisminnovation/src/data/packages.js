const packages = [
  // =====================================================
  // GOA
  // =====================================================

  {
    id: 'goa-budget',
    destinationId: 'goa',
    name: 'Goa Budget Explorer',
    duration: 4,
    nights: 3,
    hotelName: 'Novotel Goa Resort',
    activityNames: [
      'Old Goa Heritage',
      'Sunset Cruise',
    ],
    transportCost: 6000,
    foodCostPerPersonPerDay: 800,
    description:
      'A budget-friendly Goa experience covering heritage, beaches and a beautiful sunset cruise.',
    tags: ['Budget', 'Couples', 'Friends'],
  },

  {
    id: 'goa-adventure',
    destinationId: 'goa',
    name: 'Goa Adventure Escape',
    duration: 4,
    nights: 3,
    hotelName: 'Radisson Blu Resort Goa',
    activityNames: [
      'Scuba Diving',
      'Water Sports',
      'Sunset Cruise',
    ],
    transportCost: 8000,
    foodCostPerPersonPerDay: 1000,
    description:
      'Perfect for travellers who want beaches, water sports and adventure activities.',
    tags: ['Adventure', 'Friends', 'Water Sports'],
  },

  {
    id: 'goa-luxury',
    destinationId: 'goa',
    name: 'Goa Luxury Retreat',
    duration: 4,
    nights: 3,
    hotelName: 'Taj Exotica Resort & Spa',
    activityNames: [
      'Scuba Diving',
      'Dolphin Watching',
      'Sunset Cruise',
    ],
    transportCost: 10000,
    foodCostPerPersonPerDay: 1500,
    description:
      'A premium Goa holiday with a luxury resort and curated experiences.',
    tags: ['Luxury', 'Couples', 'Premium'],
  },

  // =====================================================
  // BALI
  // =====================================================

  {
    id: 'bali-budget',
    destinationId: 'bali',
    name: 'Bali Explorer',
    duration: 5,
    nights: 4,
    hotelName: 'Ubud Valley Resort',
    activityNames: [
      'Ubud Cultural Experience',
      'Bali Rice Terrace Experience',
      'Temple Tour',
    ],
    transportCost: 12000,
    foodCostPerPersonPerDay: 900,
    description:
      'Explore the cultural side of Bali with temples, rice terraces and Ubud.',
    tags: ['Budget', 'Culture', 'Couples'],
  },

  {
    id: 'bali-adventure',
    destinationId: 'bali',
    name: 'Bali Adventure Escape',
    duration: 5,
    nights: 4,
    hotelName: 'The Anvaya Beach Resort Bali',
    activityNames: [
      'Nusa Penida Snorkeling',
      'Surfing',
      'Ubud Cultural Experience',
    ],
    transportCost: 14000,
    foodCostPerPersonPerDay: 1100,
    description:
      'A balanced Bali trip combining beaches, adventure and local culture.',
    tags: ['Adventure', 'Beach', 'Friends'],
  },

  {
    id: 'bali-luxury',
    destinationId: 'bali',
    name: 'Bali Luxury Escape',
    duration: 5,
    nights: 4,
    hotelName: 'Potato Head Suites',
    activityNames: [
      'Nusa Penida Snorkeling',
      'Temple Tour',
      'Bali Cooking Experience',
    ],
    transportCost: 18000,
    foodCostPerPersonPerDay: 1800,
    description:
      'A premium Bali getaway with luxury accommodation and curated experiences.',
    tags: ['Luxury', 'Couples', 'Premium'],
  },

  // =====================================================
  // MANALI
  // =====================================================

  {
    id: 'manali-budget',
    destinationId: 'manali',
    name: 'Manali Budget Escape',
    duration: 4,
    nights: 3,
    hotelName: 'Shingar Regency',
    activityNames: [
      'Hidimba Temple',
      'Old Manali Walk',
      'Solang Valley',
    ],
    transportCost: 7000,
    foodCostPerPersonPerDay: 700,
    description:
      'An affordable mountain holiday covering the most popular Manali experiences.',
    tags: ['Budget', 'Friends', 'Family'],
  },

  {
    id: 'manali-adventure',
    destinationId: 'manali',
    name: 'Manali Adventure Trip',
    duration: 5,
    nights: 4,
    hotelName: 'Whistling Pines Resort',
    activityNames: [
      'Rohtang Pass',
      'River Rafting',
      'Himalayan Trek',
      'Solang Valley',
    ],
    transportCost: 10000,
    foodCostPerPersonPerDay: 900,
    description:
      'An action-packed Himalayan trip for travellers looking for adventure.',
    tags: ['Adventure', 'Friends', 'Trekking'],
  },

  {
    id: 'manali-premium',
    destinationId: 'manali',
    name: 'Manali Premium Retreat',
    duration: 5,
    nights: 4,
    hotelName: 'The Himalayan',
    activityNames: [
      'Rohtang Pass',
      'Himalayan Trek',
      'Old Manali Walk',
    ],
    transportCost: 12000,
    foodCostPerPersonPerDay: 1200,
    description:
      'A comfortable mountain retreat combining premium accommodation and scenic experiences.',
    tags: ['Premium', 'Couples', 'Family'],
  },

  // =====================================================
  // DUBAI
  // =====================================================

  {
    id: 'dubai-budget',
    destinationId: 'dubai',
    name: 'Dubai Smart Explorer',
    duration: 4,
    nights: 3,
    hotelName: 'Premier Inn Dubai International Airport',
    activityNames: [
      'Old Dubai Experience',
      'Dubai Marina Cruise',
    ],
    transportCost: 12000,
    foodCostPerPersonPerDay: 1200,
    description:
      'Explore Dubai traditional side and modern skyline without overspending.',
    tags: ['Budget', 'City', 'Family'],
  },

  {
    id: 'dubai-adventure',
    destinationId: 'dubai',
    name: 'Dubai Adventure',
    duration: 5,
    nights: 4,
    hotelName: 'Rove Downtown',
    activityNames: [
      'Desert Safari',
      'Burj Khalifa',
      'Dubai Aquarium',
      'Dubai Marina Cruise',
    ],
    transportCost: 15000,
    foodCostPerPersonPerDay: 1500,
    description:
      'Experience Dubai desert, skyline, attractions and waterfront.',
    tags: ['Adventure', 'Family', 'Friends'],
  },

  {
    id: 'dubai-luxury',
    destinationId: 'dubai',
    name: 'Dubai Luxury Experience',
    duration: 5,
    nights: 4,
    hotelName: 'Atlantis The Palm',
    activityNames: [
      'Desert Safari',
      'Burj Khalifa',
      'Dubai Marina Cruise',
      'Dubai Aquarium',
    ],
    transportCost: 20000,
    foodCostPerPersonPerDay: 2200,
    description:
      'A premium Dubai vacation with luxury accommodation and iconic experiences.',
    tags: ['Luxury', 'Premium', 'Couples'],
  },

  // =====================================================
  // MALDIVES
  // =====================================================

  {
    id: 'maldives-budget',
    destinationId: 'maldives',
    name: 'Maldives Island Escape',
    duration: 4,
    nights: 3,
    hotelName: 'Sun Siyam Olhuveli',
    activityNames: [
      'Snorkeling',
      'Sunset Sailing',
    ],
    transportCost: 10000,
    foodCostPerPersonPerDay: 1800,
    description:
      'Enjoy turquoise waters, snorkeling and beautiful island sunsets.',
    tags: ['Beach', 'Couples', 'Relaxation'],
  },

  {
    id: 'maldives-adventure',
    destinationId: 'maldives',
    name: 'Maldives Adventure',
    duration: 5,
    nights: 4,
    hotelName: 'Centara Ras Fushi Resort',
    activityNames: [
      'Scuba Diving',
      'Snorkeling',
      'Dolphin Watching',
    ],
    transportCost: 14000,
    foodCostPerPersonPerDay: 2200,
    description:
      'An underwater-focused Maldives trip for adventure lovers.',
    tags: ['Adventure', 'Diving', 'Couples'],
  },

  {
    id: 'maldives-luxury',
    destinationId: 'maldives',
    name: 'Maldives Luxury Retreat',
    duration: 5,
    nights: 4,
    hotelName: 'Conrad Maldives Rangali Island',
    activityNames: [
      'Scuba Diving',
      'Dolphin Watching',
      'Sunset Sailing',
    ],
    transportCost: 18000,
    foodCostPerPersonPerDay: 3000,
    description:
      'A luxury island escape designed for couples and special occasions.',
    tags: ['Luxury', 'Honeymoon', 'Premium'],
  },

  // =====================================================
  // JAIPUR
  // =====================================================

  {
    id: 'jaipur-budget',
    destinationId: 'jaipur',
    name: 'Jaipur Heritage Explorer',
    duration: 3,
    nights: 2,
    hotelName: 'Umaid Bhawan Heritage House',
    activityNames: [
      'City Palace',
      'Amber Fort',
      'Jaipur Food Walk',
    ],
    transportCost: 4000,
    foodCostPerPersonPerDay: 700,
    description:
      'Discover Jaipur royal architecture, food and heritage at an affordable price.',
    tags: ['Budget', 'Culture', 'Family'],
  },

  {
    id: 'jaipur-premium',
    destinationId: 'jaipur',
    name: 'Royal Jaipur Experience',
    duration: 4,
    nights: 3,
    hotelName: 'ITC Rajputana',
    activityNames: [
      'City Palace',
      'Amber Fort',
      'Block Printing Workshop',
      'Jaipur Night Tour',
    ],
    transportCost: 6000,
    foodCostPerPersonPerDay: 1100,
    description:
      'Experience Jaipur royal history, crafts and evening culture.',
    tags: ['Premium', 'Culture', 'Family'],
  },

  {
    id: 'jaipur-luxury',
    destinationId: 'jaipur',
    name: 'Jaipur Royal Luxury',
    duration: 4,
    nights: 3,
    hotelName: 'Rambagh Palace',
    activityNames: [
      'City Palace',
      'Amber Fort',
      'Jaipur Food Walk',
      'Jaipur Night Tour',
    ],
    transportCost: 8000,
    foodCostPerPersonPerDay: 1800,
    description:
      'Stay like royalty while exploring the heritage and cuisine of Jaipur.',
    tags: ['Luxury', 'Royal', 'Couples'],
  },

  // =====================================================
  // KERALA
  // =====================================================

  {
    id: 'kerala-budget',
    destinationId: 'kerala',
    name: 'Kerala Nature Escape',
    duration: 5,
    nights: 4,
    hotelName: 'Tea County Munnar',
    activityNames: [
      'Munnar Tea Experience',
      'Kathakali Performance',
      'Periyar Wildlife Safari',
    ],
    transportCost: 9000,
    foodCostPerPersonPerDay: 800,
    description:
      'A scenic Kerala trip covering tea plantations, culture and wildlife.',
    tags: ['Budget', 'Nature', 'Family'],
  },

  {
    id: 'kerala-backwater',
    destinationId: 'kerala',
    name: 'Kerala Backwater Experience',
    duration: 5,
    nights: 4,
    hotelName: 'Marari Beach Resort',
    activityNames: [
      'Kerala Houseboat',
      'Kathakali Performance',
      'Ayurveda Experience',
    ],
    transportCost: 10000,
    foodCostPerPersonPerDay: 1100,
    description:
      'Relax through Kerala beaches, backwaters, culture and wellness experiences.',
    tags: ['Relaxation', 'Couples', 'Family'],
  },

  {
    id: 'kerala-luxury',
    destinationId: 'kerala',
    name: 'Kerala Luxury Retreat',
    duration: 6,
    nights: 5,
    hotelName: 'Kumarakom Lake Resort',
    activityNames: [
      'Kerala Houseboat',
      'Ayurveda Experience',
      'Munnar Tea Experience',
    ],
    transportCost: 13000,
    foodCostPerPersonPerDay: 1600,
    description:
      'A premium Kerala holiday combining luxury, wellness and backwaters.',
    tags: ['Luxury', 'Wellness', 'Couples'],
  },

  // =====================================================
  // MEGHALAYA
  // =====================================================

  {
    id: 'meghalaya-budget',
    destinationId: 'meghalaya',
    name: 'Meghalaya Hidden Gems',
    duration: 5,
    nights: 4,
    hotelName: 'The Orchid Hotel',
    activityNames: [
      'Cherrapunji Exploration',
      'Dawki River Experience',
      'Waterfall Exploration',
    ],
    transportCost: 8000,
    foodCostPerPersonPerDay: 700,
    description:
      'Discover waterfalls, rivers and the breathtaking landscapes of Meghalaya.',
    tags: ['Budget', 'Nature', 'Underrated'],
  },

  {
    id: 'meghalaya-adventure',
    destinationId: 'meghalaya',
    name: 'Meghalaya Adventure',
    duration: 6,
    nights: 5,
    hotelName: 'Hotel Polo Towers',
    activityNames: [
      'Living Root Bridge Trek',
      'Cherrapunji Exploration',
      'Dawki River Experience',
      'Mawsynram Exploration',
    ],
    transportCost: 10000,
    foodCostPerPersonPerDay: 900,
    description:
      'Explore Meghalaya legendary living root bridges, waterfalls and rivers.',
    tags: ['Adventure', 'Trekking', 'Nature'],
  },

  // =====================================================
  // KASHMIR
  // =====================================================

  {
    id: 'kashmir-budget',
    destinationId: 'kashmir',
    name: 'Kashmir Valley Explorer',
    duration: 5,
    nights: 4,
    hotelName: 'Dal Lake Houseboat Stay',
    activityNames: [
      'Shikara Ride',
      'Pahalgam Valley',
      'Sonamarg',
    ],
    transportCost: 9000,
    foodCostPerPersonPerDay: 800,
    description:
      'Experience Kashmir lakes, valleys and mountain landscapes.',
    tags: ['Budget', 'Family', 'Nature'],
  },

  {
    id: 'kashmir-adventure',
    destinationId: 'kashmir',
    name: 'Kashmir Adventure',
    duration: 6,
    nights: 5,
    hotelName: 'The Lalit Grand Palace',
    activityNames: [
      'Gulmarg Gondola',
      'Pahalgam Valley',
      'Sonamarg',
      'Shikara Ride',
    ],
    transportCost: 12000,
    foodCostPerPersonPerDay: 1100,
    description:
      'A complete Kashmir experience covering Gulmarg, Pahalgam and Sonamarg.',
    tags: ['Adventure', 'Family', 'Snow'],
  },

  {
    id: 'kashmir-luxury',
    destinationId: 'kashmir',
    name: 'Kashmir Luxury Escape',
    duration: 6,
    nights: 5,
    hotelName: 'The Khyber Himalayan Resort',
    activityNames: [
      'Gulmarg Gondola',
      'Pahalgam Valley',
      'Sonamarg',
      'Shikara Ride',
    ],
    transportCost: 15000,
    foodCostPerPersonPerDay: 1700,
    description:
      'A luxurious Himalayan escape with premium accommodation and scenic experiences.',
    tags: ['Luxury', 'Couples', 'Premium'],
  },

  // =====================================================
  // THAILAND
  // =====================================================

  {
    id: 'thailand-budget',
    destinationId: 'thailand',
    name: 'Thailand Explorer',
    duration: 5,
    nights: 4,
    hotelName: null,
    activityNames: [
      'Bangkok City Tour',
      'Thailand Food Tour',
      'Phi Phi Island Tour',
    ],
    transportCost: 12000,
    foodCostPerPersonPerDay: 900,
    description:
      'A balanced Thailand holiday combining Bangkok, food and island experiences.',
    tags: ['Budget', 'Friends', 'Beach'],
  },

  {
    id: 'thailand-adventure',
    destinationId: 'thailand',
    name: 'Thailand Adventure',
    duration: 6,
    nights: 5,
    hotelName: null,
    activityNames: [
      'Phi Phi Island Tour',
      'Snorkeling',
      'Elephant Sanctuary',
      'Bangkok City Tour',
    ],
    transportCost: 15000,
    foodCostPerPersonPerDay: 1100,
    description:
      'Explore Thailand islands, wildlife and vibrant cities.',
    tags: ['Adventure', 'Friends', 'Beach'],
  },

  // =====================================================
  // TIRTHAN VALLEY
  // =====================================================

  {
    id: 'tirthan-hidden',
    destinationId: 'tirthan-valley',
    name: 'Tirthan Valley Hidden Escape',
    duration: 4,
    nights: 3,
    hotelName: null,
    activityNames: [
      'Great Himalayan National Park',
      'Jibhi Waterfall',
      'Village Walk',
    ],
    transportCost: 7000,
    foodCostPerPersonPerDay: 700,
    description:
      'Escape the crowded hill stations and experience peaceful Himalayan villages.',
    tags: ['Underrated', 'Nature', 'Budget'],
  },

  {
    id: 'tirthan-adventure',
    destinationId: 'tirthan-valley',
    name: 'Tirthan Adventure',
    duration: 5,
    nights: 4,
    hotelName: null,
    activityNames: [
      'Great Himalayan National Park',
      'Trout Fishing',
      'Jibhi Waterfall',
      'Village Walk',
    ],
    transportCost: 8500,
    foodCostPerPersonPerDay: 850,
    description:
      'A peaceful but adventurous Himalayan experience away from mainstream tourism.',
    tags: ['Adventure', 'Underrated', 'Trekking'],
  },

  // =====================================================
  // ZIRO
  // =====================================================

  {
    id: 'ziro-hidden',
    destinationId: 'ziro',
    name: 'Ziro Valley Hidden Escape',
    duration: 5,
    nights: 4,
    hotelName: null,
    activityNames: [
      'Ziro Valley Exploration',
      'Apatani Culture Experience',
      'Village Walk',
    ],
    transportCost: 9000,
    foodCostPerPersonPerDay: 700,
    description:
      'Discover the peaceful landscapes and unique Apatani culture of Ziro Valley.',
    tags: ['Underrated', 'Culture', 'Nature'],
  },

  {
    id: 'ziro-explorer',
    destinationId: 'ziro',
    name: 'Ziro Culture & Nature',
    duration: 6,
    nights: 5,
    hotelName: null,
    activityNames: [
      'Ziro Valley Exploration',
      'Apatani Culture Experience',
      'Village Walk',
    ],
    transportCost: 11000,
    foodCostPerPersonPerDay: 850,
    description:
      'A slow-travel experience through villages, valleys and indigenous culture.',
    tags: ['Culture', 'Underrated', 'Slow Travel'],
  },

  // =====================================================
  // GUREZ VALLEY
  // =====================================================

  {
    id: 'gurez-hidden',
    destinationId: 'gurez-valley',
    name: 'Gurez Valley Hidden Gem',
    duration: 5,
    nights: 4,
    hotelName: null,
    activityNames: [
      'Gurez Valley Exploration',
      'Gurez Village Experience',
    ],
    transportCost: 10000,
    foodCostPerPersonPerDay: 750,
    description:'Experience one of Kashmir lesser-known valleys surrounded by dramatic mountains.',
    tags: ['Underrated', 'Nature', 'Budget'],
  },

  {
    id: 'gurez-adventure',
    destinationId: 'gurez-valley',
    name: 'Gurez Adventure Expedition',
    duration: 6,
    nights: 5,
    hotelName: null,
    activityNames: [
      'Gurez Valley Exploration',
      'Gurez Trek',
      'Gurez Village Experience',
    ],
    transportCost: 13000,
    foodCostPerPersonPerDay: 900,
    description:
      'A remote Himalayan adventure for travellers looking beyond conventional destinations.',
    tags: ['Adventure', 'Underrated', 'Trekking'],
  },
];

export default packages;