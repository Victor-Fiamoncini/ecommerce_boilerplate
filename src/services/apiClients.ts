import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'

import keys from '../config/keys'

export const strapiApi = axios.create({ baseURL: keys.STRAPI_API_URL })

export const stripeApi = loadStripe(keys.STRIPE_SK, { locale: 'pt-BR' })
