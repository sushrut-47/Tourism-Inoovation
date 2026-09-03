import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="logo">
          <span className="logo-icon">✈</span>
          <span>Travel<span>Wise</span></span>
        </div>

        <nav className="nav-links">
          <a href="#destinations">Destinations</a>
          <a href="#hotels">Hotels</a>
          <a href="#packages">Packages</a>
          <a href="#about">About</a>
        </nav>

        <div className="nav-actions">
          <button className="login-button">
            Log in
          </button>

          <button className="signup-button">
            Get started
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;