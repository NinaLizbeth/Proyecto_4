import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"

export const Navbar = ({ primerapropiedad }) => {
  const propiedadmodificada = primerapropiedad.toUpperCase()
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="logoNav-container">
         <img className="logoNav" src="/assets/imges/Logo_DolceVita/1-modified.png" alt="logo" />
         </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li>
              <NavLink className="nav-link" to="/">Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/nosotros">Nosotros</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/carta">Carta</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/galeria">Galeria</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/reserva">Reserva</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Blog">Blog</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footerId">Contacto</a>
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </>

  )
}