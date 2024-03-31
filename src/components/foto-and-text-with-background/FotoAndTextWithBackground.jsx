import "./FotoAndTextWithBackground.css";

function FotoAndTextWithBackground() {
  return (
    <div className="foto-and-text-with-background-wrapper">
      <div className="foto-and-text-with-background-text">
        <h2>La ruta del agua de Telde</h2>
        <p>Se trata de una ruta muy importante desde tiempos de la conquista de la Isla de Gran Canaria por parte de los castellanos.</p>
        <button>Leer más...</button>
      </div>
      <div className="foto-and-text-with-background-image">
        <img src="/images/route/20240126_084119.jpg" alt="presentación" />
      </div>
    </div>
  )
}

export default FotoAndTextWithBackground;