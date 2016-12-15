import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import Search from './components/Search';
import LandingsPage from './components/LandingsPage';
import LandingDetails from './components/LandingDetails';
import NoResults from './components/NoResults';
import APICall from './APICalls';

class App extends Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			postal_code: '',
			miles: '',
			results: null
		};

		this.handleSubmitZip = this.handleSubmitZip.bind(this);
	}

	// calls Google Maps API to retrieve geolocation from user input zip code
	// calls NASA API to retrieve meteorite landings within specified radius
	handleSubmitZip(postal_code, miles, e) {
		e.preventDefault();
		this.setState({postal_code, miles});

		// retrieves all landings
		APICall.getLandings(postal_code, miles)
			.then((results) => {
				this.setState({results});
				console.log('from app', results);
			});
	}

	handleLoadMoreClick(e) {

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
					<div>
						<LandingsPage props={this.props} results={this.state.results}/>
						<button onLoadMoreClick={this.props.handleLoadMoreClick}>More</button>
					</div>
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
				<div>
					<Search onSubmitZip={this.handleSubmitZip}/>
				</div>
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