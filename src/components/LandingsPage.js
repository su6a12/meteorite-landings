import React, {Component} from 'react';
import NoResults from './NoResults';

class LandingsPage extends Component {

	
	render() {
		//console.log(this.props.props);
		let list;
		if (this.props.results.data.length === 0) {
			list = <NoResults />
		}
		else {
			list = <div>results</div>
		}
		return (
			<div>
				{list}
			</div>
		)
	}
}


export default LandingsPage;