import React from 'react'
import PostListCard from '../PostsListCard/PostListCard'
import styles from './PostList.module.css'
import Heading from '../Heading/Heading'

const PostsList = ({ isOpen, userPosts }) => {
	return (
		<>
			{isOpen ? (
				<div className={styles.PostsList}>
					<Heading text={'Posts'} />
					{userPosts.map(post => (
						<PostListCard post={post} key={post.id} />
					))}
				</div>
			) : (
				''
			)}
		</>
	)
}

export default PostsList
