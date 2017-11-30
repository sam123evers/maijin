import React from 'react'

class HomePage extends React.Component {
	render() {
		return(
			<div>
				<h1>Home Page Route and render working</h1>
				<a href={`/#/users`}>users page</a>
			</div>
		)
	}
}

export default HomePage