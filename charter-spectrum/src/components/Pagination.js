import React from 'react'

const Pagination = ({ postsPerPage, totalPosts }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <div className="pagination">
                <a href="#">&laquo;</a>
                {pageNumbers.map(number => (
                    <a href="!#" key={number}> {number}</a>
                ))}
                {/* <a href="#" onClick={(e) => trackPage(e, 1)} value={1} >1</a>
                <a className="active" onClick={(e) => trackPage(e, 2)} value={2} href="#">2</a>
                <a href="#" onClick={(e) => trackPage(e, 3)} value={3}>3</a>
                <a href="#" onClick={(e) => trackPage(e, 4)} value={4}>4</a>
                <a href="#" onClick={(e) => trackPage(e, 5)} value={5}>5</a>
                <a href="#" onClick={(e) => trackPage(e, 6)} value={6}>6</a> */}
                <a href="#" >&raquo;</a>
            </div>
        </div>
    )
}

export default Pagination;