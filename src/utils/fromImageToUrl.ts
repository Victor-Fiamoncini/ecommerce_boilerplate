export default function fromImageToUrl(url: string): string {
	if (url.startsWith('http') || url.startsWith('//')) {
		return url
	}

	return `${
		process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'
	}${url}`
}
