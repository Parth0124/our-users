// Navbar.js
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">User Management System</Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          {/* Use Bootstrap's spacing classes for the gap */}
          <li className="nav-item mx-2">
            <Link to="/about" className="nav-link">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
