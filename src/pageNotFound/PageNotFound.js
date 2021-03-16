import React from 'react'
import { Link } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

export const PageNotFound = () => {
    return (
        <Col className="mx-auto" xs={12} sm={10} md={8} lg={6}>
            <Alert variant="warning" className="mt-4">
                <Alert.Heading>Page not found</Alert.Heading>
                <p>
                    The page you're looking for doesn't exist. 
                    Check the address or head back to the home page.
                </p>
                <hr/>
                <p className="mb-0">
                    <Link to="/">
                        <Button>Go to Homepage</Button>
                    </Link>
                </p>
            </Alert>
        </Col>
    )
}