import React, { Component } from 'react';

export default class Task1 extends Component {
	clickHandler = () => {
		console.log('Button clicked');
	};
	render() {
		return (
			<button type="button" onClick={this.clickHandler}>
				Subscribe
			</button>
		);
	}
}
