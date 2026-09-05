import React, { useState } from 'react';
import { createTripRequest } from '../../data/tripRequests';

import './CreateTripModal.css';

const CreateTripModal = ({ isOpen, onClose, onCreated }) => {
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    travelStyle: 'Backpacker',
    budgetPerPerson: '',
    totalTravellers: 2,
    description: '',
    interests: '',
  });

  if (!isOpen) {
    return null;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const trip = {
      destination: formData.destination,
      startDate: formData.startDate,
      endDate: formData.endDate,
      travelStyle: formData.travelStyle,
      budgetPerPerson: Number(formData.budgetPerPerson),
      totalTravellers: Number(formData.totalTravellers),

      organizer: {
        id: 'current-user',
        name: 'You',
        age: 29,
      },

      description: formData.description,

      interests: formData.interests
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean),
    };

    const newTrip = createTripRequest(trip);

    onCreated(newTrip);

    setFormData({
      destination: '',
      startDate: '',
      endDate: '',
      travelStyle: 'Backpacker',
      budgetPerPerson: '',
      totalTravellers: 2,
      description: '',
      interests: '',
    });

    onClose();
  };

  return (
    <div
      className="create-trip-overlay"
      onClick={onClose}
    >
      <div
        className="create-trip-modal"
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <div className="create-trip-header">
          <div>
            <span>Create Your Trip</span>
            <h2>Find your travel tribe 🌍</h2>
          </div>

          <button
            className="close-modal-button"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label>Destination *</label>

              <input
                type="text"
                name="destination"
                placeholder="e.g. Goa"
                value={formData.destination}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label>Travel Style *</label>

              <select
                name="travelStyle"
                value={formData.travelStyle}
                onChange={handleChange}
              >
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
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Start Date *</label>

              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label>End Date *</label>

              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>Budget / Person *</label>

              <input
                type="number"
                name="budgetPerPerson"
                placeholder="₹ 15000"
                min="0"
                value={formData.budgetPerPerson}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label>Total Travellers *</label>

              <input
                type="number"
                name="totalTravellers"
                min="2"
                max="20"
                value={formData.totalTravellers}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-field">
            <label>What are you planning?</label>

            <textarea
              name="description"
              placeholder="Tell other travellers about your plan..."
              value={formData.description}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>

          <div className="form-field">
            <label>Interests</label>

            <input
              type="text"
              name="interests"
              placeholder="Beach, Adventure, Photography"
              value={formData.interests}
              onChange={handleChange}
            />

            <small>
              Separate interests using commas.
            </small>
          </div>

          <div className="create-trip-footer">
            <button
              type="button"
              className="cancel-button"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="create-trip-button"
            >
              Create Trip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTripModal;