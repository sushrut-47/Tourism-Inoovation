import { useNavigate } from 'react-router-dom';
import './DestinationCard.css';

function DestinationCard({ destination }) {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate(
      `/search?destination=${encodeURIComponent(
        destination.name
      )}&travellers=2&budget=${
        destination.averageBudget || 50000
      }`
    );
  };

  return (
    <article className="destination-card">

      <div className="destination-image">

        <img
          src={destination.image}
          alt={destination.name}
          loading="lazy"
        />

        <button
          type="button"
          className="favorite-button"
          aria-label={`Favorite ${destination.name}`}
        >
          ♡
        </button>

      </div>

      <div className="destination-content">

        <span className="destination-country">
          {destination.country}
        </span>

        <h3>
          {destination.name}
        </h3>

        <p>
          {destination.description}
        </p>

        <div className="destination-footer">

          <div className="destination-price">

            <span>
              From
            </span>

            <strong>
              ₹
              {Number(
                destination.averageBudget || 50000
              ).toLocaleString('en-IN')}
            </strong>

          </div>

          <button
            type="button"
            className="explore-button"
            onClick={handleExplore}
          >
            Explore →
          </button>

        </div>

      </div>

    </article>
  );
}

export default DestinationCard;