import React, {Component} from 'react';

class Search extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<form 
					className='search' onSubmit={(e) => this.props.onSubmitZip(this.refs.zip.value, this.refs.miles.value, e)}>
					<input className='search-input' placeholder='Postal Code' ref='zip' />
					<input className='distance' placeholder='Search Radius (in miles)' ref='miles' />
					<button className='search-btn'>Find Landings!</button>
				</form>
			</div>
		);
	}
}

export default Search;