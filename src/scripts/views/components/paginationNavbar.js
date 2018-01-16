import React from 'react'
import Backbone from 'backbone'
import ACTIONS from '../../actions'
import STORE from '../../store'


class PaginationNavbar extends React.Component {
    
    render() {
        var pState = this.props.paginationState;
        var pagesArray = []
        var pagesArrOutput = []
        var startPage, endPage;

        
        for (var i = 1; i <= pState.totalPages; i++) {
            pagesArray.push(i)
        }
        if (pState.currentPage <= 6) {
            pagesArrOutput = pagesArray.slice(0, 10)
        } else if (pState.currentPage + 4 >= pState.totalPages) {
            pagesArrOutput = pagesArray.slice(-9)
        } else if (pState.currentPage > 6){
            pagesArrOutput = pagesArray.slice((pState.currentPage - 5),(pState.currentPage + 5));
            
        }
           
        
        console.log(pState)

		return (
			<div className="pagination-navbar-container">
				<ul className="pagination">
					<li className={pState.currentPage === 1 ? "page-item disabled" : "page-item"}>
                        <a className="page-link" onClick={ACTIONS.firstPageButtonClick}>First</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" onClick={ACTIONS.previousPageButtonClick}>Previous</a>
                    </li>

                    {pagesArrOutput.map((page, index) =>  
                        
                        <li key={index + 1} className={pState.currentPage === page ? "page-item active" : "page-item"}>
                            <a className="page-link" onClick={() => ACTIONS.getPageByPageNumber(page)}>{page}</a>
                        </li>
                    )}
                
                    <li className="page-item">
                        <a className="page-link" onClick={ACTIONS.nextPageButtonClick}>Next</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" onClick={ACTIONS.lastPageButtonClick}>Last</a>
                    </li>
                </ul>
			</div>
		)
	}
}
                    

export default PaginationNavbar