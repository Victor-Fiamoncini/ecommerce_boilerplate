import styled from 'styled-components'
import { rem } from 'polished'

export const ProductsListContainer = styled.section`
	text-align: center;
	h2 {
		font-size: ${rem(28)};
		margin-bottom: 22px;
	}
`

export const ProductsList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const ProductListItem = styled.li`
	display: block;
	background: ${props => props.theme.colors.white};
	border-radius: 22px;
	padding: 16px;
	text-align: center;
	width: 300px;
	margin: 0 12px 12px 0;
	transition: transform 0.3s;
	&:hover {
		transform: translateY(-2px);
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
