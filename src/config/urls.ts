const STRAPI_API_URL =
	process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'

const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || ''

export { STRAPI_API_URL, MAGIC_PUBLIC_KEY }
