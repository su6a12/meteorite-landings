import React, {Component} from 'react';
import NoResults from './NoResults';
import Landing from './Landing';

const LandingsPage = (props) => {

	let list;
	if (props.results.data.length === 0) {
		list = <NoResults />
	}
	else {
		list = props.results.data.map((landing, index) => {
			console.log(landing, index);
			return <Landing 
								landing={landing} 
								key={index} />
		});
	}
	return (
		<div>
			<ul className='list-group'>
				{list}
			</ul>
		</div>
	)
}

export default LandingsPage;