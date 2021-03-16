import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import { Api } from '../api'
import { SearchResults } from '../searchResults'
import styles from './movie.module.css'

export const Movie = () => {
    const [movieData, setMovieData] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)

    const movieId = useParams().id
    const history = useHistory()

    useEffect(() => {
        (async() => setMovieData(await Api.getMovieById(movieId)))()        
    }, [movieId])

    return (
        <>
            <div className={movieData ? styles.container : styles.hidden}>
                <Button 
                    onClick={() => history.goBack()} 
                    variant="dark"
                    className={styles.backButton}
                >
                    Back
                </Button>

                <img 
                    className={styles.image} 
                    src={movieData?.imgSrc} 
                    alt={`${movieData?.title} poster`}
                />
                <div className={styles.title}>{movieData?.title}</div>

                <div>
                    Genres: 
                    <span className={styles.genres}>
                        {movieData?.genres?.map(genre => genre.name).join(", ")}
                    </span>
                </div>

                <div>
                    <div>
                        Averate Rating:
                        <span className={styles.voteAvg}>
                            {movieData?.voteAvg}
                        </span>
                    </div>

                    <div className={styles.releaseDate}>
                        Release Date: {movieData?.releaseDate}
                    </div>
                </div>
                <div className={styles.overview}>{movieData?.overview}</div>
            </div>

            <h2 className={styles.similarFilms}>Similar Films</h2>

            <SearchResults 
                searchParams={{movieId: movieId, searchType: "similar"}} 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </>

    )
}