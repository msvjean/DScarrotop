import './style.css';
import 'bootstrap/js/src/collapse.js';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <a href="/" className="nav-logo-text">
          <h4>Carros Top</h4>
        </a>
        <button
          className="navbar-toggler"
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
            <li>HOME</li>
            <li>CATALOGO</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
