import React, { Component } from 'react';
import './css/NavBar.css';

class NavBar extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		return(
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">GitHub</a></li>
			</ul>
		);
	}
}

export default NavBar;