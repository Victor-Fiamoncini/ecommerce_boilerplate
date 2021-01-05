import React, { MouseEvent, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { FaLongArrowAltLeft } from 'react-icons/fa'

import { useAuth } from '../context/AuthContext'

import {
	HeaderContainer,
	GoBackToHomeLink,
	GuestAuthLinksContainer,
} from '../styles/components/header'

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
		<HeaderContainer>
			{pathname !== '/' && (
				<Link href="/">
					<GoBackToHomeLink>
						<FaLongArrowAltLeft size={26} />
					</GoBackToHomeLink>
				</Link>
			)}
			<Link href="/">
				<a>
					<h1>Ecommerce Boilerplate</h1>
				</a>
			</Link>
			<GuestAuthLinksContainer>
				{user.isAuthenticated ? (
					<>
						<Link href="/account">
							<a>{user.email}</a>
						</Link>
						<Link href="/">
							<a onClick={handleLogoutFormSubmit}>Logout</a>
						</Link>
					</>
				) : (
					<Link href="/login">
						<a>Login</a>
					</Link>
				)}
			</GuestAuthLinksContainer>
		</HeaderContainer>
	)
}

export default Header
