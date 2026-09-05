import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">

        <Link
          to="/"
          className="navbar-logo"
        >
          Tourism<span>Wise</span>
        </Link>

        <nav className="navbar-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/search">
            Destinations
          </Link>

          <Link to="/search">
            Packages
          </Link>

          <Link to="/connect">
            Travel Connect
          </Link>

          <Link to="/my-trips">
            My Trips
          </Link>

          <Link to="/">
            About
          </Link>

        </nav>

        <div className="navbar-actions">

          <button
            type="button"
            className="search-icon-button"
          >
            ⌕
          </button>

          <Link
            to="/connect"
            className="get-started-button"
          >
            Get started
          </Link>

        </div>

      </div>
    </header>
  );
}

export default Navbar;