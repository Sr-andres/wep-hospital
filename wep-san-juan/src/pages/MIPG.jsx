import { Link } from "react-router-dom";

const Servicios = () => {
    return (
      <div>
        <div className="header-container">
        <nav className="nav-menu">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Inicio
        </Link>
        <Link
          to="/servicios"
          className={location.pathname === "/servicios" ? "active" : ""}
        >
          Nuestros Servicios
        </Link>
        <Link
          to="/puesto"
          className={location.pathname === "/puesto" ? "active" : ""}
        >
          Puesto de Salud
        </Link>
        <Link
          to="/mipg"
          className={location.pathname === "/mipg" ? "active" : ""}
        >
          MIPG
        </Link>
        <Link
          to="/stafin"
          className={location.pathname === "/stafin" ? "active" : ""}
        >
          Estado Financiero
        </Link>
        <Link
          to="/contra"
          className={location.pathname === "/contra" ? "active" : ""}
        >
          Contratación
        </Link>
        <Link
          to="/cuentas"
          className={location.pathname === "/cuentas" ? "active" : ""}
        >
          Rendicion de Cuentas
        </Link>
      </nav>
        </div>
        

      
        <h1>Nuestros Servicios</h1>
        <p>Descripción de los servicios ofrecidos por el hospital.</p>
      </div>
    );
  };
  
  export default Servicios;