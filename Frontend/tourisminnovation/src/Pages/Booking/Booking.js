import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../Components/Navbar/Navbar';

import './Booking.css';

function Booking() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    startDate: '',
    travellers: 2,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      'Booking details submitted successfully!'
    );
  };

  return (
    <>
      <Navbar />

      <main className="booking-page">

        {/* Page Header */}

        <div className="booking-header">

          <span className="booking-label">
            COMPLETE YOUR BOOKING
          </span>

          <h1>Book Your Goa Trip</h1>

          <p>
            Enter your details to reserve your
            recommended travel package.
          </p>

        </div>


        <div className="booking-layout">

          {/* Booking Form */}

          <form
            className="booking-form"
            onSubmit={handleSubmit}
          >

            <section className="booking-card">

              <div className="booking-section-title">
                <span>👤</span>

                <div>
                  <h2>Traveller Details</h2>

                  <p>
                    Tell us who is travelling.
                  </p>
                </div>
              </div>


              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="firstName">
                    First Name
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="lastName">
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>


              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

            </section>


            {/* Trip Details */}

            <section className="booking-card">

              <div className="booking-section-title">

                <span>🗓️</span>

                <div>
                  <h2>Trip Details</h2>

                  <p>
                    Select your travel information.
                  </p>
                </div>

              </div>


              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="startDate">
                    Travel Date
                  </label>

                  <input
                    id="startDate"
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="travellers">
                    Travellers
                  </label>

                  <select
                    id="travellers"
                    name="travellers"
                    value={formData.travellers}
                    onChange={handleChange}
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

            </section>


            {/* Special Request */}

            <section className="booking-card">

              <div className="booking-section-title">

                <span>📝</span>

                <div>
                  <h2>Special Requests</h2>

                  <p>
                    Optional — tell us anything we
                    should know.
                  </p>
                </div>

              </div>


              <div className="form-group">

                <label htmlFor="request">
                  Additional Information
                </label>

                <textarea
                  id="request"
                  name="request"
                  placeholder="Example: Need airport pickup..."
                  rows="4"
                />

              </div>

            </section>


            <button
              type="submit"
              className="continue-booking-btn"
            >
              Continue to Payment →
            </button>

          </form>


          {/* Package Summary */}

          <aside className="booking-summary">

            <div className="summary-header">

              <span>
                🏆 RECOMMENDED
              </span>

              <h2>Goa Explorer</h2>

              <p>
                4 Days / 3 Nights
              </p>

            </div>


            <div className="summary-divider"></div>


            <div className="summary-item">

              <span>🏨 Hotel</span>

              <strong>₹18,600</strong>

            </div>


            <div className="summary-item">

              <span>🚗 Transport</span>

              <strong>₹11,200</strong>

            </div>


            <div className="summary-item">

              <span>🎯 Activities</span>

              <strong>₹4,500</strong>

            </div>


            <div className="summary-item">

              <span>🍽️ Food</span>

              <strong>₹4,000</strong>

            </div>


            <div className="summary-divider"></div>


            <div className="summary-total">

              <span>Total</span>

              <strong>₹48,300</strong>

            </div>


            <div className="secure-booking">

              🔒 Secure booking

            </div>


            <button
              type="button"
              className="back-to-package"
              onClick={() =>
                navigate('/package/goa')
              }
            >
              ← Back to package
            </button>

          </aside>

        </div>

      </main>
    </>
  );
}

export default Booking;