import keys from '../config/keys'

function fromImageToUrl(url: string): string {
	if (url.startsWith('http') || url.startsWith('//')) {
		return url
	}

	return `${keys.STRAPI_API_URL}${url}`
}

export default fromImageToUrl
