import imageArray from "../../models/image-array-full/imageArrayFull";
import "./ImageArrayFull.css";

function ImageArrayFull() {
  return (
    <>
      <div className="image-array-full-wrapper">
        <div className="image-array-full-little-title">La ruta del agua de Telde</div>
        <div className="image-array-full-big-title">un proyecto, dos centros...</div>
        <div className="image-array-full-tiny-title">un proyecto, dos centros, tres logos</div>
        <div className="image-array-full-images-wrapper">
          {
            imageArray.map((image, index) => (
              <div className="image-array-full-unit" key={index}>
                <div className="image-array-full-unit-image-wrapper">
                  <img src={`/images/route/${image.src}.jpg`} alt="array image" />
                </div>
                <div className="image-array-full-unit-text">
                  <h3>{image.title}</h3>
                  <p>{image.description} <a href="#">Leer más...</a></p>
                  
                </div>
              </div>
            ))
          }
        </div>
      </div >
    </>
  )
}

export default ImageArrayFull;