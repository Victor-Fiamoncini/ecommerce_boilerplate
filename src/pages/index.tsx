import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import products from '../../products.json'

import { fromImageToUrl } from '../utils/urls'

import { ProductsList, ProductListItem } from '../styles/pages/home'
import { GuestContainer } from '../styles/global'

const Home: React.FC = () => {
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
									<strong>R$ {product.price}</strong>
								</div>
							</a>
						</Link>
					</ProductListItem>
				))}
			</ProductsList>
		</GuestContainer>
	)
}

export default Home
