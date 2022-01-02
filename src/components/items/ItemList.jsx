import tempImage from '../../assets/temp.png'

function ItemList({ items }) {
  return (
    <>
      {items.map(item => (
        <div key={item.id} className='rounded-md shadow-lg'>
          <img className=' object-fill aspect-square w-full rounded-t-md' src={tempImage} alt='one of our proucts' />
          <div className="h-24 grid grid-cols-1 place-content-between py-2 px-2">
            <h1>{item.name}</h1>
            <h1>{`$${item.price}`}</h1>
          </div>
        </div>
      ))}
    </>
  )
}

export default ItemList