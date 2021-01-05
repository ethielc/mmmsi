import React from 'react';
import Barra from '../components/Inicio';
import InfoLogin from '../components/InfoLogin';
import TituloLogin from '../components/TituloLogin';
import Ingreso from '../components/Ingreso'
import { Grid,TextField,Paper } from "@material-ui/core"
import { Link } from 'react-router-dom';

import './Login.css'

function Login() {
    return (
		<div className="login">
			<Barra/>
			<div className="container-inicio">
				<div className="container-info">
					<TituloLogin/>
					<InfoLogin/>
				</div>
				<div className="container-login">
					<Ingreso/>
				</div>
			</div>
		</div>
    );
}

export default Login;