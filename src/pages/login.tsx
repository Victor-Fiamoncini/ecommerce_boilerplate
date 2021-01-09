import React, { FormEvent, useCallback, useState } from 'react'
import Head from 'next/head'

import { useAuth } from '../context/AuthContext'

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
		<div>
			<Head>
				<meta name="description" content="Login here to make your purchase" />
				<title>Login</title>
			</Head>
			<h2 className="mb-6 text-3xl text-center font-bold text-purple-600">
				Login
			</h2>
			<form onSubmit={handleLoginFormSubmit} className="text-center">
				<input
					type="email"
					name="email"
					placeholder="Email Address"
					value={email}
					onChange={event => setEmail(event.target.value)}
					className="py-2 px-4 text-lg font-semibold rounded-l-xl shadow-lg bg-gray-100"
				/>
				<button
					type="submit"
					className="w-32 p-2 text-lg font-semibold rounded-r-xl shadow-lg bg-purple-600 text-white"
				>
					Login
				</button>
			</form>
		</div>
	)
}

export default Login
