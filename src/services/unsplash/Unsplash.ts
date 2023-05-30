import { ACCESS_KEY } from '../../ApiKeys'
import { createApi } from 'unsplash-js'
import { Random } from 'unsplash-js/dist/methods/photos/types'

export default class Unsplash {
  baseUrl: string
  unsplash: ReturnType<typeof createApi>

  constructor() {
    this.baseUrl = 'https://api.unsplash.com'
    this.unsplash = createApi({
      accessKey: ACCESS_KEY,
    })
  }

  async fetchImages(numCards: number): Promise<Random[]> {
    const result = await this.unsplash.photos.getRandom({
      count: numCards,
      orientation: 'squarish',
    })

    if (result.response === undefined) return []

    if (!Array.isArray(result.response)) return [result.response]

    return result.response
  }
}
