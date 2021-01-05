import React from 'react'
import './Pagination.css';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="container-pagination">
            {pageNumbers.map(number => (
                <a key={number} onClick={() => paginate(number)} href="#" className="page-link">
                    {number}
                </a>
            ))}
            <div className="bar"></div>
        </div>
    )
}

export default Pagination;