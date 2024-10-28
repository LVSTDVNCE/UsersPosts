import React, { useState } from 'react'
import PostsList from '../PostsList/PostsList'

const UsersListCard = ({ user, posts }) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}

	const userPosts = posts.filter(post => user.id == post.userId)

	return (
		<div key={user.id}>
			<div>{user.name}</div>
			<div>{user.email}</div>
			<button onClick={handleClick}>Watch posts</button>
			<PostsList isOpen={isOpen} userPosts={userPosts} />
		</div>
	)
}

export default UsersListCard
