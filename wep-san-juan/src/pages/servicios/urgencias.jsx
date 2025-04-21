import React from 'react';
import "../css/general.css";

const Urgencias = () => {
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
                        <h1 className='title-gene'>Servicio de Urgencias</h1>
                        <div className="content">
                            <p>
                                El E.S.E. Hospital San Juan de Dios de Betulia cuenta con un Servicio de Urgencias disponible las 24 horas del día,
                                brindando atención inmediata a pacientes que requieran asistencia médica prioritaria debido a enfermedades,
                                accidentes o condiciones críticas de salud. Nuestro equipo de profesionales está altamente capacitado para evaluar,
                                estabilizar y tratar emergencias médicas de diferentes niveles de complejidad.
                                <br />
                               <h1>¿Cuándo acudir al Servicio de Urgencias? </h1> 
                               <br />
                                Debe dirigirse al servicio de urgencias en caso de:
                                <br />
                                🚨 Accidentes y traumas severos (fracturas, heridas profundas, quemaduras graves).
                                <br />
                                ❤️ Dolor torácico intenso o signos de infarto.
                                <br />
                                🧠 Dificultad para hablar, moverse o pérdida de conciencia (posibles síntomas de un ACV).
                                <br />
                                🤢 Dificultad respiratoria grave o asfixia.
                                <br />
                                🤕 Convulsiones o crisis epilépticas sin antecedentes previos.
                                <br />
                                🌡️ Fiebres altas y persistentes en niños o adultos.
                                <br />
                                ⚠️ Sangrados abundantes o vómito con sangre.
                                <br />
                                🤰 Emergencias obstétricas (sangrado durante el embarazo, trabajo de parto prematuro).
                                <br />
                                ☠️ Intoxicaciones o envenenamientos.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="info">
                    <div>
                        <strong>👨‍⚕️ Atención médica inmediata</strong>
                        <p>Evaluación y estabilización de pacientes en estado crítico.</p>
                    </div>
                    <div>
                        <strong>💉 Atención en trauma y accidentes</strong>
                        <p>Manejo de fracturas, heridas y golpes severos.</p>
                    </div>
                    <div>
                        <strong>🩺 Reanimación y soporte vital básico y avanzado.</strong>
                        <p></p>
                    </div>
                    <div>
                        <strong>⚕️ Hospitalización o remisión a centros de mayor complejidad</strong>
                        <p> si el caso lo requiere.</p>
                    </div>
                </div>
                <div className="footer">
                    <p>&copy; 2025 Hospital San Juan De Dios</p>
                </div>

            </div>
        </div>
    );
};

export default Urgencias;