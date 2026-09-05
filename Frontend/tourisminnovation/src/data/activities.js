const activities = [

  // ============================================================
  // GOA
  // ============================================================

  {
    id: 'goa-scuba-diving',
    destinationId: 'goa',
    name: 'Scuba Diving',
    category: 'Adventure',
    duration: '3 Hours',
    pricePerPerson: 2200,
    rating: 4.6,
    popularity: 92,
    description:
      'Explore colorful marine life and coral reefs along the Goa coastline.',
    bestFor: ['Adventure', 'Couples', 'Friends'],
  },

  {
    id: 'goa-water-sports',
    destinationId: 'goa',
    name: 'Water Sports',
    category: 'Adventure',
    duration: '2 Hours',
    pricePerPerson: 1500,
    rating: 4.5,
    popularity: 94,
    description:
      'Enjoy parasailing, jet skiing, banana boat rides and other water activities.',
    bestFor: ['Adventure', 'Friends', 'Families'],
  },

  {
    id: 'goa-dolphin-cruise',
    destinationId: 'goa',
    name: 'Dolphin Watching Cruise',
    category: 'Experience',
    duration: '2 Hours',
    pricePerPerson: 1200,
    rating: 4.4,
    popularity: 82,
    description:
      'Take a scenic boat ride and spot dolphins along the Goan coastline.',
    bestFor: ['Families', 'Couples'],
  },

  {
    id: 'goa-sunset-cruise',
    destinationId: 'goa',
    name: 'Sunset River Cruise',
    category: 'Experience',
    duration: '2 Hours',
    pricePerPerson: 900,
    rating: 4.5,
    popularity: 88,
    description:
      'Relax on a sunset cruise while enjoying music and views of the Mandovi River.',
    bestFor: ['Couples', 'Families'],
  },

  {
    id: 'goa-old-goa-tour',
    destinationId: 'goa',
    name: 'Old Goa Heritage Tour',
    category: 'Sightseeing',
    duration: '4 Hours',
    pricePerPerson: 800,
    rating: 4.3,
    popularity: 75,
    description:
      'Explore historic churches, Portuguese architecture and heritage sites.',
    bestFor: ['Families', 'History', 'Couples'],
  },

  {
    id: 'goa-spice-plantation',
    destinationId: 'goa',
    name: 'Spice Plantation Tour',
    category: 'Experience',
    duration: '4 Hours',
    pricePerPerson: 1100,
    rating: 4.4,
    popularity: 72,
    description:
      'Discover traditional Goan spice farms and enjoy a local lunch.',
    bestFor: ['Families', 'Nature'],
  },


  // ============================================================
  // BALI
  // ============================================================

  {
    id: 'bali-ubud-tour',
    destinationId: 'bali',
    name: 'Ubud Cultural Tour',
    category: 'Sightseeing',
    duration: '8 Hours',
    pricePerPerson: 2500,
    rating: 4.7,
    popularity: 95,
    description:
      'Explore temples, rice terraces, waterfalls and traditional Balinese villages.',
    bestFor: ['Couples', 'Families', 'Culture'],
  },

  {
    id: 'bali-snorkeling',
    destinationId: 'bali',
    name: 'Nusa Penida Snorkeling',
    category: 'Adventure',
    duration: '7 Hours',
    pricePerPerson: 3200,
    rating: 4.8,
    popularity: 96,
    description:
      'Discover crystal-clear waters, coral reefs and tropical marine life.',
    bestFor: ['Adventure', 'Couples', 'Friends'],
  },

  {
    id: 'bali-temple-tour',
    destinationId: 'bali',
    name: 'Bali Temple Tour',
    category: 'Culture',
    duration: '6 Hours',
    pricePerPerson: 1800,
    rating: 4.7,
    popularity: 90,
    description:
      'Visit some of Bali’s most beautiful temples and cultural landmarks.',
    bestFor: ['Culture', 'Families', 'Couples'],
  },

  {
    id: 'bali-surfing',
    destinationId: 'bali',
    name: 'Surfing Lesson',
    category: 'Adventure',
    duration: '3 Hours',
    pricePerPerson: 1800,
    rating: 4.6,
    popularity: 87,
    description:
      'Learn the basics of surfing with professional instructors.',
    bestFor: ['Adventure', 'Friends'],
  },

  {
    id: 'bali-cooking',
    destinationId: 'bali',
    name: 'Balinese Cooking Class',
    category: 'Experience',
    duration: '4 Hours',
    pricePerPerson: 1600,
    rating: 4.6,
    popularity: 80,
    description:
      'Learn how to prepare traditional Balinese dishes using local ingredients.',
    bestFor: ['Couples', 'Culture', 'Food'],
  },

  {
    id: 'bali-rice-terrace',
    destinationId: 'bali',
    name: 'Tegallalang Rice Terrace',
    category: 'Nature',
    duration: '3 Hours',
    pricePerPerson: 1000,
    rating: 4.5,
    popularity: 84,
    description:
      'Walk through spectacular terraced rice fields surrounded by tropical scenery.',
    bestFor: ['Nature', 'Couples', 'Photography'],
  },


  // ============================================================
  // MANALI
  // ============================================================

  {
    id: 'manali-rohtang',
    destinationId: 'manali',
    name: 'Rohtang Pass Excursion',
    category: 'Adventure',
    duration: '8 Hours',
    pricePerPerson: 2500,
    rating: 4.6,
    popularity: 94,
    description:
      'Experience snow-covered mountains and spectacular Himalayan landscapes.',
    bestFor: ['Adventure', 'Families', 'Friends'],
  },

  {
    id: 'manali-solang',
    destinationId: 'manali',
    name: 'Solang Valley Adventure',
    category: 'Adventure',
    duration: '5 Hours',
    pricePerPerson: 1800,
    rating: 4.6,
    popularity: 93,
    description:
      'Enjoy paragliding, cable cars and mountain activities in Solang Valley.',
    bestFor: ['Adventure', 'Friends', 'Families'],
  },

  {
    id: 'manali-river-rafting',
    destinationId: 'manali',
    name: 'River Rafting',
    category: 'Adventure',
    duration: '3 Hours',
    pricePerPerson: 1400,
    rating: 4.5,
    popularity: 82,
    description:
      'Experience white-water rafting through the Himalayan river valleys.',
    bestFor: ['Adventure', 'Friends'],
  },

  {
    id: 'manali-hidimba',
    destinationId: 'manali',
    name: 'Hidimba Temple Tour',
    category: 'Culture',
    duration: '2 Hours',
    pricePerPerson: 500,
    rating: 4.4,
    popularity: 78,
    description:
      'Visit the historic Hidimba Devi Temple surrounded by cedar forests.',
    bestFor: ['Culture', 'Families'],
  },

  {
    id: 'manali-old-town',
    destinationId: 'manali',
    name: 'Old Manali Walking Tour',
    category: 'Experience',
    duration: '3 Hours',
    pricePerPerson: 700,
    rating: 4.5,
    popularity: 80,
    description:
      'Explore cafes, local markets and the relaxed atmosphere of Old Manali.',
    bestFor: ['Couples', 'Friends'],
  },

  {
    id: 'manali-trekking',
    destinationId: 'manali',
    name: 'Himalayan Trek',
    category: 'Adventure',
    duration: '6 Hours',
    pricePerPerson: 1600,
    rating: 4.7,
    popularity: 85,
    description:
      'Experience a guided trek through scenic Himalayan trails.',
    bestFor: ['Adventure', 'Nature', 'Friends'],
  },


  // ============================================================
  // DUBAI
  // ============================================================

  {
    id: 'dubai-desert-safari',
    destinationId: 'dubai',
    name: 'Desert Safari',
    category: 'Adventure',
    duration: '7 Hours',
    pricePerPerson: 3500,
    rating: 4.8,
    popularity: 98,
    description:
      'Experience dune bashing, camel rides, dinner and desert entertainment.',
    bestFor: ['Adventure', 'Families', 'Couples'],
  },

  {
    id: 'dubai-burj-khalifa',
    destinationId: 'dubai',
    name: 'Burj Khalifa Experience',
    category: 'Sightseeing',
    duration: '2 Hours',
    pricePerPerson: 3200,
    rating: 4.7,
    popularity: 97,
    description:
      'Enjoy panoramic views of Dubai from one of the world’s tallest buildings.',
    bestFor: ['Families', 'Couples'],
  },

  {
    id: 'dubai-marina-cruise',
    destinationId: 'dubai',
    name: 'Dubai Marina Cruise',
    category: 'Experience',
    duration: '2 Hours',
    pricePerPerson: 1800,
    rating: 4.6,
    popularity: 88,
    description:
      'Cruise through Dubai Marina while enjoying the city skyline.',
    bestFor: ['Couples', 'Families'],
  },

  {
    id: 'dubai-aquarium',
    destinationId: 'dubai',
    name: 'Dubai Aquarium',
    category: 'Family',
    duration: '3 Hours',
    pricePerPerson: 2200,
    rating: 4.5,
    popularity: 86,
    description:
      'Explore one of the world’s largest indoor aquariums.',
    bestFor: ['Families', 'Kids'],
  },

  {
    id: 'dubai-old-city',
    destinationId: 'dubai',
    name: 'Old Dubai Heritage Tour',
    category: 'Culture',
    duration: '4 Hours',
    pricePerPerson: 1200,
    rating: 4.4,
    popularity: 70,
    description:
      'Discover traditional markets, historic neighborhoods and local culture.',
    bestFor: ['Culture', 'Families'],
  },


  // ============================================================
  // MALDIVES
  // ============================================================

  {
    id: 'maldives-snorkeling',
    destinationId: 'maldives',
    name: 'Coral Reef Snorkeling',
    category: 'Adventure',
    duration: '3 Hours',
    pricePerPerson: 2800,
    rating: 4.8,
    popularity: 96,
    description:
      'Explore vibrant coral reefs and tropical marine life.',
    bestFor: ['Adventure', 'Couples'],
  },

  {
    id: 'maldives-diving',
    destinationId: 'maldives',
    name: 'Scuba Diving',
    category: 'Adventure',
    duration: '3 Hours',
    pricePerPerson: 4500,
    rating: 4.9,
    popularity: 94,
    description:
      'Dive into the clear waters of the Maldives and discover underwater life.',
    bestFor: ['Adventure', 'Couples'],
  },

  {
    id: 'maldives-dolphin',
    destinationId: 'maldives',
    name: 'Dolphin Cruise',
    category: 'Experience',
    duration: '2 Hours',
    pricePerPerson: 2500,
    rating: 4.7,
    popularity: 90,
    description:
      'Enjoy a sunset cruise while searching for playful dolphins.',
    bestFor: ['Couples', 'Families'],
  },

  {
    id: 'maldives-sunset',
    destinationId: 'maldives',
    name: 'Sunset Sailing',
    category: 'Experience',
    duration: '2 Hours',
    pricePerPerson: 2200,
    rating: 4.8,
    popularity: 91,
    description:
      'Sail across turquoise waters while watching the sunset.',
    bestFor: ['Couples'],
  },

  {
    id: 'maldives-fishing',
    destinationId: 'maldives',
    name: 'Night Fishing',
    category: 'Experience',
    duration: '3 Hours',
    pricePerPerson: 1800,
    rating: 4.5,
    popularity: 68,
    description:
      'Experience traditional night fishing with local guides.',
    bestFor: ['Families', 'Friends'],
  },


  // ============================================================
  // JAIPUR
  // ============================================================

  {
    id: 'jaipur-city-palace',
    destinationId: 'jaipur',
    name: 'City Palace Tour',
    category: 'Culture',
    duration: '3 Hours',
    pricePerPerson: 900,
    rating: 4.6,
    popularity: 92,
    description:
      'Explore the royal City Palace and learn about Jaipur’s history.',
    bestFor: ['Culture', 'Families'],
  },

  {
    id: 'jaipur-amber-fort',
    destinationId: 'jaipur',
    name: 'Amber Fort Tour',
    category: 'Sightseeing',
    duration: '4 Hours',
    pricePerPerson: 1000,
    rating: 4.7,
    popularity: 95,
    description:
      'Visit the magnificent Amber Fort overlooking the Aravalli hills.',
    bestFor: ['Culture', 'Families', 'Photography'],
  },

  {
    id: 'jaipur-food-tour',
    destinationId: 'jaipur',
    name: 'Jaipur Food Walk',
    category: 'Food',
    duration: '3 Hours',
    pricePerPerson: 1200,
    rating: 4.7,
    popularity: 84,
    description:
      'Taste authentic Rajasthani street food with a local guide.',
    bestFor: ['Food', 'Couples', 'Friends'],
  },

  {
    id: 'jaipur-block-printing',
    destinationId: 'jaipur',
    name: 'Block Printing Workshop',
    category: 'Experience',
    duration: '3 Hours',
    pricePerPerson: 1000,
    rating: 4.6,
    popularity: 72,
    description:
      'Learn traditional Indian textile printing techniques.',
    bestFor: ['Culture', 'Families'],
  },

  {
    id: 'jaipur-night-tour',
    destinationId: 'jaipur',
    name: 'Jaipur Night Tour',
    category: 'Experience',
    duration: '4 Hours',
    pricePerPerson: 1300,
    rating: 4.5,
    popularity: 78,
    description:
      'Explore Jaipur’s illuminated monuments and lively markets after sunset.',
    bestFor: ['Couples', 'Friends'],
  },


  // ============================================================
  // KERALA
  // ============================================================

  {
    id: 'kerala-houseboat',
    destinationId: 'kerala',
    name: 'Alleppey Houseboat Cruise',
    category: 'Experience',
    duration: '8 Hours',
    pricePerPerson: 3000,
    rating: 4.8,
    popularity: 96,
    description:
      'Cruise through Kerala’s peaceful backwaters aboard a traditional houseboat.',
    bestFor: ['Couples', 'Families'],
  },

  {
    id: 'kerala-munnar-tea',
    destinationId: 'kerala',
    name: 'Munnar Tea Plantation Tour',
    category: 'Nature',
    duration: '5 Hours',
    pricePerPerson: 1200,
    rating: 4.7,
    popularity: 91,
    description:
      'Walk through scenic tea plantations and learn about tea production.',
    bestFor: ['Nature', 'Couples', 'Families'],
  },

  {
    id: 'kerala-kathakali',
    destinationId: 'kerala',
    name: 'Kathakali Performance',
    category: 'Culture',
    duration: '2 Hours',
    pricePerPerson: 800,
    rating: 4.5,
    popularity: 75,
    description:
      'Watch a traditional Kathakali dance and theatre performance.',
    bestFor: ['Culture', 'Families'],
  },

  {
    id: 'kerala-ayurveda',
    destinationId: 'kerala',
    name: 'Ayurvedic Wellness Experience',
    category: 'Wellness',
    duration: '3 Hours',
    pricePerPerson: 1800,
    rating: 4.6,
    popularity: 82,
    description:
      'Experience traditional Kerala wellness and relaxation treatments.',
    bestFor: ['Couples', 'Wellness'],
  },

  {
    id: 'kerala-wildlife',
    destinationId: 'kerala',
    name: 'Periyar Wildlife Safari',
    category: 'Nature',
    duration: '6 Hours',
    pricePerPerson: 1600,
    rating: 4.5,
    popularity: 80,
    description:
      'Explore Kerala’s wildlife and forests with a guided safari.',
    bestFor: ['Nature', 'Families', 'Adventure'],
  },


  // ============================================================
  // MEGHALAYA
  // ============================================================

  {
    id: 'meghalaya-living-root-bridge',
    destinationId: 'meghalaya',
    name: 'Living Root Bridge Trek',
    category: 'Adventure',
    duration: '6 Hours',
    pricePerPerson: 1500,
    rating: 4.9,
    popularity: 91,
    description:
      'Trek through lush forests to Meghalaya’s famous living root bridges.',
    bestFor: ['Adventure', 'Nature'],
  },

  {
    id: 'meghalaya-cherrapunji',
    destinationId: 'meghalaya',
    name: 'Cherrapunji Day Trip',
    category: 'Sightseeing',
    duration: '8 Hours',
    pricePerPerson: 1800,
    rating: 4.8,
    popularity: 94,
    description:
      'Explore waterfalls, cliffs and dramatic landscapes around Cherrapunji.',
    bestFor: ['Nature', 'Families'],
  },

  {
    id: 'meghalaya-dawki',
    destinationId: 'meghalaya',
    name: 'Dawki River Boating',
    category: 'Adventure',
    duration: '4 Hours',
    pricePerPerson: 1200,
    rating: 4.8,
    popularity: 90,
    description:
      'Enjoy boating on the crystal-clear waters of the Umngot River.',
    bestFor: ['Adventure', 'Couples', 'Families'],
  },

  {
    id: 'meghalaya-mawsynram',
    destinationId: 'meghalaya',
    name: 'Mawsynram Village Experience',
    category: 'Culture',
    duration: '5 Hours',
    pricePerPerson: 1000,
    rating: 4.5,
    popularity: 65,
    description:
      'Experience rural Meghalaya and its unique landscapes and traditions.',
    bestFor: ['Culture', 'Nature'],
  },

  {
    id: 'meghalaya-waterfall',
    destinationId: 'meghalaya',
    name: 'Waterfall Exploration',
    category: 'Nature',
    duration: '5 Hours',
    pricePerPerson: 1100,
    rating: 4.7,
    popularity: 84,
    description:
      'Discover hidden waterfalls surrounded by Meghalaya’s tropical forests.',
    bestFor: ['Nature', 'Adventure'],
  },


  // ============================================================
  // KASHMIR
  // ============================================================

  {
    id: 'kashmir-gulmarg',
    destinationId: 'kashmir',
    name: 'Gulmarg Gondola Ride',
    category: 'Adventure',
    duration: '4 Hours',
    pricePerPerson: 2200,
    rating: 4.8,
    popularity: 97,
    description:
      'Ride one of the world’s highest cable cars and enjoy spectacular mountain views.',
    bestFor: ['Adventure', 'Families', 'Couples'],
  },

  {
    id: 'kashmir-shikara',
    destinationId: 'kashmir',
    name: 'Dal Lake Shikara Ride',
    category: 'Experience',
    duration: '2 Hours',
    pricePerPerson: 700,
    rating: 4.7,
    popularity: 96,
    description:
      'Relax on a traditional Shikara boat while exploring Dal Lake.',
    bestFor: ['Couples', 'Families'],
  },

  {
    id: 'kashmir-pahalgam',
    destinationId: 'kashmir',
    name: 'Pahalgam Valley Tour',
    category: 'Nature',
    duration: '8 Hours',
    pricePerPerson: 1800,
    rating: 4.8,
    popularity: 93,
    description:
      'Explore beautiful valleys, rivers and mountain landscapes around Pahalgam.',
    bestFor: ['Nature', 'Families', 'Couples'],
  },

  {
    id: 'kashmir-sonamarg',
    destinationId: 'kashmir',
    name: 'Sonamarg Day Trip',
    category: 'Nature',
    duration: '8 Hours',
    pricePerPerson: 1900,
    rating: 4.7,
    popularity: 89,
    description:
      'Visit the spectacular alpine landscapes of Sonamarg.',
    bestFor: ['Nature', 'Adventure'],
  },

  {
    id: 'kashmir-gurez',
    destinationId: 'kashmir',
    name: 'Gurez Valley Expedition',
    category: 'Adventure',
    duration: '2 Days',
    pricePerPerson: 6500,
    rating: 4.9,
    popularity: 62,
    description:
      'Discover the remote and beautiful Gurez Valley away from mainstream tourism.',
    bestFor: ['Adventure', 'Nature', 'Photography'],
  },


  // ============================================================
  // THAILAND
  // ============================================================

  {
    id: 'thailand-island-tour',
    destinationId: 'thailand',
    name: 'Phi Phi Island Tour',
    category: 'Adventure',
    duration: '8 Hours',
    pricePerPerson: 3200,
    rating: 4.8,
    popularity: 97,
    description:
      'Explore turquoise waters, beaches and islands around Phi Phi.',
    bestFor: ['Adventure', 'Couples', 'Friends'],
  },

  {
    id: 'thailand-snorkeling',
    destinationId: 'thailand',
    name: 'Island Snorkeling',
    category: 'Adventure',
    duration: '6 Hours',
    pricePerPerson: 2500,
    rating: 4.7,
    popularity: 91,
    description:
      'Discover colorful marine life while snorkeling in tropical waters.',
    bestFor: ['Adventure', 'Friends'],
  },

  {
    id: 'thailand-bangkok-tour',
    destinationId: 'thailand',
    name: 'Bangkok City Tour',
    category: 'Sightseeing',
    duration: '6 Hours',
    pricePerPerson: 1500,
    rating: 4.5,
    popularity: 88,
    description:
      'Explore temples, markets and major attractions across Bangkok.',
    bestFor: ['Families', 'Culture'],
  },

  {
    id: 'thailand-food-tour',
    destinationId: 'thailand',
    name: 'Thai Street Food Tour',
    category: 'Food',
    duration: '3 Hours',
    pricePerPerson: 1400,
    rating: 4.8,
    popularity: 84,
    description:
      'Taste authentic Thai street food with a local food guide.',
    bestFor: ['Food', 'Couples', 'Friends'],
  },

  {
    id: 'thailand-elephant',
    destinationId: 'thailand',
    name: 'Elephant Sanctuary Visit',
    category: 'Nature',
    duration: '5 Hours',
    pricePerPerson: 3000,
    rating: 4.7,
    popularity: 86,
    description:
      'Visit an ethical elephant sanctuary and learn about elephant conservation.',
    bestFor: ['Nature', 'Families'],
  },


  // ============================================================
  // TIRTHAN VALLEY
  // ============================================================

  {
    id: 'tirthan-great-himalayan',
    destinationId: 'tirthan-valley',
    name: 'Great Himalayan National Park Trek',
    category: 'Adventure',
    duration: '8 Hours',
    pricePerPerson: 1800,
    rating: 4.9,
    popularity: 70,
    description:
      'Explore pristine Himalayan forests and mountain trails.',
    bestFor: ['Adventure', 'Nature'],
  },

  {
    id: 'tirthan-trout-fishing',
    destinationId: 'tirthan-valley',
    name: 'Trout Fishing Experience',
    category: 'Experience',
    duration: '4 Hours',
    pricePerPerson: 1200,
    rating: 4.6,
    popularity: 58,
    description:
      'Enjoy peaceful trout fishing along the Tirthan River.',
    bestFor: ['Nature', 'Couples'],
  },

  {
    id: 'tirthan-waterfall',
    destinationId: 'tirthan-valley',
    name: 'Jibhi Waterfall Trek',
    category: 'Nature',
    duration: '4 Hours',
    pricePerPerson: 900,
    rating: 4.7,
    popularity: 76,
    description:
      'Take a scenic forest walk to a peaceful Himalayan waterfall.',
    bestFor: ['Nature', 'Couples'],
  },

  {
    id: 'tirthan-village',
    destinationId: 'tirthan-valley',
    name: 'Himalayan Village Walk',
    category: 'Culture',
    duration: '3 Hours',
    pricePerPerson: 700,
    rating: 4.6,
    popularity: 62,
    description:
      'Walk through traditional mountain villages and interact with locals.',
    bestFor: ['Culture', 'Nature'],
  },


  // ============================================================
  // ZIRO
  // ============================================================

  {
    id: 'ziro-valley-tour',
    destinationId: 'ziro',
    name: 'Ziro Valley Exploration',
    category: 'Nature',
    duration: '6 Hours',
    pricePerPerson: 1000,
    rating: 4.8,
    popularity: 68,
    description:
      'Explore the beautiful landscapes and rice fields of Ziro Valley.',
    bestFor: ['Nature', 'Photography'],
  },

  {
    id: 'ziro-apatanis',
    destinationId: 'ziro',
    name: 'Apatani Cultural Experience',
    category: 'Culture',
    duration: '4 Hours',
    pricePerPerson: 900,
    rating: 4.8,
    popularity: 64,
    description:
      'Learn about the unique traditions and lifestyle of the Apatani community.',
    bestFor: ['Culture', 'Photography'],
  },

  {
    id: 'ziro-village-walk',
    destinationId: 'ziro',
    name: 'Traditional Village Walk',
    category: 'Culture',
    duration: '3 Hours',
    pricePerPerson: 700,
    rating: 4.6,
    popularity: 55,
    description:
      'Walk through traditional villages surrounded by mountains and rice fields.',
    bestFor: ['Culture', 'Nature'],
  },


  // ============================================================
  // GUREZ VALLEY
  // ============================================================

  {
    id: 'gurez-valley-exploration',
    destinationId: 'gurez-valley',
    name: 'Gurez Valley Exploration',
    category: 'Nature',
    duration: '6 Hours',
    pricePerPerson: 1200,
    rating: 4.9,
    popularity: 58,
    description:
      'Explore one of Kashmir’s most remote and spectacular valleys.',
    bestFor: ['Nature', 'Photography'],
  },

  {
    id: 'gurez-trekking',
    destinationId: 'gurez-valley',
    name: 'Gurez Himalayan Trek',
    category: 'Adventure',
    duration: '8 Hours',
    pricePerPerson: 1800,
    rating: 4.9,
    popularity: 52,
    description:
      'Trek through untouched Himalayan landscapes and alpine meadows.',
    bestFor: ['Adventure', 'Nature'],
  },

  {
    id: 'gurez-village',
    destinationId: 'gurez-valley',
    name: 'Gurez Village Experience',
    category: 'Culture',
    duration: '4 Hours',
    pricePerPerson: 900,
    rating: 4.7,
    popularity: 48,
    description:
      'Experience the local culture and traditional mountain lifestyle of Gurez.',
    bestFor: ['Culture', 'Photography'],
  },

];


export default activities;