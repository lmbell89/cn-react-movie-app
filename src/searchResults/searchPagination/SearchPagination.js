import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

export const SearchPagination = (props) => {
    const min = Math.max(1, props.currentPage - 2)
    const max = Math.min(props.pageCount, min + 4)
    
    let items = [
        <Pagination.Prev onClick={() => props.onClick(props.currentPage - 1)}>
            Previous
        </Pagination.Prev>
    ]

    for (let i = min; i < max + 1; i++) {
        items.push(
            <Pagination.Item 
                onClick={() => props.onClick(i)} 
                active={props.currentPage === i}
            >
                {i}
            </Pagination.Item>
        )
    }        
    items.push(
        <Pagination.Next onClick={() => props.onClick(props.currentPage + 1)}>
            Next
        </Pagination.Next>
    )

    return (
        <Pagination className="justify-content-center">
            {items}
        </Pagination>
    )
}