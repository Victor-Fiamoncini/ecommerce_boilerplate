import React, { MouseEvent, useCallback } from 'react'
import Link from 'next/link'
import { FaSignInAlt, FaSignOutAlt, FaUserAlt } from 'react-icons/fa'

import { useAuth } from '../context/AuthContext'

const Header: React.FC = () => {
	const { user, logoutUser } = useAuth()

	const handleLogoutFormSubmit = useCallback(
		async (event: MouseEvent<HTMLAnchorElement>) => {
			event.preventDefault()

			await logoutUser()
		},
		[logoutUser]
	)

	return (
		<header className="p-4 bg-purple-600">
			<div className="container m-auto">
				<div className="flex justify-between align-middle">
					<Link href="/">
						<a
							className="text-center text-3xl font-bold text-white"
							title="Ecommerce Boilerplate"
						>
							<h1>Ecommerce Boilerplate</h1>
						</a>
					</Link>
					<div className="flex justify-center align-middle mt-1">
						{user?.isAuthenticated ? (
							<>
								<Link href="/account">
									<a className="mr-6 text-white" title={user?.email}>
										<FaUserAlt size={22} />
									</a>
								</Link>
								<Link href="/">
									<a
										className="text-white"
										onClick={handleLogoutFormSubmit}
										title="Logout"
									>
										<FaSignOutAlt size={22} />
									</a>
								</Link>
							</>
						) : (
							<Link href="/login">
								<a className="text-white" title="Login">
									<FaSignInAlt size={22} />
								</a>
							</Link>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
