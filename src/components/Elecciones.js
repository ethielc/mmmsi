import React from 'react';
import './Elecciones.css';

const Elecciones = ({eleccion}) => {
    return (
        <div className="container-elecciones">
            <h2>Ramos escogidos</h2>
            <div className="tabla-elecciones">
                <div className="eleccion-ramo">
                    {eleccion.ramo}
                </div>
                <div className="eleccion-sigla">
                    {eleccion.sigla}
                </div>
            </div>
        </div>
    )
}

export default Elecciones;