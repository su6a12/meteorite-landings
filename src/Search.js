import React, {Component} from 'react';

class Search extends Component {

	constructor(props) {
		super(props);
	}

	handleSubmit(e) {
		e.preventDefault();
		var zip = this.refs.zip.value;
		this.props.submitZipCode(zip);
		console.log('from search ', zip);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input placeholder='Zip Code' ref='zip' />
				<button>Find the Landings!</button>
			</form>
		);
	}
}

export default Search;