// import React, { Component } from 'react';

// export default class Wine extends Component {
// 	render() {
// 		return (
// 			<>
// 				<div className="container">
// 					<h1>{this.props.title}</h1>
// 					<p>{this.props.description}</p>
// 					<p>{this.props.rating}</p>
// 				</div>
// 			</>
// 		);
// 	}
// }
import React from 'react';
export const Wine = (props) => {
	return (
		<>
			<div className="container">
				<h1>{props.title}</h1>
				<p>{props.description}</p>
				<p>{props.rating}</p>
			</div>
		</>
	);
};
