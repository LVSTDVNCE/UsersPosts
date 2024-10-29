import React from 'react'
import styles from './Button.module.css'

const Button = ({ handleClick, isOpen }) => {
	return (
		<button className={styles.btn} onClick={handleClick}>
			{isOpen ? 'Close posts' : 'Watch posts'}
		</button>
	)
}

export default Button
