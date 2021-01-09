import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { strapiApi } from '../services/apiClients'

import fromImageToUrl from '../utils/fromImageToUrl'
import formatMoney from '../utils/formatMoney'

import { IProduct } from '../types/Product'

interface IHomeProps {
	products: IProduct[]
}

const Home: React.FC<IHomeProps> = ({ products }) => (
	<div>
		<Head>
			<title>Home</title>
		</Head>
		<h2 className="mb-6 text-3xl text-center font-bold text-purple-600">
			Products Available
		</h2>
		<ul className="flex justify-between align-middle">
			{products.map(product => (
				<li
					key={product.id}
					className="block max-w-lg w-80 bg-gray-100 rounded-2xl p-4 mb-2 transform transition-all hover:shadow-lg hover:-translate-y-2"
				>
					<Link href={`/products/${product.slug}`}>
						<a className="">
							<div className="rounded-2xl">
								<img
									src={fromImageToUrl(product.image.url)}
									className="rounded-2xl mb-2"
								/>
								<p className="text-center font-semibold text-purple-600 text-lg mb-2">
									{product.name}
								</p>
								<strong className="block text-center text-gray-900 text-lg">
									R$ {formatMoney(product.price)}
								</strong>
							</div>
						</a>
					</Link>
				</li>
			))}
		</ul>
	</div>
)

export const getStaticProps: GetStaticProps = async () => {
	const products = await strapiApi.get<IProduct[]>('/products')

	return {
		props: {
			products: products.data,
		},
	}
}

export default Home
