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

	idAttribute: "objectId",
	urlRoot: "/api/users"
})

export var UserCollection = Backbone.PageableCollection.extend({
	model: UserModel,
	url: '/api/users',
	state: {
		firstPage: 1,
		lastPage: null,
		currentPage: null,
		pageSize: 30,
		totalPages: null,
		totalRecords: null,
		sortKey: null,
		order: 1
	},
	queryParams: {
		currentPage: "page",
      	pageSize: "per_page",
      	totalPages: "total_pages",
      	totalRecords: "total_entries",
      	sortKey: "sort_by",
      	order: "order",
      	directions: {
        	"-1": "asc",
        	"1": "desc"
      }
	}

})