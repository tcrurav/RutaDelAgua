import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars, faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

import "./Header.css";

function Header() {
  return (
    <>
      <div className="header-wrapper">
        <div className="header-logo-wrapper">
          <div className="header-logo-image-wrapper">
            <img src="/images/logo/logo-transparent.png" alt="logo image" />
          </div>
          {/* <div className="header-logo-text-wrapper"> */}
            <span className="header-logo-text-wrapper"><strong>Ruta del Agua de Telde</strong></span>
          {/* </div> */}
        </div>

        <div className="header-menu-options">
          <span className="active">Inicio</span>
          <span>Paradas</span>
          <span>Contacto</span>
        </div>

        <div className="header-icons">
          <FontAwesomeIcon className="header-icons-desktop" icon={faGithub} />
          <FontAwesomeIcon className="header-icons-desktop" icon={faHouse} />
          <FontAwesomeIcon className="header-icons-desktop" icon={faUser} />
          <FontAwesomeIcon id="header-icons-menu" icon={faBars} />
        </div>
        
      </div>
    </>
  )
}

export default Header;