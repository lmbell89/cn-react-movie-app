import React, { useState } from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

import { SearchResults } from '../searchResults'

export const Homepage = () => {
    const [sortBy, setSortBy] = useState('popularity')

    const searchParams = {
        sort: sortBy,
        minRating: 7.5,
        minVotes: 200
    }

    const sortButtons = [
        { name: 'Most Popular', value: 'popularity' },
        { name: 'New Releases', value: 'date' },
        { name: 'Highest Rated', value: 'rating' },
      ];

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
                        onChange={(e) => setSortBy(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>

            <SearchResults searchParams={searchParams} searchType="detailed" />
        </>
    )
}