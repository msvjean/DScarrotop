import { Link, NavLink } from 'react-router-dom';
import './style.css';
import 'bootstrap/js/src/collapse.js';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>Carros Top</h4>
        </Link>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscarrotop-navbar"
          aria-controls="dscarrotop-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
          </span>
        </button>

        <div className="collapse navbar-collapse" id="dscarrotop-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="products">Catálogo</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
