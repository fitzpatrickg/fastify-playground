const getRoot = (req, reply) => {
  req.log.info('Auth route')
  reply.send({ hello: 'save', route: 'basic' })
}

const postSave = (req, reply) => {
  req.log.info('Auth route')
  reply.send({ hello: 'save', route: 'basic' })
}

export default {
  getRoot,
  postSave
}