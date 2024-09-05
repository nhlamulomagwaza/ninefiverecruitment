import "../styles/components/Navbar/navbar.scss";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const candidateProfile = JSON.parse(
    localStorage.getItem("ninefive-candidate")
  );

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            NINEFIVE<span> RECRUITMENT</span>
          </Link>
        </div>
        <ul className="desktop-menu-items">
          <Link
            to="/"
            id="desktop-menu-item"
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </Link>
          <Link
            to="/about"
            id="desktop-menu-item"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
          <Link
            to="/services"
            id="desktop-menu-item"
            className={location.pathname === "/services" ? "active" : ""}
          >
            Services
          </Link>
          <Link
            to="/jobsportal"
            id="desktop-menu-item"
            className={location.pathname === "/jobsportal" ? "active" : ""}
          >
            Jobs Portal
          </Link>
          <Link
            to={candidateProfile ? "/candidateprofile" : "/uploadresume"}
            id="desktop-menu-item"
            className={
              location.pathname === "/candidateprofile" ||
              location.pathname === "/uploadresume"
                ? "active"
                : ""
            }
          >
            {candidateProfile ? "Your Profile" : "Upload Resume"}
          </Link>
          <Link to="/contact" className="btn-menu" id="desktop-menu-item">
            Contact Us
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
