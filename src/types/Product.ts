export interface IProductImage {
	id: number
	url: string
	formats: {
		medium: {
			url: string
		}
	}
}

export interface IProduct {
	id: number
	name: string
	content: string
	meta_description: string
	meta_title: string
	price: number
	slug: string
	image: IProductImage
}
