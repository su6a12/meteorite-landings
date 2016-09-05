import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';

const API_KEY = 'lTl1V7bM5lQiWXTXUktW2YlyL';

class App extends Component {

	constructor(props) {
		super(props);
	
		this.state = {
			zip: ''
		};
	}

	handleSubmitZip(zip) {
		this.setState({zip: zip});
		console.log('from app ', this.state);
	}

	render() {
		return (
			<div>
		<Search submitZipCode={(zip) => {this.handleSubmitZip(zip)}} />
			</div>
			
		);
	}
}

export default App;