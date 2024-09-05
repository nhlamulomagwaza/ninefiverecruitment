import "../styles/components/Navbar/navbar.scss";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useLocation } from "react-router";
import { matchPath } from "react-router-dom";

const MobileNav = () => {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const candidateProfile = JSON.parse(
    localStorage.getItem("ninefive-candidate")
  );

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      {console.log(location.pathname)}
      <div className="mobile-nav">
        <div className="mobile-nav-container">
          <div className="mobile-logo">
            <Link to="/" id="mobile-logo">
              NINEFIVE<span> RECRUITMENT</span>
            </Link>
          </div>
          <IoMdMenu
            size={25}
            onClick={() => toggleMenu()}
            className={
              menuOpen ? "mobile-menu-open-hide" : "mobile-menu-nav-open-icon"
            }
          />
          <IoMdClose
            size={25}
            className={
              menuOpen ? "mobile-menu-close-show" : "mobile-nav-close-icon"
            }
            onClick={() => toggleMenu()}
          />
          <ul
            className={
              menuOpen ? "mobile-menu-items-open" : "mobile-menu-items"
            }
          >
            <Link
              to="/"
              id="desktop-menu-item"
              className={
                location.pathname === "/" ? "mobile-active" : "mobile-white"
              }
            >
              Home
            </Link>
            <Link
              to="/about"
              id="mobile-menu-item"
              className={
                matchPath(location.pathname, "/about")
                  ? "mobile-active"
                  : "mobile-white"
              }
            >
              About
            </Link>
            <Link
              to="/services"
              id="mobile-menu-item"
              className={
                location.pathname === "/services"
                  ? "mobile-active"
                  : "mobile-white"
              }
            >
              Services
            </Link>
            <Link
              to="/jobsportal"
              id="mobile-menu-item"
              className={
                location.pathname === "/jobsportal"
                  ? "mobile-active"
                  : "mobile-white"
              }
            >
              Jobs Portal
            </Link>

            <Link
              to={candidateProfile ? "/candidateprofile" : "/uploadresume"}
              id="mobile-menu-item"
              className={
                location.pathname ===
                (candidateProfile ? "/candidateprofile" : "/uploadresume")
                  ? "mobile-active"
                  : "mobile-white"
              }
            >
              {candidateProfile ? "Your Profile" : "Upload Resume"}
            </Link>

            <Link
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "mobile-active"
                  : "mobile-white"
              }
              id="mobile-menu-item"
            >
              Contact Us
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
