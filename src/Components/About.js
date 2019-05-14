import React, { Component } from 'react';
import './css/About.css';
import NavBar from './NavBar';

class About extends Component {

	render() {
		return(
			<div className="about-page">
				<div className ="About">
					<p id="about-title">About Page</p>
					<input type="text" placeholder="Hello"/>
				</div>
				<NavBar/>
			</div>
		);
	}
}

export default About;