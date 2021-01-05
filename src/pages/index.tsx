import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { strapiApi } from '../services/apiClients'

import fromImageToUrl from '../utils/fromImageToUrl'
import formatMoney from '../utils/formatMoney'

import {
	ProductsListContainer,
	ProductsList,
	ProductListItem,
} from '../styles/pages/home'
import { GuestContainer } from '../styles/global'

import { IProduct } from '../types/Product'

interface IHomeProps {
	products: IProduct[]
}

const Home: React.FC<IHomeProps> = ({ products }) => {
	return (
		<GuestContainer>
			<Head>
				<title>Home</title>
			</Head>
			<ProductsListContainer>
				<h2>Products</h2>
				<ProductsList>
					{products.map(product => (
						<ProductListItem key={product.id}>
							<Link href={`/products/${product.slug}`}>
								<a>
									<div>
										<img src={fromImageToUrl(product.image.url)} />
										<p>{product.name}</p>
										<strong>R$ {formatMoney(product.price)}</strong>
									</div>
								</a>
							</Link>
						</ProductListItem>
					))}
				</ProductsList>
			</ProductsListContainer>{' '}
		</GuestContainer>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const products = await strapiApi.get<IProduct[]>('/products')

	return {
		props: {
			products: products.data,
		},
	}
}

export default Home
