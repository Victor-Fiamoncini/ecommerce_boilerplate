import React from 'react'

import { ThemeProvider } from './ThemeContext'
import { AuthProvider } from './AuthContext'
import { OrderProvider } from './OrderContext'

const AppProvider: React.FC = ({ children }) => (
	<ThemeProvider>
		<AuthProvider>
			<OrderProvider>{children}</OrderProvider>
		</AuthProvider>
	</ThemeProvider>
)

export default AppProvider
