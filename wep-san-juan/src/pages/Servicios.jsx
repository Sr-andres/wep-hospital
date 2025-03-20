import { Link } from "react-router-dom";
import InstitutoCard from "../components/InstitutoCard";

const Servicios = () => {
  const institutos = [
    { title: "Medicina General", image: "../src/assets/general.jpg", link: "/servicess" },
    { title: "Odontología", image: "../src/assets/odontologia.jpeg", link: "#" },
    { title: "Laboratorio Clínico", image: "../src/assets/prueba.jpg", link: "#" },
    { title: "Servicio Farmacéutico", image: "../src/assets/farmacia.jpg", link: "#" },
    { title: "Atención al parto", image: "../src/assets/parto.png", link: "#" },
    { title: "Transporte asistencial básico", image: "../src/assets/prueba.jpg", link: "#" },
    { title: "Urgencias", image: "../src/assets/prueba.jpg", link: "#" },
    { title: "Fisioterapia", image: "../src/assets/fisioterapia.jpeg", link: "#" },
  ];

  return (
    <div>
      <div className="header-container">
        <nav className="nav-menu">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>Inicio</Link>
          <Link to="/servicios" className={location.pathname === "/servicios" ? "active" : ""}>Nuestros Servicios</Link>
          <Link to="/puesto" className={location.pathname === "/puesto" ? "active" : ""}>Puesto de Salud</Link>
          <Link to="/mipg" className={location.pathname === "/mipg" ? "active" : ""}>MIPG</Link>
          <Link to="/stafin" className={location.pathname === "/stafin" ? "active" : ""}>Estado Financiero</Link>
          <Link to="/contra" className={location.pathname === "/contra" ? "active" : ""}>Contratación</Link>
          <Link to="/cuentas" className={location.pathname === "/cuentas" ? "active" : ""}>Rendicion de Cuentas</Link>
        </nav>
      </div>

      <h1>Nuestros Servicios</h1>
      <div className="institutos-container">
        {institutos.map((instituto, index) => (
          <InstitutoCard key={index} title={instituto.title} image={instituto.image} link={instituto.link} />
        ))}
      </div>
    </div>
  );
};

export default Servicios;
