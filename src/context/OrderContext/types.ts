export interface IProduct {
	name: string
}

export interface IOrder {
	id: string
	product: IProduct
	total: number
	status: number
}

export interface IOrderState {
	orders: IOrder[]
}

export interface IOrderContextData {
	orders: IOrder[]
	getOrders: (authToken: string) => Promise<void>
}
