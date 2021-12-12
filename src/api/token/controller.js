const getRoot = (req, reply) => {
  req.log.info('Auth route')
  reply.send({ hello: 'save', route: 'token' })
}

const postSave = (req, reply) => {
  req.log.info('Auth route')
  reply.send({ hello: 'save', route: 'token' })
}

export default {
  getRoot,
  postSave
}