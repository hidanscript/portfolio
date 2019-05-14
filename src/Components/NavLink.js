import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavLink extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		return(
			<li><Link to={this.props.path} className="nav-link">{this.props.name}</Link></li>
		);
	}
}

export default NavLink;