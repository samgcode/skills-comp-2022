import { collections } from './setupFirebase'
import ItemService from './ItemService'

const serviceLocator = {
  collections: collections,
  services: {},
}

serviceLocator.services['itemService'] = new ItemService(serviceLocator)

export default serviceLocator