import React from "react"
import ReactDOM from "react-dom"
import Backbone from "backbone"
import UsersPage from "./views/usersPage"
import HomePage from "./views/homepage"

const maijinRouter = Backbone.Router.extend({
  routes: {
  	"" : "showHomePage",
    "users": "showUsersPage"

  },

  showHomePage: function() {
  	ReactDOM.render(<HomePage />, document.getElementById("container"))
  },

   showUsersPage: function() {
    ReactDOM.render(<UsersPage />, document.getElementById("container"))
  }
})
new maijinRouter()
Backbone.history.start()