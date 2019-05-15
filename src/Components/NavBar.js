import React, { Component } from 'react';
import NavLink from './NavLink';
import Logo from './css/img/icon2.png';
import './css/NavBar.css';

class NavBar extends Component {

	render() {
		return(

			<div className="nav-bar">
				<img src={Logo}/>
				<h2><strong>David Ortiz</strong> Portfolio</h2>
				<ul>
					<NavLink path="/" name="Contact"/>
					<NavLink path="/" name="GitHub"/>
					<NavLink path="/" name="Projects"/>
					<NavLink path="/" name="Skills"/>
					<NavLink path="/about" name="About"/>
					<NavLink path="/home" name="Home"/>	
				</ul>
			</div>

		);
	}
}

export default NavBar;