import { createGlobalStyle } from 'styled-components'
import { rem } from 'polished'

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: none;
		box-sizing: border-box;
	}

	body {
		background: ${props => props.theme.colors.primary};
		color: ${props => props.theme.colors.secundary};
		font-family: ${props => props.theme.fonts.primary} Arial, Helvetica, sans-serif;
		-webkit-font-smoothing: antialiased;
	}

	body,
	input,
	button {
		font-size: ${rem(16)};
	}

	button {
		cursor: pointer;
	}

	a {
		text-decoration: none;
	}

	ul,
	ol,
	li {
		list-style: none;
	}
`
