import controller from './controller.js'

export const initializeTokenRouter = (fastify) => {
  fastify
    .decorate('verifyToken', function (request, reply, done) {
      try {
        const token = request.headers.Authorization
        console.log(token)
        done()
      } catch (error) {
        return reply.status(500).send({ Error: error.message })
      }
    })
    .after(() => {
      fastify.route({
        method: 'GET',
        url: '/token',
        preHandler: fastify.auth([
          fastify.verifyToken
        ]),
        handler: controller.getRoot
      })

      fastify.route({
        method: 'POST',
        url: '/token/save',
        preHandler: fastify.auth([
          fastify.verifyToken
        ]),
        handler: controller.postSave
      })
    })
}
