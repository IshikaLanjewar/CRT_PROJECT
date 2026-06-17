import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="navbar">

      <div className="logo">
        Tailor<span>Hub</span>
      </div>

      <ul className="nav-links">

        <li><Link to="/">Home</Link></li>

        <li><Link to="/dashboard">Services</Link></li>

        <li><Link to="/dashboard">Collections</Link></li>

        <li><Link to="/dashboard">Pricing</Link></li>

        <li><Link to="/contact">Contact</Link></li>

      </ul>

      <Link to="/register">

        <button className="nav-btn">
          Book Now
        </button>

      </Link>

    </nav>

  );
}

export default Navbar;