import React from 'react'

class UserList extends React.Component {
	render() {
			
		return (
    
      <div className="container-fluid users-categories">
		    
        <div className="row users-categories">
          
          <div className="col categories">
              <h3 id="refine-search">Refine Search</h3>
              <div className="the-categories">
                  <a><p>business</p></a>
                  <a><p>chemistry</p></a>
                  <a><p>these are</p></a>
                  <a><p>links that</p></a>
                  <a><p>could refine</p></a>
                  <a><p>the search</p></a>
                  <a><p>parameters</p></a>
                  <a><p>geophysics</p></a>
                  <a><p>political science</p></a>
              </div>
          </div>
        
      



				  <div className="col-9 users">
            
            <div className="search">
					     <h3>Search Users</h3>
					     <input type="text" placeholder="find..." />
				    </div>
				    
            <div className="users-list">
          			 <ul key={this.props.userCollection.models}>
          				  {this.props.userCollection.models.map((userData) => <SingleUser data={userData} />)}
          			 </ul>
            </div>
          </div>
        </div>
      </div>
        
    )
	}
}

class SingleUser extends React.Component {

	render() {
		
		return(
			<li className="single-user" key={this.props.data.cid}>
				<div className="user-landscape"></div>
              	<div className="user-info">
                  	<p id="nick-name">
                    	{this.props.data.get('nickName') ? this.props.data.get('nickName') : "unkown user name"} 
                  	</p>
                  	<p>
                  		{this.props.data.get('university') ? this.props.data.get('university') : "unknown university"}
                  	</p>
                  	<p>
                  		{this.props.data.get('major') ? this.props.data.get('major') : "unknown major"} 
                  	</p>
                  	<p>
                  		{this.props.data.get('email') ? this.props.data.get('email') : "unknown email"}
                  	</p>
                  	
                  
              
              	</div>
                  
              	<img id="avatar" src={this.props.data.get('avatarUrl') ? this.props.data.get('avatarUrl') : `https://en.bidaway.com/img/no_image_user_profile.png`}/>
            </li>
			
		)
	}
}

export default UserList