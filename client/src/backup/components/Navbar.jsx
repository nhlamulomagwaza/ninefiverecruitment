import '../styles/components/Navbar/navbar.scss'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
  <nav className="navbar">
    <div className="navbar-container">

   
     <div className="logo">NINEFIVE<span> RECRUITMENT</span></div>
    <ul className="desktop-menu-items">
      <Link to='/' id='desktop-menu-item'>Home</Link>
      <Link to='/about'  id='desktop-menu-item'>About</Link>
      <Link to='/services'  id='desktop-menu-item'>Services</Link>
      <Link to='/jobsportal'  id='desktop-menu-item'>Jobs Portal</Link>
      <Link to='/uploadresume'  id='desktop-menu-item'>Upload Resume</Link>
      <Link to='/contact' className='btn-menu'  id='desktop-menu-item'>Contact Us</Link>
    </ul>
    </div>

  </nav>
  )
}

export default Navbar