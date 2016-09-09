import React, {Component} from 'react';

class Search extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<form onSubmit={(e) => this.props.onSubmitZip(this.refs.zip.value, e)}>
					<input placeholder='Zip Code' ref='zip' />
					<button>Find Landings!</button>
				</form>
			</div>
		);
	}
}

export default Search;