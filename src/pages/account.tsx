import React, { FormEvent, useCallback, useState } from 'react'
import Head from 'next/head'

import { useAuth } from '../context/AuthContext'

import { GuestContainer } from '../styles/global'
import { LoginContainer } from '../styles/pages/login'

const Account: React.FC = () => {
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
				<meta name="description" content="The account page, view your orders" />
				<title>Account</title>
			</Head>
		</GuestContainer>
	)
}

export default Account
