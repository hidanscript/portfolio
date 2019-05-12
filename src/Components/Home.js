import React, { Component } from 'react';
import NavBar from './NavBar';
import PresHeader from './PresHeader';
import Stars from './Stars';
import './css/Home.css';

class Home extends Component {

	render() {
		return (
			<div className="Home">
				<PresHeader/>
				<Stars/>
			</div>
		);
	}

}

export default Home;