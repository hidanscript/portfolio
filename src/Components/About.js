import React, { Component } from 'react';
import './css/About.css';

class About extends Component {

	render() {
		return(
			<div className ="About">
				<p id="about-title">About Page</p>
				<input type="text" placeholder="Hello"/>
			</div>
		);
	}
}

export default About;