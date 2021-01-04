import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { strapiApi } from '../services/apiClients'

import fromImageToUrl from '../utils/fromImageToUrl'
import formatMoney from '../utils/formatMoney'

import { ProductsList, ProductListItem } from '../styles/pages/home'
import { GuestContainer } from '../styles/global'

import { Product } from '../types/Product'

interface HomeProps {
	products: Product[]
}

const Home: React.FC<HomeProps> = ({ products }) => {
	return (
		<GuestContainer>
			<Head>
				<title>Home</title>
			</Head>
			<ProductsList>
				<h1>Products</h1>
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
		</GuestContainer>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const products = await strapiApi.get('/products')

	return {
		props: {
			products: products.data,
		},
	}
}

export default Home
