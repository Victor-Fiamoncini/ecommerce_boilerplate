import React from 'react'

import { ThemeProvider } from './ThemeContext'

const AppProvider: React.FC = ({ children }) => {
	return <ThemeProvider>{children}</ThemeProvider>
}

export default AppProvider
