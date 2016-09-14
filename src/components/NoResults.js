import React, {Component} from 'react';

class NoResults extends Component {

	componentDidMount() {
		setTimeout(() => {
			
		}, 1000);
	}

	render() {
		return (
			<div>
				No landings found...Try a bigger radius
			</div>
		);
	}
};

export default NoResults;