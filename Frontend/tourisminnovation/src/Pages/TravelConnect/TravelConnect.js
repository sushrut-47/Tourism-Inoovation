import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  getTripRequests,
  requestToJoinTrip,
  updateMemberStatus,
} from '../../data/tripRequests';

import { calculateTripMatch } from '../../utils/tripMatching';

import CreateTripModal from '../../Components/CreateTripModal/CreateTripModal';

import './TravelConnect.css';

const TravelConnect = () => {
  const [searchParams] = useSearchParams();

  const [trips, setTrips] = useState(
    getTripRequests()
  );

  const [destinationFilter, setDestinationFilter] =
    useState(
      searchParams.get('destination') || ''
    );

  const [styleFilter, setStyleFilter] =
    useState('All');

  const [budgetFilter, setBudgetFilter] =
    useState('');

  const [startDateFilter, setStartDateFilter] =
    useState('');

  const [endDateFilter, setEndDateFilter] =
    useState('');

  const [isCreateTripOpen, setIsCreateTripOpen] =
    useState(false);

  const currentUserId = 'current-user';

  /*
   * Calculate match score and sort trips
   * from highest match to lowest match.
   */
  const filteredTrips = useMemo(() => {
    return trips
      .map((trip) => {
        const match = calculateTripMatch({
          trip,
          destination: destinationFilter,
          travelStyle: styleFilter,
          budget: budgetFilter,
          startDate: startDateFilter,
          endDate: endDateFilter,
        });

        return {
          ...trip,
          matchScore: match.score,
          matchReasons: match.reasons,
        };
      })
      .filter((trip) => {
        const destinationMatch =
          !destinationFilter ||
          trip.destination
            .toLowerCase()
            .includes(
              destinationFilter.toLowerCase()
            );

        const styleMatch =
          styleFilter === 'All' ||
          trip.travelStyle === styleFilter;

        return (
          destinationMatch &&
          styleMatch
        );
      })
      .sort(
        (a, b) =>
          b.matchScore - a.matchScore
      );
  }, [
    trips,
    destinationFilter,
    styleFilter,
    budgetFilter,
    startDateFilter,
    endDateFilter,
  ]);

  /*
   * Request to join a trip.
   */
  const handleJoinRequest = (tripId) => {
    const updatedTrips =
      requestToJoinTrip(tripId);

    setTrips(updatedTrips);
  };

  /*
   * Accept / reject a traveller.
   */
  const handleMemberStatus = (
    tripId,
    memberId,
    status
  ) => {
    const updatedTrips =
      updateMemberStatus(
        tripId,
        memberId,
        status
      );

    setTrips(updatedTrips);
  };

  /*
   * Check whether current user is already
   * part of a particular trip.
   */
  const getCurrentUserMembership = (trip) => {
    return trip.members.find(
      (member) =>
        member.id === currentUserId
    );
  };

  /*
   * When a new trip is created.
   */
  const handleTripCreated = (newTrip) => {
    setTrips((previousTrips) => [
      newTrip,
      ...previousTrips,
    ]);
  };

  return (
    <div className="travel-connect-page">

      {/* HERO */}

      <section className="connect-hero">
        <div className="connect-hero-content">

          <span className="connect-eyebrow">
            TOURISMWISE CONNECT
          </span>

          <h1>
            Find people going your way.
          </h1>

          <p>
            Join travellers, explore together
            and make your journey more memorable.
          </p>

        </div>
      </section>


      {/* MAIN */}

      <section className="connect-container">

        {/* HEADER */}

        <div className="connect-header">

          <div>
            <h2>
              Find Travel Companions
            </h2>

            <p>
              Discover people planning trips
              similar to yours.
            </p>
          </div>

        </div>


        {/* CREATE TRIP */}

        <div className="create-trip-action">

          <button
            type="button"
            onClick={() =>
              setIsCreateTripOpen(true)
            }
          >
            + Create a Trip
          </button>

        </div>


        {/* FILTERS */}

        <div className="connect-filters">

          <div className="filter-group">

            <label>
              Destination
            </label>

            <input
              type="text"
              placeholder="Search destination..."
              value={destinationFilter}
              onChange={(event) =>
                setDestinationFilter(
                  event.target.value
                )
              }
            />

          </div>


          <div className="filter-group">

            <label>
              Travel Style
            </label>

            <select
              value={styleFilter}
              onChange={(event) =>
                setStyleFilter(
                  event.target.value
                )
              }
            >
              <option value="All">
                All
              </option>

              <option value="Backpacker">
                🎒 Backpacker
              </option>

              <option value="Digital Nomad">
                💻 Digital Nomad
              </option>

              <option value="Homestay">
                🏠 Homestay
              </option>
            </select>

          </div>


          <div className="filter-group">

            <label>
              Budget / Person
            </label>

            <input
              type="number"
              min="0"
              placeholder="e.g. 15000"
              value={budgetFilter}
              onChange={(event) =>
                setBudgetFilter(
                  event.target.value
                )
              }
            />

          </div>


          <div className="filter-group">

            <label>
              Start Date
            </label>

            <input
              type="date"
              value={startDateFilter}
              onChange={(event) =>
                setStartDateFilter(
                  event.target.value
                )
              }
            />

          </div>


          <div className="filter-group">

            <label>
              End Date
            </label>

            <input
              type="date"
              value={endDateFilter}
              onChange={(event) =>
                setEndDateFilter(
                  event.target.value
                )
              }
            />

          </div>

        </div>


        {/* TRIPS */}

        <div className="trip-grid">

          {filteredTrips.length === 0 ? (

            <div className="no-trips">

              <div className="no-trips-icon">
                🌍
              </div>

              <h3>
                No trips found
              </h3>

              <p>
                Try another destination or
                travel style.
              </p>

            </div>

          ) : (

            filteredTrips.map((trip) => {

              const currentMembership =
                getCurrentUserMembership(
                  trip
                );

              const acceptedMembers =
                trip.members.filter(
                  (member) =>
                    member.status ===
                    'accepted'
                );

              const pendingMembers =
                trip.members.filter(
                  (member) =>
                    member.status ===
                    'pending'
                );

              const availableSeats =
                trip.totalTravellers -
                acceptedMembers.length;

              const isOrganizer =
                trip.organizer.id ===
                currentUserId;

              return (
                <article
                  className="trip-card"
                  key={trip.id}
                >

                  {/* CARD TOP */}

                  <div className="trip-card-top">

                    <span className="travel-style">

                      {trip.travelStyle ===
                      'Backpacker'
                        ? '🎒'
                        : trip.travelStyle ===
                          'Digital Nomad'
                        ? '💻'
                        : '🏠'}

                      {' '}

                      {trip.travelStyle}

                    </span>


                    <div className="trip-card-meta">

                      {trip.matchScore > 0 && (
                        <span className="match-score">
                          ⭐ {trip.matchScore}%
                          Match
                        </span>
                      )}

                      <span className="seats">

                        {Math.max(
                          availableSeats,
                          0
                        )}

                        {' '}

                        spots left

                      </span>

                    </div>

                  </div>


                  {/* CARD BODY */}

                  <div className="trip-card-body">

                    <h3>
                      {trip.destination}
                    </h3>


                    <p className="trip-dates">
                      📅 {trip.startDate}
                      {' → '}
                      {trip.endDate}
                    </p>


                    <p className="trip-description">
                      {trip.description}
                    </p>


                    {/* MATCH REASONS */}

                    {trip.matchReasons.length >
                      0 && (

                      <div className="match-reasons">

                        <strong>
                          Why this trip?
                        </strong>

                        {trip.matchReasons.map(
                          (reason) => (
                            <span
                              key={reason}
                            >
                              ✓ {reason}
                            </span>
                          )
                        )}

                      </div>

                    )}


                    {/* ORGANIZER */}

                    <div className="trip-organizer">

                      <div className="avatar">
                        {trip.organizer.name.charAt(
                          0
                        )}
                      </div>

                      <div>

                        <span>
                          Organized by
                        </span>

                        <strong>
                          {trip.organizer.name}
                          {', '}
                          {trip.organizer.age}
                        </strong>

                      </div>

                    </div>


                    {/* INTERESTS */}

                    <div className="trip-interests">

                      {trip.interests.map(
                        (interest) => (
                          <span
                            key={interest}
                          >
                            {interest}
                          </span>
                        )
                      )}

                    </div>


                    {/* BUDGET */}

                    <div className="trip-budget">

                      <span>
                        Budget / person
                      </span>

                      <strong>
                        ₹
                        {trip.budgetPerPerson.toLocaleString(
                          'en-IN'
                        )}
                      </strong>

                    </div>


                    {/* MEMBERS */}

                    <div className="trip-members">

                      <div>

                        <strong>
                          {
                            acceptedMembers.length
                          }
                        </strong>

                        {' / '}

                        {trip.totalTravellers}

                        {' '}travellers

                      </div>


                      <div className="member-stack">

                        {acceptedMembers.map(
                          (member) => (

                            <span
                              className="member-avatar"
                              key={member.id}
                              title={member.name}
                            >
                              {member.name.charAt(
                                0
                              )}
                            </span>

                          )
                        )}

                      </div>

                    </div>


                    {/* ORGANIZER REQUEST MANAGEMENT */}

                    {isOrganizer && (

                      <div className="organizer-panel">

                        <strong>
                          Join Requests
                        </strong>


                        {pendingMembers.length ===
                        0 ? (

                          <p>
                            No pending requests.
                          </p>

                        ) : (

                          pendingMembers.map(
                            (member) => (

                              <div
                                className="join-request"
                                key={member.id}
                              >

                                <span>
                                  {member.name}
                                </span>


                                <div>

                                  <button
                                    type="button"
                                    className="accept-button"
                                    onClick={() =>
                                      handleMemberStatus(
                                        trip.id,
                                        member.id,
                                        'accepted'
                                      )
                                    }
                                  >
                                    Accept
                                  </button>


                                  <button
                                    type="button"
                                    className="reject-button"
                                    onClick={() =>
                                      handleMemberStatus(
                                        trip.id,
                                        member.id,
                                        'rejected'
                                      )
                                    }
                                  >
                                    Reject
                                  </button>

                                </div>

                              </div>

                            )
                          )

                        )}

                      </div>

                    )}


                    {/* JOIN BUTTON */}

                    {!isOrganizer && (

                      <button
                        type="button"
                        className="join-trip-button"
                        disabled={
                          currentMembership?.status ===
                            'pending' ||
                          currentMembership?.status ===
                            'accepted' ||
                          availableSeats <= 0
                        }
                        onClick={() =>
                          handleJoinRequest(
                            trip.id
                          )
                        }
                      >

                        {currentMembership?.status ===
                        'pending'
                          ? 'Request Sent'
                          : currentMembership?.status ===
                            'accepted'
                          ? 'Joined ✓'
                          : availableSeats <= 0
                          ? 'Trip Full'
                          : 'Request to Join'}

                      </button>

                    )}

                  </div>

                </article>
              );
            })

          )}

        </div>

      </section>


      {/* CREATE TRIP MODAL */}

      <CreateTripModal
        isOpen={isCreateTripOpen}
        onClose={() =>
          setIsCreateTripOpen(false)
        }
        onCreated={handleTripCreated}
      />

    </div>
  );
};

export default TravelConnect;