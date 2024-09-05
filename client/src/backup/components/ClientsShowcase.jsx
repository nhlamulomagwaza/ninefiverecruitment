
import { useEffect } from 'react'
import '../styles/components/ClientsShowcase/clients.scss'


import threem from '../assets/clients/3m.svg';
import agilent from '../assets/clients/Agilent.svg';
import barstool from '../assets/clients/barstool-store.svg';
import budweiser from '../assets/clients/budweiser.svg';
import buzzfeed from '../assets/clients/buzzfeed.svg';
import cariad from '../assets/clients/Cariad.svg';
import dentsply from '../assets/clients/Dentsply_Sirona.svg';
import dhl from '../assets/clients/DHL.svg';
import dxc from '../assets/clients/DXC_Technology.svg';
import forbes from '../assets/clients/forbes.svg';
import google from '../assets/clients/google.svg';
import hewlett from '../assets/clients/hewlett-packard.svg';
import kla from '../assets/clients/KLA.svg';
import macys from '../assets/clients/macys.svg';
import menshealth from '../assets/clients/menshealth.svg';
import microsoft from '../assets/clients/microsoft.svg';
import nvidia from '../assets/clients/nvidia.svg';
import oracle from '../assets/clients/oracle.svg';
import oticon from '../assets/clients/Oticon.svg';
import tesla from '../assets/clients/tesla.svg';
import medisize from '../assets/clients/Philip_medisize.svg';
import Slider from 'react-infinite-logo-slider'
const ClientsShowcase = () => {

   
    
    
  return (

  <>

  <section className="clients-showcase">

{/* <h1 className="clients-showcase-title">Our Global&nbsp;<span>Clients</span></h1> */}
   <Slider
            width="150px"
            duration={80}
            pauseOnHover={true}
            blurBorders={true}
            blurBoderColor={'#fff'}
        >


<Slider.Slide>  <img src={threem} /></Slider.Slide> 

       
<Slider.Slide> <img src={agilent} /></Slider.Slide>
   
<Slider.Slide> <img src={barstool} /></Slider.Slide>

<Slider.Slide><img src={budweiser} /></Slider.Slide>
<Slider.Slide><img src={buzzfeed} /></Slider.Slide>
<Slider.Slide><img src={cariad} /></Slider.Slide>
<Slider.Slide><img src={dentsply} /></Slider.Slide>
 
<Slider.Slide><img src={dhl} /></Slider.Slide>

<Slider.Slide><img src={dxc} /></Slider.Slide>

<Slider.Slide><img src={forbes} /></Slider.Slide>

<Slider.Slide><img src={google} /></Slider.Slide>

<Slider.Slide><img src={hewlett} /></Slider.Slide>

<Slider.Slide><img src={kla} /></Slider.Slide>

<Slider.Slide><img src={macys} /></Slider.Slide>

<Slider.Slide><img src={menshealth} /></Slider.Slide>

<Slider.Slide><img src={microsoft} /></Slider.Slide>

<Slider.Slide><img src={nvidia} /></Slider.Slide>

<Slider.Slide><img src={oracle} /></Slider.Slide>

<Slider.Slide><img src={oticon} /></Slider.Slide>

<Slider.Slide><img src={tesla} /></Slider.Slide>

<Slider.Slide><img src={medisize} /></Slider.Slide>

 </Slider>
 </section>
  </>

  )
}

export default ClientsShowcase