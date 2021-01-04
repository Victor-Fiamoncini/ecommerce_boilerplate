import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string
		colors: {
			primary: string
			secundary: string
			tertiary: string
			quartenary: string
			quinary: string
			senary: string
			white: string
			black: string
			background: string
			messages: {
				success: string
				error: string
				info: string
			}
		}
		fonts: {
			primary: string
			secundary: string
			tertiary: string
		}
	}
}
