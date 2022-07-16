import { Router } from 'express'

import { v4 } from 'uuid'

import User from './app/models/User'

const routes = new Router()

routes.get('/', async (request, response) => {
  const user = await User.create({
    id: v4(),
    name: 'Mateus a',
    email: 'mateus.saraiva09@gmaail.com',
    password_hash: '12345',
    admin: 'true',
  })
  return response.json(user)
})

export default routes
