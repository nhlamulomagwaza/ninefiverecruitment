import { TfiNotepad } from "react-icons/tfi";
import "../styles/pages/home.scss";
import homeShowCase from "../assets/home-showcase.svg";
import { FaRegSmileBeam } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaFileContract } from "react-icons/fa6";
import FAQ from "../components/FAQ";
import ClientsShowcase from "../components/ClientsShowcase";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import testimonialOne from "../assets/testimonials/testimonial-01.webp";
import testimonialTwo from "../assets/testimonials/testimonial-02.webp";
import testimonialThree from "../assets/testimonials/testimonial-03.webp";
import testimonialFour from "../assets/testimonials/testimonial-04.webp";
import testimonialFive from "../assets/testimonials/testimonial-05.webp";
import testimonialSix from "../assets/testimonials/testimonial-06.webp";
import testimonialSeven from "../assets/testimonials/testimonial-07.webp";
import testimonialEight from "../assets/testimonials/testimonial-08.webp";
import testimonialNine from "../assets/testimonials/testimonial-09.webp";
import testimonialTen from "../assets/testimonials/testimonial-10.webp";
import testimonialEleven from "../assets/testimonials/testimonial-11.webp";
import testimonialTwelve from "../assets/testimonials/testimonial-12.webp";
import qouteIcon from "../assets/testimonials/qoute-icon.png";
import Header from "../components/Header";

import { useContext, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Fade, Slide } from "react-awesome-reveal";
import { NineFiveContext } from "../store/AppContext";

import toast from "react-hot-toast";
import emailjs from '@emailjs/browser';
const Home = () => {
  const { homeShowcaseRef } = useContext(NineFiveContext);
  const joinUsRef = useRef();
  const scrollToContactUs = () => {
    joinUsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const [ref, inView] = useInView({
    threshold: 0.1,
  });




  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zuvvf3a', 'template_a3m4abm', form.current, {
        publicKey: 'UIGrOgThA3bvjULZV',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Message sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Failed to send message')
        },
      );
  };

  return (
    <>
      {/* HEADER */}

      <Header />

      {/* SHOWCASE SECTION */}

      <section ref={homeShowcaseRef} className="home-showcase">
        <Fade fraction={0.2}>
          <div className="home-showcase-header">
            <h1>
              For more than <span>8+</span> years we have been providing fast
              and <span>easy recruitments</span>
            </h1>

            <p>
              There are two sides in the work market, the employers and the
              employees. Each side experiences the world differently. That being
              the case, both sides can agree on one thing... recruitment hell.
              And that is where we come in. We are the middleware which prevents
              both parties from experiencing such inconvenience. Saving everyone
              time and resources.{" "}
            </p>
          </div>
        </Fade>
        <Fade fraction={0.2}>
          <div className="home-showcase-content">
            <div className="home-showcase-card">
              <div className="home-showcase-card-icon">
                <TfiNotepad size={40} />
              </div>

              <div className="home-showcase-card-title">
                <h1 className="home-showcase-card-content-title">
                  Proven Track Record
                </h1>
              </div>

              <div className="home-showcase-card-description">
                <p className="home-showcase-card-content-description">
                  What we say is who we are. The experience that we harbor has
                  made us see various situations, and we have successfully dealt
                  with them all.
                </p>
              </div>
            </div>
            <div className="home-showcase-card">
              <div className="home-showcase-card-icon">
                <img src={homeShowCase} alt="" />
              </div>
            </div>
            <div className="home-showcase-card">
              <div className="home-showcase-card-icon">
                <FaRegSmileBeam size={40} />
              </div>

              <div className="home-showcase-card-title">
                <h1 className="home-showcase-card-content-title">
                  Guest Treatment
                </h1>
              </div>

              <div className="home-showcase-card-description">
                <p className="home-showcase-card-content-description">
                  Not only are we passionate about what we do, we stress to
                  deliver the best experience to every individual that we work
                  with. It's always an honor.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </section>

      {/* CLIENTS SHOWCASE */}

      <ClientsShowcase />

      {/* STATS/PORTFOLIO SECTION */}

      <section className="home-stats">
        <Fade fraction={0.1}>
          <div className="home-stats-container">
            <div className="stats-background-image"></div>

            <div className="stats-info">
              <div className="stats-header">
                <div className="stats-header-title">
                  <h1>
                    we are a different generation of a{" "}
                    <span>recruitment agency</span>
                  </h1>
                </div>
                <div className="stats-header-description">
                  <p>
                    Our achievements are not trophies. Our clients and
                    candidates are not leads nor transactions. Rather, they are
                    our partners, a big family that we are proud to be a part
                    of.
                  </p>
                </div>
              </div>

              <div className="stats-figures">
                <div className="figure-content">
                  <div className="figure-icon">
                    <FaFileContract size={40} />
                  </div>
                  <p className="figure-title">Contractors</p>
                  <h1 className="figure-number" ref={ref}>
                    {inView && (
                      <CountUp start={0} end={700} duration={35} delay={0}>
                        {({ countUpRef, start }) => (
                          <span ref={countUpRef}>{start}</span>
                        )}
                      </CountUp>
                    )}
                    +
                  </h1>
                </div>

                <div className="figure-content">
                  <div className="figure-icon">
                    <FaRegHandshake size={40} />
                  </div>
                  <p className="figure-title">Business Partners</p>
                  <h1 className="figure-number" ref={ref}>
                    {inView && (
                      <CountUp start={0} end={200} duration={35} delay={0}>
                        {({ countUpRef, start }) => (
                          <span ref={countUpRef}>{start}</span>
                        )}
                      </CountUp>
                    )}
                    +
                  </h1>
                </div>

                <div className="figure-content">
                  <div className="figure-icon">
                    <IoIosPeople size={40} />
                  </div>
                  <p className="figure-title">Employees</p>
                  <h1 className="figure-number" ref={ref}>
                    {inView && (
                      <CountUp start={0} end={150} duration={45} delay={0}>
                        {({ countUpRef, start }) => (
                          <span ref={countUpRef}>{start}</span>
                        )}
                      </CountUp>
                    )}
                    +
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
      {/* FAQ */}
      <Fade fraction={0.1}>
        <FAQ />
      </Fade>
      {/* TESTIMONIALS */}

      <section className="testimonials">
        <Slide direction="right" duration={1500} triggerOnce>
          <h1 className="testimonials-title">
            <h1>
              Don't just <span>trust</span> our words. See what some of our{" "}
              <span>partners</span> say
            </h1>
          </h1>
        </Slide>
        <Slide direction="left" duration={1600} triggerOnce>
          <div className="testimonials-container">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card">
                  <div className="testimonial-profile">
                    <div className="testimonial-img">
                      <img src={testimonialOne} className="img-profile" />
                      <img src={qouteIcon} className="img-qoute" />
                    </div>
                  </div>

                  <p className="testimonial-paragraph">
                    "Exceptional service and support throughout the process.
                    They helped us meet our recruitment goals effectively."
                  </p>

                  <div className="testimonial-author">Jake Franklin</div>
                  <div className="testimonial-occupation">TechPulse Inc</div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-profile">
                    <div className="testimonial-img">
                      <img src={testimonialTwo} className="img-profile" />
                      <img src={qouteIcon} className="img-qoute" />
                    </div>
                  </div>

                  <p className="testimonial-paragraph">
                    "A game-changer for our hiring needs and success. Their
                    efficiency made the process seamless and quick."
                  </p>

                  <div className="testimonial-author">Amanda Green</div>
                  <div className="testimonial-occupation">GLeaf Solutions</div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-profile">
                    <div className="testimonial-img">
                      <img src={testimonialThree} className="img-profile" />
                      <img src={qouteIcon} className="img-qoute" />
                    </div>
                  </div>

                  <p className="testimonial-paragraph">
                    "Professional, efficient, and incredibly helpful always.
                    They guided us to find the perfect candidates efficiently."
                  </p>

                  <div className="testimonial-author">Nicole Smith</div>
                  <div className="testimonial-occupation">Star Enterprises</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-card">
                  <div className="testimonial-profile">
                    <div className="testimonial-img">
                      <img src={testimonialFour} className="img-profile" />
                      <img src={qouteIcon} className="img-qoute" />
                    </div>
                  </div>

                  <p className="testimonial-paragraph">
                    "Their expertise in recruitment is top-notch and reliable.
                    We found the ideal fit for our team swiftly."
                  </p>

                  <div className="testimonial-author">Stacy Lamar</div>
                  <div className="testimonial-occupation">
                    Fusion Dynamics Group
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-profile">
                    <div className="testimonial-img">
                      <img src={testimonialFive} className="img-profile" />
                      <img src={qouteIcon} className="img-qoute" />
                    </div>
                  </div>

                  <p className="testimonial-paragraph">
                    "Outstanding commitment to our hiring requirements and
                    needs. Their process made recruitment smooth and
                    straightforward."
                  </p>

                  <div className="testimonial-author">Muhafiz Patel</div>
                  <div className="testimonial-occupation">
                    NexGen Innovations
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-profile">
                    <div className="testimonial-img">
                      <img src={testimonialSix} className="img-profile" />
                      <img src={qouteIcon} className="img-qoute" />
                    </div>
                  </div>

                  <p className="testimonial-paragraph">
                    "Reliable and attentive throughout the hiring process. Their
                    support made our recruitment efforts much easier."
                  </p>

                  <div className="testimonial-author">Samuel Forlan</div>
                  <div className="testimonial-occupation">
                    PrimeWave Technologies
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-card">
                  <div className="testimonial-profile">
                    <div className="testimonial-img">
                      <img src={testimonialSeven} className="img-profile" />
                      <img src={qouteIcon} className="img-qoute" />
                    </div>
                  </div>

                  <p className="testimonial-paragraph">
                    "An invaluable partner in our recruitment strategy and
                    success. Their insights helped us find top talent quickly."
                  </p>

                  <div className="testimonial-author">Ade Karim</div>
                  <div className="testimonial-occupation">SummitTech</div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-profile">
                    <div className="testimonial-img">
                      <img src={testimonialEight} className="img-profile" />
                      <img src={qouteIcon} className="img-qoute" />
                    </div>
                  </div>

                  <p className="testimonial-paragraph">
                    "The best in the business for talent acquisition and
                    placement. Their approach was both effective and efficient."
                  </p>

                  <div className="testimonial-author">John Moreau</div>
                  <div className="testimonial-occupation">
                    Velocity Ventures{" "}
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-profile">
                    <div className="testimonial-img">
                      <img src={testimonialNine} className="img-profile" />
                      <img src={qouteIcon} className="img-qoute" />
                    </div>
                  </div>

                  <p className="testimonial-paragraph">
                    "Top-notch service with a clear understanding of our needs.
                    They consistently delivered high-quality candidates on
                    time."
                  </p>

                  <div className="testimonial-author">Emily Brown</div>
                  <div className="testimonial-occupation">
                    Horizon Consulting
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial-card">
                  <div className="testimonial-profile">
                    <div className="testimonial-img">
                      <img src={testimonialTen} className="img-profile" />
                      <img src={qouteIcon} className="img-qoute" />
                    </div>
                  </div>

                  <p className="testimonial-paragraph">
                    "Highly recommend for their professionalism and proactive
                    approach. They made our hiring process straightforward and
                    effective."
                  </p>

                  <div className="testimonial-author">Jessica Adams</div>
                  <div className="testimonial-occupation">Pinnacle Systems</div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-profile">
                    <div className="testimonial-img">
                      <img src={testimonialEleven} className="img-profile" />
                      <img src={qouteIcon} className="img-qoute" />
                    </div>
                  </div>

                  <p className="testimonial-paragraph">
                    "Their dedication ensured we received the best candidates.
                    The process was streamlined and met our expectations."
                  </p>

                  <div className="testimonial-author">Rachel Robertson</div>
                  <div className="testimonial-occupation">
                    CoreTech Industries
                  </div>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-profile">
                    <div className="testimonial-img">
                      <img src={testimonialTwelve} className="img-profile" />
                      <img src={qouteIcon} className="img-qoute" />
                    </div>
                  </div>

                  <p className="testimonial-paragraph">
                    "Efficient, responsive, and remarkably effective in
                    recruitment. Their service greatly enhanced our hiring
                    process."
                  </p>

                  <div className="testimonial-author">Dannis Siddhartha</div>
                  <div className="testimonial-occupation">Zenith Analytics</div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Slide>
      </section>

      {/* JOIN US SECTION */}

      <section className="home-join-us">
        <div className="home-join-us-content">
          <Fade>
            <h1 className="join-us-title">Want to join NineFive?</h1>
            <p className="join-us-description">Let's talk...</p>

            <button className="join-us-button" onClick={scrollToContactUs}>
              Join Us
            </button>
          </Fade>
        </div>
      </section>

      {/* CALL TO ACTION */}

      <section className="cta" ref={joinUsRef}>
        <div className="cta-content">
          <Fade>
            <h1 className="cta-title">Don't hesitate to contact us</h1>

            <form className="form" ref={form} onSubmit={sendEmail}>
              <input type="text" placeholder="Name" name="name" required id="name"/>
              <input type="text" placeholder="email" name='email' required id="email"/>
              <textarea placeholder="message" name="message" rows={10} required id="message"></textarea>
              <button type="submit">Send message</button>
            </form>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Home;
