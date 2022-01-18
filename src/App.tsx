import './App.css'
import { getUser, User } from './data/user'
import Login from './Login'
import Profile from './Profile'
import { useEffect, useState } from 'react'

export default function App() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => { getUser().then(data => setUser(data)) }, [user])

  return (
    <>
    <div>
      <Login />
    </div>
    <div>
      {user && <Profile user={user} /> }
    </div>
    </>
  )
}