import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import Search from './components/Search';
import LandingsPage from './components/LandingsPage';
import LandingDetails from './components/LandingDetails';
import NoResults from './components/NoResults';
import APICall from './APICalls';
const METER_PER_MILE = 1609.344;

class App extends Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			lat: '',
			long: '',
			zip: '',
			meters: '',
			results: null
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


		// APICall.getGeoLocation(zip, meters)
		// 	.then((data) => {
		// 		this.setState({
		// 			lat: data.data.results[0].geometry.location.lat,
		// 			long: data.data.results[0].geometry.location.lng
		// 		});
		// 	}).then(function() {
		// 		//console.log(this.state.zip);
		// 		var lat = this.state.lat;
		// 		var long = this.state.long
		// 		APICall.getLandings(lat, long, meters)
		// 			.then((data) => {
		// 				this.setState({results});
		// 				console.log(results);
		// 			});
		// 	});

		APICall.getLandings(zip, meters)
			.then((results) => {
				this.setState({results});
				console.log('from app', results);
			});

		

		// axios.get(GEO_URL, {
		// 	params: {
		// 		address: zip,
		// 		key: GEO_KEY
		// 	}
		// })
		// .then((data) => {
		// 	this.setState({
		// 		lat: data.data.results[0].geometry.location.lat,
		// 		long: data.data.results[0].geometry.location.lng
		// 	});
		// })
		// .catch((error) => {
		// 	console.log("error occurred", error);
		// })
		// .then(() => {
		// 	var where = `within_circle(geolocation,${this.state.long},${this.state.lat},${this.state.meters})`;
		// 	axios.get(NASA_URL, {
		// 		params: {
		// 			$$app_token: NASA_API_KEY,
		// 			$where: where,
		// 			$limit: 100
		// 		}
		// 	})
		// 	.then((results) => {
		// 		this.setState({results});
		// 		console.log(results);
		// 	});
		// });
}

	render() {
		let landings, title;
		// check that results is not null
		if (this.state.results) {
			// check that results is empty
			if (!this.state.results.data.length) {
				landings = (
					<NoResults />
				)
				title = (
					<h1>Abort</h1>
				)
			// results not empty, display	
			} else {
				landings = (
					<LandingsPage props={this.props} results={this.state.results} />
				)
				title = (
					<h1>Results</h1>
				)
			}
		}
		// initial launch of page
		// show text fields for input
		else {
			landings = (
				<Search onSubmitZip={this.handleSubmitZip} />
			)
			title = (
				<h1>Find The Closest Meteorite Landings</h1>
			)
		}

		return (
			<div>
				{title}
				{landings}
			</div>
			
		);
	}
}

App.contextTypes = {
		router: React.PropTypes.object.isRequired
	};

export default App;