import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Route, Router, IndexRoute} from 'react-router';
import Root from './Root';
import App from './App';
import Landings from './components/Landings';
import NotFound from './NotFound';


ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={Root}>
			<IndexRoute component={App} />
			<Route path='/landings' component={Landings} />
			<Route path='*' component={NotFound} />
		</Route>
	</Router>,
	document.querySelector('.container'));
