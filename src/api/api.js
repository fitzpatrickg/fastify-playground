import fastifyAuth from 'fastify-auth'

import { initializeBasicRouter } from './basic/routes.js'
import { initializeTokenRouter } from './token/routes.js'

export const initializeApi = (fastify) => {
  fastify.register(fastifyAuth)
  initializeBasicRouter(fastify)
  initializeTokenRouter(fastify)
}