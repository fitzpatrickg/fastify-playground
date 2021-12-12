import { basicRouter } from './basic/routes.js'
import { tokenRouter } from './token/routes.js'

export const initializeApi = (fastify) => {
  fastify.register(tokenRouter, { prefix: '/token' })
  fastify.register(basicRouter, { prefix: '/basic' })
}