import Backbone from 'backbone'

import {UserModel, PaginationModel, UserCollection} from './models/userModel'

var STORE = Object.assign({}, Backbone.Events, {
	data: {
		userColl: new UserCollection(),
		userMod: new UserModel({}),
	},

	set: function(newobject) {
		this.data = Object.assign(this.data, newobject)
		this.trigger('dataUpdated')
	},

	get: function(attribute) {
		return this.data[attribute]
	}
})

export default STORE