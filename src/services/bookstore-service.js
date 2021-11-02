export default class BookstoreService {

  getResource = async (url) => {
    const res = await fetch(url);

    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }

    return await res.json()
  }

  getBooks = async () => {
    return await this.getResource('http://localhost:3000/books')
  }
}