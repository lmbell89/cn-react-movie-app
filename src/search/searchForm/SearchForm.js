import React, { useState } from 'react'
import Form  from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

export const SearchForm = (props) => {
    const [minRating, setMinRating] = useState(7.5)
    const [year, setYear] = useState(2010)
    const [dateFilter, setDateFilter] = useState("after")
    const [genre, setGenre] = useState("any")
    const [foreign, setForeign] = useState("false")
    const [adult, setAdult] = useState("false")
    const [sort, setSort] = useState("popularity")
    const [valid, setValid] = useState(true)

    const handleSubmit = (event) => {
        event.preventDefault()
        event.stopPropagation()

        const form = event.currentTarget
        if (form.checkValidity() === false) {            
            return
        }

        props.toggleAccordion()

        const params = {
            sort,
            adult: adult === "true",
            minRating,
            englishOnly: foreign !== "true"
        }

        if (dateFilter === "before") {
            params.latestDate = `${year - 1}-12-31`
        } else if (dateFilter === "after") {
            params.earliestDate = `${+year + 1}-01-01`
        } else if (dateFilter === "during") {
            params.year = year
        }

        if (genre !== "any") {
            params.genre = genre
        }

        setValid(true)
        props.setAdvancedParams(params)   
    }

    console.log(props)

    const genreOptions = props.genres.map(genre => {
        return <option value={genre.id}>{genre.name}</option>
    })

    return (
        <Col className="mx-auto" xs={12} sm={10} md={8} lg={6}>
            <Form noValidate validated={valid} onSubmit={handleSubmit}>
                <Form.Group controlId="rating">
                    <Form.Label>Minimum Rating</Form.Label>

                    <Form.Control 
                        type="range" 
                        min={0}
                        max={10}
                        step="0.5"
                        value={minRating} 
                        onChange={e => setMinRating(e.target.value)}
                    />

                    <Form.Control
                        type="number" 
                        min={0} 
                        max={10} 
                        step="0.1"
                        value={minRating}
                        onChange={e => setMinRating(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Value must be between 0 and 10.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="releaseYear">
                        <Form.Label>Release Year</Form.Label>
                        <Form.Control 
                            type="number"
                            value={year} 
                            onChange={e => setYear(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="yearFilterType">
                        <Form.Label>Filter Type</Form.Label>
                        <Form.Control 
                            as="select" 
                            value={dateFilter} 
                            onChange={e => setDateFilter(e.target.value)}
                        >
                            <option value="before">Earlier Than</option>
                            <option value="during">During</option>
                            <option value="after">Later Than</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="genre">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control 
                        as="select" 
                        value={genre} 
                        onChange={e => setGenre(e.target.value)}
                    >
                        <option value="any">Any</option>
                        {genreOptions}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="sortBy">
                    <Form.Label>Include Foreign Language Films</Form.Label>
                    <Form.Control 
                        as="select" 
                        value={foreign} 
                        onChange={e => setForeign(e.target.value)}
                    >
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="sortBy">
                    <Form.Label>Include Adult Films</Form.Label>
                    <Form.Control 
                        as="select" 
                        value={adult} 
                        onChange={e => setAdult(e.target.value)}
                    >
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="sortBy">
                    <Form.Label>Sort By</Form.Label>
                    <Form.Control 
                        as="select" 
                        value={sort} 
                        onChange={e => setSort(e.target.value)}
                    >
                        <option value="popularity">Popularity</option>
                        <option value="date">Release Date</option>
                        <option value="rating">Average Vote</option>
                    </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Col>

    )
}