import React from 'react'
import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

import AppProvider from '../context/AppProvider'
import Header from '../components/header'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
	<AppProvider>
		<Header />
		<div className="container m-auto py-6">
			<Component {...pageProps} />
		</div>
	</AppProvider>
)

export default MyApp
