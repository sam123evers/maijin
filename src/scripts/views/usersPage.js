import React from "react"
import STORE from "../store"
import ACTIONS from '../actions'

import Banner from './components/banner'
import CategorySidebar from './components/categorySidebar'
import Navbar from './components/navbar'
import UserList from './components/userList'
import PaginationNavbar from './components/paginationNavbar'



class UsersPage extends React.Component {
  constructor(props) {
  	super();
  	this.state = STORE.data
  }

  componentWillMount() {
  	ACTIONS.fetchUserData()
  	STORE.on('dataUpdated', () => {
  		this.setState(STORE.data)
  	})
  }
  
  render() {
    return (
    	<div className="users-page">
    		  <Navbar />
          <Banner />
          <UserList userCollection={this.state.userColl}/>
      </div>
    )
  }
}

export default UsersPage
