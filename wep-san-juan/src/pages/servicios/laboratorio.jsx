import React from 'react';

import "../css/general.css";

const Laboratorio = () => {
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
                        <h1 className='title-gene'>LABORATORIO CLINICO 🔬👩🏻‍🔬.</h1>
                        <div className="content">
                            <p>
                                El Laboratorio Clínico del E.S.E. Hospital San Juan de Dios de Betulia ofrece servicios de apoyo diagnóstico a la comunidad,
                                garantizando la realización de diversos exámenes clínicos con precisión y confiabilidad. Su objetivo es contribuir a la prevención, detección y control de enfermedades mediante pruebas de análisis de muestras biológicas, como sangre, orina y otros fluidos corporales.
                                <br />
                                Dentro de los servicios disponibles, el laboratorio clínico realiza pruebas de hematología, bioquímica sanguínea, uroanálisis, coproanálisis, inmunología y microbiología, entre otros.
                                Estas pruebas son fundamentales para el diagnóstico de enfermedades como diabetes, infecciones, problemas renales, trastornos hepáticos y más.
                                <br />
                                El hospital brinda atención las 24 horas del día, asegurando disponibilidad continua para la comunidad. Además, el laboratorio cumple con los estándares de calidad exigidos para garantizar resultados confiables y oportunos,
                                facilitando la toma de decisiones médicas para el tratamiento adecuado de los pacientes.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="info">
                    <div>
                        <strong> Pruebas de Hematología🔬</strong>
                        <p>• Cuadro hemático completo.
                            <br />
                            • Velocidad de sedimentación globular.
                            <br />
                            • Coagulación.
                        </p>
                    </div>
                    <div>
                        <strong>Pruebas de Bioquímica Sanguínea💉</strong>
                        <p>• Glucosa.
                            <br />
                            • Perfil lipídico.
                            <br />
                            • Pruebas de función renal.
                            <br />
                            • Pruebas de función hepática.
                        </p>
                    </div>
                    <div>
                        <strong>Pruebas de Inmunología y Serología👩‍⚕️</strong>
                        <p>• Prueba de VIH/SIDA.
                            <br />
                            • Perfil lipídico.
                            <br />
                            • Pruebas para Hepatitis B y C.
                            <br />
                            • Pruebas de embarazo (hCG).
                        </p>
                    </div>
                    <div>
                        <strong>Pruebas de Microbiología📝</strong>
                        <p>• Cultivo de orina (urocultivo).
                            <br />
                            • Cultivo de orina (urocultivo).
                            <br />
                            •Cultivo de exudado faríngeo o nasal.
                            <br />
                            • Pruebas para detección de tuberculosis.
                        </p>
                    </div>
                </div>
                <div className="footer">
                    <p>&copy; 2025 Hospital San Juan De Dios</p>
                </div>

            </div>
        </div>
    );
};

export default Laboratorio;