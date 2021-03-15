import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export const SiteNav = (props) => {
    const [searchStr, setSearchStr] = useState("")

    const history = useHistory()

    const handleChange = (e) => {
        setSearchStr(e.target.value)
    }

    const handleSubmit = (event) => {
        props.handleParams({title: searchStr, searchType: "basic"})
        event.preventDefault()
        history.push("/search")        
    }

    const resetParams = () => {
        props.handleParams({
            searchType: "detailed",
            sort: "popularity",
            minRating: 7.5,
            minVotes: 200
        })
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand as={Link} to="/" onClick={resetParams}>
                Movies App
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/" onClick={resetParams}>
                            Home
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/search">
                            Find Movies
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                <Form inline onSubmit={handleSubmit}>
                    <FormControl 
                        type="text" 
                        placeholder="Search" 
                        className="mr-sm-2" 
                        onChange={handleChange} 
                        value={searchStr} 
                    />
                    <Button type="submit" variant="outline-primary">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}