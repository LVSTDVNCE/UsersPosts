import { useEffect, useState } from 'react'
import './App.css'
import UsersList from './components/UsersList/UsersList'

function App() {
	const [users, setUsers] = useState([])
	const [posts, setPosts] = useState([])

	const fetchUsers = async () => {
		try {
			let response = await fetch('https://jsonplaceholder.typicode.com/users')
			let responseUsers = await response.json()
			setUsers(responseUsers)
		} catch (error) {
			console.log(error)
		}
	}

	const fetchPosts = async () => {
		try {
			let response = await fetch('https://jsonplaceholder.typicode.com/posts')
			let responsePosts = await response.json()
			setPosts(responsePosts)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchUsers()
		fetchPosts()
	}, [])

	return <UsersList users={users} posts={posts} />
}

export default App
