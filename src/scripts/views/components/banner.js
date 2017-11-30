import React from 'react'

class Banner extends React.Component {
	render() {
		return(
			<div className="banner container-fluid">
				<div className="row">
					<div className="col-sm">
              			<img id="users-banner-icon" src="http://www.clipartbest.com/cliparts/7ia/Ro8/7iaRo845T.png"/>
              			<h2>List of Users</h2>
           			</div>
           			<div className="col-lg">
              			<p>Students build relationships with thousands of employers on Maijin by participating in grassroots marketing campaigns that display their abilites, experiences and skills.</p>
           			</div>
           		</div>
			</div>
		)
	}
}

export default Banner