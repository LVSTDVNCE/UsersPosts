import React from 'react'
import UsersListCard from '../UsersListCard/UsersListCard'
import styles from './UsersList.module.css'

const UsersList = ({ users, posts }) => {
	return (
		<div className={styles.UsersList}>
			{users.map(user => (
				<UsersListCard user={user} key={user.id} posts={posts} />
			))}
		</div>
	)
}

export default UsersList
