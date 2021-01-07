/* eslint-disable indent */
import styled from 'styled-components'
import { rem } from 'polished'

interface IOrderListItemProps {
	paid: boolean
}

export const AccountContainer = styled.section`
	text-align: center;
	h2 {
		font-size: ${rem(28)};
		margin-bottom: 22px;
	}
	> p {
		font-size: ${rem(18)};
		margin-bottom: 32px;
		strong {
			color: ${props => props.theme.colors.secundary};
		}
	}
`

export const OrdersListContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	h3 {
		font-size: ${rem(22)};
		margin-bottom: 22px;
	}
`

export const OrdersList = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const OrdersListItem = styled.li<IOrderListItemProps>`
	background: ${props => props.theme.colors.white};
	border-radius: 22px;
	padding: 16px;
	font-weight: 600;
	font-size: ${rem(18)};
	&:not(:last-of-type) {
		margin-bottom: 12px;
	}
	header {
		margin-bottom: 10px;
	}
	div {
		display: flex;
		justify-content: space-around;
		margin-bottom: 10px;
		strong {
			color: ${props => props.theme.colors.secundary};
		}
	}
	> p {
		display: inline-block;
		color: ${props => props.theme.colors.white};
		padding: 4px 12px;
		border-radius: 22px;
		background: ${({ paid, theme }) => {
			return paid ? theme.colors.payment.paid : theme.colors.payment.unpaid
		}};
	}
`
