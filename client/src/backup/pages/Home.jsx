import { TfiNotepad } from "react-icons/tfi";
import '../styles/pages/home.scss'
import homeShowCase from '../assets/home-showcase.svg';
import { FaRegSmileBeam } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaFileContract } from "react-icons/fa6";
import FAQ from "../components/FAQ";
import ClientsShowcase from "../components/ClientsShowcase";


import testimonialOne from '../assets/testimonials/testimonial-01.webp'
import testimonialTwo from '../assets/testimonials/testimonial-02.webp'
import testimonialThree from '../assets/testimonials/testimonial-03.webp'
import testimonialFour from '../assets/testimonials/testimonial-04.webp'
import testimonialFive from '../assets/testimonials/testimonial-05.webp'
import testimonialSix from '../assets/testimonials/testimonial-06.webp'
import testimonialSeven from '../assets/testimonials/testimonial-07.webp'
import testimonialEight from '../assets/testimonials/testimonial-08.webp'
import testimonialNine from '../assets/testimonials/testimonial-09.webp'
import testimonialTen from '../assets/testimonials/testimonial-10.webp'
import testimonialEleven from '../assets/testimonials/testimonial-11.webp'
import testimonialTwelve from '../assets/testimonials/testimonial-12.webp'
import qouteIcon from '../assets/testimonials/qoute-icon.png'


import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Home = () => {
  return (
  <>

  
  
{/* SHOWCASE SECTION */}


  <section className="home-showcase">

         <div className="home-showcase-header">
         <h1>For more than <span>8+</span> years we have been providing fast and <span>easy recruitments</span></h1>
        
        <p>There are two sides in the work market, the employers and the employees. Each side experiences the world differently.
             That being the case, both sides can agree on one thing... recruitment hell.
              And that is where we come in. We are the middleware which prevents both parties from experiencing such inconvenience.
               Saving everyone time and resources. </p>

         </div>

         <div className="home-showcase-content">

      <div className="home-showcase-card">

        <div className="home-showcase-card-icon">
        <TfiNotepad size={40} />
        </div>

        <div className="home-showcase-card-title">
         <h1 className='home-showcase-card-content-title'>Proven Track Record</h1>
        </div>

        <div className="home-showcase-card-description">

          <p className="home-showcase-card-content-description">What we say is who we are. The experience that we harbor has made us see various situations, and we have successfully 
            dealt with them all.
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
        <FaRegSmileBeam size={40}/>
        </div>

        <div className="home-showcase-card-title">
         <h1 className='home-showcase-card-content-title'>Guest Treatment</h1>
        </div>

        <div className="home-showcase-card-description">

          <p className="home-showcase-card-content-description">
            Not only are we passionate about what we do, we stress to deliver the
             best experience to every individual that we work with. It's always an honor.
          </p>
        </div>

      </div>

         </div>
  </section>

{/* CLIENTS SHOWCASE */}

<ClientsShowcase/>


  {/* STATS/PORTFOLIO SECTION */}


  <section className="home-stats">


     <div className="home-stats-container">

     <div className="stats-background-image"></div>

     <div className="stats-info">

      <div className="stats-header">

     
       <div className="stats-header-title"><h1>we are a different breed of a <span>recruitment agency</span></h1></div>
       <div className="stats-header-description"><p>Our achievements are not trophies. Our clients and candidates are not leads nor transactions. 
        Rather, they are our partners, a big family that we are proud to be a part of.</p></div>
       </div>

       <div className="stats-figures">

<div className="figure-content">
<div className="figure-icon">

<FaFileContract size={40}/>
</div>
 <p className="figure-title">Contractors</p>
 <h1 className='figure-number'>700+</h1>
</div>

<div className="figure-content">

<div className="figure-icon">

<FaRegHandshake size={40}/>
</div>
 <p className="figure-title">Business Partners</p>
 <h1 className='figure-number'>200+</h1>
</div>

<div className="figure-content">
  <div className="figure-icon">

  <IoIosPeople size={40} />
  </div>
 <p className="figure-title">Employees</p>
 <h1 className='figure-number'>150+</h1>
</div>


</div>

</div>

     </div>


  </section>

{/* FAQ */}

<FAQ/>

{/* TESTIMONIALS */}


<section className="testimonials">
  <h1 className="testimonials-title"><h1>Don't just <span>trust</span> our words. See what some of our <span>partners</span> say</h1></h1>

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
 <SwiperSlide className="swiper-slide"><div className="testimonial-card">


<div className="testimonial-profile">
 <div className="testimonial-img">
  <img src={testimonialOne} className="img-profile"/> 
  <img src={qouteIcon} className='img-qoute' /></div>

</div>

<p className="testimonial-paragraph">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aperiam molestiae laborum sunt! Laboriosam voluptatibus iusto magnam vero sunt laborum!"</p>

<div className="testimonial-author">Jake Franklin</div>
<div className="testimonial-occupation">Project Manager at RockVision</div>

</div>
<div className="testimonial-card">


<div className="testimonial-profile">
 <div className="testimonial-img">
  <img src={testimonialTwo} className="img-profile"/> 
  <img src={qouteIcon} className='img-qoute' /></div>

</div>

<p className="testimonial-paragraph">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aperiam molestiae laborum sunt! Laboriosam voluptatibus iusto magnam vero sunt laborum!"</p>

<div className="testimonial-author">Amanda Green</div>
<div className="testimonial-occupation">Project Manager at RockVision</div>

</div>
<div className="testimonial-card">


<div className="testimonial-profile">
 <div className="testimonial-img">
  <img src={testimonialThree} className="img-profile"/> 
  <img src={qouteIcon} className='img-qoute' /></div>

</div>

<p className="testimonial-paragraph">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aperiam molestiae laborum sunt! Laboriosam voluptatibus iusto magnam vero sunt laborum!"</p>

<div className="testimonial-author">Nicole Smith</div>
<div className="testimonial-occupation">Project Manager at RockVision</div>

</div></SwiperSlide>
 <SwiperSlide><div className="testimonial-card">


<div className="testimonial-profile">
 <div className="testimonial-img">
  <img src={testimonialFour} className="img-profile"/> 
  <img src={qouteIcon} className='img-qoute' /></div>

</div>

<p className="testimonial-paragraph">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aperiam molestiae laborum sunt! Laboriosam voluptatibus iusto magnam vero sunt laborum!"</p>

<div className="testimonial-author">Stacy Lamar</div>
<div className="testimonial-occupation">Project Manager at RockVision</div>

</div>
<div className="testimonial-card">


<div className="testimonial-profile">
 <div className="testimonial-img">
  <img src={testimonialFive} className="img-profile"/> 
  <img src={qouteIcon} className='img-qoute' /></div>

</div>

<p className="testimonial-paragraph">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aperiam molestiae laborum sunt! Laboriosam voluptatibus iusto magnam vero sunt laborum!"</p>

<div className="testimonial-author">Muhafiz Patel</div>
<div className="testimonial-occupation">Project Manager at RockVision</div>

</div>
<div className="testimonial-card">


<div className="testimonial-profile">
 <div className="testimonial-img">
  <img src={testimonialSix} className="img-profile"/> 
  <img src={qouteIcon} className='img-qoute' /></div>

</div>

<p className="testimonial-paragraph">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aperiam molestiae laborum sunt! Laboriosam voluptatibus iusto magnam vero sunt laborum!"</p>

<div className="testimonial-author">Samuel Forlan</div>
<div className="testimonial-occupation">Project Manager at RockVision</div>

</div></SwiperSlide>
 <SwiperSlide><div className="testimonial-card">


<div className="testimonial-profile">
 <div className="testimonial-img">
  <img src={testimonialSeven} className="img-profile"/> 
  <img src={qouteIcon} className='img-qoute' /></div>

</div>

<p className="testimonial-paragraph">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aperiam molestiae laborum sunt! Laboriosam voluptatibus iusto magnam vero sunt laborum!"</p>

<div className="testimonial-author">Ade Karim</div>
<div className="testimonial-occupation">Project Manager at RockVision</div>

</div>
<div className="testimonial-card">


<div className="testimonial-profile">
 <div className="testimonial-img">
  <img src={testimonialEight} className="img-profile"/> 
  <img src={qouteIcon} className='img-qoute' /></div>

</div>

<p className="testimonial-paragraph">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aperiam molestiae laborum sunt! Laboriosam voluptatibus iusto magnam vero sunt laborum!"</p>

<div className="testimonial-author">John Moreau</div>
<div className="testimonial-occupation">Project Manager at RockVision</div>

</div>
<div className="testimonial-card">


<div className="testimonial-profile">
 <div className="testimonial-img">
  <img src={testimonialNine} className="img-profile"/> 
  <img src={qouteIcon} className='img-qoute' /></div>

</div>

<p className="testimonial-paragraph">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aperiam molestiae laborum sunt! Laboriosam voluptatibus iusto magnam vero sunt laborum!"</p>

<div className="testimonial-author">Emily Brown
</div>
<div className="testimonial-occupation">Project Manager at RockVision</div>

</div></SwiperSlide>
 <SwiperSlide><div className="testimonial-card">


<div className="testimonial-profile">
 <div className="testimonial-img">
  <img src={testimonialTen} className="img-profile"/> 
  <img src={qouteIcon} className='img-qoute' /></div>

</div>

<p className="testimonial-paragraph">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aperiam molestiae laborum sunt! Laboriosam voluptatibus iusto magnam vero sunt laborum!"</p>

<div className="testimonial-author">Jessica Adams</div>
<div className="testimonial-occupation">Project Manager at RockVision</div>

</div>
<div className="testimonial-card">


<div className="testimonial-profile">
 <div className="testimonial-img">
  <img src={testimonialEleven} className="img-profile"/> 
  <img src={qouteIcon} className='img-qoute' /></div>

</div>

<p className="testimonial-paragraph">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aperiam molestiae laborum sunt! Laboriosam voluptatibus iusto magnam vero sunt laborum!"</p>

<div className="testimonial-author">Rachel Robertson</div>
<div className="testimonial-occupation">Project Manager at RockVision</div>

</div>
<div className="testimonial-card">


<div className="testimonial-profile">
 <div className="testimonial-img">
  <img src={testimonialTwelve} className="img-profile"/> 
  <img src={qouteIcon} className='img-qoute' /></div>

</div>

<p className="testimonial-paragraph">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aperiam molestiae laborum sunt! Laboriosam voluptatibus iusto magnam vero sunt laborum!"</p>

<div className="testimonial-author">Dannis Siddhartha
</div>
<div className="testimonial-occupation">Project Manager at RockVision</div>

</div></SwiperSlide>

</Swiper>

</div>


</section>




  {/* JOIN US SECTION */}


  <section className="home-join-us">
 

     <div className="home-join-us-content">


      <h1 className="join-us-title">Want to join NineFive?</h1>
      <p className='join-us-description'>Let's talk...</p>

      <button className="join-us-button">Join Us</button>
     </div>
     

  </section>



  {/* CALL TO ACTION */}


  <section className="cta">
    <div className="cta-content">

     <h1 className="cta-title">Don't hesitate to contact us</h1>


     <div className="form">

      <input type="text" placeholder="Name" />
      <input type="text" placeholder="email" />
      <textarea placeholder="message" rows={10} ></textarea>
      <button>Send message</button>
      </div>
     </div>
  </section>
  
  </>
  )
}

export default Home