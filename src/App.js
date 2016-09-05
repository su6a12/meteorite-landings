import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import Search from './Search';

const API_KEY = 'lTl1V7bM5lQiWXTXUktW2YlyL';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			zip: ''
		};
	}

	// can't pass zip value from Search
	// handleSubmitZip(e) {
	// 	e.preventDefault();
	// 	var zip = this.refs.zip.value;
		
	// }

	render() {
		return (
			<div>
				<input placeholder='Zip Code' ref='zip' />
				<Link to='/landings'>
					<button>Find the Landings!</button>
				</Link>
			</div>
			
		);
	}
}

export default App;