import React from 'react'

import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'

import defaultTheme from '../../styles/themes/default'

export const ThemeProvider: React.FC = ({ children }) => {
	return (
		<StyledComponentsThemeProvider theme={defaultTheme}>
			{children}
		</StyledComponentsThemeProvider>
	)
}
