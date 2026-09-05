const STORAGE_KEY = 'tourismwise_trip_requests';

const initialTripRequests = [
  {
    id: 'trip-goa-001',
    destination: 'Goa',
    startDate: '2026-10-10',
    endDate: '2026-10-15',
    travelStyle: 'Backpacker',
    budgetPerPerson: 15000,
    totalTravellers: 4,

    organizer: {
      id: 'user-rahul',
      name: 'Rahul',
      age: 27,
    },

    description:
      'Looking for fellow travellers to explore beaches, water sports and local food together.',

    interests: [
      'Beach',
      'Adventure',
      'Nightlife',
      'Local Food',
    ],

    members: [
      {
        id: 'user-rahul',
        name: 'Rahul',
        status: 'accepted',
        role: 'organizer',
      },
    ],

    createdAt: '2026-09-01T10:00:00Z',
  },

  {
    id: 'trip-manali-001',
    destination: 'Manali',
    startDate: '2026-10-18',
    endDate: '2026-10-23',
    travelStyle: 'Backpacker',
    budgetPerPerson: 12000,
    totalTravellers: 3,

    organizer: {
      id: 'user-neha',
      name: 'Neha',
      age: 25,
    },

    description:
      'Planning a budget-friendly Manali trip with trekking, Solang Valley and local exploration.',

    interests: [
      'Trekking',
      'Mountains',
      'Adventure',
      'Photography',
    ],

    members: [
      {
        id: 'user-neha',
        name: 'Neha',
        status: 'accepted',
        role: 'organizer',
      },
      {
        id: 'user-arjun',
        name: 'Arjun',
        status: 'accepted',
        role: 'member',
      },
    ],

    createdAt: '2026-09-02T10:00:00Z',
  },

  {
    id: 'trip-bali-001',
    destination: 'Bali',
    startDate: '2026-11-05',
    endDate: '2026-11-12',
    travelStyle: 'Digital Nomad',
    budgetPerPerson: 35000,
    totalTravellers: 5,

    organizer: {
      id: 'user-sarah',
      name: 'Sarah',
      age: 29,
    },

    description:
      'Looking for digital nomads interested in working remotely during the day and exploring Bali together.',

    interests: [
      'Remote Work',
      'Cafes',
      'Beach',
      'Coworking',
    ],

    members: [
      {
        id: 'user-sarah',
        name: 'Sarah',
        status: 'accepted',
        role: 'organizer',
      },
    ],

    createdAt: '2026-09-03T10:00:00Z',
  },
];


export const getTripRequests = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      return JSON.parse(stored);
    }

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(initialTripRequests)
    );

    return initialTripRequests;
  } catch (error) {
    console.error(
      'Unable to load trip requests:',
      error
    );

    return initialTripRequests;
  }
};


export const saveTripRequests = (requests) => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(requests)
  );
};


export const createTripRequest = (trip) => {
  const existingTrips = getTripRequests();

  const newTrip = {
    id: `trip-${Date.now()}`,
    ...trip,
    members: [
      {
        id: 'current-user',
        name: 'You',
        status: 'accepted',
        role: 'organizer',
      },
    ],
    createdAt: new Date().toISOString(),
  };

  const updatedTrips = [
    newTrip,
    ...existingTrips,
  ];

  saveTripRequests(updatedTrips);

  return newTrip;
};


export const requestToJoinTrip = (
  tripId,
  user = {
    id: 'current-user',
    name: 'You',
  }
) => {
  const trips = getTripRequests();

  const updatedTrips = trips.map((trip) => {
    if (trip.id !== tripId) {
      return trip;
    }

    const alreadyRequested = trip.members.some(
      (member) => member.id === user.id
    );

    if (alreadyRequested) {
      return trip;
    }

    return {
      ...trip,
      members: [
        ...trip.members,
        {
          id: user.id,
          name: user.name,
          status: 'pending',
          role: 'member',
        },
      ],
    };
  });

  saveTripRequests(updatedTrips);

  return updatedTrips;
};


export const updateMemberStatus = (
  tripId,
  memberId,
  status
) => {
  const trips = getTripRequests();

  const updatedTrips = trips.map((trip) => {
    if (trip.id !== tripId) {
      return trip;
    }

    return {
      ...trip,
      members: trip.members.map((member) =>
        member.id === memberId
          ? {
              ...member,
              status,
            }
          : member
      ),
    };
  });

  saveTripRequests(updatedTrips);

  return updatedTrips;
};


export default {
  getTripRequests,
  saveTripRequests,
  createTripRequest,
  requestToJoinTrip,
  updateMemberStatus,
};