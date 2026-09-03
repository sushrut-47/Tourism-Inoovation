import Navbar from '../../Components/Navbar/Navbar';
import SearchBox from '../../Components/SearchBox/SearchBox';
import DestinationCard from '../../Components/DestinationCard/DestinationCard';

import './Home.css';

const destinations = [
  {
    id: 1,
    name: 'Goa',
    country: 'India',
    description: 'Beaches, nightlife and unforgettable sunsets.',
    price: '₹8,999',
    image:
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 2,
    name: 'Manali',
    country: 'India',
    description: 'Mountains, adventure and beautiful valleys.',
    price: '₹10,499',
    image:
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 3,
    name: 'Bali',
    country: 'Indonesia',
    description: 'Tropical beaches, temples and island adventures.',
    price: '₹24,999',
    image:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80',
  },
];

function Home() {
  return (
    <div className="home">
      <Navbar />

      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-badge">
              ✈️ Plan less. Travel more.
            </span>

            <h1>
              Find your perfect
              <span> trip.</span>
            </h1>

            <p>
              Compare hotels, discover destinations and get
              personalized travel packages within your budget.
            </p>

            <SearchBox />
          </div>
        </div>
      </section>

      <section className="popular-section">
        <div className="section-header">
          <div>
            <span className="section-label">EXPLORE</span>

            <h2>Popular destinations</h2>

            <p>
              Discover places travelers are loving right now.
            </p>
          </div>

          <button className="view-all-button">
            View all →
          </button>
        </div>

        <div className="destination-grid">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>
      </section>

      <section className="why-section">
        <div className="section-header centered">
          <span className="section-label">WHY US</span>

          <h2>Travel smarter</h2>

          <p>
            Everything you need to plan a better trip.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Compare prices</h3>
            <p>
              Compare hotels and travel options from multiple
              providers in one place.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Smart recommendations</h3>
            <p>
              Get packages selected according to your budget,
              preferences and trip duration.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🗺️</div>
            <h3>Complete trip planning</h3>
            <p>
              Plan hotels, activities, transport and experiences
              from a single platform.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;