import React, { useState } from 'react'

import { SearchResults } from '../searchResults'
import { SortButton } from './sortButton/SortButton'
import styles from './homepage.module.css'

export const Homepage = (props) => {
    const [sortBy, setSortBy] = useState('popularity')

    const searchParams = {
        sort: sortBy,
        minRating: 7.5,
        minVotes: 200
    }

    return (
        <div>
            <div className={styles.sortButtons}>
                <SortButton onClick={setSortBy} type="popularity" selected={sortBy === "popularity"}/>
                <SortButton onClick={setSortBy} type="date" selected={sortBy === "date"}/>
                <SortButton onClick={setSortBy} type="rating" selected={sortBy === "rating"}/>
            </div>

            <SearchResults searchParams={searchParams} advanced={true} />
        </div>
    )
}