import React from 'react'
import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global'

import AppProvider from '../context/AppProvider'
import Header from '../components/header'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<AppProvider>
			<Header />
			<Component {...pageProps} />
			<GlobalStyle />
		</AppProvider>
	)
}

export default MyApp
