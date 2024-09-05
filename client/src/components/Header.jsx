import "../styles/components/Header/header.scss";
import headerImg1 from "../assets/hero-bg-01.webp";
import headerImg2 from "../assets/hero-bg-02.webp";
import headerImg3 from "../assets/hero-bg-03.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Belt from "./Belt";
import HeaderCards from "./HeaderCards";
import { Slide } from "react-awesome-reveal";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <>
      <header>
        {/* SLIDER IMAGES */}
        <div className="header-background-images">
          <Swiper
            effect={"fade"}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4000,

              disableOnInteraction: false,
            }}
            pagination={{
              clickable: false,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper swiper-effect-fade"
          >
            <SwiperSlide className="swiper-slide">
              {" "}
              <img src={headerImg2} />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src={headerImg1} />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src={headerImg3} />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* BELT */}

        <Belt />
        <MobileNav />

        {/* NAVBAR */}
        <Slide triggerOnce={true} direction="down" duration={2000}>
          <Navbar />
        </Slide>
        {/* HERO */}

        <Hero />

        {/* HEADER CARDS */}

        <HeaderCards />
      </header>
    </>
  );
};

export default Header;
