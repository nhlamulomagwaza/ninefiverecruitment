import Footer from "./components/Footer";
import Services from "./pages/Services";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import TermsAndConditions from "./pages/TermsAndConditions";
import Resume from "./pages/Resume/Resume";
import EditResume from "./pages/Resume/EditResume";
import JobsPortal from "./pages/Portal/JobsPortal";
import { Careers } from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CandidateProfile from "./pages/CandidateProfile";
import JobDescription from "./pages/Portal/JobDescription";

function App() {


  return (
    <>

 
   
 <Routes>

  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/services" element={<Services/>}/>
  <Route path="/jobsportal" element={<JobsPortal/>}/>
  <Route path="/uploadresume" element={<Resume/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/careers" element={<Careers/>}/>
  <Route path="/termsandconditions" element={<TermsAndConditions/>}/>
  <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
  <Route path="/candidateprofile" element={<CandidateProfile/>}/>
  <Route path="/candidateprofile/editprofile" element={<EditResume/>}/>
  <Route path="/jobsportal/jobdescription/:jobId" element={<JobDescription/>}/>
 

 </Routes>
 <Footer/>

     </>
       
  )
}

export default App
