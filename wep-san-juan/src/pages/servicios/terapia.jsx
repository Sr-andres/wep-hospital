import React from 'react';
import "../css/general.css";

const Terapia = () => {
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
                        <h1 className='title-gene'>Servicio de Fisioterapia</h1>
                        <div className="content">
                            <p>
                            El E.S.E. Hospital San Juan de Dios de Betulia ofrece un completo servicio de fisioterapia enfocado en la prevención, diagnóstico, 
                            tratamiento y rehabilitación de diversas condiciones musculoesqueléticas, neurológicas y respiratorias. A través de técnicas especializadas, 
                            buscamos mejorar la movilidad, reducir el dolor y optimizar la calidad de vida de nuestros pacientes.
                                <br />
                               <h1>¿A quién está dirigido este servicio?</h1>
                                <br />
                                🧑‍🦽 Pacientes con limitaciones físicas por enfermedades, lesiones o cirugías.
                                <br />
                                🦴 Personas con fracturas, esguinces o problemas articulares.
                                <br />
                                🧠 Pacientes con afecciones neurológicas (parálisis cerebral, accidente cerebrovascular, Parkinson).
                                <br />
                                🏃 Deportistas en proceso de recuperación de lesiones.
                                <br />
                                👴 Adultos mayores que necesitan mejorar su movilidad y prevenir caídas.
                                <br />
                                👶 Niños con trastornos del desarrollo motor.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="info">
                    <div>
                        <strong>🦵 Rehabilitación musculoesquelética</strong>
                        <p>Terapias para fortalecer músculos y articulaciones afectadas.</p>
                    </div>
                    <div>
                        <strong>💆‍♂️ Terapia manual</strong>
                        <p>Masajes terapéuticos y técnicas para aliviar el dolor y mejorar la movilidad.</p>
                    </div>
                    <div>
                        <strong>Fisioterapia respiratoria</strong>
                        <p>
                        Tratamientos para mejorar la capacidad pulmonar en pacientes con enfermedades respiratorias.
                        </p>
                    </div>
                    <div>
                        <strong>🏃 Ejercicios terapéuticos personalizados</strong>
                        <p>Planes de actividad física adaptados a cada paciente.</p>
                    </div>
                </div>
                <div className="footer">
                    <p>&copy; 2025 Hospital San Juan De Dios</p>
                </div>

            </div>
        </div>
    );
};

export default Terapia;