import React from 'react'

class Banner extends React.Component {
	render() {
		return(
			<div className="container-fluid banner">
				<div className="row">
					<div className="col banner-icon-container">
              			<i id="banner-icon" className="fa fa-user-circle-o" aria-hidden="true"></i>
              			<h2 id="banner-h2">List of Users</h2>
           			</div>
           			<div className="col-9 blurb-container">
              			<p className="blurb">Students build relationships with thousands of employers on Maijin by participating in grassroots marketing campaigns that display their abilites, experiences and skills.</p>
           			</div>
           		</div>
			</div>
		)
	}
}

export default Banner