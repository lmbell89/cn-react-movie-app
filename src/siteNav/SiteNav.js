import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export const SiteNav = () => {
    const [searchStr, setSearchStr] = useState("")
    const history = useHistory()

    const handleChange = (e) => {
        setSearchStr(e.target.value)
    }

    const handleSubmit = (event) => {
        history.push({
            pathname: '/search',
            state: { title: searchStr } 
        })
        event.preventDefault()
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="/">Movies App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">

                </Nav>
                <Form inline onSubmit={handleSubmit}>
                    <FormControl 
                        type="text" 
                        placeholder="Search" 
                        className="mr-sm-2" 
                        onChange={handleChange} 
                        value={searchStr} 
                    />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}