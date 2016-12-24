import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import Search from './components/Search';
import LandingsPage from './components/LandingsPage';
import NoResults from './components/NoResults';
import APICall from './APICalls';

class App extends Component {

	constructor(props, context) {
		super(props, context);

		this.state = {
			postal_code: '',
			miles: '',
			currentIndexLimit: 20,
			results: null
		};

		this.handleSubmitZip = this.handleSubmitZip.bind(this);
		this.handleLoadMoreClick = this.handleLoadMoreClick.bind(this);
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
			});
	}

	handleLoadMoreClick(e) {
		e.preventDefault();
		let currentIndexLimit = this.state.currentIndexLimit;
		if (this.state.results.data.length - currentIndexLimit < 20) {
			this.setState({currentIndexLimit: this.state.results.data.length});
		}
		else {
			this.setState({currentIndexLimit: currentIndexLimit + 20});
		}
	}

	render() {
		let landings, title, showBtn;
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
				// check if we've reached the end of list
				// if yes, hide show more button
				if (this.state.results.data.length === this.state.currentIndexLimit) {
					showBtn = <div></div>;
				}
				else {
						showBtn = <button onClick={this.handleLoadMoreClick}>Show Me More</button>

				}

				landings = (
					<div>
						<LandingsPage currentIndex={this.state.currentIndexLimit} results={this.state.results}/>
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
				{showBtn}
				{this.state.currentIndex}
			</div>
			
		);
	}
}

App.contextTypes = {
		router: React.PropTypes.object.isRequired
	};

export default App;