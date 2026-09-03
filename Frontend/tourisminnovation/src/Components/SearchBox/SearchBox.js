import { useState } from 'react';
import './SearchBox.css';

function SearchBox() {
  const [destination, setDestination] = useState('');
  const [travellers, setTravellers] = useState(2);
  const [budget, setBudget] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();

    console.log({
      destination,
      travellers,
      budget,
    });

    alert(
      `Searching trips to ${destination || 'your destination'}`
    );
  };

  return (
    <form className="search-box" onSubmit={handleSearch}>

      <div className="search-field destination-field">
        <span className="search-icon">📍</span>

        <div>
          <label>Where</label>

          <input
            type="text"
            placeholder="Where do you want to go?"
            value={destination}
            onChange={(event) =>
              setDestination(event.target.value)
            }
          />
        </div>
      </div>

      <div className="search-field">
        <span className="search-icon">📅</span>

        <div>
          <label>When</label>

          <input
            type="text"
            placeholder="Add dates"
            onFocus={(event) => {
              event.target.type = 'date';
            }}
          />
        </div>
      </div>

      <div className="search-field">
        <span className="search-icon">👥</span>

        <div>
          <label>Travellers</label>

          <select
            value={travellers}
            onChange={(event) =>
              setTravellers(event.target.value)
            }
          >
            <option value="1">1 Traveller</option>
            <option value="2">2 Travellers</option>
            <option value="3">3 Travellers</option>
            <option value="4">4 Travellers</option>
            <option value="5">5 Travellers</option>
            <option value="6">6 Travellers</option>
          </select>
        </div>
      </div>

      <div className="search-field">
        <span className="search-icon">₹</span>

        <div>
          <label>Budget</label>

          <select
            value={budget}
            onChange={(event) =>
              setBudget(event.target.value)
            }
          >
            <option value="">Any budget</option>
            <option value="10000">Under ₹10,000</option>
            <option value="25000">Under ₹25,000</option>
            <option value="50000">Under ₹50,000</option>
            <option value="100000">Under ₹1,00,000</option>
          </select>
        </div>
      </div>

      <button className="search-button" type="submit">
        Search
      </button>

    </form>
  );
}

export default SearchBox;