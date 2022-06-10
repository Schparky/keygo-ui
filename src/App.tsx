import './App.css'
import { getUser, User } from './data/user'
import Login from './Login'
import logo from './logo.svg'
import Profile from './Profile'

import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function App() {
	const [user, setUser] = useState<User | null>(null)

	useEffect(() => updateUser(), [])

	return (
		<div className="App">
			<header className="App-header">
				<nav
					style={{
						borderBottom: 'solid 1px',
						paddingBottom: '1rem',
					}}
				>
					<Link to="/invoices">Invoices</Link> | <Link to="/expenses">Expenses</Link>
				</nav>
				<Outlet />
				<div className="m-3">
					<Login />
				</div>
				<div>{user && <Profile user={user} />}</div>
			</header>
		</div>
	)

	function updateUser() {
		const f = async () => {
			setUser(await getUser())
		}
		f()
	}
}
