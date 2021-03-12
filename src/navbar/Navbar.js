import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import styles from './navbar.module.css'

export const Navbar = () => {
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
        <nav className={styles.nav}>
            <div className={styles.container}>
                <Link to="/">
                    <h1 className={styles.appTitle}>Movies App</h1>
                </Link>

                <form className={styles.search} onSubmit={handleSubmit}>
                    <input 
                        className={styles.searchInput} 
                        type="text" 
                        onChange={handleChange} 
                        value={searchStr} 
                    />

                    <input 
                        type="submit" 
                        className={styles.searchButton} 
                        value="&#128269;" 
                    />
                </form>
            </div>
        </nav>
    )
}