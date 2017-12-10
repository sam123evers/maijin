import Backbone from 'backbone'


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

	idAttribute: "objectId",
	urlRoot: "/api/users"
})

export var UserCollection = Backbone.Collection.extend({
	model: UserModel,
	url: '/api/users'
})