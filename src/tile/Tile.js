import React from 'react'
import { Link } from 'react-router-dom'

import styles from './tile.module.css'

export const Tile = (props) => {
    return (
        <Link 
            className={styles.tile} 
            to={{
                pathname: `/movie/${props.movieId}`,
                state: {
                    title: props.title,
                    imgSrc: props.imgSrc,
                    voteAvg: props.voteAvg,
                    releaseDate: props.releaseDate,
                    overview: props.overview
                }
            }}        
        >
            <img className={styles.image} src={props.imgSrc} alt={`${props.title} poster`}></img>
            <div className={styles.info}>
                <div className={styles.title}>{props.title}</div>
                <div className={styles.subText}>
                    <span className={styles.rating}>{props.voteAvg}</span>
                    <span>{props.releaseDate?.substr(0, 4)}</span>
                </div>
            </div>
        </Link>
    )
}