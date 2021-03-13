import React, { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'

import { Api } from '../api'
import { Tile } from '../tile'
import { SearchPagination } from './searchPagination'
import styles from './searchResults.module.css'

export const SearchResults = (props) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [results, setResults] = useState(null)    

    useEffect(() => {
        fetchApiData(currentPage)
    }, [props.searchParams])



    const fetchApiData = async (page) => {
        let data
        const params = props.searchParams
        params.page = page

        if (props.searchType === "detailed") {
            data = await Api.getSearchResults(params)
        } else if (props.searchType === "basic") {
            data = await Api.getMovieByTitle(params)
        } else {
            data = await Api.getSimilarMovies(params.movieId, params.page)
        }


        if (!data || !data.totalItems) {
            setResults("No results found")           
        } else {
            const tiles = data.results.map(movie => {
                return <Tile
                    key={movie.movieId}
                    movieId={movie.movieId}
                    title={movie.title} 
                    imgSrc={movie.imgSrc} 
                    voteAvg={movie.voteAvg} 
                    releaseDate={movie.releaseDate}
                    overview={movie.overview}
                />
            })

            const selectPage = (i) => {
                setResults(null)
                setCurrentPage(i)
                fetchApiData(i)
            }

            const pagination = (
                <SearchPagination 
                    pageCount={data.pageCount}
                    currentPage={currentPage}
                    onClick={selectPage}
                />
            )

            setResults(
                <>
                    <div className={styles.tileContainer}>
                        {tiles}
                    </div>                    
                    {pagination}
                </>
            )
        }
    }

    const spinner = (
        <Spinner 
            className={styles.spinner} 
            animation="border" 
            variant="info"
        >
            <span className="sr-only">Loading...</span>
        </Spinner>
    )

    return (
        <div className={styles.container}>
            {results || spinner}
        </div>
    )
}