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
		<div>
			<Head>
				<meta name="description" content="The account page, view your orders" />
				<title>Account - {user?.email}</title>
			</Head>
			<h2 className="mb-6 text-3xl text-center font-bold text-purple-600">
				Account
			</h2>
			<p className="mb-6 font-semibold text-center">
				Logged as <strong className="text-purple-600">{user?.email}</strong>
			</p>
			{!!orders.length && (
				<div>
					<h3 className="mb-6 text-3xl text-center font-bold text-purple-600">
						Orders
					</h3>
					<ul className="text-center">
						{orders.map((order, index) => (
							<li
								key={order.id}
								className={`block m-auto p-2 max-w-xs bg-gray-100 rounded-xl ${
									index !== orders.length - 1 && 'mb-4'
								}`}
							>
								<header className="mb-2">
									<strong className="text-purple-600">
										{order.product.name}
									</strong>
								</header>
								<div className="flex justify-around mb-2">
									<strong>R$ {order.total}</strong>
									<strong>
										{new Date(order.created_at).toLocaleDateString('pt-BR')}
									</strong>
								</div>
								<p
									className={`inline-block font-semibold p-4 py-0 text-white rounded-2xl ${
										order.status === 'paid' ? 'bg-green-500' : 'bg-yellow-500'
									}`}
								>
									{order.status}
								</p>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default Account
