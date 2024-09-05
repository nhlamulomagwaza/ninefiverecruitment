import Belt from "./Belt";
import Navbar from "./Navbar";
import "../assets/pages-header.webp";
import "../styles/components/PagesHeader/pagesheader.scss";
import BreadCrumb from "./BreadCrumb";

import { useLocation } from "react-router";
import MobileNav from "./MobileNav";
const PagesHeader = () => {
  const location = useLocation();
  const extractPageTitle = location.pathname.split("/").pop();
  let pageTitle;

  switch (extractPageTitle) {
    case "contact":
      pageTitle = "Contact Us";
      break;
    case "about":
      pageTitle = "About Us";
      break;
    case "services":
      pageTitle = "Services";
      break;
    case "termsandconditions":
      pageTitle = "Terms & Conditions";
      break;
    case "uploadresume":
      pageTitle = "Upload Resume";
      break;
    case "jobsportal":
      pageTitle = "Jobs Portal";
      break;
    case "careers":
      pageTitle = "Careers";
      break;
    case "privacypolicy":
      pageTitle = "Privacy Policy";
      break;
    case "candidateprofile":
      pageTitle = "Your Profile";
      break;
    case "editprofile":
      pageTitle = "Edit Profile";
      break;

    case "jobsportal/jobdescription":
      pageTitle = "Job Description";
      break;
    default:
      pageTitle = "Home";
      break;
  }

  return (
    <>
      <header className="pages-header">
        {/* BACKGROUND */}
        <div className="pages-header-img"></div>

        {/* HEADER */}
        <Belt />
        <MobileNav />
        <Navbar />

        {/* PAGES HERO */}
        <div className="pages-hero">
          <div className="pages-header-title">{pageTitle}</div>
          <div className="bread-crumbs">
            <BreadCrumb />
          </div>
        </div>
      </header>
    </>
  );
};

export default PagesHeader;
