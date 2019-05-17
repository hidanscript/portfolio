import React, { Component } from 'react';
import './css/About.css';
import NavBar from './NavBar';

class About extends Component {

	render() {
		return(
			<div className="about-page">
				<div className ="About">
					<div className="about-box">
						<p className="about-title">About</p>
						<p className="about-desc">
							I'm David Ortiz, a Javascript Frontend Developer,
							I was born in Venezuela and I am currently living in Buenos Aires,
							Argentina. <br/> XDXSAXLKSADKASKDJNASJKDNJKASDJ
						</p>
						<input type="text" placeholder="Hello"/>
					</div>
				</div>
				<NavBar/>
			</div>
		);
	}
}

export default About;