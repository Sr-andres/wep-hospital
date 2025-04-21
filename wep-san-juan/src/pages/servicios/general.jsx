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
                            src="../src/assets/colash.jpg"
                            alt="imagen medicina general" />
                    </div>
                    <div>
                        <h1 className='title-gene'>MEDICINA GENERAL 👨‍⚕️.</h1>
                        <div className="content">
                            <p>En nuestro servicio de Medicina General, brindamos atención médica de alta calidad a nuestros pacientes hospitalizados,
                                garantizando su seguridad, comodidad y bienestar en todo momento. Contamos con un equipo multidisciplinario que incluye médicos generales,
                                enfermería especializada, psicólogos y personal capacitado en vacunación, para ofrecer un cuidado integral y personalizado. Nuestro objetivo es que cada paciente se sienta acompañado y cuidado,
                                mientras nos enfocamos en su salud física y emocional. En todo lo que hacemos, nuestro compromiso es la satisfacción del paciente y su recuperación óptima.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="info">
                    <div>
                        <strong>Hospitalización🏥</strong>
                        <p>Brindamos una atención médica y cuidados de alta calidad a nuestros pacientes hospitalizados.</p>
                    </div>
                    <div>
                        <strong>Vacunación💉</strong>
                        <p>Servicio el cual otorga acceso a las vacunas y a tener un control sobre ellas.</p>
                    </div>
                    <div>
                        <strong>Enfermería👩‍⚕️</strong>
                        <p>Brindamos atención y cuidados por una enfermera capacitada.</p>
                    </div>
                    <div>
                        <strong>Psicología🧠</strong>
                        <p>Brindamos una atención psicológica de calidad,
                            respetuosa y confidencial, para ayudar a las personas a mejorar su bienestar emocional y mental.</p>
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