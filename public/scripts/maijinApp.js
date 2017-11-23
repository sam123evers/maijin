// import React from 'react'
// import ReactDOM from 'react-dom'
// import Backbone from 'backbone'

// import UsersPage from './usersPage'

var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var UsersPage = require('UsersPage')

var element = <h1> hello </h1>


const maijinRouter = Backbone.Router.extend({
	routes: {
		"" : 'showUsersPage'
	},

	showUsersPage: function() {
		ReactDOM.render(element, document.getElementById('container'))
	}
})
new maijinRouter
Backbone.history.start()