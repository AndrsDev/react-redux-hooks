import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Users from 'pages/Users';
import Layout from 'components/Layout';

const Test = () => <div>Hola</div>

const App = () => (
	<BrowserRouter>
		<Layout>
			<Switch>
				<Route exact path='/' component={Users} />
				<Route exact path='/tareas' component={Test} />
			</Switch>
		</Layout>
	</BrowserRouter>
);

export default App;