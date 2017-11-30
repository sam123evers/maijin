import React from 'react'

class Navbar extends React.Component {
	render() {
		return (
			<div className="navbar">
				<img id="navbar-logo" src="http://www.maijin.me/img/logo_maijin.png" />
        		<ul className="nav">
                    <li className="nav-item">
            		  <a className="nav-link" href="/challenges">challenges</a>
                    </li>
                    <li className="nav-item">
            		  <a className="nav-link" href="/experinces">experiences</a>
                    </li>
                    <li className="nav-item">
            		  <a className="nav-link" href="/portals">portals</a>
                    </li>
                    <li className="nav-item">
            		  <a className="nav-link" href="/companies">companies</a>
                    </li>
                    <li className="nav-item">
            		  <a className="nav-link" href="/talent">talent</a>
                    </li>
        		</ul>
        		<div className="login-signup-container">
          		    <button className="btn btn-primary" id="login">login</button>
          		    <button className="btn btn-secondary" id="sign-up">sign up</button>
        		</div>
			</div>
		)
	}
}

export default Navbar