import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import { SearchResults } from '../searchResults'
import { SearchForm } from './searchForm'
import styles from './search.module.css'

export const Search = (props) => {
    const history = useHistory()
    const [noResults, setNoResults] = useState(
        history.action !== "POP" && 
        props.searchParams.searchType !== "basic"
    )

    const handleSearch = () => {
        setNoResults(false)
        toggleButton.current.click()
    }

    const toggleButton = useRef()

    return (
        <>
            <Accordion defaultActiveKey={noResults ? "0" : null}>
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
                                handleSearch={handleSearch}
                                handleParams={props.handleParams}
                                searchParams={props.searchParams}
                            />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>


            <div className={noResults ? styles.hidden : null}>
                <SearchResults 
                    searchParams={props.searchParams}
                    currentPage={props.currentPage}
                    setCurrentPage={props.setCurrentPage}
                />
            </div>

        </>
    )
}