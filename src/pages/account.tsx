import React from 'react'
import Head from 'next/head'

import { GuestContainer } from '../styles/global'
import { AccountContainer } from '../styles/pages/account'

const Account: React.FC = () => {
	return (
		<GuestContainer>
			<Head>
				<meta name="description" content="The account page, view your orders" />
				<title>Account</title>
			</Head>
			<AccountContainer>
				<h2>Account</h2>
			</AccountContainer>
		</GuestContainer>
	)
}

export default Account
