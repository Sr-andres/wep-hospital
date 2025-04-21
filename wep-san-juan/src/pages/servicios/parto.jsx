import React from 'react';
import "../css/general.css";

const Parto = () => {
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
                        <h1 className='title-gene'> SERVICIO DE ATENCION DEL PARTO 👶.</h1>
                        <div className="content">
                            <p>
                            El E.S.E. Hospital San Juan de Dios de Betulia ofrece un servicio integral de atención al parto, 
                            garantizando un ambiente seguro y humanizado para la madre y el recién nacido. 
                            Nuestro equipo de profesionales en salud trabaja para asegurar un parto seguro, 
                            respetado y con el menor riesgo posible.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="info">
                    <div>
                        <strong>👶 Control prenatal hospitalario</strong>
                        <p>Atención médica especializada para monitorear el estado de salud de la madre y el bebé.</p>
                    </div>
                    <div>
                        <strong>👩‍⚕️ Atención del parto natural</strong>
                        <p>Asistencia médica profesional para garantizar un alumbramiento seguro.</p>
                    </div>
                    <div>
                        <strong>💉 Manejo del dolor</strong>
                        <p>Uso de técnicas y medicamentos para el alivio del dolor según la necesidad de la madre.</p>
                    </div>
                    <div>
                        <strong>👩‍⚕️ Atención postparto y puerperio</strong>
                        <p>Seguimiento y cuidado de la madre después del parto para garantizar su recuperación.</p>
                    </div>
                </div>
                <div className="footer">
                    <p>&copy; 2025 Hospital San Juan De Dios</p>
                </div>

            </div>
        </div>
    );
};

export default Parto;