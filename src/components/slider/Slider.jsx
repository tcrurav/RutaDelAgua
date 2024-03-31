import "./Slider.css";
import sliderImages from "../../models/image-array/imageArray";

function Slider() {
  return (
    <>
      <div className="slider-wrapper">
        <div className="slider-buttoms">
          {sliderImages.map((item, index) => (
            <div className="slider-buttom">
              <a href={`#slide-${index + 1}`}>{index + 1}</a>
            </div>
          ))}
        </div>
        <div className="slider-images">
          {
            sliderImages.map((image, index) => (
              <div className="slider-image-wrapper" key={index}>
                <img src={`/images/route/${image.src}.jpg`} id={`slide-${index + 1}`} className="slider-image" alt="slider-image" />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Slider;