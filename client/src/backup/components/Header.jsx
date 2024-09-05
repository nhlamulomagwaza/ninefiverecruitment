import '../styles/components/Header/header.scss';

import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { FaHeartCircleBolt } from "react-icons/fa6";
import { FaCheckDouble } from "react-icons/fa";

import Navbar from './Navbar';
import Hero from './Hero';

const Header = () => {
  return (

    <>
  
  <header>

    {/* BELT */}
    <div className="belt">

    <div className="belt-contact">

<p>call us on <span>0123456789</span> or email us on <span>info@ninefiverecruitment.com</span></p>
</div>
<div className='belt-social-icons'>

<li><FaFacebookF  /></li>
<li><BsInstagram /></li>
<li><FaXTwitter /></li>
<li><FaLinkedin /></li>
</div>
    </div>


{/* NAVBAR */}
<Navbar/>

{/* HERO */}

<Hero />


 {/* HEADER CARDS */}


 <div className="header-cards">
   
   <div className="header-card">
       <div className="header-card-icon">
       <GoPeople size={25} />
       </div>
       <div className="header-card-text">
            <p>Effective Recruitment</p>
       </div>
   </div>




   <div className="header-card">
       <div className="header-card-icon">
      <FaHeartCircleBolt size={25}/>
       </div>
       <div className="header-card-text">
            <p>Swift & Professional Service</p>
       </div>

  
   </div>

   <div className="header-card">
       <div className="header-card-icon">
      <FaCheckDouble size={25}/>
       </div>
       <div className="header-card-text">
            <p>Guaranteed Placements</p>
       </div>

   </div>

</div>

  </header>


  </>
  )
}

export default Header