import React, { MouseEvent, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

import { useAuth } from '../context/AuthContext'

const Header: React.FC = () => {
	const { pathname } = useRouter()

	const { user, logoutUser } = useAuth()

	const handleLogoutFormSubmit = useCallback(
		(event: MouseEvent<HTMLAnchorElement>) => {
			event.preventDefault()

			logoutUser()
		},
		[logoutUser]
	)

	return (
		<div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
			<div className="flex-shrink-0">
				<img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
			</div>
			<div>
				<div className="text-xl font-medium text-black">ChitChat</div>
				<p className="text-gray-500">You have a new message!</p>
			</div>
		</div>
	)
}

export default Header
