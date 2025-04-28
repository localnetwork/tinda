import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Taxonomy from '#models/taxonomy'

export default class extends BaseSeeder {
  async run() {
    await Taxonomy.createMany([
      {
        name: 'Brands',
      },
      {
        name: 'Materials',
      },
      {
        name: 'Sports Material',
      },
      {
        name: 'Fashion Style',
      },
      {
        name: 'Model Type',
      },
      {
        name: 'Pattern',
      },
      {
        name: 'Sneaker Upper Height',
      },
    ])
  }
}
