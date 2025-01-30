import * as React from 'react'

export function RatingScale() {
  const [selectedRating, setSelectedRating] = React.useState(null)
  const ratingOptions = [1, 2, 3, 4, 5]

  return (
    <>
      <div className='flex z-0 flex-col items-center p-4 max-w-full text-sm font-medium whitespace-nowrap absolute left-1/2 transform -translate-x-[50%] top-[268px]'>
        <div className='flex gap-5'>
          {ratingOptions.map((rating) => (
            <button
              key={rating}
              className={`self-stretch px-4 rounded-xl border border-solid min-h-[44px] transform transition-all duration-200
                ${
                  selectedRating === rating
                    ? 'bg-[#577C8E] text-white shadow-md scale-110'
                    : 'bg-white border-gray-400 hover:border-blue-700 hover:bg-blue-100 hover:shadow-lg hover:scale-105'
                }
              `}
              onClick={() => setSelectedRating(rating)}
              aria-label={`Rating ${rating}`}
              tabIndex={0}
            >
              {rating}
            </button>
          ))}
        </div>
      </div>
      <div className='absolute px-4 pt-4 pb-2 max-w-full text-lg leading-none left-[24%] transform -translate-x-1/2 top-[278px] w-[217px] text-center'>
        Muy insatisfecho
      </div>
      <div className='absolute px-4 pt-4 pb-2 max-w-full text-lg leading-none left-[75%] transform -translate-x-1/2 top-[278px] w-[217px] text-center'>
        Muy satisfecho
      </div>
    </>
  )
}
