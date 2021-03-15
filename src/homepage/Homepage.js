import React, { useState } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

import { SearchResults } from '../searchResults'

export const Homepage = (props) => {
    const [sortBy, setSortBy] = useState('popularity')

    const sortButtons = [
        { name: 'Most Popular', value: 'popularity' },
        { name: 'New Releases', value: 'date' },
        { name: 'Highest Rated', value: 'rating' },
    ]

    const handleChange = e => {
        const searchParams = {
            searchType: "detailed",
            sort: e.currentTarget.value,
            minRating: 7.5,
            minVotes: 200
        }

        setSortBy(e.currentTarget.value)
        props.handleParams(searchParams)
    }

    return (
        <>
            <ButtonGroup toggle className="mt-3">
                {sortButtons.map((radio, i) => (
                    <ToggleButton
                        key={i}
                        type="radio"
                        variant="primary"
                        name="radio"
                        value={radio.value}
                        checked={sortBy === radio.value}
                        onChange={handleChange}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>

            <SearchResults 
                searchParams={props.searchParams} 
                searchType="detailed" 
                currentPage={props.currentPage}
                setCurrentPage={props.setCurrentPage}
            />
        </>
    )
}