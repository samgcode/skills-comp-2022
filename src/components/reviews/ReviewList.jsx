import StarRating from 'react-star-rating-component'

function ReviewList({ reviews }) {
  return (
    <>
      {reviews.map(review => (
        <div key={review.id}>
          <div className="flex max-w-7xl">
            <div className="pt-5 sm:pl-9">
              <div className="max-w-sm w-96 rounded-lg overflow-hidden shadow-lg bg-white border-2">
                <div className="px-4 py-4">
                  <div className="flex flex-col">
                    <div className='flex'>
                      <h1 className="text-xl pr-3">{review.name}</h1>
                      <StarRating name='rating' value={review.rating}/>
                    </div>
                    {/* <star-rating className="pb-2" :read-only="true" :rating="parseInt(review.rating)" :star-size="23" :active-color="primaryColor"></star-rating>
                        </div> */}
                    <p className="text-gray-500 text-md">
                      {review.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ReviewList