import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import axios from 'axios';
import Search from './components/Search';

const NASA_API_KEY = 'lTl1V7bM5lQiWXTXUktW2YlyL';
const GEO_KEY = 'AIzaSyBxz0Pp6VZZlXwiSxkRKtzTAFsqSiH3llo';
const NASA_URL = 'https://data.nasa.gov/resource/y77d-th95.json';
const GEO_URL = 'https://maps.googleapis.com/maps/api/geocode/json';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			zip: ''
		};

		this.handleSubmitZip = this.handleSubmitZip.bind(this);
	}

	handleSubmitZip(zip, e) {
		e.preventDefault();
		this.setState({zip});
		axios.get(GEO_URL, {
			params: {
				address: zip,
				key: GEO_KEY
			}
		})
		.then((data) => {
			this.setState({
				lat: data.data.results[0].geometry.location.lat,
				long: data.data.results[0].geometry.location.lng
			});
		})
		.then((response) => {
			var where = `within_circle(geolocation,${this.state.long},${this.state.lat},100000)`;
			axios.get(NASA_URL, {
				params: {
					$$app_token: NASA_API_KEY,
					$where: where
				}
			});
		});
	}

	render() {
		return (
			<div>
				<Search onSubmitZip={this.handleSubmitZip} />
			</div>
			
		);
	}
}

export default App;