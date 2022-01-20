import React from 'react'
import { User } from './data/user'

interface ProfileProps {
	user: User
}

export default function Profile({ user }: ProfileProps) {
	return (
		<div>
			<div>ID: {user.id}</div>
			<div>FirstName: {user.firstName}</div>
			<div>LastName: {user.lastName}</div>
			<div>Email: {user.email}</div>
			<div>AvatarURL: {user.avatarURL}</div>
			<div>Role: {user.role}</div>
			<div>CreatedAt: {user.createdAt}</div>
			<div>UpdatedAt: {user.updatedAt}</div>
		</div>
	)
}
