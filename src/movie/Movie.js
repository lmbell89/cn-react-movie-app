import React from 'react'
import { useLocation } from 'react-router-dom'

import styles from './movie.module.css'

export const Movie = () => {
    const location = useLocation()

    return (
        <div className={styles.container}>
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
    )
}