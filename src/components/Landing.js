import React, {Component} from 'react';
import {Link} from 'react-router'; 

class Landing extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		let mass = Number(this.props.landing.mass).toFixed(4);
		let date = new Date(this.props.landing.year).toLocaleDateString();

		if (!this.props.landing) {
			return <div>Loading...</div>;
		}

		return (
			<li className='list-group-item'>				
					<div className='property'><span className='prop-title'>Name:</span> {this.props.landing.name}</div>
					<div className='property'><span className='prop-title'>Mass:</span> {mass} (g)</div>
					<div className='property'><span className='prop-title'>Date:</span> {date}</div>
					<div className='property'><span className='prop-title'>Classification:</span> {this.props.landing.recclass}</div>
			</li>
		)
	}
}

export default Landing;