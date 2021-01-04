import styled from 'styled-components'
import { rem } from 'polished'

export const ProductsList = styled.ul`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	h1 {
		margin-bottom: 22px;
	}
`

export const ProductListItem = styled.li`
	display: block;
	background: ${props => props.theme.colors.white};
	border-radius: 22px;
	padding: 16px;
	text-align: center;
	width: 300px;
	&:not(:last-of-type) {
		margin-bottom: 16px;
	}
	img {
		border-radius: 22px;
		margin-bottom: 10px;
		max-height: 160px;
		width: 100%;
	}
	p {
		font-weight: 600;
		font-size: ${rem(18)};
		margin-bottom: 10px;
	}
	strong {
		color: ${props => props.theme.colors.secundary};
		font-size: ${rem(18)};
	}
`
