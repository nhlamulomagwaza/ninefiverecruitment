import { FaPaperPlane } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import "../styles/components/Footer/footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-about-column">
            <h1 className="footer-titles footerlogo">
              NineFive <span>Recruitment</span>
            </h1>
            <div className="footer-about-content">
              <div className="footer-about-info">
                A different generation of a recruitment agency. A platform by
                workers, for the workCulture!
              </div>
              <div className="footer-social-icons">
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <BsInstagram />
                </li>
                <li>
                  <FaXTwitter />
                </li>
                <li>
                  <FaLinkedin />
                </li>
              </div>
            </div>
          </div>

          <div className="footer-explore-column">
            <h1 className="footer-titles">Explore</h1>
            <div className="footer-pages">
              <li>
                <Link to="/" className="Link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="Link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="Link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/jobsportal" className="Link">
                  Jobs Portal
                </Link>
              </li>
              <li>
                <Link to="/uploadresume" className="Link">
                  Upload Resume
                </Link>
              </li>
            </div>
          </div>

          <div className="footer-legal-column">
            <h1 className="footer-titles">Legal</h1>

            <div className="legal-links">
              <li>
                <Link to="/contact" className="Link">
                  Join Us
                </Link>
              </li>
              <li>
                <Link to="/privacypolicy" className="Link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                {" "}
                <Link to="termsandconditions" className="Link">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="careers" className="Link">
                  Careers
                </Link>
              </li>
            </div>
          </div>

          <div className="footer-questions-column">
            <h1 className="footer-titles">Have a question?</h1>

            <div className="footer-questions-content">
              <div className="footer-questions-info">
                <div className="footer-icon">
                  <FaLocationDot />
                </div>

                <p className="footer-text">The Globe, Earth!</p>
              </div>
              <div className="footer-questions-info">
                <div className="footer-icon">
                  <IoCallSharp />
                </div>

                <p className="footer-text">0846473393</p>
              </div>
              <div className="footer-questions-info">
                <div className="footer-icon">
                  <FaPaperPlane />
                </div>

                <p className="footer-text" id="last-child">
                  info@ninefiverecruitment.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
