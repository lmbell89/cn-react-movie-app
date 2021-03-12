import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

import { Api } from '../api'
import { Tile } from '../tile'
import styles from './searchResults.module.css'
import '../App.css'

export const SearchResults = (props) => {
    const [tiles, setTiles] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        fetchApiData(currentPage)
    }, [props.searchParams])

    const fetchApiData = async (page) => {
        let data
        let newTiles

        const params = props.searchParams
        params.page = page

        if (props.advanced) {
            data = await Api.getSearchResults(params)
        } else {
            data = await Api.getMovieByTitle(params)
        }

        if (!data) {
            setPageCount(0)
            newTiles = "No results found"            
        } else {
            setPageCount(data.pageCount)
            newTiles = data.results.map(movie => {
                return <Tile
                    key={movie.movieId}
                    title={movie.title} 
                    imgSrc={movie.imgSrc} 
                    voteAvg={movie.voteAvg} 
                    releaseDate={movie.releaseDate}
                    overview={movie.overview}
                />
            })
        }

        setTiles(newTiles)
    }

    const handlePageClick = (data) => {
        setCurrentPage(data.selected + 1)
        fetchApiData(data.selected + 1)
    }


    return (
        <div className={styles.container}>
            <div className={styles.tileContainer}>
                {tiles}
            </div>
                      
            <ReactPaginate 
                pageCount={pageCount} 
                pageRangeDisplayed={4} 
                marginPagesDisplayed={0} 
                onPageChange={handlePageClick}
                containerClassName="paginate"
                pageClassName="paginateButton"
                breakClassName="paginateButton"
                previousClassName="paginateButton"
                nextClassName="paginateNextButton"
                activeClassName="paginateActiveButton"
                pageLinkClassName="paginateAnchor"
                previousLinkClassName="paginateAnchor"
                nextLinkClassName="paginateAnchor"
                breakLinkClassName="paginateAnchor"
            />
        </div>
    )
}