import PagesHeader from "../../components/PagesHeader";
import Listings from "./components/listings/Listings";
import "../../styles/pages/jobsportal.scss";
import { Slide } from "react-awesome-reveal";
import { useContext, useEffect } from "react";

import SavedListings from "./components/listings/SavedListings";
import { NineFiveContext } from "../../store/AppContext";

const JobsPortal = () => {
  const { showSavedJobs } = useContext(NineFiveContext);

  return (
    <>
      {/* HEADER */}
      <PagesHeader />

      {/* CONTENT */}

      <Slide cascade direction="left" /* triggerOnce */ duration={1000}>
        <section className="jobsportal">
          {showSavedJobs ? <SavedListings /> : <Listings />}
        </section>
      </Slide>
    </>
  );
};

export default JobsPortal;
