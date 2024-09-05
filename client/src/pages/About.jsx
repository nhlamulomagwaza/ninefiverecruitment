import { useNavigate } from "react-router";
import PagesHeader from "../components/PagesHeader";
import "../styles/pages/about.scss";

import { Slide } from "react-awesome-reveal";
const About = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* HEADER */}

      <PagesHeader />

      {/* CONTENT */}

      <section className="about">
        <Slide cascade direction="left" delay={100} triggerOnce duration={1000}>
          <div className="about-content">
            <div id="about-img"></div>

            <div className="about-section">
              <p className="about-title-small">About NineFive Recruitment</p>

              <h1 className="about-title-big">
                {" "}
                A platform by workers, for the workCulture!
              </h1>

              <p className="about-description">
                At NineFive Recruitment, we are dedicated to exceeding
                expectations in the world of talent acquisition. We specialize
                in connecting top-tier talent with forward-thinking companies
                across diverse industries. Our mission is to empower individuals
                to achieve their career aspirations while helping businesses
                thrive through strategic placements.
                <br></br>
                <br></br>
                Why choose NineFive Recruitment? We work extremely hard to
                understand the unique needs of both our clients and candidates.
                Our team is committed to delivering personalized service,
                leveraging industry insights, and employing cutting-edge
                recruitment strategies to ensure exceptional results. With a
                reputation built on integrity and excellence, we go above and
                beyond to forge lasting partnerships based on trust and mutual
                success. Whether you're a candidate seeking the perfect
                opportunity or an organization looking to build a
                high-performing team, NineFive Recruitment is your trusted
                partner in achieving your goals.
                <br></br>
                <br></br>
                Join us and discover how our passion for recruitment excellence
                can transform your career or organization today.
              </p>
              <button
                className="about-btn"
                onClick={() => navigate("/contact")}
              >
                Learn More
              </button>
            </div>
          </div>
        </Slide>
      </section>
    </>
  );
};

export default About;
