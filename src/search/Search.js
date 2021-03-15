import React, { useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import { SearchResults } from '../searchResults'
import { SearchForm } from './searchForm'

export const Search = (props) => {
    const [advancedParams, setAdvancedParams] = useState(null)

    const location = useLocation()

    const searchType = advancedParams !== null ? "detailed" : "basic"
    const toggleButton = useRef()
    const toggleAccordion = () => toggleButton.current.click()

    let params
    if (advancedParams) {
        params = advancedParams
    } else if (location.state?.title) {
        params = { title: location.state.title }
    }

    return (
        <>
            <Accordion defaultActiveKey={location.state || "0"}>
                <Card bg="secondary">
                    <Card.Header>
                        <Accordion.Toggle 
                            as={Button} 
                            variant="primary" 
                            eventKey="0"
                            ref={toggleButton}
                        >
                            Advanced Search
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <SearchForm
                                genres={props.genres}
                                toggleAccordion={toggleAccordion}
                                setAdvancedParams={setAdvancedParams}
                            />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <SearchResults searchParams={params} searchType={searchType} />
        </>        
    )
}