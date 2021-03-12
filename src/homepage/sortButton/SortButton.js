import React from 'react'

import styles from './sortButton.module.css'

export const SortButton = (props) => {
    let text
    let className = props.selected ? styles.active : styles.button

    if (props.type === "popularity") {
        text = "Most Popular"
    } else if (props.type === "date") {
        text = "New Releases"
    } else if (props.type === "rating") {
        text = "Highest Rated"
    }

    return (
        <button className={className} onClick={() => props.onClick(props.type)}>{text}</button>
    )
}