import { useState } from 'react'

import ReviewList from './ReviewList'
import reviews from '../../assets/reviews.json'

function ReviewModal() {
  const [open, setOpen] = useState(true)

  function handleClose() {
    setOpen(!open)
  }

  return (
    <>
      {!open ? null :
        <div className="fixed overflow-hidden z-10 inset-0 max-h-screen h-auto">
          <div className="flex items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0 overflow-hidden">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start justify-between">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                      Reviews for
                    </h3>
                  </div>
                  <button type="button" onClick={handleClose} className="focus:outline-none focus:ring-2 ring-secondary ring-offset-8 rounded-sm hover:fill-black fill-current">
                    <svg className="h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="gray" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                {/* <div className="mt-2 flex-row grid-cols-1 xl:h-2xl md:h-96 overflow-auto mb-20"> */}
                {/* <error-display :error="error" :show="showError"></error-display>
      <square-spinner :loading="loading"></square-spinner> */}
                <div v-if="!showError">
                  <div v-if="hasReviews">
                    <ReviewList reviews={reviews} />
                  </div>
                  {/* <div v-if="!hasReviews && !loading">
        <div className="flex max-w-7xl" data-aos="fade-up">
          <div className="pt-5 sm:pl-9">
            <div className="max-w-sm w-96 rounded-lg overflow-hidden shadow-lg bg-white border-2">
              <div className="px-4 py-4">
                <h1 className="text-xl">No reviews for this item</h1>
                <p className="text-gray-500 text-md">
                  You can submit one on the store page
                </p>
              </div>
            </div>
          </div> */ }
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default ReviewModal