'use strict'

const { sanitizeEntity } = require('strapi-utils')

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
}
