import Fastify from 'fastify'

import { initializeApi } from './api/api.js'

const fastify = Fastify({
  logger: true
})

initializeApi(fastify)

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()