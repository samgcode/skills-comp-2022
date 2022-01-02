import ItemList from '../components/items/ItemList'
import items from '../assets/items.json'

function Store() {
  const itemList = items

  return (
    <div className='grid grid-cols-1 gap-4 w-3/4 mx-auto sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
      <ItemList items={itemList}/>
    </div>
  )
}

export default Store