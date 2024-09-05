import { GoPeople } from "react-icons/go";
import { FaHeartCircleBolt } from "react-icons/fa6";
import { FaCheckDouble } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { Slide } from "react-awesome-reveal";
import "../styles/pages/services.scss";
const ServicesCards = () => {
  return (
    <>
      <div className="service-cards">
        <Slide direction="right" triggerOnce>
          <div className="service-card">
            <div className="service-card-icon">
              <GoPeople size={30} />
            </div>
            <div className="service-card-text">
              <p className="service-title">Effective Recruitment</p>
              <p className="service-description">
                Experience streamlined hiring excellence with our recruitment
                agency, where precision meets personalized service to connect
                you with the best talent swiftly and seamlessly.
              </p>
            </div>
          </div>
        </Slide>

        <Slide
          cascade
          direction="right"
          delay={200}
          triggerOnce
          duration={1500}
        >
          <div className="service-card">
            <div className="servicecard-icon">
              <FaHeartCircleBolt size={30} />
            </div>
            <div className="service-card-text">
              <p className="service-title">Swift & Professional Service</p>
              <p className="service-description">
                Experience swift and professional recruitment services tailored
                to your needs, ensuring efficient placements with top-notch
                candidates every time.
              </p>
            </div>
          </div>
        </Slide>
        <Slide
          cascade
          direction="right"
          delay={400}
          triggerOnce
          duration={2000}
        >
          <div className="service-card">
            <div className="service-card-icon">
              <FaCheckDouble size={30} />
            </div>
            <div className="service-card-text">
              <p className="service-title">Guaranteed Placements</p>
              <p className="service-description">
                Rest assured with our recruitment agency's guaranteed
                placements, backed by rigorous screening and a commitment to
                match your needs with the perfect candidate.
              </p>
            </div>
          </div>
        </Slide>
        <Slide
          cascade
          direction="right"
          delay={500}
          triggerOnce
          duration={2000}
        >
          <div className="service-card">
            <div className="service-card-icon">
              <ImBooks size={30} />
            </div>
            <div className="service-card-text">
              <p className="service-title">Career Coaching</p>

              <p className="service-description">
                Elevate your career with expert guidance from our dedicated
                coaching services, designed to empower you with skills and
                strategies for success in today's competitive job market.{" "}
              </p>
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
};

export default ServicesCards;
