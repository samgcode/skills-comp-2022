import { collections } from './setupFirebase'
import ItemService from './ItemService'
import ReviewService from './ReviewService'

const serviceLocator = {
  collections: collections,
  services: {},
}

serviceLocator.services['itemService'] = new ItemService(serviceLocator)
serviceLocator.services['reviewService'] = new ReviewService(serviceLocator)

export default serviceLocator