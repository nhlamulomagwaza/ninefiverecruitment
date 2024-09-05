import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import faqmain from "../assets/faq-main.webp";
import faqa from "../assets/faq-a.webp";
import faqb from "../assets/faq-b.webp";
import "../styles/pages/home.scss";

import { useState } from "react";
import { useNavigate } from "react-router";

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [panel3, setPanel3] = useState(true);
  const [currentlyExpandedPanel, setCurrentlyExpandedPanel] =
    useState("panel3");

  const handlePanelChange = (panel) => (event, isExpanded) => {
    setCurrentlyExpandedPanel(isExpanded ? panel : false);
  };

  return (
    <>
      {/* FAQ  (frequently asked questions*/}

      <section className="faq">
        <div className="faq-title-container">
          <h1 className="faq-title">Frequently asked questions</h1>
        </div>
        <div className="faq-accordion">
          <div className="accordion-content">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    style={expanded === "panel1" ? { color: "white" } : null}
                  />
                }
                aria-controls="panel1-content"
                id="panel1-header"
                className={expanded === "panel1" ? "accordion-summary" : null}
              >
                What does a recruitment agency do?
              </AccordionSummary>
              <AccordionDetails className="accordion-details">
                A recruitment agency is a sourcing company that partners with
                employers to aid in the assistance of recruiting of talent to
                fill particular job roles available within the organisation. The
                most common misconception about recruitment agencies by job
                seekers is that a recruitment agency finds work for job seekers
                and this is not the case.
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    style={expanded === "panel2" ? { color: "white" } : null}
                  />
                }
                aria-controls="panel2-content"
                id="panel2-header"
                className={expanded === "panel2" ? "accordion-summary" : null}
              >
                What are the services of a recruitment agency?
              </AccordionSummary>
              <AccordionDetails className="accordion-details">
                A recruitment agency is hired by an organisation to specifically
                provide recruitment services to employers. The recruitment
                agency assists the employer with the sourcing and placement
                process of hiring new staff. Recruiters manage the application
                and response handling on behalf of employers, the recruitment
                agents manage the employment cycle from the job specification
                writing, advertising of the job listing to the response handling
                and shortlisting of candidates.
              </AccordionDetails>
            </Accordion>

            <Accordion
              defaultExpanded
              currentlyExpandedPanel={expanded === "panel3"}
              onChange={handlePanelChange("panel3")}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    style={
                      currentlyExpandedPanel === "panel3"
                        ? { color: "white" }
                        : null
                    }
                  />
                }
                aria-controls="panel3-content"
                id="panel3-header"
                className={
                  currentlyExpandedPanel === "panel3"
                    ? "accordion-summary"
                    : null
                }
              >
                As a candidate, what do I do to utilize Nine Five's services?
              </AccordionSummary>
              <AccordionDetails className="accordion-details">
                It's simple, you may go to our Jobs Portal and drop your resume
                on one of the listings, or you may opt to upload your resume to
                our database. And from there our team will take care of
                everything for you.
              </AccordionDetails>
              <AccordionActions>
                <Button onClick={() => navigate("/jobsportal")}>
                  Jobs Portal
                </Button>
                <Button onClick={() => navigate("/uploadresume")}>
                  Upload Resume
                </Button>
              </AccordionActions>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    style={expanded === "panel4" ? { color: "white" } : null}
                  />
                }
                aria-controls="panel2-content"
                id="panel2-header"
                className={expanded === "panel4" ? "accordion-summary" : null}
              >
                How long have we been doing this?
              </AccordionSummary>
              <AccordionDetails className="accordion-details">
                We have been in this industry for more than eight years. At this
                point, we know what works and what does not. As a candidate,
                after creating a profile on our database, we ask that you be
                patient and allow our team to carefully analyse your information
                to better place you at your dream role.
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="faq-gallery">
            <div className="gallery-big-image">
              <img src={faqmain} alt="" />
            </div>

            <div className="gallery-dual-images">
              <img src={faqa} alt="" />
              <img src={faqb} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
