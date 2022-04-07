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
    console.log(items)

    const convertedItems = items.map(item => {
      return this._convertItem(item)
    })
    return convertedItems
  }

  async populateDatabase() {
    const itemSnapshot = await getDocs(this._collection)
    if (!itemSnapshot.docs[0]) {
      itemData.forEach(item => {
        this.addItem(item)
      })
    }
  }

  async addItem(item) {
    await addDoc(this._collection, { ...item })
  }

  _convertItem(item) {
    console.log(item);
    const convertedItem = {
      image: item.imageFile,
      name: item.name,
      price: item.price,
      id: item.id,
    }
    return convertedItem
  }
}

export default ItemService
