import Taxonomy from '#models/taxonomy'
import type { HttpContext } from '@adonisjs/core/http'

export default class TaxonomiesController {
  // public async index({ response }: HttpContext) {
  //   return response.json({ message: 'Hello world' })
  // }
  public async store({ response, request }: HttpContext) {
    const payload = request.all()
    const taxonomy = await Taxonomy.create(payload)
    return response.status(201).json({
      message: 'Taxonomy created successfully.',
      data: taxonomy,
    })
  }
  // public async show({ response }: HttpContext) {
  //   return response.json({ message: 'Hello world' })
  // }
  // public async update({ response }: HttpContext) {
  //   return response.json({ message: 'Hello world' })
  // }
  // public async destroy({ response }: HttpContext) {
  //   return response.json({ message: 'Hello world' })
  // }
}
