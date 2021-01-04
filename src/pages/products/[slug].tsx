import React from 'react'
import Head from 'next/head'

// import products from '../../../products.json'

import fromImageToUrl from '../../utils/fromImageToUrl'
import formatMoney from '../../utils/formatMoney'

import {
	ProductItemContainer,
	ProductItem,
} from '../../styles/pages/products/product'
import { GuestContainer } from '../../styles/global'

const product = {}

const Product: React.FC = () => {
	return (
		<GuestContainer>
			<Head>
				<meta name="description" content={product.meta_description || ''} />
				<title>{product.name}</title>
			</Head>
			<ProductItemContainer>
				<h1>{product.name}</h1>
				<ProductItem>
					<img src={fromImageToUrl(product.image.url)} />
					<strong>R$ {formatMoney(product.price)}</strong>
					<p>{product.content}</p>
				</ProductItem>
			</ProductItemContainer>
		</GuestContainer>
	)
}

export default Product
