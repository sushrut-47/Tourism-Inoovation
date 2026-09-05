import { useNavigate } from 'react-router-dom';
import './PackageRecommendation.css';

function PackageRecommendation({
  destination,
  travellers,
  budget,
}) {
  const navigate = useNavigate();

  const hotelCost = 18600;
  const transportCost = 11200;
  const activitiesCost = 4500;
  const foodCost = 4000;

  const totalCost =
    hotelCost +
    transportCost +
    activitiesCost +
    foodCost;

  const userBudget = Number(budget) || 50000;

  const remainingBudget = userBudget - totalCost;

  const handleViewPackage = () => {
    navigate('/package/goa');
  };

  return (
    <section className="package-recommendation">

      <div className="recommendation-header">

        <div>
          <span className="recommendation-label">
            ✨ SMART RECOMMENDATION
          </span>

          <h2>Best package for your trip</h2>

          <p>
            We found a package that fits your budget
            and travel preferences.
          </p>
        </div>

        <div className="budget-box">
          <span>Your Budget</span>

          <strong>
            ₹{userBudget.toLocaleString()}
          </strong>
        </div>

      </div>


      <div className="recommended-package">

        <div className="best-value">
          🏆 BEST VALUE
        </div>


        <div className="package-content">

          {/* Package information */}

          <div className="package-main">

            <h3>
              {destination || 'Goa'} Explorer
            </h3>

            <p className="package-duration">
              4 Days / 3 Nights
            </p>

            <p>
              👥 {travellers || 2} Travellers
            </p>


            <div className="recommendation-score">
              <span>AI Recommendation</span>

              <strong>94%</strong>
            </div>

          </div>


          {/* Cost breakdown */}

          <div className="cost-breakdown">

            <div className="cost-row">
              <span>🏨 Hotel</span>

              <strong>
                ₹{hotelCost.toLocaleString()}
              </strong>
            </div>


            <div className="cost-row">
              <span>🚗 Transport</span>

              <strong>
                ₹{transportCost.toLocaleString()}
              </strong>
            </div>


            <div className="cost-row">
              <span>🎯 Activities</span>

              <strong>
                ₹{activitiesCost.toLocaleString()}
              </strong>
            </div>


            <div className="cost-row">
              <span>🍽️ Food</span>

              <strong>
                ₹{foodCost.toLocaleString()}
              </strong>
            </div>


            <div className="cost-divider"></div>


            <div className="total-row">
              <span>Total Estimated Cost</span>

              <strong>
                ₹{totalCost.toLocaleString()}
              </strong>
            </div>


            {remainingBudget >= 0 ? (
              <div className="remaining-budget">
                ₹{remainingBudget.toLocaleString()} remaining
                from your budget
              </div>
            ) : (
              <div className="remaining-budget over-budget">
                ₹{Math.abs(remainingBudget).toLocaleString()}
                {' '}above your budget
              </div>
            )}

          </div>

        </div>


        {/* Package highlights */}

        <div className="package-highlights">

          <div>✓ 4.5+ rated hotel</div>

          <div>✓ Breakfast included</div>

          <div>✓ 2+ activities</div>

          <div>✓ Within budget</div>

        </div>


        {/* View package button */}

        <button
          type="button"
          className="view-package-btn"
          onClick={handleViewPackage}
        >
          View complete package →
        </button>

      </div>

    </section>
  );
}

export default PackageRecommendation;