import React from 'react'

import { ThemeProvider } from './ThemeContext'
import { AuthProvider } from './AuthContext'

const AppProvider: React.FC = ({ children }) => (
	<ThemeProvider>
		<AuthProvider>{children}</AuthProvider>
	</ThemeProvider>
)

export default AppProvider
