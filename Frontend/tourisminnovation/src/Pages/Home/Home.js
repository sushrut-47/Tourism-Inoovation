import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../Components/Navbar/Navbar';
import SearchBox from '../../Components/SearchBox/SearchBox';
import DestinationCard from '../../Components/DestinationCard/DestinationCard';
import SuggestPlace from '../../Components/SuggestPlace/SuggestPlace';

import destinations from '../../data/destinations';
import { getSuggestions } from '../../data/suggestions';

import './Home.css';

function Home() {
  const navigate = useNavigate();

  const [showSuggestPlace, setShowSuggestPlace] =
    useState(false);

  const [communitySuggestions, setCommunitySuggestions] =
    useState(() => getSuggestions());

  /*
   * Popular destinations already available
   * in our main destination dataset.
   */
  const popularDestinations = destinations.filter(
    (destination) =>
      destination.category === 'Popular'
  );

  const handleSuggestionSubmitted = (
    suggestion
  ) => {
    setCommunitySuggestions((previous) => [
      ...previous,
      suggestion,
    ]);
  };

  return (
    <div className="home-page">

      {/* =========================================
          NAVBAR
      ========================================= */}

      <Navbar />

      {/* =========================================
          HERO
      ========================================= */}

      <section className="hero">

        <div className="hero-overlay">

          <div className="hero-content">

            <button
              type="button"
              className="home-back-button"
              onClick={() => navigate(-1)}
            >
              ← Back
            </button>

            <div className="hero-text">

              <span className="hero-eyebrow">
                SMART TRAVEL PLANNING
              </span>

              <h1>
                Travel smarter.
                <br />
                Discover more.
              </h1>

              <p>
                Compare hotels, discover hidden
                destinations and build a trip that
                fits your budget.
              </p>

            </div>

            {/* SEARCH */}

            <SearchBox />

          </div>

        </div>

      </section>

      {/* =========================================
          TRUST BAR
      ========================================= */}

      <section className="trust-bar">

        <div className="trust-item">
          <strong>100+</strong>
          <span>
            Hotels compared
          </span>
        </div>

        <div className="trust-item">
          <strong>50+</strong>
          <span>
            Experiences
          </span>
        </div>

        <div className="trust-item">
          <strong>20+</strong>
          <span>
            Destinations
          </span>
        </div>

        <div className="trust-item">
          <strong>₹</strong>
          <span>
            Budget focused
          </span>
        </div>

      </section>

      {/* =========================================
          POPULAR DESTINATIONS
      ========================================= */}

      <section className="destinations-section">

        <div className="section-heading">

          <div>
            <span>
              EXPLORE
            </span>

            <h2>
              Popular Destinations
            </h2>
          </div>

          <p>
            Start planning your next adventure
          </p>

        </div>

        <div className="destination-grid">

          {popularDestinations
            .slice(0, 6)
            .map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
              />
            ))}

        </div>

      </section>

      {/* =========================================
          UNDERRATED DESTINATIONS
      ========================================= */}

      <section className="underrated-section">

        <div className="section-heading">

          <div>
            <span>
              DISCOVER SOMETHING DIFFERENT
            </span>

            <h2>
              Underrated Places
            </h2>
          </div>

          <p>
            Hidden gems worth discovering
          </p>

        </div>

        <div className="underrated-grid">

          {/* Existing underrated destinations */}

          {destinations
            .filter(
              (destination) =>
                destination.category ===
                'Underrated'
            )
            .map((destination) => (
              <article
                className="underrated-card"
                key={destination.id}
              >

                <div className="underrated-badge">
                  UNDERRATED
                </div>

                <h3>
                  {destination.name}
                </h3>

                <p className="place-location">
                  📍 {destination.country}
                </p>

                <p>
                  {destination.description}
                </p>

                <div className="underrated-info">

                  <span>
                    💰 ₹
                    {Number(
                      destination.averageBudget || 0
                    ).toLocaleString()}
                  </span>

                  <span>
                    ✨ Hidden Gem
                  </span>

                </div>

                <button
                  type="button"
                  className="discover-place-button"
                  onClick={() =>
                    navigate(
                      `/search?destination=${encodeURIComponent(
                        destination.name
                      )}&travellers=2&budget=${destination.averageBudget || 50000}`
                    )
                  }
                >
                  Explore Place →
                </button>

              </article>
            ))}

          {/* Community suggestions */}

          {communitySuggestions.map(
            (place) => (
              <article
                className="underrated-card community-card"
                key={place.id}
              >

                <div className="underrated-badge community-badge">
                  COMMUNITY PICK
                </div>

                <h3>
                  {place.placeName}
                </h3>

                <p className="place-location">
                  📍 {place.location},{' '}
                  {place.country}
                </p>

                <p>
                  {place.whyVisit}
                </p>

                <div className="underrated-info">

                  {place.bestTime && (
                    <span>
                      🕐 {place.bestTime}
                    </span>
                  )}

                  {place.estimatedBudget && (
                    <span>
                      💰 ₹
                      {Number(
                        place.estimatedBudget
                      ).toLocaleString()}
                      {' '} / person
                    </span>
                  )}

                </div>

                <div className="why-underrated">

                  <strong>
                    Why underrated?
                  </strong>

                  <p>
                    {place.whyUnderrated}
                  </p>

                </div>

                <button
                  type="button"
                  className="discover-place-button"
                  onClick={() =>
                    navigate(
                      `/search?destination=${encodeURIComponent(
                        place.placeName
                      )}&travellers=2&budget=${
                        place.estimatedBudget ||
                        50000
                      }`
                    )
                  }
                >
                  Explore Place →
                </button>

              </article>
            )
          )}

          {/* Suggestion CTA */}

          <article className="suggest-place-card">

            <div className="suggest-place-icon">
              +
            </div>

            <h3>
              Know a hidden gem?
            </h3>

            <p>
              Help other travellers discover
              beautiful places that deserve more
              attention.
            </p>

            <button
              type="button"
              onClick={() =>
                setShowSuggestPlace(true)
              }
            >
              Suggest a Place →
            </button>

          </article>

        </div>

      </section>

      {/* =========================================
          WHY TOURISMWISE
      ========================================= */}

      <section className="why-section">

        <div className="section-heading centered">

          <span>
            WHY TOURISMWISE
          </span>

          <h2>
            Plan better. Travel better.
          </h2>

          <p>
            Everything you need to make smarter
            travel decisions.
          </p>

        </div>

        <div className="why-grid">

          <div className="why-card">

            <div className="why-icon">
              ⚖️
            </div>

            <h3>
              Compare
            </h3>

            <p>
              Compare hotels, activities and
              packages instead of checking
              multiple websites.
            </p>

          </div>

          <div className="why-card">

            <div className="why-icon">
              💰
            </div>

            <h3>
              Budget Smart
            </h3>

            <p>
              See exactly where your travel
              budget goes and find packages
              that fit your spending limit.
            </p>

          </div>

          <div className="why-card">

            <div className="why-icon">
              🧭
            </div>

            <h3>
              Discover
            </h3>

            <p>
              Find underrated destinations
              beyond the usual tourist
              hotspots.
            </p>

          </div>

          <div className="why-card">

            <div className="why-icon">
              ✨
            </div>

            <h3>
              Personalized
            </h3>

            <p>
              Get recommendations based on
              your budget, travellers and
              travel preferences.
            </p>

          </div>

        </div>

      </section>

      {/* =========================================
          CTA
      ========================================= */}

      <section className="home-cta">

        <div>

          <span>
            READY TO EXPLORE?
          </span>

          <h2>
            Your next adventure starts here.
          </h2>

          <p>
            Tell us where you want to go and
            we'll help you find the best way
            to experience it.
          </p>

        </div>

        <button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
        >
          Plan My Trip →
        </button>

      </section>

      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="home-footer">

        <div className="footer-content">

          <div>
            <h3>
              TourismWise
            </h3>

            <p>
              Smart travel planning for
              smarter adventures.
            </p>
          </div>

          <div>
            <span>
              Explore
            </span>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
            >
              Destinations
            </button>

            <button
              onClick={() =>
                document
                  .querySelector(
                    '.underrated-section'
                  )
                  ?.scrollIntoView({
                    behavior: 'smooth',
                  })
              }
            >
              Underrated Places
            </button>
          </div>

          <div>
            <span>
              Community
            </span>

            <button
              onClick={() =>
                setShowSuggestPlace(true)
              }
            >
              Suggest a Place
            </button>
          </div>

        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()}
          {' '}TourismWise. All rights reserved.
        </div>

      </footer>

      {/* =========================================
          SUGGEST PLACE MODAL
      ========================================= */}

      <SuggestPlace
        isOpen={showSuggestPlace}
        onClose={() =>
          setShowSuggestPlace(false)
        }
        onSubmitted={
          handleSuggestionSubmitted
        }
      />

    </div>
  );
}

export default Home;