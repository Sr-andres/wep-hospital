import React from 'react';

import "../css/general.css";

const Farmacia = () => {
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
                            src="../src/assets/colash-farmacia.jpg"
                            alt="imagen medicina general" />
                    </div>
                    <div>
                        <h1 className='title-gene'>SERVICIO FARMACÉUTICO 💊.</h1>
                        <div className="content">
                            <p>
                                El Servicio Farmacéutico del E.S.E. Hospital San Juan de Dios de Betulia se encarga de la dispensación,
                                almacenamiento y control de medicamentos y productos médicos esenciales para la atención de los pacientes.
                                Su objetivo principal es garantizar el uso seguro, racional y efectivo de los medicamentos,
                                cumpliendo con las normativas de calidad establecidas por el Ministerio de Salud de Colombia.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="info">
                    <div>
                        <strong> Dispensación de medicamentos💊</strong>
                        <p>
                            Suministro de fármacos a pacientes hospitalizados y ambulatorios, de acuerdo con la prescripción médica.
                        </p>
                    </div>
                    <div>
                        <strong>Control de inventarios📦</strong>
                        <p>
                            Gestión y almacenamiento seguro de los medicamentos para evitar desabastecimiento o vencimientos.
                        </p>
                    </div>
                    <div>
                        <strong>Apoyo en tratamientos crónicos🤝🏻</strong>
                        <p>
                            Suministro de medicamentos para enfermedades como diabetes, hipertensión, artritis y más.
                        </p>
                    </div>
                    <div>
                        <strong>Farmacovigilancia👁️</strong>
                        <p>
                            Monitoreo de reacciones adversas y reporte de efectos secundarios de los medicamentos.
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

export default Farmacia;