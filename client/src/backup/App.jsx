import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import { Route, Routes } from "react-router-dom"

function App() {
  

  return (
    <>
    <Header/>
 
   
 <Routes>

  <Route path="/" element={<Home/>}/>
  <Route path="/contact" element={<Contact/>}/>

 </Routes>
 <Footer/>

     </>
       
  )
}

export default App
