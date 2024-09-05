import Belt from "./Belt";
import Navbar from "./Navbar";
import "../assets/pages-header.webp";
import "../styles/components/PagesHeader/pagesheader.scss";
import BreadCrumb from "./SingleJobCrumb";

import MobileNav from "./MobileNav";
const PagesHeader = () => {
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
          <div className="pages-header-title">Jobs Portal</div>
          <div className="bread-crumbs">
            <BreadCrumb />
          </div>
        </div>
      </header>
    </>
  );
};

export default PagesHeader;
