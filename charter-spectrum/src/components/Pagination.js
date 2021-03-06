import React from 'react'

const Pagination = ({ postsPerPage, currentPage, logic, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    if ( logic.length < 10 ) paginate(1)
    
    return (
            <div className="pagination">
                {/* <a onClick={() => paginate(1)}> &laquo; </a> */}
                {pageNumbers.map(number => (
                    <a key={number} className={ number === currentPage  ? "active" : "nonactive" } onClick={() => paginate(number)}> {number}</a>
                ))}
                {/* <a onClick={() => paginate(4)}>&raquo;</a> */}
            </div>
    )
}

export default Pagination;