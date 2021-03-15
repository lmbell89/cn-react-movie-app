import React, { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'

import { Api } from '../api'
import { Tile } from '../tile'
import { SearchPagination } from './searchPagination'
import styles from './searchResults.module.css'

export const SearchResults = (props) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [results, setResults] = useState(null)
    const [pageCount, setPageCount] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchApiData(currentPage)
    }, [props.searchParams])

    const fetchApiData = async (page) => { 
        if (!props.searchParams) {
            return
        }

        setLoading(true)

        let data
        const params = props.searchParams
        params.page = page

        if (props.searchType === "detailed") {
            data = await Api.getSearchResults(params)
        } else if (props.searchType === "basic") {
            data = await Api.getMovieByTitle(params)
        } else if (props.searchType === "similar") {
            data = await Api.getSimilarMovies(params.movieId, params.page)
        }

        if (!data || !data.totalItems) {
            setResults(
                <div className={styles.noResults}>
                    No results found
                </div>
            )           
        } else {
            setPageCount(data.pageCount)

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

            setResults(tiles)
            setLoading(false)
        }
    }

    const selectPage = (i) => {
        setResults(null)
        setCurrentPage(i)
        fetchApiData(i)
    }

    const spinner = (
        <Spinner 
            className={loading ? styles.spinner : styles.hidden} 
            animation="border" 
            variant="info"
        >
            <span className="sr-only">Loading...</span>
        </Spinner>
    )

    return (
        <div className={styles.container}>
            <div className={loading ? styles.hidden : styles.tileContainer}>
                {results}
            </div>            
            {spinner}
            <SearchPagination 
                pageCount={pageCount}
                currentPage={currentPage}
                onClick={selectPage}
            />
        </div>
    )
}