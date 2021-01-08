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
	const { getToken } = useAuth()
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
		// <GuestContainer>
		<Head>
			<meta name="description" content={product.meta_description || ''} />
			<title>{product.name}</title>
		</Head>
		// 	<ProductItemContainer>
		// 		<h2>{product.name}</h2>
		// 		<ProductItem>
		// 			<img src={fromImageToUrl(product.image.url)} />
		// 			<strong>R$ {formatMoney(product.price)}</strong>
		// 			<p>{product.content}</p>
		// 			<BuyButton onClick={() => handleBuyButtonClick(product.id)}>
		// 				Buy
		// 			</BuyButton>
		// 		</ProductItem>
		// 	</ProductItemContainer>
		// </GuestContainer>
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
