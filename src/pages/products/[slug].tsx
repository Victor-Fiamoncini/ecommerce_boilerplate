import React, { useCallback } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'

import { strapiApi } from '../../services/apiClients'
import { useOrder } from '../../context/OrderContext'
import { useAuth } from '../../context/AuthContext'

import fromImageToUrl from '../../utils/fromImageToUrl'
import formatMoney from '../../utils/formatMoney'

import { IProduct } from '../../types/Product'

interface IProductProps {
	product: IProduct
}

interface IProductStaticPaths extends ParsedUrlQuery {
	slug: string
}

const Product: React.FC<IProductProps> = ({ product }) => {
	const { user, getToken } = useAuth()
	const { buy } = useOrder()

	const handleBuyButtonClick = useCallback(
		async (productId: number) => {
			const authToken = await getToken()

			if (authToken) {
				await buy(authToken, productId)
			}
		},
		[getToken, buy]
	)

	return (
		<div>
			<Head>
				<meta name="description" content={product.meta_description} />
				<title>{product.name}</title>
			</Head>
			<div className="flex justify-between mb-6">
				<img
					src={fromImageToUrl(product.image.url)}
					className="rounded-2xl w-128"
				/>
				<div className="flex flex-col align-middle justify-evenly text-center">
					<h2 className="text-3xl text-center font-bold text-purple-600">
						{product.name}
					</h2>
					<strong className="text-3xl">R$ {formatMoney(product.price)}</strong>
					{user?.isAuthenticated && (
						<div>
							<button
								type="button"
								onClick={() => handleBuyButtonClick(product.id)}
								className="w-44 p-2 text-3xl font-semibold bg-purple-600 text-white rounded-2xl transform transition-all hover:shadow-lg hover:-translate-x-2"
							>
								Buy
							</button>
						</div>
					)}
				</div>
			</div>
			<h2 className="text-3xl font-bold text-purple-600 mb-4">Description</h2>
			<p className="text-justify text-lg font-semibold text-b">
				{product.content}
			</p>
		</div>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const products = await strapiApi.get<IProduct[]>('/products')

	return {
		paths: products.data.map(product => ({
			params: {
				slug: product.slug,
			},
		})),
		fallback: true,
	}
}

export const getStaticProps: GetStaticProps = async context => {
	const { slug } = context.params as IProductStaticPaths

	const products = await strapiApi.get<IProduct[]>(`/products/?slug=${slug}`)
	const [firstProduct] = products.data

	return {
		revalidate: 3600,
		props: {
			product: firstProduct,
		},
	}
}

export default Product
