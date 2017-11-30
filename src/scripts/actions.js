import UsersPage from './views/usersPage'
import STORE from './store'
import UserModel from './models/userModel'

var ACTIONS = {
	fetchUserData: function() {
		var userCollection = STORE.get('userColl')
		userCollection.fetch()
		.then(()=>{
			STORE.set({
				userColl: userCollection
			})
		})
	}
}

export default ACTIONS