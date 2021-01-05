import React from 'react'
import './Info.css';

const Info = ({titulo, subtitulo}) => {
    return (
        <div className="info-asignaturas">
            <p className="enunciado">{titulo}</p>
            <p className="instruccion">{subtitulo}</p>
        </div>
    )
}

export default Info;