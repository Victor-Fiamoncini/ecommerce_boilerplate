import React from 'react'
import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global'

import AppProvider from '../context/AppProvider'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<AppProvider>
			<Component {...pageProps} />
			<GlobalStyle />
		</AppProvider>
	)
}

export default MyApp
