import React, { Component } from 'react';

export class Task3 extends Component {
	state = {
		message: 'Click here',
	};
	handleClick = () => {
		this.setState({
			message: 'Clicked',
		});
		document.querySelector('button').classList.add('button-blue');
	};
	render() {
		return (
			<>
				<button type="button" onClick={this.handleClick} className="button">
					{this.state.message}
				</button>
			</>
		);
	}
}

export default Task3;
