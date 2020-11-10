import React from 'react'

const Pagination = ({ postsPerPage, currentPage, logic, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

   // let trueOrFalse = logic.length > 0 && number === currentPage
                        // console.log(trueOrFalse)

    return (
            <div className="pagination">
                {/* <a>&laquo;</a> */}
                {pageNumbers.map(number => (
                     
                    <a key={number} className={number === currentPage ? "active" : 1} onClick={() => paginate(number)}> {number}</a>
                ))}
                {/* <a>&raquo;</a> */}
            </div>
    )
}

export default Pagination;