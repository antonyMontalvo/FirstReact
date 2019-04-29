import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import { todos } from "./todos.json";

// Components
// import Navigation from "./components/navigation";

export class App extends Component {
	constructor() {
		super();
		this.state = {
			title: 'Aplicacion de Tareas',
			nTareas: 10
		}
	}
	render() {
		return (
			<div className="App">
				{/* <Navigation title="NavBar with components" /> */}

				<nav className="navbar navbar-dark bg-dark">
					<a href="  " className="text-white">
						{this.state.title}
					</a>
				</nav>

				<img src={logo} className="App-logo" alt="logo"></img>
			</div>
		)
	}
}

export default App;