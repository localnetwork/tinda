import { BaseSeeder } from '@adonisjs/lucid/seeders'
import TaxonomyEntry from '#models/taxonomy_entry'

export default class extends BaseSeeder {
  async run() {
    await TaxonomyEntry.createMany([
      {
        name: 'Brands',
      },
    ])
  }
}
