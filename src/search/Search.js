import React, { useState, useRef } from 'react'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import { SearchResults } from '../searchResults'
import { SearchForm } from './searchForm'
import styles from './search.module.css'

export const Search = (props) => {
    const [firstVisit, setFirstVisit] = useState(props.searchParams.searchType !== "basic")

    const toggleButton = useRef()
    const toggleAccordion = () => {
        setFirstVisit(false)
        toggleButton.current.click()
    }

    return (
        <>
            <Accordion defaultActiveKey={firstVisit ? "0" : null}>
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
                                handleParams={props.handleParams}
                            />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>


            <div className={firstVisit ? styles.hidden : null}>
                <SearchResults 
                    searchParams={props.searchParams}
                    currentPage={props.currentPage}
                    setCurrentPage={props.setCurrentPage}
                />
            </div>

        </>
    )
}