import Footer from "../../components/footer/Footer";
import FotoAndTextWithBackground from "../../components/foto-and-text-with-background/FotoAndTextWithBackground";
import Header from "../../components/header/Header";
import ImageArrayFull from "../../components/image-array-full/ImageArrayFull";
import ImageArrayImageAndText from "../../components/image-array-image-and-text/ImageArrayImageAndText";
import ImageArrayLogos from "../../components/image-array-logos/ImageArrayLogos";
import ImageArray from "../../components/image-array/ImageArray";
import LandingImage from "../../components/landing-image/LandingImagen";
import ScrollToTop from "../../components/scroll-to-top/ScrollToTop";
// import Slider from "../../components/slider/Slider";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />
      <LandingImage />
      <ImageArrayLogos />
      <ImageArrayFull />
      <ImageArray />
      <FotoAndTextWithBackground />
      <ImageArrayImageAndText />
      <Footer />
      <ScrollToTop/>

      {/* <div className="home-slider-wrapper">
        <Slider />
      </div> */}
    </>

  )
}

export default Home;