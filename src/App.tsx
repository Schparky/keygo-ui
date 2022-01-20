import './App.css'
import { getUser, User } from './data/user'
import Login from './Login'
import Profile from './Profile'
import { useEffect, useState } from 'react'

export default function App() {
	const [user, setUser] = useState<User | null>(null)

	useEffect(() => updateUser, [])

	return (
		<>
			<div>
				<Login />
			</div>
			<div>{user && <Profile user={user} />}</div>
		</>
	)

	function updateUser() {
		const f = async () => {
			setUser(await getUser())
		}
		f()
	}
}
