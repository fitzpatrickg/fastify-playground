import basicAuth from 'basic-auth'
import compare from 'tsscmp'
import controller from './controller.js';

export const initializeBasicRouter = (fastify) => {
  fastify
    .decorate('verifyUsernameAndPassword', function (request, reply, done) {
      try {
        // parse basic auth username/password
        const credentials = basicAuth(request)

        // use a safe compare function to prevent timing attacks
        if (compare(credentials.name, 'greg') && compare(credentials.pass, '123')) {
          done()
        } else {
          return reply.status(401).send({ Error: 'Unauthorized' })
        }
      } catch (error) {
        return reply.status(500).send({ Error: error.message })
      }
    })
    .after(() => {
      fastify.route({
        method: 'GET',
        url: '/basic',
        preHandler: fastify.auth([
          fastify.verifyUsernameAndPassword
        ]),
        handler: controller.getRoot
      })

      fastify.route({
        method: 'POST',
        url: '/basic/save',
        preHandler: fastify.auth([
          fastify.verifyUsernameAndPassword
        ]),
        handler: controller.postSave
      })
    })
}