import imageArray from "../../models/image-array-logos/imageArrayLogos";
import "./ImageArrayLogos.css";

function ImageArrayLogos() {
  return (
    <>
      <div className="image-array-logos-wrapper">
        <div className="image-array-logos-little-title">La ruta del agua de Telde</div>
        <div className="image-array-logos-big-title">un proyecto, dos centros, tres logos...</div>
        <div className="image-array-logos-images-wrapper">
          {
            imageArray.map((image, index) => (
              <div className="image-array-logos-unit" key={index}>
                <div className="image-array-logos-unit-image-wrapper">
                  <img src={`/images/logo/${image.src}`} alt="array image" />
                </div>
                {/* <h4>{image.title}</h4>
                <p>{image.description}</p> */}
              </div>
            ))
          }
        </div>
      </div >
    </>
  )
}

export default ImageArrayLogos;