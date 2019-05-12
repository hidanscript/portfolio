import React, { Component } from 'react';
import './css/PresHeader.css'

class PresHeader extends Component {

	render() {
		return(
			<div>
				<h1>Hello, I'm <strong id="myName">David Ortiz</strong>.</h1>
				<p>Frontend Developer</p>
				<button type="submit">Get Started</button>
			</div>
		);
	}
}

export default PresHeader;