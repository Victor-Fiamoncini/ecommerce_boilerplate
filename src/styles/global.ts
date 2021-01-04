import styled, { createGlobalStyle } from 'styled-components'
import { rem } from 'polished'

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: none;
		box-sizing: border-box;
	}

	body {
		background: ${props => props.theme.colors.background};
		color: ${props => props.theme.colors.primary};
		font-family: ${props => props.theme.fonts.primary} Arial, Helvetica, sans-serif;
		-webkit-font-smoothing: antialiased;
		::-webkit-scrollbar {
			width: 10px;
		}
		::-webkit-scrollbar-track {
			background: #f1f1f1;
		}
		::-webkit-scrollbar-thumb {
			background: ${props => props.theme.colors.primary};
		}
		::-webkit-scrollbar-thumb:hover {
			background: #555;
		}
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
		text-decoration: none;
	}
`

export const GuestContainer = styled.div`
	margin: 0 auto;
	max-width: 1240px;
	padding: 10px;
`
