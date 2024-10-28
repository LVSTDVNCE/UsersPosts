import React from 'react'
import PostListCard from '../PostsListCard/PostListCard'

const PostsList = ({ isOpen, userPosts }) => {
	return (
		<>
			{isOpen
				? userPosts.map(post => <PostListCard post={post} key={post.id} />)
				: ''}
		</>
	)
}

export default PostsList
