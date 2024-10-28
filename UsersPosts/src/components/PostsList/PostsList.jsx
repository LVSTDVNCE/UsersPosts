import React from 'react'
import PostListCard from '../PostsListCard/PostListCard'

const PostsList = ({ isOpen, userPosts }) => {
	return (
		<>{isOpen ? userPosts.map(post => <PostListCard post={post} />) : ''}</>
	)
}

export default PostsList
