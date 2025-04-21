import { Link, useLocation } from "react-router-dom";
import "../pages/css/puesto.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaWhatsapp } from "react-icons/fa";
import "swiper/css"; // Estilos básicos
import "swiper/css/pagination"; // Para paginación (opcional)
import "swiper/css/navigation"; // Para botones de navegación (opcional)
import { Navigation, Pagination, Autoplay } from "swiper/modules";


const Puesto = () => {
    const location = useLocation();

    const images = [
        "../src/assets/puesto.jpg",
        "../src/assets/sandraa.jpg",
        "../src/assets/felipe.jpg"
    ];

    return (
        <div>
            <div className="header-container">
                <nav className="nav-menu">
                    <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                        Inicio
                    </Link>
                    <Link to="/servicios" className={location.pathname === "/servicios" ? "active" : ""}>
                        Nuestros Servicios
                    </Link>
                    <Link to="/puesto" className={location.pathname === "/puesto" ? "active" : ""}>
                        Puesto de Salud
                    </Link>
                    <Link to="/mipg" className={location.pathname === "/mipg" ? "active" : ""}>
                        MIPG
                    </Link>
                    <Link to="/stafin" className={location.pathname === "/stafin" ? "active" : ""}>
                        Estado Financiero
                    </Link>
                    <Link to="/contra" className={location.pathname === "/contra" ? "active" : ""}>
                        Contratación
                    </Link>
                    <Link to="/cuentas" className={location.pathname === "/cuentas" ? "active" : ""}>
                        Rendición de Cuentas
                    </Link>
                </nav>
            </div>

            <div className="font-sans leading-normal tracking-normal text-gray-900">
                <header className="bg-blue-800 py-6">
                    <div className="container mx-auto px-6 flex justify-between items-center">
                        <h1 className="text-3xl font-bold text-white">Puesto De Salud De Tienda Nueva</h1>
                        <nav>
                            <ul className="flex space-x-6">
                                <li><a href="#about" className="qwe">Sobre Nosotros</a></li>
                                <li><a href="#services" className="qwe">Servicios</a></li>
                                <li><a href="#contact" className="qwe">Contacto</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="bg-blue-600 text-white py-20 text-center">
                    <h2 className="text-4xl font-bold">Cuidando de ti y de tu familia</h2>
                    <p className="mt-4 text-lg">
                        Atención médica de calidad con profesionales altamente calificados.
                    </p>

                    <div className="mt-6 w-3/4 mx-auto">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000 }}
                        >
                            {images.map((src, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={src}
                                        alt={`puesto de salud ${index + 1}`}
                                        className="mi-imagen"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="container mx-auto px-6 py-16">
                    <h2 className="text-3xl font-bold text-center">Sobre Nosotros</h2>
                    <p className="mt-4 text-center text-gray-700">
                        Somos una sede del hospital del hospital de betulia el cual brindando beneficios del hospital y
                        asi poder brindar una atencion de salud a la comunidad de betulia baja.
                    </p>
                </section>

                {/* Services Section */}
                <section id="services" className="bg-gray-100 py-16">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center">Nuestros Servicios</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                            <div className="bg-white p-6 shadow rounded-lg">
                                <h3 className="text-xl font-semibold">Consulta General</h3>
                                <p className="text-gray-600 mt-2">Atención médica general con profesional de la salud.</p>
                            </div>
                            <div className="bg-white p-6 shadow rounded-lg">
                                <h3 className="text-xl font-semibold">Laboratorio</h3>
                                <p className="text-gray-600 mt-2">ofrece servicios de apoyo diagnóstico a la comunidad,
                                    garantizando la realización de diversos exámenes clínicos con precisión y confiabilidad.</p>
                            </div>
                            <div className="bg-white p-6 shadow rounded-lg">
                                <h3 className="text-xl font-semibold">Vacunación</h3>
                                <p className="text-gray-600 mt-2">Servicio el cual otorga acceso a las vacunas y a tener un control sobre ellas,
                                    ya sea para contro de crecimientos o para prevenir enfermedades.
                                </p>
                            </div>
                            <div className="bg-white p-6 shadow rounded-lg">
                                <h3 className="text-xl font-semibold">Odontologia</h3>
                                <p className="text-gray-600 mt-2">Servicio el cual otorga acceso a consulta general, tratamiento, limpieza y calsado de dientes.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="container mx-auto px-6 py-16">
                    <h2 className="text-3xl font-bold text-center">Contacto</h2>
                    <p className="mt-4 text-center text-gray-700">
                        Puedes cominicarte la 3123123421323 y al correo asadad@gmail.com.
                    </p>

                    <div className="contact-whatsapp">
                        <a
                            href="https://wa.me/571234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whatsapp-button"
                        >
                            <FaWhatsapp className="whatsapp-icon" />
                            WhatsApp
                        </a>
                    </div>
                </section>

                {/* Footer */}
                <div className="footer">
                    <p>&copy; 2025 Hospital San Juan De Dios</p>
                </div>
            </div>
        </div>
    );
};

export default Puesto;
