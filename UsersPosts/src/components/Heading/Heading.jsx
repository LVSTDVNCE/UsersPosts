import React from 'react'
import styles from './Heading.module.css'

const Heading = ({ text }) => {
	return <h1 className={styles.heading}>{text}</h1>
}

export default Heading
