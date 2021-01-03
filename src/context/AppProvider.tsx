import React from 'react'

import { ThemeProvider } from 'styled-components'

import defaultTheme from '../styles/themes/default'

const AppProvider: React.FC = ({ children }) => (
	<ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
)

export default AppProvider
