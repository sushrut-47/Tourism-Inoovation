import React, { useState } from 'react';
import {
  getTripRequests,
  updateMemberStatus,
} from '../../data/tripRequests';

import './MyTrips.css';

const MyTrips = () => {
  const [trips, setTrips] = useState(
    getTripRequests()
  );

  const currentUserId = 'current-user';

  const myCreatedTrips = trips.filter(
    (trip) => trip.organizer.id === currentUserId
  );

  const myJoinRequests = trips.filter((trip) =>
    trip.members.some(
      (member) =>
        member.id === currentUserId &&
        member.role === 'member'
    )
  );

  const handleStatusChange = (
    tripId,
    memberId,
    status
  ) => {
    const updatedTrips = updateMemberStatus(
      tripId,
      memberId,
      status
    );

    setTrips(updatedTrips);
  };

  const getStatus = (trip) => {
    const member = trip.members.find(
      (item) => item.id === currentUserId
    );

    return member?.status;
  };

  return (
    <div className="my-trips-page">
      <section className="my-trips-hero">
        <div>
          <span>TOURISMWISE CONNECT</span>
          <h1>My Travel</h1>
          <p>
            Manage your trips, requests and travel
            companions.
          </p>
        </div>
      </section>

      <main className="my-trips-container">

        {/* CREATED TRIPS */}

        <section className="my-trips-section">
          <div className="my-trips-section-header">
            <div>
              <h2>Trips I Created</h2>
              <p>
                Manage travellers joining your trips.
              </p>
            </div>

            <span className="count-badge">
              {myCreatedTrips.length}
            </span>
          </div>

          {myCreatedTrips.length === 0 ? (
            <div className="empty-my-trips">
              <div>🧳</div>
              <h3>No trips created yet</h3>
              <p>
                Create a trip and find people to
                travel with.
              </p>
            </div>
          ) : (
            <div className="my-trip-list">
              {myCreatedTrips.map((trip) => {
                const pendingMembers =
                  trip.members.filter(
                    (member) =>
                      member.status === 'pending'
                  );

                const acceptedMembers =
                  trip.members.filter(
                    (member) =>
                      member.status === 'accepted'
                  );

                return (
                  <article
                    className="my-trip-card"
                    key={trip.id}
                  >
                    <div className="my-trip-main">
                      <div className="my-trip-info">
                        <span className="style-badge">
                          {trip.travelStyle}
                        </span>

                        <h3>
                          {trip.destination}
                        </h3>

                        <p>
                          📅 {trip.startDate} →{' '}
                          {trip.endDate}
                        </p>

                        <p>
                          💰 ₹
                          {trip.budgetPerPerson.toLocaleString(
                            'en-IN'
                          )}{' '}
                          / person
                        </p>
                      </div>

                      <div className="traveller-summary">
                        <strong>
                          {acceptedMembers.length}
                        </strong>

                        <span>
                          / {trip.totalTravellers}{' '}
                          travellers
                        </span>
                      </div>
                    </div>

                    <div className="accepted-travellers">
                      <h4>
                        Accepted Travellers
                      </h4>

                      <div className="traveller-list">
                        {acceptedMembers.map(
                          (member) => (
                            <div
                              className="traveller"
                              key={member.id}
                            >
                              <span className="traveller-avatar">
                                {member.name.charAt(
                                  0
                                )}
                              </span>

                              <span>
                                {member.name}
                              </span>

                              {member.role ===
                                'organizer' && (
                                <small>
                                  Organizer
                                </small>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div className="pending-requests">
                      <h4>
                        Pending Requests
                        {pendingMembers.length >
                          0 && (
                          <span>
                            {pendingMembers.length}
                          </span>
                        )}
                      </h4>

                      {pendingMembers.length ===
                      0 ? (
                        <p className="no-request">
                          No pending requests.
                        </p>
                      ) : (
                        pendingMembers.map(
                          (member) => (
                            <div
                              className="pending-request"
                              key={member.id}
                            >
                              <div className="request-user">
                                <span className="traveller-avatar">
                                  {member.name.charAt(
                                    0
                                  )}
                                </span>

                                <strong>
                                  {member.name}
                                </strong>
                              </div>

                              <div className="request-actions">
                                <button
                                  className="accept-btn"
                                  onClick={() =>
                                    handleStatusChange(
                                      trip.id,
                                      member.id,
                                      'accepted'
                                    )
                                  }
                                >
                                  Accept
                                </button>

                                <button
                                  className="reject-btn"
                                  onClick={() =>
                                    handleStatusChange(
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
                  </article>
                );
              })}
            </div>
          )}
        </section>

        {/* JOIN REQUESTS */}

        <section className="my-trips-section">
          <div className="my-trips-section-header">
            <div>
              <h2>Requests I Sent</h2>
              <p>
                Track trips you've requested to join.
              </p>
            </div>

            <span className="count-badge">
              {myJoinRequests.length}
            </span>
          </div>

          {myJoinRequests.length === 0 ? (
            <div className="empty-my-trips">
              <div>🌍</div>
              <h3>No join requests</h3>
              <p>
                Find a trip and request to join.
              </p>
            </div>
          ) : (
            <div className="join-request-list">
              {myJoinRequests.map((trip) => {
                const status = getStatus(trip);

                return (
                  <article
                    className="sent-request-card"
                    key={trip.id}
                  >
                    <div>
                      <span className="style-badge">
                        {trip.travelStyle}
                      </span>

                      <h3>{trip.destination}</h3>

                      <p>
                        📅 {trip.startDate} →{' '}
                        {trip.endDate}
                      </p>

                      <p>
                        Organized by{' '}
                        <strong>
                          {trip.organizer.name}
                        </strong>
                      </p>
                    </div>

                    <div
                      className={`request-status ${status}`}
                    >
                      {status === 'pending' &&
                        '⏳ Pending'}

                      {status === 'accepted' &&
                        '✓ Accepted'}

                      {status === 'rejected' &&
                        '✕ Rejected'}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default MyTrips;