import { useState } from 'react';
import { saveSuggestion } from '../../data/suggestions';

import './SuggestPlace.css';

function SuggestPlace({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    placeName: '',
    location: '',
    country: '',
    whyVisit: '',
    whyUnderrated: '',
    bestTime: '',
    estimatedBudget: '',
  });

  const [submitted, setSubmitted] =
    useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    saveSuggestion(formData);

    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);

    setFormData({
      placeName: '',
      location: '',
      country: '',
      whyVisit: '',
      whyUnderrated: '',
      bestTime: '',
      estimatedBudget: '',
    });

    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="suggest-modal-overlay"
      onClick={handleClose}
    >
      <div
        className="suggest-modal"
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <button
          type="button"
          className="modal-close"
          onClick={handleClose}
          aria-label="Close"
        >
          ×
        </button>

        {!submitted ? (
          <>
            <div className="suggest-header">
              <span>
                COMMUNITY DISCOVERY
              </span>

              <h2>
                Suggest an Underrated Place
              </h2>

              <p>
                Know a beautiful destination that
                deserves more attention? Share it
                with fellow travellers.
              </p>
            </div>

            <form
              className="suggest-form"
              onSubmit={handleSubmit}
            >
              <div className="form-row">

                <div className="form-group">
                  <label>
                    Place Name *
                  </label>

                  <input
                    type="text"
                    name="placeName"
                    value={formData.placeName}
                    onChange={handleChange}
                    placeholder="e.g. Majuli Island"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    Location *
                  </label>

                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Assam"
                    required
                  />
                </div>

              </div>

              <div className="form-group">
                <label>
                  Country *
                </label>

                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="e.g. India"
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Why should travellers visit? *
                </label>

                <textarea
                  name="whyVisit"
                  value={formData.whyVisit}
                  onChange={handleChange}
                  placeholder="Tell us what makes this place special..."
                  rows="3"
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Why is it underrated? *
                </label>

                <textarea
                  name="whyUnderrated"
                  value={formData.whyUnderrated}
                  onChange={handleChange}
                  placeholder="What makes this place less crowded or less known?"
                  rows="3"
                  required
                />
              </div>

              <div className="form-row">

                <div className="form-group">
                  <label>
                    Best Time to Visit
                  </label>

                  <input
                    type="text"
                    name="bestTime"
                    value={formData.bestTime}
                    onChange={handleChange}
                    placeholder="e.g. October - March"
                  />
                </div>

                <div className="form-group">
                  <label>
                    Approx. Budget / Person
                  </label>

                  <input
                    type="number"
                    name="estimatedBudget"
                    value={
                      formData.estimatedBudget
                    }
                    onChange={handleChange}
                    placeholder="e.g. 15000"
                    min="0"
                  />
                </div>

              </div>

              <button
                type="submit"
                className="submit-suggestion"
              >
                Submit Destination →
              </button>
            </form>
          </>
        ) : (
          <div className="suggest-success">

            <div className="success-icon">
              ✓
            </div>

            <h2>
              Thanks for sharing!
            </h2>

            <p>
              Your destination has been added to
              our community discoveries.
            </p>

            <div className="submitted-place">
              <strong>
                {formData.placeName}
              </strong>

              <span>
                📍 {formData.location},{' '}
                {formData.country}
              </span>
            </div>

            <button
              type="button"
              onClick={handleClose}
            >
              Explore Destinations
            </button>

          </div>
        )}
      </div>
    </div>
  );
}

export default SuggestPlace;