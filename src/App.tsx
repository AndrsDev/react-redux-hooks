import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from 'components/Layout';
import Users from 'pages/Users';
import Posts from 'pages/Posts';

const Test = () => <div>Hola</div>

const App = () => (
	<BrowserRouter>
		<Layout>
			<Switch>
				<Route exact path='/' component={Users} />
				<Route exact path='/tareas' component={Test} />
				<Route exact path='/posts/:uid' component={Posts} />
			</Switch>
		</Layout>
	</BrowserRouter>
);

export default App;