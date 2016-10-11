import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Route, Router, IndexRoute} from 'react-router';
import Root from './Root';
import App from './App';
import LandingsPage from './components/LandingsPage';
import LandingDetails from './components/LandingDetails';
import NotFound from './NotFound';
import '../style.css';


ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={Root}>
			<IndexRoute component={App} />
			<Route path='/landings' component={LandingsPage} />
			<Route path='/landings/:id' component={LandingDetails} />
			<Route path='*' component={NotFound} />
		</Route>
	</Router>,
	document.querySelector('.container')
);
