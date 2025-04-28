import TaxonomyEntry from '#models/taxonomy_entry'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await TaxonomyEntry.createMany([
      {
        name: 'Balenciaga',
        taxonomy: 1,
      },
      {
        name: 'Wool',
        taxonomy: 2,
      },
      {
        name: 'Cotton',
        taxonomy: 2,
      },
      {
        name: 'Silk',
        taxonomy: 2,
      },
      {
        name: 'Polyester',
        taxonomy: 2,
      },
      {
        name: 'Nylon',
        taxonomy: 2,
      },
      {
        name: 'Leather',
        taxonomy: 2,
      },
    ])
  }
}
