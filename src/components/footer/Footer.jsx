import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-data">
          <div className="footer-data-email-and-icons">
            <div className="footer-data-logo-wrapper">
              <div className="footer-data-logo-image-wrapper">
                <img src="/images/logo/logo-transparent.png" alt="logo image" />
              </div>
              <div className="footer-data-logo-text-wrapper">
                <span><strong>Ruta del Agua de Telde</strong></span>
              </div>
            </div>
          </div>

          <div className="footer-data-columns-fotos">
            <h2>fotos</h2>
            <p>En la Guagua</p>
            <p>Introducción</p>
            <p>Bajo el puente</p>
            <p>En la acequia</p>
            <p>Con las gallinas</p>
            <p>Máquina de Azúcar</p>
            <p>Puente de los 7 ojos</p>
            <p>Final de trayecto</p>
          </div>
          <div className="footer-data-columns-videos">
            <h2>Guagua</h2>
            <p>Introducción</p>
            <p>Introducción</p>
            <p>Bajo el puente</p>
            <p>En la acequia</p>
            <p>Con las gallinas</p>
            <p>Máquina de Azúcar</p>
            <p>Puente de los 7 ojos</p>
            <p>Final de trayecto</p>
          </div>
          <div className="footer-data-columns-outstanding">
            <h2>Destacados</h2>
            <p>Introducción</p>
            <p>Introducción</p>
            <p>Bajo el puente</p>
            <p>En la acequia</p>
            <p>Con las gallinas</p>
            <p>Máquina de Azúcar</p>
            <p>Puente de los 7 ojos</p>
            <p>Final de trayecto</p>
          </div>

        </div>
        <div className="footer-conditions-wrapper">
          <div className="footer-conditions-copyright">
            <p>@2024 Interface. No rights reserved</p>
          </div>
          <div className="footer-conditions-data">
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>
      <a href='#' class="stt" title="scroll to top"></a>
    </>
  )
}

export default Footer;