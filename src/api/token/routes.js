import controller from './controller.js'
import { verifyToken } from '../../middleware/auth.js'

export const tokenRouter = (instance, opts, next) => {
  instance.addHook('preHandler', verifyToken)
  
  instance.get('/', controller.getRoot)
  instance.post('/save', controller.postSave)

  next()
}
