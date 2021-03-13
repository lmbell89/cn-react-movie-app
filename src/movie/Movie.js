import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import { SearchResults } from '../searchResults'
import styles from './movie.module.css'

export const Movie = () => {
    const location = useLocation()
    const history = useHistory()

    return (
        <>
            <div className={styles.container}>
                <Button 
                    onClick={() => history.goBack()} 
                    variant="outline-dark"
                    className={styles.backButton}
                >
                    Back
                </Button>

                <img 
                    className={styles.image} 
                    src={location.state.imgSrc} 
                    alt={`${location.state.title} poster`}
                />
                <div className={styles.title}>{location.state.title}</div>            
                <div>
                    <div>
                        Averate Rating:
                        <span className={styles.voteAvg}>
                            {location.state.voteAvg}
                        </span>
                    </div>

                    <div className={styles.releaseDate}>
                        Release Date: {location.state.releaseDate}
                    </div>
                </div>
                <div className={styles.overview}>{location.state.overview}</div>
            </div>

            <h2 className={styles.similarFilms}>Similar Films</h2>

            <SearchResults 
                searchParams={{movieId: location.state.movieId}} 
                searchType="detailed" 
            />
        </>

    )
}