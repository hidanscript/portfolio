import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/PresHeader.css';

class PresHeader extends Component {

	constructor(props) {
		super(props);

		this.state = {
			clicked : false,
			class : 'button-default'
		};
	}

	render() {
		return(
			<div className="pres-header">
				<h1>Hello, I'm <strong id="myName">David Ortiz</strong>.</h1>
				<p>Frontend Developer</p>
				<Link to="/about">
					<button className={this.state.class} type="submit">Get Started</button>
				</Link>
			</div>
		);
	}
}

export default PresHeader;