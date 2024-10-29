import React, { useState } from 'react'
import PostsList from '../PostsList/PostsList'
import Button from '../Button/Button'
import styles from './UsersListCard.module.css'

const UsersListCard = ({ user, posts }) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	const userPosts = posts.filter(post => user.id == post.userId)

	return (
		<div key={user.id} className={styles.Card}>
			<div className={styles.CardAvatar}>{user.name[0]}</div>
			<div className={styles.CardName}>{user.name}</div>
			<div className={styles.CardEmail}>{user.email}</div>
			<Button handleClick={handleClick} isOpen={isOpen} />
			<PostsList isOpen={isOpen} userPosts={userPosts} />
		</div>
	)
}

export default UsersListCard
