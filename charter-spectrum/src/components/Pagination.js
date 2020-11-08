import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <div className="pagination">
                <a href="#">&laquo;</a>
                {pageNumbers.map(number => (
                    <a href="!#" key={number} onClick={() => paginate(number)}> {number}</a>
                ))}
                <a href="#" >&raquo;</a>
            </div>
        </div>
    )
}

export default Pagination;