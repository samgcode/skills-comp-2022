import * as Realm from 'realm-web'

const app = new Realm.App({ id: "skills2021-gqmwb" })

async function getCollections() {
  const credentials = Realm.Credentials.anonymous()
  try {
    const user = await app.logIn(credentials)
    // console.log(user.id === app.currentUser.id)
    const mongodb = user.mongoClient("mongodb-atlas")
    const db = mongodb.db("skills2021")
    const collections = {
      itemsCollection: db.collection('items'),
      reviewCollection: db.collection('reviews')
    }
    return collections
  } catch(err) {
    console.error('faild to login', err)
  }
}



export default getCollections