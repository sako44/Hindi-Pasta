import Landing from "../components/Landing";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import ScrollBar from "../components/ScrollBar";
import ServiceTwo from "../components/ServiceTwo";
import ServiceOne from "../components/ServiceOne";
import Logo from "../components/Logo";
import Map from "../components/Map";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

function Home() {
  return (
   <>
        <Landing />
        <ScrollBar />
        <Main />
        <ServiceOne />
        <ServiceTwo />
        <Logo />
        <Map />
        <Reviews />
        <Footer />
   </>
  )
}

export default Home
