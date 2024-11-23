import React, { Component } from 'react';

export class Task2 extends Component {
	state = {
		message: 'Click here',
	};

	render() {
		const { message } = this.state;
		// console.log(message);
		return <button type="button">{message}</button>;
	}
}

export default Task2;
