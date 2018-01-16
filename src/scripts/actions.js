import UsersPage from './views/usersPage'
import STORE from './store'

import {UserModel} from './models/userModel'
import {UserCollection} from './models/userModel'
import {PaginationModel} from './models/userModel'
import PageableCollection from 'backbone.paginator'



var ACTIONS = {
	fetchUserData: function() {
		var userCollection = STORE.get('userColl')
		userCollection.fetch()
		.then(()=>{
			STORE.set({
				userColl: userCollection
			})
		})
	},

	getUserProfileData: function(id) {
		var userProfileData = new UserModel({ ObjectId : id })
		userProfileData.fetch().then(() => {
			STORE.set({
				userMod: userProfileData
			})
		})
	},

/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=PAGINATION LOGIC -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

	firstPageButtonClick: function() {
		var firstUsers = new UserCollection()
		firstUsers.getFirstPage().then(() => {
			console.log(firstUsers)
			STORE.set({
				userColl: firstUsers
			})
		})
	},

	previousPageButtonClick: function() {
		var previousUsers = new UserCollection()
		previousUsers.getPreviousPage().then(() => {
			console.log(previousUsers)
			STORE.set({
				userColl: previousUsers
			})
		})
	},

	nextPageButtonClick: function() {
		console.log('next page')
		var nextUsers = new UserCollection()
		nextUsers.getNextPage().then(() => {
			console.log(nextUsers)
			STORE.set({
				userColl: nextUsers
			})
		})
	},

	lastPageButtonClick: function() {
		var lastUsers = new UserCollection()
		lastUsers.getLastPage().then(() => {
			console.log(lastUsers)
			STORE.set({
				userColl: lastUsers
			})
		})
	},

	getPageByPageNumber: function(page) {
		// console.log('pageNumber: ', page)
		var usersByPage = new UserCollection()
		usersByPage.getPage(page).then(() => {
			STORE.set({
				userColl: usersByPage
			})
		})
	}


}

export default ACTIONS