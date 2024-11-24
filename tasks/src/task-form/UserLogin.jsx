import React, { Component } from 'react';
import './UserLogin.css';
export default class UserLogin extends Component {
	// state = {
	// 	email: '',
	// 	password: '',
	// };
	// handleSubmit = (e) => {
	// e.preventDefault();
	// const { email, password } = this.state;
	// console.log(`Email: ${this.state.email}`);
	// console.log(`Password: ${this.state.password}`);
	// };
	handleEmailChange = (e) => {
		const valueEmail = e.target.value;
		// this.setState({ email: valueEmail });

		if (!valueEmail.endsWith('.ru')) {
			console.log('Yalnız .ru domenlərinə icazə verilir.');
		}
	};
	handlePasswordChange = (e) => {
		const valuePassword = e.target.value;
		// this.setState({ password: valuePassword });

		if (valuePassword.length < 8) {
			console.log('Ən azı 8 simvol.');
		}
	};
	render() {
		return (
			<form action="" onSubmit={this.handleSubmit}>
				<label htmlFor="email">E-mail:</label>
				<input
					type="text"
					// value={this.state.email}
					required
					placeholder="Enter your email address"
					onMouseDown={this.handleEmailChange}
				/>
				<label htmlFor="password">Password:</label>
				<input
					type="password"
					// value={this.state.password}
					required
					placeholder="Enter your password"
					onMouseDown={this.handlePasswordChange}
				/>
				<button type="submit" className="button">
					Login
				</button>
			</form>
		);
	}
}
