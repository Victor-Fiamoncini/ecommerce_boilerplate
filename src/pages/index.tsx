import React from 'react'
import Head from 'next/head'

import logo from '../assets/logo.png'

const Home: React.FC = () => {
	return (
		<div>
			<Head>
				<title>Hello</title>
			</Head>
			<main>
				<h1>Hello</h1>
				<img src={logo} alt="" />
			</main>
		</div>
	)
}

export default Home
