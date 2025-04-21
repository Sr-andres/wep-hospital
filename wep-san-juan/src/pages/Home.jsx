import '../pages/css/home.css';
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { useState } from 'react';



const Home = () => {
  const MovNav = useState(false);



  return (
    <div>
      <div className="header-container">
        <div className="title"></div>

        <nav className="nav-menu">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            <img
              className="logo"
              src="../src/assets/logo.jpg"
              alt="inicio" />
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


        <div className='container-title'>
          <div>
            <img className='img-personal-hospital' src="https://hospitalbetulia.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-24-at-2.29.14-PM-1024x648.jpeg" alt="imagen del personal del puesto del salud" />
          </div>
          <div>
            <div className='aa'>
              <div className='title-img' >Comprometidos con la salud y el bienestar de nuestra comunidad</div>
              <p className='ee'>
                El Hospital San Juan de Dios de Betulia, tuvo su origen en 1.896, por iniciativa del Párroco, Presbítero FELIX JOSE SERRANO,
                quién lo organizó dándole su reglamento.
                <br />
                <br />
                La obtención de la aprobación de su personería jurídica, fue alcanzada por solicitud del
                padre Néstor Díaz Ballesteros, en 1.956, la cual fue otorgada por el Ministerio de Justicia, mediante resolución 13209 del mismo año.
                <br />
                <br />
                Fue clasificado como entidad hospitalaria del orden municipal, según acuerdo 011 de Julio 9 de 1993, adscrita a la Secretaría de Salud
                de Santander, como entidad sin ánimo de lucro, considerada como Institución Prestadora de Servicios (IPS) del Primer Nivel de atención.
                <br />
                <br />
                A partir de enero 1° de 2000, recibe certificación por parte de la Gobernación de Santander como entidad descentralizada del orden
                Municipal, de acuerdo al Decreto 0371 de diciembre 29 de 2000, emanado de la Gobernación de Santander, una vez fue transformado en
                Empresa Social del Estado, mediante decreto municipal N° 016 de noviembre 26 de 1998.
                <br />
                <br />
                Su área de influencia, es el municipio de
                etulia, población ubicada a 1.800 metros sobre el nivel del mar, la cual posee pisos térmicos cálidos y fríos, demarcada por zonas
                y actividades económicas netamente del orden agropecuario. Tiene una población aproximada de 7.000 habitantes, con porcentajes de
                concentración de un 30% en el área urbana y un restante 70% en el sector rural.
                <br />
                <br />
                El principal medio de transporte es el terrestre,
                mediante vías de comunicación en buen estado que lo comunica con la ciudad de Bucaramanga, San Vicente de Chucurí y Zapatoca.
              </p>
            </div>
          </div>
        </div>

        <div className='container-mision'>

          <img className='img-mision' src="https://hospitalbetulia.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-24-at-6.33.32-PM-e1729869259365-1006x1024.jpeg" alt="imagen del la mision" />
          <div id='misioncontainer'>
            <h1 className='title-img'>
              Mision
            </h1>
            <p className='ee'>
              Somos una entidad de salud de carácter público prestadora de servicios de salud de baja complejidad que busca brindar la cobertura necesaria de todos nuestros usuarios,
              mediante la prestación de servicios a la población de Betulia, garantizando el mantenimiento de la salud, la recuperación óptima e integral de la enfermedad en concomitancia
              con el mejoramiento de la Calidad de vida, con criterios de integridad, humanidad y eficiencia.
            </p>
          </div>

        </div>
        <div className='container-vision'>
          <img className='img-personal-hospital' src="https://hospitalbetulia.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-24-at-6.33.54-PM-1024x768.jpeg" alt="imagen del la vision" />
          <div className='visioncontainer'>
            <h1 className='title-img'>
              Vision
            </h1>
            <p className='ee'>
              La institución busca generar para el 2024-2028, mejores condiciones y calidad de salud para la población betuliana, como Empresa líder del sector salud de baja complejidad de atención,
              iniciando un nuevo proceso donde el recurso humano, técnico y de infraestructura, disfrutando de nuevos programas con énfasis en la promoción de salud, prevención en las enfermedades y
              ayudas imagenológicas.
            </p>
          </div>
        </div>

      </div>
      <footer className="footer-container">
        <div className="footer-links">
          <div className='footer-contact'>
            <h3>Contacto</h3>
            <div>
              <p><FaWhatsapp />
              <a
                className='qw'
                href='https://api.whatsapp.com/send?phone=+573124174338&text=Hola%2C+'
                target="_blank"
              >+57 3124174338
              </a>
              </p>
            </div>
            <a
              className='qw'
              href="#"

            >Quejas y sugerencias</a>
            <a
              className='qw'
              href="https://maps.app.goo.gl/wQbEzVzrztbSPtiu8"
              target="_blank"
              rel="noopener noreferrer"

            >
              <FaMapMarkerAlt /> Ver ubicación
            </a>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com/hospitalbetuliasder?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/hospitalbetuliasder/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/@ComunicacionesHospitalBetulia?app=desktop" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </footer>
    </div>

  );
};

export default Home;
