import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import destinations from '../../data/destinations';
import hotels from '../../data/hotels';
import activities from '../../data/activities';
import packages from '../../data/packages';

import './PackageDetails.css';

function PackageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const packageData = useMemo(() => {
    const pkg = packages.find(
      (item) => item.id === id
    );

    if (!pkg) {
      return null;
    }

    const destination = destinations.find(
      (item) => item.id === pkg.destinationId
    );

    const hotel = pkg.hotelName
      ? hotels.find(
          (item) => item.name === pkg.hotelName
        )
      : null;

    const packageActivities = pkg.activityNames
      .map((activityName) =>
        activities.find(
          (activity) =>
            activity.destinationId ===
              pkg.destinationId &&
            activity.name === activityName
        )
      )
      .filter(Boolean);

    return {
      ...pkg,
      destination,
      hotel,
      activities: packageActivities,
    };
  }, [id]);

  if (!packageData) {
    return (
      <main className="package-details-page">
        <div className="package-details-container">
          <button
            className="back-button"
            onClick={() => navigate('/')}
          >
            ← Back to Home
          </button>

          <div className="package-not-found">
            <h1>Package not found</h1>

            <p>
              This package may no longer be available.
            </p>

            <button
              onClick={() => navigate('/')}
            >
              Explore Destinations
            </button>
          </div>
        </div>
      </main>
    );
  }

  const {
    name,
    duration,
    nights,
    description,
    destination,
    hotel,
    activities: packageActivities,
    transportCost,
    foodCostPerPersonPerDay,
    tags,
  } = packageData;

  return (
    <main className="package-details-page">
      <div className="package-details-container">

        {/* BACK */}
        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          ← Back to Results
        </button>

        {/* HERO */}
        <section className="package-hero">
          <div>
            <span className="package-category">
              {destination?.category}
            </span>

            <h1>{name}</h1>

            <p>{description}</p>

            <div className="package-hero-meta">
              <span>
                📍 {destination?.name}
              </span>

              <span>
                📅 {duration} Days
              </span>

              <span>
                🌙 {nights} Nights
              </span>
            </div>
          </div>

          <div className="package-hero-badge">
            <span>TRIP TYPE</span>

            <strong>
              {tags?.[0] || 'Explorer'}
            </strong>
          </div>
        </section>

        {/* HOTEL */}
        {hotel && (
          <section className="details-section">
            <div className="section-title">
              <span>01</span>

              <div>
                <small>ACCOMMODATION</small>
                <h2>Your Stay</h2>
              </div>
            </div>

            <div className="detail-card hotel-detail-card">
              <div className="detail-icon">
                🏨
              </div>

              <div className="detail-content">
                <div className="detail-heading">
                  <div>
                    <span>
                      {hotel.hotelType}
                    </span>

                    <h3>
                      {hotel.name}
                    </h3>

                    <p>
                      📍 {hotel.location}
                    </p>
                  </div>

                  <div className="rating-box">
                    ⭐ {hotel.rating}
                    <small>
                      {hotel.reviews.toLocaleString()}
                      {' '}reviews
                    </small>
                  </div>
                </div>

                <div className="amenities">
                  {hotel.amenities?.map(
                    (amenity) => (
                      <span key={amenity}>
                        ✓ {amenity}
                      </span>
                    )
                  )}
                </div>

                <div className="hotel-cost">
                  <span>
                    Starting from
                  </span>

                  <strong>
                    ₹
                    {hotel.pricePerNight.toLocaleString()}
                  </strong>

                  <small>
                    / night
                  </small>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ACTIVITIES */}
        <section className="details-section">
          <div className="section-title">
            <span>02</span>

            <div>
              <small>EXPERIENCES</small>
              <h2>Things You'll Experience</h2>
            </div>
          </div>

          <div className="activity-detail-grid">
            {packageActivities.map(
              (activity) => (
                <div
                  className="activity-detail-card"
                  key={activity.id}
                >
                  <div className="activity-top">
                    <div className="activity-icon">
                      🎯
                    </div>

                    <span>
                      ⭐ {activity.rating}
                    </span>
                  </div>

                  <h3>
                    {activity.name}
                  </h3>

                  <p>
                    {activity.description}
                  </p>

                  <div className="activity-info">
                    <span>
                      ⏱ {activity.duration}
                    </span>

                    <strong>
                      ₹
                      {activity.pricePerPerson.toLocaleString()}
                      {' '}/ person
                    </strong>
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        {/* ITINERARY */}
        <section className="details-section">
          <div className="section-title">
            <span>03</span>

            <div>
              <small>TRIP PLAN</small>
              <h2>Suggested Itinerary</h2>
            </div>
          </div>

          <div className="itinerary">

            <div className="itinerary-day">
              <div className="day-number">
                01
              </div>

              <div>
                <h3>
                  Arrival & Exploration
                </h3>

                <p>
                  Arrive at {destination?.name},
                  check into your hotel and spend
                  the evening exploring nearby
                  attractions.
                </p>
              </div>
            </div>

            {packageActivities
              .slice(0, 3)
              .map((activity, index) => (
                <div
                  className="itinerary-day"
                  key={activity.id}
                >
                  <div className="day-number">
                    {String(index + 2).padStart(
                      2,
                      '0'
                    )}
                  </div>

                  <div>
                    <h3>
                      {activity.name}
                    </h3>

                    <p>
                      Enjoy {activity.name.toLowerCase()}
                      {' '}as part of your
                      {destination?.name} experience.
                    </p>
                  </div>
                </div>
              ))}

            <div className="itinerary-day">
              <div className="day-number">
                {String(duration).padStart(
                  2,
                  '0'
                )}
              </div>

              <div>
                <h3>
                  Departure
                </h3>

                <p>
                  Enjoy breakfast, complete
                  your checkout and begin your
                  journey back home.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* COST ESTIMATE */}
        <section className="details-section">
          <div className="section-title">
            <span>04</span>

            <div>
              <small>BUDGET</small>
              <h2>Estimated Trip Cost</h2>
            </div>
          </div>

          <div className="cost-estimate-card">

            <div className="cost-estimate-row">
              <div>
                <span>🏨 Accommodation</span>
                <small>
                  Based on 1 room
                </small>
              </div>

              <strong>
                ₹
                {hotel
                  ? (
                      hotel.pricePerNight *
                      nights
                    ).toLocaleString()
                  : '0'}
              </strong>
            </div>

            <div className="cost-estimate-row">
              <div>
                <span>🚗 Transport</span>
                <small>
                  Estimated package transport
                </small>
              </div>

              <strong>
                ₹
                {transportCost.toLocaleString()}
              </strong>
            </div>

            <div className="cost-estimate-row">
              <div>
                <span>🎯 Activities</span>
                <small>
                  Per-person activity prices
                </small>
              </div>

              <strong>
                ₹
                {packageActivities
                  .reduce(
                    (total, activity) =>
                      total +
                      activity.pricePerPerson,
                    0
                  )
                  .toLocaleString()}
                {' '} / person
              </strong>
            </div>

            <div className="cost-estimate-row">
              <div>
                <span>🍽️ Food</span>
                <small>
                  Estimated per person / day
                </small>
              </div>

              <strong>
                ₹
                {foodCostPerPersonPerDay.toLocaleString()}
                {' '} / person / day
              </strong>
            </div>

          </div>
        </section>

        {/* BOOKING CTA */}
        <section className="booking-cta">
          <div>
            <span>
              READY FOR YOUR TRIP?
            </span>

            <h2>
              Make {destination?.name} your
              next adventure.
            </h2>

            <p>
              Continue to the booking form to
              enter your traveller details.
            </p>
          </div>

          <button
            onClick={() =>
              navigate('/booking')
            }
          >
            Book This Package →
          </button>
        </section>

      </div>
    </main>
  );
}

export default PackageDetails;