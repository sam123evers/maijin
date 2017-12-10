import React from 'react'

import PaginationNavbar from './paginationNavbar'

class UserList extends React.Component {
	render() {
			
		return (
    
      <div className="container-fluid users-categories-container">{/*begin main container*/}
		    
       {/*_#_#_#_#_#_#_#_#_#_#_#------CATEGORIES SECTION------#_#_#_#_#_#_#_#_#_#_#_#_#_*/} 

        <div className="row users-categories">{/*begin users/categories container*/}
          
          <div className="col categories">{/*begin categories container*/}
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
          </div>{/*end categories container*/}
        
      
        {/*_#_#_#_#_#_#_#_#_#_#_#-------USERS LIST SECTION-------#_#_#_#_#_#_#_#_#_#_#_#_#_#_#*/}


				  <div className="col-9 users">{/*begin users container*/}
            
            <div className="search">
					     <h3>Search Users</h3>
					     <input type="text" placeholder="search..." />
				    </div>
				    
            <div className="users-list">
          			 <ul key={this.props.userCollection}>

          				  {this.props.userCollection.models.map((userData) => <SingleUser data={userData} />)}
          			 </ul>
            </div>
            <PaginationNavbar />
          
          </div> 
        
        </div>    
      </div>  
        
    )
  }                 
}                   

class SingleUser extends React.Component {

	render() {
		  {/*console.log(this)*/}
		return(
			<li className="single-user" key={this.props.data.id}>{/*begin list item*/}
				<div className="user-landscape"></div>{/*backgrond photo for each user*/}
        <div className="user-info">{/*open user info container*/}
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
                  
        <img id="avatar" 
            src={this.props.data.get('avatarUrl') ? 
                this.props.data.get('avatarUrl') : 
                `https://en.bidaway.com/img/no_image_user_profile.png`}
          />
      </li>
			
		)
	}
}

export default UserList