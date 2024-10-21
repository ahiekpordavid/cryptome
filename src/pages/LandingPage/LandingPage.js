import BreakDown from "../../components/BreakDown/BreakDown";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Listings from "../../components/Listings/Listings";
import "../../App.css";


const LandingPage = () => {
  return (
    <div>
    {/* <Navbar/> */}
    <Hero/>
    <Listings/>
    <BreakDown/>
    <Footer/>
  </div>
  )
}

export default LandingPage