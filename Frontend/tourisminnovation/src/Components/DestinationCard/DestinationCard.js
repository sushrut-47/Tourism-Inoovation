import './DestinationCard.css';

function DestinationCard({ destination }) {
  return (
    <article className="destination-card">

      <div className="destination-image-container">
        <img
          src={destination.image}
          alt={destination.name}
          className="destination-image"
        />

        <button className="favorite-button">
          ♡
        </button>

        <span className="destination-price">
          From {destination.price}
        </span>
      </div>

      <div className="destination-content">

        <div>
          <h3>{destination.name}</h3>

          <span className="destination-country">
            {destination.country}
          </span>
        </div>

        <p>{destination.description}</p>

        <button className="explore-button">
          Explore →
        </button>

      </div>

    </article>
  );
}

export default DestinationCard;