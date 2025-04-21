import React from 'react';
import "../css/general.css";

const Ambulancia = () => {
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
                        <h1 className='title-gene'>Servicio de Transporte Asistencial Básico (Ambulancia) 🚑.</h1>
                        <div className="content">
                            <p>
                            El E.S.E. Hospital San Juan de Dios de Betulia dispone de un servicio de Transporte Asistencial Básico (TAB) mediante ambulancias equipadas
                            para garantizar el traslado seguro de pacientes que requieren atención médica en otros centros de salud o dentro del municipio.
                            <br />
                            <h1> ¿En qué consiste el servicio de ambulancia?</h1>
                            <br />
                            El Transporte Asistencial Básico (TAB) está diseñado para movilizar pacientes que no presentan riesgo vital inmediato, pero que requieren supervisión médica durante el traslado.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="info">
                    <div>
                        <strong>🚑 Traslado de pacientes estables</strong>
                        <p>a hospitales de mayor complejidad en caso de remisión médica.</p>
                    </div>
                    <div>
                        <strong>🩺 Atención prehospitalaria básica</strong>
                        <p>con signos vitales monitoreados durante el traslado.</p>
                    </div>
                    <div>
                        <strong>👨‍⚕️ Personal capacitado</strong>
                        <p>(conductores entrenados en primeros auxilios y auxiliares de enfermería).</p>
                    </div>
                    <div>
                        <strong>📍 Cobertura urbana y rural</strong>
                        <p>para garantizar el acceso a la atención médica.</p>
                    </div>
                </div>
                <div className="footer">
                    <p>&copy; 2025 Hospital San Juan De Dios</p>
                </div>

            </div>
        </div>
    );
};

export default Ambulancia;