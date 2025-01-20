/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
export default function SurgeryRow({
  date,
  patient,
  surgeon,
  operation,
  status,
  procedure,
  statusColor
}) {
  return (
    <div
      className='flex relative flex-wrap items-start w-full border-t border-gray-200 h-[72px] max-md:max-w-full'
      role='row'
    >
      <div className='flex-1 px-4 py-7 min-h-[72px] w-[140px]' role='cell'>
        {date}
      </div>
      <div
        className='flex-1 px-4 py-7 min-h-[72px] text-neutral-900 w-[120px]'
        role='cell'
      >
        {patient}
      </div>
      <div className='flex-1 px-0 py-4 min-h-[72px] w-[120px]' role='cell'>
        {surgeon}
      </div>
      <div className='flex-1 px-0 py-4 min-h-[72px] w-[100px]' role='cell'>
        {operation}
      </div>
      <div
        className='flex-1 flex justify-center items-center px-4 py-5 font-medium text-center h-[72px] text-neutral-900 w-[200px]'
        role='cell'
      >
        <div
          className={`flex overflow-hidden justify-center items-center px-4 w-full ${statusColor} rounded-xl min-h-[32px] min-w-[84px]`}
        >
          <div className='overflow-hidden self-stretch my-auto w-20'>
            {status}
          </div>
        </div>
      </div>
      <div className='flex-1 px-0 py-4 min-h-[72px] w-[100px]' role='cell'>
        <Link to='/procedure' className='text-blue-500 hover:underline'>
          Ver Procedimiento
        </Link>
      </div>
      <div
        className='flex-1 flex justify-center items-center px-4 py-5 font-medium text-center h-[72px] text-neutral-900 w-[100px]'
        role='cell'
      >
        <span className='text-sm'></span>
        <span
          className='ml-2 bg-white'
          style={{ cursor: 'pointer' }}
          onClick={() => (window.location.href = `/surgery-data`)}
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
