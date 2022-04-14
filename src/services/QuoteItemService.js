import { getDocs, addDoc } from 'firebase/firestore/lite'

import quoteData from '../assets/quoteItems.json'

class QuoteItemService {
  constructor(serviceLocator) {
    this._collection = serviceLocator.collections.quoteItems
    this.populateDatabase()
  }

  async getItems() {
    const itemSnapshot = await getDocs(this._collection)
    const items = itemSnapshot.docs.map(doc => doc.data())

    return items
  }

  async populateDatabase() {
    const itemSnapshot = await getDocs(this._collection)
    console.log(itemSnapshot.docs.map(doc => doc.data()))
    if (!itemSnapshot.docs[0]) {
      quoteData.forEach(item => {
        this.addItem(item)
      })
    }
  }

  async addItem(item) {
    await addDoc(this._collection, { ...item })
  }

}

export default QuoteItemService