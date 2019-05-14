import React, { Component } from 'react';

class ProfileCard extends Component {

	constructor(props) {
		super(props);

		this.state = {
			name : '',
			desc : ''
		};
	}

	render() {
		return(

			<div className="profile-card">
				<div className="profile-image">
					<img src=""/>
				</div>
				<h2 className="profile-name">{this.state.name}</h2>
			</div>

		);
	}
}

export default ProfileCard;