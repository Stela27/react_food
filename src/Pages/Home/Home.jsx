import { useState } from "react";
import Products from "../../Components/Products/Products";
import InfoSection from "../../Components/InfoSection/InfoSection";
import NavBar from "../../Components/NavBar/NavBar";
import Slider from "../../Components/Slider/Slider";
import About from "../../Components/About/About";
import Sidebar from "../../Components/Sidebar/SIdebar";
import Contact from "../../Components/Contact/Contact";


const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = ()=>{
      setIsOpen(!isOpen)
    }
    return ( 
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <NavBar   toggle={toggle}/>
        <Slider/>
        <About />
        <Products />
        <InfoSection />
        <Contact />
        </>
     );
}
 
export default Home;