import React, { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'
import Col from 'react-bootstrap/Col'

import { Api } from '../api'
import { Tile } from '../tile'
import { SearchPagination } from './searchPagination'
import styles from './searchResults.module.css'

export const SearchResults = (props) => {
    //const [currentPage, setCurrentPage] = useState(1)
    const [results, setResults] = useState(null)
    const [pageCount, setPageCount] = useState(0)
    const [loading, setLoading] = useState(false)
    const [noResults, setNoResults] = useState(false)

    useEffect(() => {
        fetchApiData(props.currentPage)
    }, [props.searchParams])


    const selectPage = (i) => {
        setResults(null)
        props.setCurrentPage(i)
        fetchApiData(i)
    }

    const fetchApiData = async (page) => { 
        if (!props.searchParams) {
            return
        }

        setLoading(true)

        let data
        const params = props.searchParams
        params.page = page

        if (props.searchParams.searchType === "detailed") {
            data = await Api.getSearchResults(params)
        } else if (props.searchParams.searchType === "basic") {
            data = await Api.getMovieByTitle(params)
        } else if (props.searchParams.searchType === "similar") {
            data = await Api.getSimilarMovies(params.movieId, params.page)
        }


        if (!data || !data.totalItems) {
            setNoResults(true)  
        } else {
            setPageCount(data.pageCount)
            setNoResults(false)

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
        }

        setLoading(false)
    }

    const alert = (
        <Col className="mx-auto" xs={12} sm={10} md={8} lg={6}>
            <Alert variant="dark" className="mx-auto">
                No results found.
            </Alert>
        </Col>
    )

    return (
        <div className={styles.container}>

            {noResults && !loading ? alert : null}

            <div className={loading || noResults ? styles.hidden : styles.tileContainer}>
                {results}
            </div>            

            <div className={loading || !results ? styles.hidden : null}>
                <SearchPagination 
                    pageCount={pageCount}
                    currentPage={props.currentPage}
                    onClick={selectPage}
                />
            </div>

            <Spinner 
                className={loading ? styles.spinner : styles.hidden} 
                animation="border" 
                variant="info"
            >
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}