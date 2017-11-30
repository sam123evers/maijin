import React from 'react'

class CategorySidebar extends React.Component {
	render() {
		return(
			<div className="category-sidebar">
				<h3 id="refine-search">Refine Search</h3>
              	<div className="the-categories">
                	<a><p>business</p></a>
                	<a><p>chemistry</p></a>
                	<a><p>these are</p></a>
                	<a><p>links that</p></a>
                	<a><p>could refine</p></a>
                	<a><p>the search</p></a>
                	<a><p>parameters</p></a>
                	<a><p>geophysics</p></a>
                	<a><p>political science</p></a>
              	</div>
        	</div>
			
		)
	}
}

export default CategorySidebar