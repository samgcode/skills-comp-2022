import { collections } from './setupFirebase'
import ItemService from './ItemService'
import ReviewService from './ReviewService'
import QuoteItemService from './QuoteItemService'

const serviceLocator = {
  collections: collections,
  services: {},
}

serviceLocator.services['itemService'] = new ItemService(serviceLocator)
serviceLocator.services['reviewService'] = new ReviewService(serviceLocator)
serviceLocator.services['quoteItemService'] = new QuoteItemService(serviceLocator)

export default serviceLocator