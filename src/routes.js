import express from 'express'
import UserController from './app/controllers/UserController'
import SessinController from './app/controllers/SessionController'
import authMiddlewares from './app/middlewares/authentication'

const routes = express.Router()

routes.post('/user', UserController.store)
routes.post('/auth', SessinController.store)


routes.post(authMiddlewares)

routes.use('/users',UserController.update)
routes.delete('/users',UserController.delete)
routes.post('/posts', PostController.store)
routes.get('/posts', PostController.index)
routes.get('/:userId/posts', PostController.indexAll)
routes.get('/posts/:postId', PostController.show)
routes.delete('/posts/:postId', PostController.delete)
routes.put('/posts/:postId', PostController.update)
export default routes
