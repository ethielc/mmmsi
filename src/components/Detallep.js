import React from 'react'

const Detallep = ({asignatura}) => {
    console.log(asignatura);
    return (
        <div className="detalle-asignatura">
            <h2>Detalle de asignatura</h2>
            <ul className="ul-detalle">
                <li className="detalle-llave">Nombre</li>
                <li className="li-detalle">{asignatura.ramo}</li>
                <li className="detalle-llave">Sigla</li>
                <li className="li-detalle">{asignatura.sigla}</li>
                <li className="detalle-llave">Pago ayudantía</li>
                <li className="li-detalle">{asignatura.pago}</li>
                <li className="detalle-llave">Semestre en que se dicta</li>
                <li className="li-detalle">{asignatura.semestre}</li>
                <li className="detalle-llave">Vacantes disponibles</li>
                <li className="li-detalle">{asignatura.vacantes}</li>
            </ul>
        </div>
    )
}

export default Detallep;