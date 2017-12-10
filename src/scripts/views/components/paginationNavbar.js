import React from 'react'
import Backbone from 'backbone'
import ACTIONS from '../../actions.js'




class PaginationNavbar extends React.Component {
	render() {
		return (
			<div>
				<button onClick={ACTIONS.previousPageButtonClick}>previous page</button>
				<button onClick={ACTIONS.nextPageButtonClick}>next page</button>
			</div>
		)
	}
}

export default PaginationNavbar

