import { getDocs, addDoc } from 'firebase/firestore/lite'

import reviewData from '../assets/reviews.json'

class ReviewService {
  constructor(serviceLocator) {
    this._collection = serviceLocator.collections.reviews
    this.populateDatabase()
  }

  async getReviews() {
    const reviewSnapshot = await getDocs(this._collection)
    const reviews = reviewSnapshot.docs.map(doc => doc.data())

    return reviews
  }

  async populateDatabase() {
    const reviewSnapshot = await getDocs(this._collection)
    if (!reviewSnapshot.docs[0]) {
      reviewData.forEach(review => {
        this.addReview(review)
      })
    }
  }

  async addReview(review) {
    await addDoc(this._collection, { ...review })
  }
}


export default ReviewService