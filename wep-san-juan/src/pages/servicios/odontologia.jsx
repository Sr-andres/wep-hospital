import React from 'react';
import "../css/general.css";

const General = () => {
    return (
        <div>
            <div className="sidebar">
                <ul>
                    <li><a href="/"><img className='logoo' src="../src/assets/logo.jpg" alt="" /></a></li>
                    <li><a href="/servicios">Servicios</a></li>
                </ul>
            </div>
            <div className="container">
                <div className='container-titlee'>
                    <div>
                        <img className='img-title-general'
                            src="../src/assets/colash-odonto.jpg"
                            alt="imagen medicina general" />
                    </div>
                    <div>
                        <h1 className='title-gene'> ODONTOLOGIA 🦷.</h1>
                        <div className="content">
                            <p>
                                En nuestro servicio de odontología, ofrecemos una atención personalizada y de alta calidad,
                                enfocada en satisfacer todas las necesidades orales de nuestros pacientes.
                                Nuestro equipo de profesionales altamente capacitados está comprometido con la salud bucal y el bienestar general,
                                brindando soluciones eficaces para cualquier problema dental. Ya sea para una consulta preventiva, un tratamiento restaurador o una limpieza profunda,
                                nos aseguramos de que cada paciente reciba la mejor atención, en un ambiente cómodo y confiable.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="info">
                    <div>
                        <strong>Consulta general 🔎</strong>
                        <p>Brindamos una consulta el cual diasnoticamos el estado de la dentadura.</p>
                    </div>
                    <div>
                        <strong>tratamiento 🩹</strong>
                        <p>llevamos a cabo un tratamiento especializado para cada pasiente adecuandose a sus sintoma y necesidades.</p>
                    </div>
                    <div>
                        <strong>limpieza 🦷🧽</strong>
                        <p>Brindamos limpiezas generales y profundas segun lo recomendado por el odontologo.</p>
                    </div>
                    <div>
                        <strong>Calsado de dientes 🦷</strong>
                        <p>Tenemos tambien procesos de calsas y restauracion de calsas para tener una dentadura mas saludable.</p>
                    </div>
                </div>
                <div className="footer">
                    <p>&copy; 2025 Hospital San Juan De Dios</p>
                </div>

            </div>
        </div>
    );
};

export default General;