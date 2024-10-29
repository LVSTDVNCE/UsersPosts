import React from 'react'
import styles from './PostsListCard.module.css'

const PostListCard = ({ post }) => {
	return (
		<div key={post.id} className={styles.Card}>
			<h2 className={styles.CardHeading}>{post.title}:</h2>
			<div className={styles.CardBody}>{post.body}.</div>
		</div>
	)
}

export default PostListCard
