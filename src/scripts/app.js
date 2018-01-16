import React from "react"
import ReactDOM from "react-dom"
import Backbone from "backbone"
import UsersPage from "./views/usersPage"
import HomePage from "./views/homepage"
import UserProfilePage from './views/userProfile'
import UserMissions from './views/userMissions'
import UserAssignments from './views/userAssignments'

const maijinRouter = Backbone.Router.extend({
  routes: {
  	"" : "showHomePage",
    "users": "showUsersPage",
    "users/user_profile/:id": "showUserProfilePage",
    "users/user_profile/:id/missions" : "showMissionsPage",
    "users/user_profile/:id/assignments" : "showAssignmentsPage"

  },

  showHomePage: function() {
  	ReactDOM.render(<HomePage />, document.getElementById("container"))
  },
  showUsersPage: function() {
    ReactDOM.render(<UsersPage />, document.getElementById("container"))
  },
  showUserProfilePage: function(id) {
    ReactDOM.render(<UserProfilePage userProfileId={id}/>, document.getElementById("container"))
  },
  showMissionsPage: function() {
    ReactDOM.render(<UserMissions />, document.getElementById("container"))
  },
  showAssignmentsPage: function() {
    ReactDOM.render(<UserAssignments />, document.getElementById("container"))
  }
})
new maijinRouter()
Backbone.history.start()