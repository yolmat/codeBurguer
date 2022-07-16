/*
    Metodos de controllers

    um Controller so pode te um desses metodos, caso precise de dois do mesmo metodo colocar em outro arquivo

    store   => Cadastrar / Adicionar
    index   => Listar varios
    show    => Listar apenas um
    update  => Atualizar
    delete  => Delete
*/

import { v4 } from 'uuid'
import User from '../models/User'

class UserController {
  async store(request, response) {
    const { name, email, password_hash, admin } = request.body

    const user = await User.create({
      id: v4(),
      name,
      email,
      password_hash,
      admin,
    })

    return response.status(201).json({ id: user.id, name, email, admin })
  }
}

export default new UserController()
