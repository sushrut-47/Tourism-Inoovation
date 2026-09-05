export const calculateTripMatch = ({
  trip,
  destination,
  travelStyle,
  budget,
  startDate,
  endDate,
}) => {
  let score = 0;

  const reasons = [];

  // Destination — 40 points
  if (
    destination &&
    trip.destination.toLowerCase() ===
      destination.toLowerCase()
  ) {
    score += 40;
    reasons.push('Same destination');
  }

  // Travel style — 25 points
  if (
    travelStyle &&
    travelStyle !== 'All' &&
    trip.travelStyle === travelStyle
  ) {
    score += 25;
    reasons.push('Same travel style');
  }

  // Budget — 20 points
  if (budget) {
    const userBudget = Number(budget);
    const tripBudget = Number(
      trip.budgetPerPerson
    );

    if (tripBudget <= userBudget) {
      score += 20;
      reasons.push('Within your budget');
    } else if (
      tripBudget <=
      userBudget * 1.2
    ) {
      score += 10;
      reasons.push('Slightly above your budget');
    }
  }

  // Dates — 15 points
  if (startDate && endDate) {
    const userStart = new Date(startDate);
    const userEnd = new Date(endDate);

    const tripStart = new Date(trip.startDate);
    const tripEnd = new Date(trip.endDate);

    const datesOverlap =
      userStart <= tripEnd &&
      userEnd >= tripStart;

    if (datesOverlap) {
      score += 15;
      reasons.push('Dates overlap');
    }
  }

  return {
    score,
    reasons,
  };
};