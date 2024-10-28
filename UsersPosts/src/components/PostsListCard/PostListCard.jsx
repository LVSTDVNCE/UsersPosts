import React from 'react'

const PostListCard = ({ post }) => {
	return <div key={post.id}>{post.title}</div>
}

export default PostListCard
