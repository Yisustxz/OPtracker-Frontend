import * as React from 'react'

function PatientTableRow({
  date,
  name,
  codigo,
  dni,
  status,
  id,
  statusColor,
  View,
  surgery
}) {
  return (
    <div
      className='flex relative flex-wrap items-start w-full border-t border-gray-200 h-[72px] max-md:max-w-full'
      role='row'
    >
      <div className='flex-1 px-4 py-7 min-h-[72px] w-[236px]' role='cell'>
        {date}
      </div>
      <div
        className='flex-1 px-4 py-7 min-h-[72px] text-neutral-900 w-[236px]'
        role='cell'
      >
        {codigo}
      </div>
      <div
        className='flex-1 px-4 py-7 min-h-[72px] text-neutral-900 w-[245px]'
        role='cell'
      >
        {name}
      </div>
      <div className='flex-1 px-0 py-7 min-h-[72px] w-[253px]' role='cell'>
        {dni}
      </div>
      <div
        className='flex-1 flex justify-center items-center px-4 py-5 font-medium text-center h-[72px] text-neutral-900 w-[200px]'
        role='cell'
      >
        <div
          className={`flex overflow-hidden justify-center items-center px-4 w-full ${statusColor} rounded-xl min-h-[32px] min-w-[84px]`}
        >
          <div className='overflow-hidden self-stretch my-auto w-20'>
            {surgery > 0 ? 'Con cirugía' : 'Sin cirugía'}
          </div>
        </div>
      </div>
      <div
        className='flex-1 flex justify-center items-center px-4 py-5 font-medium text-center h-[72px] text-neutral-900 w-[100px]'
        role='cell'
      >
        <span className='text-sm'></span>
        <span
          className='mr-8 bg-white'
          style={{ cursor: 'pointer' }}
          onClick={() => (window.location.href = `/patient-profile/${id}`)}
        >
          <svg
            className='h-6 w-6 text-gray-400'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
            <circle cx='12' cy='12' r='2' />
          </svg>
        </span>
      </div>
    </div>
  )
}

export default PatientTableRow
