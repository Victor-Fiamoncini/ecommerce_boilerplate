'use strict'

const { sanitizeEntity } = require('strapi-utils')
const stripe = require('stripe')(process.env.STRIPE_SK)

function fromDecimalToInt(number) {
  return parseInt(number * 100)
}

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Only returns orders from the logged user
   *
   * @param {object} ctx
   */
  async find(ctx) {
    const { user } = ctx.state

    let entities

    if (ctx.query._q) {
      entities = await strapi.services.order.search({
        ...ctx.query,
        user: user.id,
      })
    } else {
      entities = await strapi.services.order.find({
        ...ctx.query,
        user: user.id,
      })
    }

    return entities.map(entity => {
      return sanitizeEntity(entity, { model: strapi.models.order })
    })
  },

  /**
   * Only returns order (by id) from the logged user
   *
   * @param {object} ctx
   */
  async findOne(ctx) {
    const { id } = ctx.params
    const { user } = ctx.state

    const entity = await strapi.services.order.findOne({ id, user: user.id })

    return sanitizeEntity(entity, { model: strapi.models.order })
  },

  /**
   * Creates a new order/stripe payment session with logged user
   *
   * @param {object} ctx
   */
  async create(ctx) {
    const { product } = ctx.request.body

    if (!product) {
      return ctx.throw(400, 'Please specify a product')
    }

    const realProduct = await strapi.services.product.findOne({
      id: product.id,
    })

    if (!realProduct) {
      return ctx.throw(404, 'Product not found')
    }

    const { user } = ctx.state

    const BASE_URL = ctx.request.headers.origin || 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: user.email,
      mode: 'payment',
      success_url: `${BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: BASE_URL,
      line_items: [
        {
          price_data: {
            currency: 'brl',
            product_data: {
              name: realProduct.name,
            },
            unit_amount: fromDecimalToInt(realProduct.price),
          },
          quantity: 1,
        },
      ],
    })

    await strapi.services.order.create({
      user: user.id,
      product: realProduct.id,
      total: realProduct.price,
      status: 'unpaid',
      checkout_session: session.id,
    })

    return { id: session.id }
  },
}
