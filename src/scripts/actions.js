import UsersPage from './views/usersPage'
import STORE from './store'
import UserModel from './models/userModel'
import UserCollection from './models/userModel'




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

	previousPageButtonClick: function() {
		console.log('previousPageButtonClick')
	},

	nextPageButtonClick: function() {
		console.log('nextPageButtonClick')
		
		
	}


}

export default ACTIONS