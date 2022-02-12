// import getCollections from './setupStitchDB'
import ItemService from './ItemService'

const serviceLocator = {
  collections: {},
  services: {},
}

// serviceLocator.collections = await getCollections()
// console.log(serviceLocator.collections)

serviceLocator.services['itemService'] = new ItemService(serviceLocator)

export default serviceLocator