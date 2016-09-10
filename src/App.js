import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import axios from 'axios';
import Search from './components/Search';
import Landings from './components/Landings';

const NASA_API_KEY = 'lTl1V7bM5lQiWXTXUktW2YlyL';
const GEO_KEY = 'AIzaSyBxz0Pp6VZZlXwiSxkRKtzTAFsqSiH3llo';
const NASA_URL = 'https://data.nasa.gov/resource/y77d-th95.json';
const GEO_URL = 'https://maps.googleapis.com/maps/api/geocode/json';
const METER_PER_MILE = 1609.344;

class App extends Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			zip: '',
			meters: '',
			results: {}
		};

		this.handleSubmitZip = this.handleSubmitZip.bind(this);
	}

	// calls Google Maps API to retrieve geolocation from user input zip code
	// calls NASA API to retrieve meteorite landings within specified radius
	handleSubmitZip(zip, miles, e) {
		e.preventDefault();
		// need to convert miles to meters for API parameter
		var meters = miles * METER_PER_MILE;
		this.setState({zip, meters});
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
		.then(() => {
			var where = `within_circle(geolocation,${this.state.long},${this.state.lat},${this.state.meters})`;
			axios.get(NASA_URL, {
				params: {
					$$app_token: NASA_API_KEY,
					$where: where
				}
			})
			.then((results) => {
				this.setState({results});

			});
		});
	}

	render() {
		return (
			<div>
				<h1>Find The Closest Meteorite Landings</h1>
				<Search onSubmitZip={this.handleSubmitZip} />
			</div>
			
		);
	}
}

App.contextTypes = {
		router: React.PropTypes.object.isRequired
	};

export default App;