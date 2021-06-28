import { Deserializer as Des } from 'ts-jsonapi'

// Десериализатор для JSOP API
export class Deserializer extends Des {
  constructor() {
    super({ keyForAttribute: 'snake_case' })
  }
}
