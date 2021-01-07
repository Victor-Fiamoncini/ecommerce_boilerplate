import React, { useEffect } from 'react'
import Head from 'next/head'

import { useAuth } from '../context/AuthContext'
import { useOrder } from '../context/OrderContext'

import { GuestContainer } from '../styles/global'
import {
	AccountContainer,
	OrdersListContainer,
	OrdersList,
} from '../styles/pages/account'

const Account: React.FC = () => {
	const { user, getToken } = useAuth()
	const { orders, getOrders } = useOrder()

	useEffect(() => {
		async function getAuthOrders() {
			await getOrders((await getToken()) || '')
		}

		getAuthOrders()
	}, []) // eslint-disable-line

	return (
		<GuestContainer>
			<Head>
				<meta name="description" content="The account page, view your orders" />
				<title>Account - {user?.email}</title>
			</Head>
			<AccountContainer>
				<h2>Account</h2>
				<p>
					Logged as <strong>{user?.email}</strong>
				</p>
				<OrdersListContainer>
					<h3>Orders</h3>
					<OrdersList>
						{!!orders.length &&
							orders.map(order => <li key={order.id}>{order.product.name}</li>)}
					</OrdersList>
				</OrdersListContainer>
			</AccountContainer>
		</GuestContainer>
	)
}

export default Account
