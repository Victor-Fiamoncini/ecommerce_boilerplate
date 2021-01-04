export interface ProductImage {
	id: number
	url: string
	formats: {
		medium: {
			url: string
		}
	}
}

export interface Product {
	id: number
	name: string
	meta_description: string
	meta_title: string
	price: number
	slug: string
	image: ProductImage
}
