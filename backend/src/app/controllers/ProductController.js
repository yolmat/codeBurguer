import * as Yup from 'yup'
import Product from '../models/Product'

class ProductController {
  async store(request, response) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        price: Yup.number().required(),
        category_id: Yup.number().required(),
      })

      try {
        await schema.validateSync(request.body, { abortEarly: false })
      } catch (err) {
        return response.status(400).json({ error: err.errors })
      }

      const { filename: path } = request.file
      const { name, price, category_id } = request.body

      const product = await Product.create({
        name,
        price,
        category_id,
        path,
      })

      return response.json(product)
    } catch (err) {
      console.log(err)
    }
  }

  async index(request, response) {
    const products = await Product.findAll()

    return response.json(products)
  }
}

export default new ProductController()
