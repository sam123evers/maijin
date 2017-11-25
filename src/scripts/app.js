import React from "react"
import ReactDOM from "react-dom"
import Backbone from "backbone"
import UsersPage from "./usersPage"

const maijinRouter = Backbone.Router.extend({
  routes: {
    "": "showUsersPage"
  },

  showUsersPage: function() {
    ReactDOM.render(<UsersPage />, document.getElementById("container"))
  }
})
new maijinRouter()
Backbone.history.start()
