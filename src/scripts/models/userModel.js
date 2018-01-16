import Backbone from 'backbone'
import PageableCollection from 'backbone.paginator'

export var UserModel = Backbone.Model.extend({
	default: {
		email: "",
		admin: Boolean,
		city: "",
		username: "",
		university: "",
		emailVerified: Boolean,
		nickName: "",
		major: "",
		mobilePhoneNumber: "",
		language: "",
		access: Boolean,
		gender: Number,
		province: "",
		graduation_date: "",
		avatarUrl: "",
		country: "",
		mobilePhoneVerified: Boolean,
		objectId: "",
		createdAt: "",
		updatedAt: ""
	},
	idAttribute: "ObjectId",
	urlRoot: "/api/users/user_profile"

})

export var UserCollection = Backbone.PageableCollection.extend({
	model: UserModel,
	url: '/api/users',
	parseState: function(res, queryParams, state, options) {
		return {
			totalRecords: res.total_entries,
			pageSize: res.per_page
		}
	},
	parseRecords: function(response) {
		return response.userInfo
	},
	state: {
		pageSize: null,
	}
})
