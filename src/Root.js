import React, {Component} from 'react';

class Root extends Component {
	render() {
		return (
			<div>
				<h1>Find Your Closest Meteorite Landings</h1>
				{this.props.children}
			</div>
		);
	}
}

export default Root;