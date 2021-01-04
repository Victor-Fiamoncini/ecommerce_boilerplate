import styled from 'styled-components'
import { rem } from 'polished'

export const ProductItemContainer = styled.section`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	h1 {
		margin-bottom: 22px;
	}
`

export const ProductItem = styled.li`
	display: block;
	background: ${props => props.theme.colors.white};
	border-radius: 22px;
	padding: 16px;
	text-align: center;
	width: 300px;
	img {
		border-radius: 22px;
		margin-bottom: 10px;
		max-height: 160px;
		width: 100%;
	}
	strong {
		display: block;
		color: ${props => props.theme.colors.secundary};
		font-size: ${rem(22)};
		margin-bottom: 10px;
	}
	p {
		font-weight: 500;
		font-size: ${rem(16)};
		line-height: 1.2;
	}
`