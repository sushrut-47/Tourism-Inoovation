const hotels = [
  // =========================
  // GOA
  // =========================

  {
    id: 'taj-exotica-goa',
    destinationId: 'goa',
    name: 'Taj Exotica Resort & Spa',
    location: 'Benaulim, Goa',
    rating: 4.7,
    reviews: 2841,
    pricePerNight: 6200,
    hotelType: 'Luxury Resort',
    amenities: [
      'Pool',
      'Beach Access',
      'Breakfast',
      'Spa',
      'WiFi',
    ],
  },
  {
    id: 'westin-goa',
    destinationId: 'goa',
    name: 'The Westin Goa',
    location: 'Anjuna, Goa',
    rating: 4.6,
    reviews: 1932,
    pricePerNight: 5800,
    hotelType: 'Luxury Resort',
    amenities: [
      'Pool',
      'Beach Access',
      'Breakfast',
      'Gym',
      'WiFi',
    ],
  },
  {
    id: 'w-goa',
    destinationId: 'goa',
    name: 'W Goa',
    location: 'Vagator, Goa',
    rating: 4.5,
    reviews: 2410,
    pricePerNight: 7200,
    hotelType: 'Luxury Resort',
    amenities: [
      'Pool',
      'Beach Access',
      'Breakfast',
      'Spa',
      'WiFi',
    ],
  },
  {
    id: 'radisson-goa',
    destinationId: 'goa',
    name: 'Radisson Blu Resort Goa',
    location: 'Cavelossim, Goa',
    rating: 4.4,
    reviews: 3150,
    pricePerNight: 4900,
    hotelType: 'Resort',
    amenities: [
      'Pool',
      'Beach Access',
      'Breakfast',
      'Restaurant',
      'WiFi',
    ],
  },
  {
    id: 'novotel-goa',
    destinationId: 'goa',
    name: 'Novotel Goa Resort',
    location: 'Candolim, Goa',
    rating: 4.3,
    reviews: 2210,
    pricePerNight: 4200,
    hotelType: 'Resort',
    amenities: [
      'Pool',
      'Breakfast',
      'Restaurant',
      'Spa',
      'WiFi',
    ],
  },

  // =========================
  // BALI
  // =========================

  {
    id: 'ayodya-bali',
    destinationId: 'bali',
    name: 'Ayodya Resort Bali',
    location: 'Nusa Dua, Bali',
    rating: 4.6,
    reviews: 4210,
    pricePerNight: 4800,
    hotelType: 'Beach Resort',
    amenities: [
      'Pool',
      'Beach Access',
      'Breakfast',
      'Spa',
      'WiFi',
    ],
  },
  {
    id: 'hard-rock-bali',
    destinationId: 'bali',
    name: 'Hard Rock Hotel Bali',
    location: 'Kuta, Bali',
    rating: 4.5,
    reviews: 5230,
    pricePerNight: 4100,
    hotelType: 'Resort',
    amenities: [
      'Pool',
      'Breakfast',
      'Gym',
      'Restaurant',
      'WiFi',
    ],
  },
  {
    id: 'anvaya-bali',
    destinationId: 'bali',
    name: 'The Anvaya Beach Resort Bali',
    location: 'Kuta, Bali',
    rating: 4.7,
    reviews: 3860,
    pricePerNight: 5200,
    hotelType: 'Beach Resort',
    amenities: [
      'Pool',
      'Beach Access',
      'Breakfast',
      'Spa',
      'WiFi',
    ],
  },
  {
    id: 'potato-head-bali',
    destinationId: 'bali',
    name: 'Potato Head Suites',
    location: 'Seminyak, Bali',
    rating: 4.8,
    reviews: 2140,
    pricePerNight: 6800,
    hotelType: 'Luxury Hotel',
    amenities: [
      'Pool',
      'Beach Access',
      'Breakfast',
      'Restaurant',
      'WiFi',
    ],
  },
  {
    id: 'ubud-valley-bali',
    destinationId: 'bali',
    name: 'Ubud Valley Resort',
    location: 'Ubud, Bali',
    rating: 4.6,
    reviews: 1780,
    pricePerNight: 3500,
    hotelType: 'Resort',
    amenities: [
      'Pool',
      'Breakfast',
      'Spa',
      'Restaurant',
      'WiFi',
    ],
  },

  // =========================
  // MANALI
  // =========================

  {
    id: 'the-himalayan-manali',
    destinationId: 'manali',
    name: 'The Himalayan',
    location: 'Manali, Himachal Pradesh',
    rating: 4.6,
    reviews: 1840,
    pricePerNight: 5200,
    hotelType: 'Luxury Resort',
    amenities: [
      'Pool',
      'Mountain View',
      'Breakfast',
      'Spa',
      'WiFi',
    ],
  },
  {
    id: 'whistling-pines-manali',
    destinationId: 'manali',
    name: 'Whistling Pines Resort',
    location: 'Manali, Himachal Pradesh',
    rating: 4.4,
    reviews: 1240,
    pricePerNight: 3100,
    hotelType: 'Resort',
    amenities: [
      'Mountain View',
      'Breakfast',
      'Restaurant',
      'WiFi',
    ],
  },
  {
    id: 'snow-valley-manali',
    destinationId: 'manali',
    name: 'Snow Valley Resorts',
    location: 'Manali, Himachal Pradesh',
    rating: 4.3,
    reviews: 2180,
    pricePerNight: 2800,
    hotelType: 'Resort',
    amenities: [
      'Mountain View',
      'Breakfast',
      'Restaurant',
      'WiFi',
    ],
  },
  {
    id: 'shingar-manali',
    destinationId: 'manali',
    name: 'Shingar Regency',
    location: 'Manali, Himachal Pradesh',
    rating: 4.2,
    reviews: 1520,
    pricePerNight: 2400,
    hotelType: 'Hotel',
    amenities: [
      'Breakfast',
      'Restaurant',
      'WiFi',
    ],
  },

  // =========================
  // DUBAI
  // =========================

  {
    id: 'atlantis-dubai',
    destinationId: 'dubai',
    name: 'Atlantis The Palm',
    location: 'Palm Jumeirah, Dubai',
    rating: 4.8,
    reviews: 8620,
    pricePerNight: 18500,
    hotelType: 'Luxury Resort',
    amenities: [
      'Pool',
      'Private Beach',
      'Breakfast',
      'Spa',
      'WiFi',
    ],
  },
  {
    id: 'jw-marriott-dubai',
    destinationId: 'dubai',
    name: 'JW Marriott Marquis Dubai',
    location: 'Business Bay, Dubai',
    rating: 4.7,
    reviews: 7240,
    pricePerNight: 12500,
    hotelType: 'Luxury Hotel',
    amenities: [
      'Pool',
      'Breakfast',
      'Gym',
      'Spa',
      'WiFi',
    ],
  },
  {
    id: 'rove-downtown-dubai',
    destinationId: 'dubai',
    name: 'Rove Downtown',
    location: 'Downtown Dubai',
    rating: 4.6,
    reviews: 6120,
    pricePerNight: 5500,
    hotelType: 'Hotel',
    amenities: [
      'Pool',
      'Breakfast',
      'Gym',
      'Restaurant',
      'WiFi',
    ],
  },
  {
    id: 'premier-inn-dubai',
    destinationId: 'dubai',
    name: 'Premier Inn Dubai International Airport',
    location: 'Dubai International Airport',
    rating: 4.2,
    reviews: 4930,
    pricePerNight: 3900,
    hotelType: 'Budget Hotel',
    amenities: [
      'Pool',
      'Breakfast',
      'Restaurant',
      'WiFi',
    ],
  },

  // =========================
  // MALDIVES
  // =========================

  {
    id: 'conrad-maldives',
    destinationId: 'maldives',
    name: 'Conrad Maldives Rangali Island',
    location: 'Rangali Island, Maldives',
    rating: 4.8,
    reviews: 3520,
    pricePerNight: 32000,
    hotelType: 'Luxury Resort',
    amenities: [
      'Private Beach',
      'Pool',
      'Breakfast',
      'Spa',
      'WiFi',
    ],
  },
  {
    id: 'centara-maldives',
    destinationId: 'maldives',
    name: 'Centara Ras Fushi Resort',
    location: 'North Male Atoll, Maldives',
    rating: 4.6,
    reviews: 2780,
    pricePerNight: 22000,
    hotelType: 'Beach Resort',
    amenities: [
      'Private Beach',
      'Pool',
      'Breakfast',
      'Spa',
      'WiFi',
    ],
  },
  {
    id: 'sun-siyam-maldives',
    destinationId: 'maldives',
    name: 'Sun Siyam Olhuveli',
    location: 'South Male Atoll, Maldives',
    rating: 4.5,
    reviews: 3180,
    pricePerNight: 18500,
    hotelType: 'Beach Resort',
    amenities: [
      'Private Beach',
      'Pool',
      'Breakfast',
      'Restaurant',
      'WiFi',
    ],
  },

  // =========================
  // JAIPUR
  // =========================

  {
    id: 'rambagh-jaipur',
    destinationId: 'jaipur',
    name: 'Rambagh Palace',
    location: 'Jaipur, Rajasthan',
    rating: 4.9,
    reviews: 3420,
    pricePerNight: 18500,
    hotelType: 'Luxury Palace',
    amenities: [
      'Pool',
      'Breakfast',
      'Spa',
      'Restaurant',
      'WiFi',
    ],
  },
  {
    id: 'itc-rajputana',
    destinationId: 'jaipur',
    name: 'ITC Rajputana',
    location: 'Jaipur, Rajasthan',
    rating: 4.6,
    reviews: 4210,
    pricePerNight: 6500,
    hotelType: 'Luxury Hotel',
    amenities: [
      'Pool',
      'Breakfast',
      'Gym',
      'Spa',
      'WiFi',
    ],
  },
  {
    id: 'umaid-bhawan-jaipur',
    destinationId: 'jaipur',
    name: 'Umaid Bhawan Heritage House',
    location: 'Jaipur, Rajasthan',
    rating: 4.5,
    reviews: 2890,
    pricePerNight: 3500,
    hotelType: 'Heritage Hotel',
    amenities: [
      'Pool',
      'Breakfast',
      'Restaurant',
      'WiFi',
    ],
  },

  // =========================
  // KERALA
  // =========================

  {
    id: 'kumarakom-kerala',
    destinationId: 'kerala',
    name: 'Kumarakom Lake Resort',
    location: 'Kumarakom, Kerala',
    rating: 4.7,
    reviews: 2450,
    pricePerNight: 9500,
    hotelType: 'Luxury Resort',
    amenities: [
      'Pool',
      'Lake View',
      'Breakfast',
      'Spa',
      'WiFi',
    ],
  },
  {
    id: 'marari-beach-kerala',
    destinationId: 'kerala',
    name: 'Marari Beach Resort',
    location: 'Marari, Kerala',
    rating: 4.6,
    reviews: 2160,
    pricePerNight: 8200,
    hotelType: 'Beach Resort',
    amenities: [
      'Pool',
      'Beach Access',
      'Breakfast',
      'Spa',
      'WiFi',
    ],
  },
  {
    id: 'tea-county-kerala',
    destinationId: 'kerala',
    name: 'Tea County Munnar',
    location: 'Munnar, Kerala',
    rating: 4.4,
    reviews: 3410,
    pricePerNight: 4200,
    hotelType: 'Hill Resort',
    amenities: [
      'Mountain View',
      'Breakfast',
      'Restaurant',
      'WiFi',
    ],
  },

  // =========================
  // MEGHALAYA
  // =========================

  {
    id: 'polo-towers-meghalaya',
    destinationId: 'meghalaya',
    name: 'Hotel Polo Towers',
    location: 'Shillong, Meghalaya',
    rating: 4.4,
    reviews: 1840,
    pricePerNight: 4200,
    hotelType: 'Hotel',
    amenities: [
      'Breakfast',
      'Restaurant',
      'Gym',
      'WiFi',
    ],
  },
  {
    id: 'orchid-meghalaya',
    destinationId: 'meghalaya',
    name: 'The Orchid Hotel',
    location: 'Shillong, Meghalaya',
    rating: 4.2,
    reviews: 960,
    pricePerNight: 2800,
    hotelType: 'Hotel',
    amenities: [
      'Breakfast',
      'Restaurant',
      'WiFi',
    ],
  },

  // =========================
  // KASHMIR
  // =========================

  {
    id: 'khyber-kashmir',
    destinationId: 'kashmir',
    name: 'The Khyber Himalayan Resort',
    location: 'Gulmarg, Kashmir',
    rating: 4.8,
    reviews: 3140,
    pricePerNight: 12500,
    hotelType: 'Luxury Resort',
    amenities: [
      'Mountain View',
      'Breakfast',
      'Spa',
      'Restaurant',
      'WiFi',
    ],
  },
  {
    id: 'lalit-kashmir',
    destinationId: 'kashmir',
    name: 'The Lalit Grand Palace',
    location: 'Srinagar, Kashmir',
    rating: 4.6,
    reviews: 2260,
    pricePerNight: 7200,
    hotelType: 'Luxury Hotel',
    amenities: [
      'Garden',
      'Breakfast',
      'Restaurant',
      'Spa',
      'WiFi',
    ],
  },
  {
    id: 'dal-lake-houseboat',
    destinationId: 'kashmir',
    name: 'Dal Lake Houseboat Stay',
    location: 'Dal Lake, Srinagar',
    rating: 4.5,
    reviews: 1780,
    pricePerNight: 3200,
    hotelType: 'Houseboat',
    amenities: [
      'Lake View',
      'Breakfast',
      'Restaurant',
      'WiFi',
    ],
  },

  // =========================
  // THAILAND
  // =========================

  {
    id: 'thailand-budget-hotel',
    destinationId: 'thailand',
    name: 'Ibis Styles Bangkok',
    location: 'Bangkok, Thailand',
    rating: 4.3,
    reviews: 3120,
    pricePerNight: 3200,
    hotelType: 'Budget Hotel',
    amenities: [
      'Breakfast',
      'Pool',
      'Restaurant',
      'WiFi',
    ],
  },
  {
    id: 'thailand-standard-hotel',
    destinationId: 'thailand',
    name: 'Novotel Phuket Resort',
    location: 'Phuket, Thailand',
    rating: 4.5,
    reviews: 4280,
    pricePerNight: 5200,
    hotelType: 'Resort',
    amenities: [
      'Pool',
      'Beach Access',
      'Breakfast',
      'Spa',
      'WiFi',
    ],
  },

  // =========================
  // TIRTHAN VALLEY
  // =========================

  {
    id: 'tirthan-homestay',
    destinationId: 'tirthan-valley',
    name: 'Tirthan Valley Riverside Homestay',
    location: 'Tirthan Valley, Himachal Pradesh',
    rating: 4.7,
    reviews: 620,
    pricePerNight: 2200,
    hotelType: 'Homestay',
    amenities: [
      'River View',
      'Breakfast',
      'Bonfire',
      'WiFi',
    ],
  },

  // =========================
  // ZIRO
  // =========================

  {
    id: 'ziro-homestay',
    destinationId: 'ziro',
    name: 'Ziro Valley Homestay',
    location: 'Ziro, Arunachal Pradesh',
    rating: 4.7,
    reviews: 430,
    pricePerNight: 1800,
    hotelType: 'Homestay',
    amenities: [
      'Mountain View',
      'Breakfast',
      'Local Food',
      'WiFi',
    ],
  },

  // =========================
  // GUREZ VALLEY
  // =========================

  {
    id: 'gurez-homestay',
    destinationId: 'gurez-valley',
    name: 'Gurez Valley Riverside Stay',
    location: 'Gurez Valley, Kashmir',
    rating: 4.8,
    reviews: 290,
    pricePerNight: 2000,
    hotelType: 'Homestay',
    amenities: [
      'Mountain View',
      'River View',
      'Breakfast',
      'Bonfire',
    ],
  },
];

export default hotels;