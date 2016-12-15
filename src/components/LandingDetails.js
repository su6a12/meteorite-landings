import React, {Component} from 'react';
import APICall from '../APICalls';

class LandingDetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			details: null
		};

		APICall.getEachLanding(this.props.params.id)
		.then((details) => {
			this.setState({details});
			console.log(details);
		});
	}

	render() {

		return (
			<div>
				Name: {this.state.details.name}
			</div>
		)
		
	}
}

export default LandingDetails;