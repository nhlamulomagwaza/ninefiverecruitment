import PagesHeader from "../components/PagesHeader"
import { FaPaperPlane } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import '../styles/pages/contact.scss';
const Contact = () => {
  return (
 <>
 
 <PagesHeader/>

 <Slide  direction="left"   triggerOnce  duration={2000}>
 <section className="contact-section">

  {/* CONTACT HEADER */}

<div className="contact-header">


  <div className="contact-card">
 <div className="contact-circle">
    <IoCallSharp className="contact-icon"/>

 </div>
<div className="contact-info">
  <p className="contact-text"><span>Phone: </span>0846473393</p>
</div>
  </div>



  <div className="contact-card">
 <div className="contact-circle">
    <FaPaperPlane className="contact-icon"/>

 </div>
<div className="contact-info">
  <p className="contact-text"><span>Email: </span>info@ninefiverecruitment.com</p>
</div>
  </div>


  <div className="contact-card">
 <div className="contact-circle">
    <FaGlobeAmericas className="contact-icon"/>

 </div>
<div className="contact-info">
  <p className="contact-text"><span>Address: </span>Earth</p>
</div>
  </div>

  
  <div className="contact-card">
 <div className="contact-circle">
    <FaLocationDot className="contact-icon"/>

 </div>
<div className="contact-info">
  <p className="contact-text"><span>Website: </span>www.ninefiverecruiment.com</p>
</div>
  </div>


</div>

{/* CONTACT FORMS */}

<div className="contact-forms">



<div className="contact-forms-container">



 <div className="first-column">
  





  
  </div>

  <div className="second-column">
    <h1 className="contact-form-title">Contact Us</h1>

    <form action="" className="contact-form">

      <div className="form-field">
        <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" placeholder="Name" />

      </div>

      <div className="form-field">
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" placeholder="Email" />

      </div>
         
         <div className="form-field">

          <label htmlFor="subject">Subject</label>
          <input type="text" name="subject" id="subject" placeholder="Subject" />
         </div>

         <div className="form-field">

          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows={5} placeholder="Message"></textarea>
         </div>

      

      <button type="submit">Send Message</button>

    </form>
    </div> 
</div>

</div>



 </section>
 </Slide>
 </>
  )
}

export default Contact