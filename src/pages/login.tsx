import React, { FormEvent, useCallback, useState } from 'react'
import Head from 'next/head'

import { useAuth } from '../context/AuthContext'

import { GuestContainer } from '../styles/global'
import { LoginContainer } from '../styles/pages/login'

const Login: React.FC = () => {
	const [email, setEmail] = useState('')

	const { loginUser } = useAuth()

	const handleLoginFormSubmit = useCallback(
		(event: FormEvent<HTMLFormElement>) => {
			event.preventDefault()

			loginUser(email)
		},
		[loginUser, email]
	)

	return (
		<GuestContainer>
			<Head>
				<meta name="description" content="Login here to make your purchase" />
				<title>Login</title>
			</Head>
			<LoginContainer>
				<h2>Login</h2>
				<form onSubmit={handleLoginFormSubmit}>
					<input
						type="email"
						name="email"
						placeholder="Email Address"
						value={email}
						onChange={event => setEmail(event.target.value)}
					/>
					<button type="submit">Login</button>
				</form>
			</LoginContainer>
		</GuestContainer>
	)
}

export default Login
