import React, { Component } from 'react';

export default class Click extends Component {
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
