import React, { useEffect } from 'react'
import Head from 'next/head'

import { useAuth } from '../context/AuthContext'
import { useOrder } from '../context/OrderContext'

const Account: React.FC = () => {
	const { user, getToken } = useAuth()
	const { orders, getOrders } = useOrder()

	useEffect(() => {
		async function getAuthOrders() {
			const authToken = await getToken()

			if (authToken) {
				await getOrders(authToken)
			}
		}

		getAuthOrders()
	}, []) // eslint-disable-line

	return (
		// <GuestContainer>
		<Head>
			<meta name="description" content="The account page, view your orders" />
			<title>Account - {user?.email}</title>
		</Head>
		// {/* <AccountContainer> */}
		// 		<h2>Account</h2>
		// 		<p>
		// 			Logged as <strong>{user?.email}</strong>
		// 		</p>
		// 		<OrdersListContainer>
		// 			<h3>Orders</h3>
		// 			<OrdersList>
		// 				{!!orders.length &&
		// 					orders.map(order => (
		// 						<OrdersListItem key={order.id} paid={order.status === 'paid'}>
		// 							<header>
		// 								<strong>{order.product.name}</strong>
		// 							</header>
		// 							<div>
		// 								<strong>R$ {order.total}</strong>
		// 								<strong>
		// 									{new Date(order.created_at).toLocaleDateString('pt-BR')}
		// 								</strong>
		// 							</div>
		// 							<p>{order.status}</p>
		// 						</OrdersListItem>
		// 					))}
		// 			</OrdersList>
		// 		</OrdersListContainer>
		// 	</AccountContainer>
		// </GuestContainer>
	)
}

export default Account
