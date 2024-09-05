import PagesHeader from "../components/PagesHeader";
import "../styles/pages/careers.scss";
import { Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router";
export const Careers = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* HEADER */}
      <PagesHeader />

      <section className="careers">
        <div className="careers-content">
          <Slide
            cascade
            direction="right"
            delay={0}
            triggerOnce
            duration={1000}
          >
            <div className="careers-header">
              <h1>
                Why work in <span>recruitment?</span>
              </h1>
              <div className="careers-pitch">
                <p>
                  Working in recruitment can be a highly rewarding career choice
                  for several compelling reasons. Here’s why someone might
                  consider pursuing a career in recruitment:
                </p>

                <div className="pitchdescription">
                  Recruitment allows you to directly influence organizations and
                  individuals by matching talent with the right opportunities.
                  The job offers variety, daily challenges, and continuous
                  learning opportunities in a fast-paced environment. It's a
                  people-oriented role that involves building relationships,
                  understanding motivations, and connecting with diverse
                  professionals. Recruitment offers financial rewards, career
                  progression, and the satisfaction of helping people achieve
                  their career goals while contributing to organizational
                  success.
                </div>
              </div>
            </div>
          </Slide>

          <div className="careers-bg"></div>
          <Slide cascade direction="left" delay={0} triggerOnce duration={1000}>
            <div className="career-cards">
              <div className="career-card">
                <h1 className="career-title">Recruitment Consultant</h1>
                <p className="career-description">
                  As a Recruitment Consultant, you will be the bridge between
                  clients and candidates, ensuring a perfect match for both
                  parties. Your role involves managing the recruitment cycle
                  from sourcing talent to finalizing placements, while building
                  and maintaining strong client relationships.
                </p>

                <div
                  className="career-apply"
                  onClick={() => navigate("/jobsportal")}
                >
                  Apply Now
                </div>
              </div>
              <div className="career-card">
                <h1 className="career-title">Talent Acquisition Specialist</h1>
                <p className="career-description">
                  The Talent Acquisition Specialist will drive our recruitment
                  efforts by developing and implementing effective strategies to
                  attract top talent. You will work closely with clients to
                  understand their hiring needs and execute a comprehensive
                  recruitment plan to meet those needs.
                </p>

                <div
                  className="career-apply"
                  onClick={() => navigate("/jobsportal")}
                >
                  Apply Now
                </div>
              </div>
              <div className="career-card">
                <h1 className="career-title">Recruitment Coordinator</h1>
                <p className="career-description">
                  As a Recruitment Coordinator, you will handle the
                  administrative aspects of the hiring process, ensuring smooth
                  scheduling and communication between candidates and clients.
                  Your role is vital in supporting the recruitment team and
                  maintaining organized and efficient operations.
                </p>

                <div
                  className="career-apply"
                  onClick={() => navigate("/jobsportal")}
                >
                  Apply Now
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </section>
    </>
  );
};
