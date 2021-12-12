import basicAuth from 'basic-auth'
import compare from 'tsscmp'

export const verifyUserAndPassword = (request, reply, done) => {
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
}

export const verifyToken = (request, relay, done) => {
  console.log('token auth hit')
  done()
}