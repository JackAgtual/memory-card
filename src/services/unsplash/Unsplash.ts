import { ACCESS_KEY } from '../../ApiKeys'

export default class Unsplash {
  baseUrl: string

  constructor() {
    this.baseUrl = 'https://api.unsplash.com'
  }

  async fetchImages(numCards: number) {
    const url = `${this.baseUrl}/photos/random?client_id=${ACCESS_KEY}&orientation=squarish&count=${numCards}`
    // const url = 'http://localhost:3500/data'
    const response = await fetch(url)
    return response.json()
  }
}
