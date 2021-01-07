import React, { createContext, useCallback, useContext, useState } from 'react'

import { strapiApi } from '../../services/apiClients'

import { IOrderContextData, IOrderState } from './types'

const OrderContext = createContext<IOrderContextData>({} as IOrderContextData)

export const OrderProvider: React.FC = ({ children }) => {
	const [data, setData] = useState<IOrderState>({ orders: [] } as IOrderState)

	const getOrders = useCallback(
		async (authToken: string) => {
			try {
				const orders = await strapiApi.get('/orders', {
					headers: { Authorization: `Bearer ${authToken}` },
				})

				setData({ ...data, orders: orders.data })
			} catch {
				setData({ ...data, orders: [] })
			}
		},
		[data]
	)

	return (
		<OrderContext.Provider value={{ orders: data.orders, getOrders }}>
			{children}
		</OrderContext.Provider>
	)
}

export function useOrder(): IOrderContextData {
	const context = useContext(OrderContext)

	if (!context) {
		throw new Error(
			'Invalid useOrder/OrderContext call, must be user within OrderProvider component'
		)
	}

	return context
}
