import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './SearchBox.css';

function SearchBox() {
  const navigate = useNavigate();

  const [destination, setDestination] =
    useState('');

  const [travellers, setTravellers] =
    useState(2);

  const [budget, setBudget] =
    useState(50000);


  const handleSearch = (event) => {
    event.preventDefault();

    navigate(
      `/search?destination=${encodeURIComponent(
        destination || 'Goa'
      )}&travellers=${travellers}&budget=${budget}`
    );
  };


  return (
    <form
      className="search-box"
      onSubmit={handleSearch}
    >

      <div className="search-field">

        <span className="search-field-icon">
          ♧
        </span>

        <div>

          <label>
            Where to?
          </label>

          <input
            type="text"
            value={destination}
            onChange={(event) =>
              setDestination(
                event.target.value
              )
            }
            placeholder="Destination"
          />

        </div>

      </div>


      <div className="search-field">

        <span className="search-field-icon">
          □
        </span>

        <div>

          <label>
            Budget
          </label>

          <input
            type="number"
            value={budget}
            onChange={(event) =>
              setBudget(
                event.target.value
              )
            }
            placeholder="₹50,000"
          />

        </div>

      </div>


      <div className="search-field travellers-field">

        <span className="search-field-icon">
          ♧
        </span>

        <div>

          <label>
            Travellers
          </label>

          <select
            value={travellers}
            onChange={(event) =>
              setTravellers(
                event.target.value
              )
            }
          >

            <option value="1">
              1 traveller
            </option>

            <option value="2">
              2 travellers
            </option>

            <option value="3">
              3 travellers
            </option>

            <option value="4">
              4 travellers
            </option>

            <option value="5">
              5 travellers
            </option>

            <option value="6">
              6 travellers
            </option>

          </select>

        </div>

      </div>


      <button
        type="submit"
        className="search-button"
      >
        Search
      </button>

    </form>
  );
}

export default SearchBox;