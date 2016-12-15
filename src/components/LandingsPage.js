import React, {Component} from 'react';
import {Link} from 'react-router'; 
import NoResults from './NoResults';
import Landing from './Landing';

class LandingsPage extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let list = this.props.results.data.map((landing, index) => {
			return (
						<Landing
							landing={landing}
							key={index} />
						)
		});
		return (
			<ul className='list-group'>
				{list}
			</ul>
		)
	}
}
export default LandingsPage;