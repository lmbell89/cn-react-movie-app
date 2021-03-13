import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { SearchResults } from '../searchResults'

export const Search = (props) => {
    // const [advancedParams, setAdvancedParams] = useState(null)
    // const location = useLocation()

    // const params = advancedParams || location.state.title
    // const advanced = advancedParams !== null

    const location = useLocation()

    const params = { title: location.state?.title } || { title: "" }
    
    return (
        <SearchResults searchParams={params} searchType="basic" />
    )
}