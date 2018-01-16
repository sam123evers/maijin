import React from 'react'
import STORE from './../store'
import ACTIONS from './../actions'

import Navbar from './components/navbar'


class UserProfilePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = STORE.data
	}

	componentWillMount() {
		ACTIONS.getUserProfileData(this.props.userProfileId)
		STORE.on('dataUpdated', () => {
			this.setState(STORE.data)
		})
		
	}

	render() {
		
		return(
			<div>
				<Navbar />
				<UserProfile data={this.state.userMod}/>
			</div>
		)
	}
}

class UserProfile extends React.Component {
	constructor(props) {
		super(props);
	}

	
	render() {
		console.log(this.props.data.attributes)
		return (
		 	<div className="user-profile">
		 		<div className="user-profile-landscape"></div>
		 		<div className="container-fluid user-profile-container">
		 			<div className="row">

{/*the div below the column on the left that contains the avatar, name, country, and language of the*/}
			 			<div className="col profile-column-left">
					 		<img id="user-profile-pic" src={this.props.data.attributes.avatarUrl} />
					 		<div className="profile-column-left-info">
						 		<h1>{this.props.data.attributes.name ? 
						 			 this.props.data.attributes.name : 
						 			 "Unknown User Name" }
						 		</h1>
						 		<h2>{this.props.data.attributes.country ? 
						 			 this.props.data.attributes.country : 
						 			 "Unknown Country" }
						 		</h2>
						 		<h2>{this.props.data.attributes.language ? 
						 			 this.props.data.attributes.language : 
						 			 "Unknown Language" }
						 		</h2>
						 	</div>	
					 	</div>


					 	<div className="col-9 profile-column-right">
					 		<ProfileNavbar user={this.props.data.attributes.objectId}/>
					 		<div className="profile-info-container">
					 			<div className="location-profile">
					 				<h3>Location</h3>
					 				<p>{this.props.data.attributes.city ? 
					 					this.props.data.attributes.city : 
					 					"unknown city"},{" "} 
					 				   {this.props.data.attributes.province ? 
					 				   	this.props.data.attributes.province : 
					 				   	"unknown province"},{" "} 
					 				   {this.props.data.attributes.country ? 
					 				   	this.props.data.attributes.country : 
					 				   	"unknown country"}
					 				</p>
					 				
					 			</div>

					 			<div className="education-profile">
					 				<h4>Education</h4>
					 				<p>University: {this.props.data.attributes.university}</p>
					 				<p>Majored in: {this.props.data.attributes.major}</p>
					 				<p>Graduation date: {this.props.data.attributes.graduation_date}</p>
					 			</div>
					 			<div className="missions-profile">
					 				
					 			</div>
					 			<div className="assignments-profile">
					 			</div>
					 		</div>
					 	</div>
				 	</div>
			 	</div>
		 	</div>
		)
	}
}

class ProfileNavbar extends React.Component {
	render() {
		console.log(this)
		return (
			<div className="container-fluid profile-navigation">
				<ul className="nav">
					<li className="nav-item">
						<a className="nav-link" href="/#/users/user_profile/">Profile</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href={"/#/users/user_profile/" + this.props.user + "/missions"}>Missions</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href={"/#/users/user_profile/" + this.props.user + "/assignments"}>Assignments</a>
					</li>
				</ul>
			</div>
		)
	}
}

export default UserProfilePage