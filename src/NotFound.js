import React, {Component} from 'react';

class NotFound extends Component {

	componentDidMount() {
		setTimeout(() => {
			this.props.history.push('/')
		}, 3000);
	}

	render() {
		return (
			<div>Not Found...Please Try Again</div>
		);
	}
}

export default NotFound;