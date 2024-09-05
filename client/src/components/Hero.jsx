import "../styles/components/Hero/hero.scss";
import React, { useContext } from "react";
import Typed from "typed.js";
import { useRef } from "react";
import { Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router";
import { NineFiveContext } from "../store/AppContext";

const Hero = () => {
  const { homeShowcaseRef } = useContext(NineFiveContext);

  const el = useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "A platform by workers, for the WorkCulture!",
        "A different generation of a recruitment agency!",
        "Effective Recruitments since 2013!",
        "Discover how our expertise can elevate your recruitment experience today!",
      ],
      typeSpeed: 50,
      backDelay: 3000,
      loop: true,
      loopCount: Infinity,
      showCursor: true,
      cursorChar: "|",
      smartBackspace: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  const scrollToHomeShowcase = () => {
    homeShowcaseRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="hero">
        <div className="hero-showcase">
          <Slide triggerOnce direction="right" duration={2000}>
            <p className="hero-showcase-slogan">
              <span ref={el} />
            </p>
          </Slide>
          <Slide /* triggerOnce={true}  */ duration={2000}>
            <h1 className="hero-showcase-brandtitle">NineFive</h1>
          </Slide>
        </div>

        <div className="hero-showcase-button">
          <Slide direction="left" /* triggerOnce */ duration={2000}>
            <button
              className="hero-showcase-btn"
              onClick={scrollToHomeShowcase}
            >
              Get Started
            </button>
          </Slide>
        </div>

        <div className="hero-showcase-cards"></div>
      </div>
    </>
  );
};

export default Hero;
