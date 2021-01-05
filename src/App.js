import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Postulaciones from './pages/Postulaciones';
import Postular from './pages/Postular';
import Cuenta from './pages/Cuenta';
import './App.css';
import Login from './pages/Login';
import { FooterContainer } from './containers/footer'

function App() {
    return (
		<Router>
			<div className="App" >
				<Switch>
					<Route path="/" exact component={Login} />
					<Route path="/home" exact component={Home} />
					<Route path="/postular" component={Postular} />
					<Route path="/mis-postulaciones" component={Postulaciones} />
					<Route path="/cuenta" component={Cuenta} />
				</Switch>
			<>
			<FooterContainer />
			</>
			</div>
		</Router>
    );
}

export default App;
