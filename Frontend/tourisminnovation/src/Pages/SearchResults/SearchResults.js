import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import destinations from '../../data/destinations';
import hotels from '../../data/hotels';
import activities from '../../data/activities';
import packages from '../../data/packages';

import './SearchResults.css';

function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);

  const destinationQuery = searchParams.get('destination') || 'Goa';
  const travellers = Number(searchParams.get('travellers')) || 2;
  const budget = Number(searchParams.get('budget')) || 50000;

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------

  const normalize = (value = '') =>
    value.toLowerCase().replace(/[^a-z0-9]/g, '');

  const findDestination = () => {
    const query = normalize(destinationQuery);

    return destinations.find((destination) => {
      const name = normalize(destination.name);

      return (
        name === query ||
        name.includes(query) ||
        query.includes(name)
      );
    });
  };

  const findHotel = (hotelName) => {
    if (!hotelName) {
      return null;
    }

    const normalizedName = normalize(hotelName);

    return hotels.find(
      (hotel) =>
        normalize(hotel.name) === normalizedName
    );
  };

  const findActivity = (activityName, destinationId) => {
    const normalizedName = normalize(activityName);

    const destinationActivities = activities.filter(
      (activity) =>
        activity.destinationId === destinationId
    );

    return (
      destinationActivities.find(
        (activity) =>
          normalize(activity.name) === normalizedName
      ) ||
      destinationActivities.find((activity) => {
        const currentName = normalize(activity.name);

        return (
          currentName.includes(normalizedName) ||
          normalizedName.includes(currentName)
        );
      })
    );
  };

  // --------------------------------------------------
  // Find destination
  // --------------------------------------------------

  const destination = findDestination();

  // --------------------------------------------------
  // Calculate package data
  // --------------------------------------------------

  const calculatedPackages = useMemo(() => {
    if (!destination) {
      return [];
    }

    const destinationPackages = packages.filter(
      (pkg) =>
        pkg.destinationId === destination.id
    );

    return destinationPackages
      .map((pkg) => {
        const hotel = findHotel(pkg.hotelName);

        /*
         * Assumption for prototype:
         * 2 travellers = 1 hotel room
         */
        const rooms = Math.ceil(travellers / 2);

        const hotelCost = hotel
          ? hotel.pricePerNight *
            pkg.nights *
            rooms
          : 0;

        const resolvedActivities = pkg.activityNames
          .map((activityName) =>
            findActivity(
              activityName,
              destination.id
            )
          )
          .filter(Boolean);

        const activitiesCost =
          resolvedActivities.reduce(
            (total, activity) =>
              total +
              activity.pricePerPerson *
                travellers,
            0
          );

        const foodCost =
          pkg.foodCostPerPersonPerDay *
          travellers *
          pkg.duration;

        const totalCost =
          hotelCost +
          pkg.transportCost +
          activitiesCost +
          foodCost;

        const remainingBudget =
          budget - totalCost;

        const budgetFit =
          totalCost <= budget;

        /*
         * Simple recommendation score.
         *
         * This is NOT AI yet.
         * Later we can replace this with
         * an actual recommendation engine.
         */

        let score = 50;

        if (budgetFit) {
          score += 25;
        } else {
          score -= 10;
        }

        if (hotel) {
          score += hotel.rating * 5;
        }

        if (totalCost > 0) {
          const valueRatio =
            budget / totalCost;

          if (valueRatio >= 1 && valueRatio <= 1.15) {
            score += 10;
          }
        }

        score = Math.min(
          99,
          Math.max(1, Math.round(score))
        );

        return {
          ...pkg,
          hotel,
          resolvedActivities,
          rooms,
          hotelCost,
          activitiesCost,
          foodCost,
          totalCost,
          remainingBudget,
          budgetFit,
          score,
        };
      })
      .sort((a, b) => {
        /*
         * First show packages within budget.
         * Then show cheaper options.
         */

        if (
          a.budgetFit !== b.budgetFit
        ) {
          return a.budgetFit ? -1 : 1;
        }

        return a.totalCost - b.totalCost;
      });
  }, [destination, travellers, budget]);

  // --------------------------------------------------
  // No destination
  // --------------------------------------------------

  if (!destination) {
    return (
      <main className="search-results-page">
        <div className="results-container">
          <button
            type="button"
            className="back-button"
            onClick={() => navigate('/')}
          >
            ← Back to Home
          </button>

          <div className="no-results">
            <div className="no-results-icon">
              🔍
            </div>

            <h2>
              We couldn't find that destination
            </h2>

            <p>
              Try searching for Goa, Bali,
              Manali, Dubai, Kerala or another
              destination.
            </p>

            <button
              type="button"
              onClick={() => navigate('/')}
              className="primary-button"
            >
              Explore Destinations
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="search-results-page">
      <div className="results-container">

        {/* ------------------------------------------ */}
        {/* HEADER */}
        {/* ------------------------------------------ */}

        <button
          type="button"
          className="back-button"
          onClick={() => navigate('/')}
        >
          ← Back to Search
        </button>

        <section className="results-header">
          <div>
            <span className="results-eyebrow">
              SEARCH RESULTS
            </span>

            <h1>
              {destination.name} Travel Packages
            </h1>

            <p>
              We found {calculatedPackages.length}{' '}
              packages based on your travel
              preferences.
            </p>
          </div>

          <div className="search-summary">
            <div>
              <span>Travellers</span>
              <strong>
                👥 {travellers}
              </strong>
            </div>

            <div>
              <span>Your Budget</span>
              <strong>
                ₹{budget.toLocaleString()}
              </strong>
            </div>
          </div>
        </section>

        {/* ------------------------------------------ */}
        {/* DESTINATION INFO */}
        {/* ------------------------------------------ */}

        <section className="destination-info">
          <div>
            <span className="destination-category">
              {destination.category}
            </span>

            <h2>
              Why {destination.name}?
            </h2>

            <p>
              {destination.description}
            </p>
          </div>

          <div className="average-budget">
            <span>
              Average trip budget
            </span>

            <strong>
              ₹
              {Number(
                destination.averageBudget || 0
              ).toLocaleString()}
            </strong>
          </div>
        </section>

        {/* ------------------------------------------ */}
        {/* PACKAGE RESULTS */}
        {/* ------------------------------------------ */}

        <section className="packages-section">

          <div className="section-heading">
            <div>
              <span>
                SMART COMPARISON
              </span>

              <h2>
                Packages for you
              </h2>
            </div>

            <p>
              Sorted by budget fit and overall
              value
            </p>
          </div>

          {calculatedPackages.length === 0 ? (
            <div className="no-results">
              <h3>
                No packages available yet
              </h3>

              <p>
                We're still adding packages for
                {destination.name}.
              </p>
            </div>
          ) : (
            <div className="packages-grid">
              {calculatedPackages.map(
                (pkg, index) => (
                  <article
                    className={`package-card ${
                      index === 0
                        ? 'recommended-card'
                        : ''
                    }`}
                    key={pkg.id}
                  >

                    {/* Recommended badge */}
                    {index === 0 && (
                      <div className="recommended-badge">
                        ✨ BEST MATCH
                      </div>
                    )}

                    {/* Card Header */}
                    <div className="package-card-header">
                      <div>
                        <span className="package-tag">
                          {pkg.tags?.[0] ||
                            'Popular'}
                        </span>

                        <h3>
                          {pkg.name}
                        </h3>

                        <p>
                          {pkg.description}
                        </p>
                      </div>

                      <div className="score">
                        <span>
                          Match
                        </span>

                        <strong>
                          {pkg.score}%
                        </strong>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="package-meta">
                      <span>
                        📅 {pkg.duration} Days
                      </span>

                      <span>
                        🌙 {pkg.nights} Nights
                      </span>

                      <span>
                        👥 {travellers} Travellers
                      </span>
                    </div>

                    {/* Hotel */}
                    {pkg.hotel && (
                      <div className="package-hotel">
                        <div className="hotel-icon">
                          🏨
                        </div>

                        <div>
                          <span>
                            Recommended Stay
                          </span>

                          <strong>
                            {pkg.hotel.name}
                          </strong>

                          <div className="hotel-rating">
                            ⭐{' '}
                            {pkg.hotel.rating}
                            {' '}
                            <small>
                              ({pkg.hotel.reviews}
                              {' '}
                              reviews)
                            </small>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Activities */}
                    <div className="activities-section">
                      <h4>
                        Included Experiences
                      </h4>

                      <div className="activity-list">
                        {pkg.resolvedActivities
                          .slice(0, 4)
                          .map(
                            (activity) => (
                              <div
                                key={activity.id}
                                className="activity-item"
                              >
                                <span>
                                  ✓
                                </span>

                                <div>
                                  <strong>
                                    {activity.name}
                                  </strong>

                                  <small>
                                    ₹
                                    {activity.pricePerPerson.toLocaleString()}
                                    {' '}
                                    / person
                                  </small>
                                </div>
                              </div>
                            )
                          )}
                      </div>
                    </div>

                    {/* Cost Breakdown */}
                    <div className="cost-breakdown">
                      <h4>
                        Estimated Cost
                      </h4>

                      <div className="cost-row">
                        <span>
                          🏨 Hotel
                        </span>

                        <strong>
                          ₹
                          {pkg.hotelCost.toLocaleString()}
                        </strong>
                      </div>

                      <div className="cost-row">
                        <span>
                          🚗 Transport
                        </span>

                        <strong>
                          ₹
                          {pkg.transportCost.toLocaleString()}
                        </strong>
                      </div>

                      <div className="cost-row">
                        <span>
                          🎯 Activities
                        </span>

                        <strong>
                          ₹
                          {pkg.activitiesCost.toLocaleString()}
                        </strong>
                      </div>

                      <div className="cost-row">
                        <span>
                          🍽️ Food
                        </span>

                        <strong>
                          ₹
                          {pkg.foodCost.toLocaleString()}
                        </strong>
                      </div>

                      <div className="cost-divider" />

                      <div className="total-row">
                        <span>
                          Total
                        </span>

                        <strong>
                          ₹
                          {pkg.totalCost.toLocaleString()}
                        </strong>
                      </div>

                      {pkg.budgetFit ? (
                        <div className="budget-status within-budget">
                          ✓ ₹
                          {pkg.remainingBudget.toLocaleString()}
                          {' '}
                          remaining
                        </div>
                      ) : (
                        <div className="budget-status over-budget">
                          ↑ ₹
                          {Math.abs(
                            pkg.remainingBudget
                          ).toLocaleString()}
                          {' '}
                          over budget
                        </div>
                      )}
                    </div>

                    {/* Tags */}
                    <div className="package-tags">
                      {pkg.tags?.map(
                        (tag) => (
                          <span key={tag}>
                            {tag}
                          </span>
                        )
                      )}
                    </div>

                    {/* Button */}
                    <button
                      type="button"
                      className="view-package-button"
                      onClick={() =>
                        navigate(
                          `/package/${pkg.id}`
                        )
                      }
                    >
                      View Package
                      <span>→</span>
                    </button>

                  </article>
                )
              )}
            </div>
          )}
        </section>

        {/* ------------------------------------------ */}
        {/* HOTEL COMPARISON */}
        {/* ------------------------------------------ */}

        <section className="hotel-comparison">

          <div className="section-heading">
            <div>
              <span>
                HOTEL COMPARISON
              </span>

              <h2>
                Hotels in {destination.name}
              </h2>
            </div>

            <p>
              Compare available stays
            </p>
          </div>

          <div className="hotel-grid">
            {hotels
              .filter(
                (hotel) =>
                  hotel.destinationId ===
                  destination.id
              )
              .sort(
                (a, b) =>
                  b.rating - a.rating
              )
              .map((hotel) => (
                <div
                  className="hotel-card"
                  key={hotel.id}
                >
                  <div className="hotel-card-top">
                    <div>
                      <span>
                        {hotel.hotelType}
                      </span>

                      <h3>
                        {hotel.name}
                      </h3>
                    </div>

                    <div className="hotel-score">
                      ⭐ {hotel.rating}
                    </div>
                  </div>

                  <p className="hotel-location">
                    📍 {hotel.location}
                  </p>

                  <div className="hotel-amenities">
                    {hotel.amenities
                      ?.slice(0, 3)
                      .map(
                        (amenity) => (
                          <span
                            key={amenity}
                          >
                            {amenity}
                          </span>
                        )
                      )}
                  </div>

                  <div className="hotel-price">
                    <div>
                      <strong>
                        ₹
                        {hotel.pricePerNight.toLocaleString()}
                      </strong>

                      <span>
                        / night
                      </span>
                    </div>

                    <small>
                      {hotel.reviews.toLocaleString()}
                      {' '}
                      reviews
                    </small>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* ------------------------------------------ */}
        {/* BOTTOM CTA */}
        {/* ------------------------------------------ */}

        <section className="results-cta">
          <div>
            <span>
              CAN'T FIND YOUR PLACE?
            </span>

            <h2>
              Know an underrated destination?
            </h2>

            <p>
              Help other travellers discover
              places that deserve more attention.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/')}
          >
            Suggest a Place →
          </button>
        </section>

      </div>
    </main>
  );
}

export default SearchResults;