import styled from 'styled-components'
import { rem } from 'polished'

export const HeaderContainer = styled.header`
	position: relative;
	width: 100%;
	display: block;
	margin: 0 auto 10px;
	text-align: center;
	background: ${props => props.theme.colors.primary};
	padding: 18px 12px;
	> a {
		display: inline-block;
	}
	h1 {
		color: ${props => props.theme.colors.white};
		font-size: ${rem(30)};
	}
`

export const GoBackToHomeLink = styled.a`
	position: absolute;
	top: 22px;
	left: 22px;
	color: ${props => props.theme.colors.white};
	cursor: pointer;
`

export const GuestAuthLinksContainer = styled.div`
	position: absolute;
	top: 26px;
	right: 22px;
	a {
		display: inline-block;
		color: ${props => props.theme.colors.white};
		font-weight: 600;
		&:not(:last-of-type) {
			margin-right: 16px;
		}
	}
`
