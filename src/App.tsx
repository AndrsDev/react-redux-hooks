import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from 'components/Menu';
import Users from 'pages/Users';

const Test = () => <div>Hola</div>

const App = () => (
	<BrowserRouter>
		<Menu />
		<div id="margen">
			<Route exact path='/' component={Users} />
			<Route exact path='/tareas' component={Test} />
		</div>
	</BrowserRouter>
);

export default App;