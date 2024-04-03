import ImageWithSpinner from "../image-with-spinner/ImageWithSpinner";
import "./LandingImage.css";

function LandingImage(){
  return (
    <div className="landing-image-wrapper">
      {/* <img src="/images/route/20240126_115435.jpg" alt="landing image"/> */}
      <ImageWithSpinner imageUrl="/images/route/20240126_115435.jpg"/>
    </div>
  )
}

export default LandingImage;