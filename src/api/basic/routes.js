import controller from './controller.js';
import { verifyUserAndPassword } from '../../middleware/auth.js'
import { validateBasicRoot } from '../../validation/validateBasicRouter.js'

export const basicRouter = (instance, opts, next) => {
  instance.addHook('preHandler', verifyUserAndPassword)

  instance.get('/', { preHandler: validateBasicRoot }, controller.getRoot)
  instance.post('/save', controller.postSave)

  next()
}