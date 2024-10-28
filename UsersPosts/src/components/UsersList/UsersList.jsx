import React from 'react'
import UsersListCard from '../UsersListCard/UsersListCard'

const UsersList = ({ users, posts }) => {
	return (
		<>
			{users.map(user => (
				<UsersListCard user={user} key={user.id} posts={posts} />
			))}
		</>
	)
}

export default UsersList
