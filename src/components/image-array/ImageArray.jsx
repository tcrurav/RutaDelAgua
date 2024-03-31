import imageArray from "../../models/image-array/imageArray";
import "./ImageArray.css";

function ImageArray() {
  return (
    <>
      <div className="image-array-wrapper">
        <div className="image-array-little-title">La ruta del agua de Telde</div>
        <div className="image-array-big-title">una historia contada en seis imágenes</div>
        <div className="image-array-images-wrapper">
          {
            imageArray.map((image, index) => (
              <div className="image-array-unit" key={index}>
                <div className="image-array-unit-image-wrapper">
                  <img src={`/images/route/${image.src}.jpg`} alt="array image" />
                </div>
                <h5>{image.title}</h5>
                <p>{image.description}</p>
              </div>
            ))
          }
        </div>
      </div >
    </>
  )
}

export default ImageArray;