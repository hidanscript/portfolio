import React, { Component } from 'react';
import './css/BG.css';
import Stars from './Stars';

class BG extends Component {

	render() {
		return(
			<div className='bg'>
				<Stars/>
			</div>
		);
	}

}

export default BG;