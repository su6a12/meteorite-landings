import React from 'react';
import {Link} from 'react-router'; 
import LandingDetails from './LandingDetails';

const Landing = ({landing}) => {

	let mass = Number(landing.mass).toFixed(4);
	if (!landing) {
		return <div>Loading...</div>;
	}
	return (
			<li className='list-group-item'>
					Name: {landing.name}
			</li>
	)
};
export default Landing;