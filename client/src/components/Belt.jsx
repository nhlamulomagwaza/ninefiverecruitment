import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import '../styles/components/Header/header.scss';

const Belt = () => {
  return (
   <>
     <div className="belt">

<div className="belt-contact">

<p>call us on <span>0846473393</span> or email us on <span>info@ninefiverecruitment.com</span></p>
</div>
<div className='belt-social-icons'>

<li><FaFacebookF  /></li>
<li><BsInstagram /></li>
<li><FaXTwitter /></li>
<li><FaLinkedin /></li>
</div>
</div>
   </>
  )
}

export default Belt