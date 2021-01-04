import { STRAPI_API_URL } from '../config/urls'

export default function fromImageToUrl(url: string): string {
	if (url.startsWith('http') || url.startsWith('//')) {
		return url
	}

	return `${STRAPI_API_URL}${url}`
}
