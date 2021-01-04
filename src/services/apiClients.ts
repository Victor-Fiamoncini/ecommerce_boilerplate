import axios from 'axios'

import { STRAPI_API_URL } from '../config/urls'

export const strapiApi = axios.create({
	baseURL: STRAPI_API_URL,
})
