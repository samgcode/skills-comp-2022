import { getDocs, addDoc } from 'firebase/firestore/lite'

import itemData from '../assets/items.json'

class ItemService {
  constructor(serviceLocator) {
    this._collection = serviceLocator.collections.items
    this.populateDatabase()
  }

  async getItems() {
    const itemSnapshot = await getDocs(this._collection)
    const items = itemSnapshot.docs.map(doc => doc.data())

    const convertedItems = items.map(item => {
      return this._convertItem(item)
    })
    return items
  }

  async populateDatabase() {
    let autoId = 0
    const itemSnapshot = await getDocs(this._collection)
    if (!itemSnapshot.docs[0]) {
      itemData.forEach(item => {
        item.id = autoId
        this.addItem(item)
        autoId++
      })
    }
  }

  async addItem(item) {
    await addDoc(this._collection, { ...item })
  }

  _convertItem(item) {
    const convertedItem = {
      imageName: item.imageName,
      name: item.name,
      price: item.price,
      id: item.id,
    }
    return convertedItem
  }
}

export default ItemService
