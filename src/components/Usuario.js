import React from 'react';
import './Usuario.css';

const Usuario = () => {
    return (
        <div className="contenedor-usuario">
            <div className="logo-user">
                <i class="fa fa-user" aria-hidden="true"></i>
            </div>
            <div className="informacion-user">
                <ul className="user-ul">
                    <li className="user-li">Ethiel Carmona</li>
                    <li className="user-li">Ingeniería Civil Informática</li>
                    <li className="user-li">ethiel.carmona@sansano.usm.cl</li>
                    <li className="user-li">+56 9 73236282</li>
                </ul>
            </div>
        </div>
    )
}

export default Usuario;