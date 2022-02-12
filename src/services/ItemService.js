import axios from 'axios'

class ItemService {
  constructor(serviceLocator) {
    // this._collection = serviceLocator.collections.itemsCollection
    // this._imageService = serviceLocator.services.imageService
  }

  async getItems() {
    const response = await axios.get('http://localhost:3001/items')
    const convertedItems = response.data.map(item => {
      return this._convertItem(item)
    })
    return convertedItems
  }

  _convertItem(item) {
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
