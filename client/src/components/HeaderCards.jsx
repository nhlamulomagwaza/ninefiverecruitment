import { GoPeople } from "react-icons/go";
import { FaHeartCircleBolt } from "react-icons/fa6";
import { FaCheckDouble } from "react-icons/fa";
import "../styles/components/Header/header.scss";
import { Slide } from "react-awesome-reveal";
const HeaderCards = () => {
  return (
    <>
      <div className="header-cards">
        <Slide cascade direction="down" /* triggerOnce */>
          <div className="header-card">
            <div className="header-card-icon">
              <GoPeople size={25} />
            </div>
            <div className="header-card-text">
              <p>Effective Recruitment</p>
            </div>
          </div>
        </Slide>

        <Slide
          cascade
          direction="down"
          delay={200}
          /*  triggerOnce */ duration={1500}
        >
          <div className="header-card">
            <div className="header-card-icon">
              <FaHeartCircleBolt size={25} />
            </div>
            <div className="header-card-text">
              <p>Swift & Professional Service</p>
            </div>
          </div>
        </Slide>
        <Slide
          cascade
          direction="down"
          delay={400}
          /* triggerOnce */ duration={2000}
        >
          <div className="header-card">
            <div className="header-card-icon">
              <FaCheckDouble size={25} />
            </div>
            <div className="header-card-text">
              <p>Guaranteed Placements</p>
            </div>
          </div>
        </Slide>
      </div>
    </>
  );
};

export default HeaderCards;
