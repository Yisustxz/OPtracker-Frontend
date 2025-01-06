/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
export default function SurgeryRow({
  date,
  patient,
  surgeon,
  operation,
  status,
  statusColor
}) {
  return (
    <tr>
      <td className='border border-gray-200 px-4 py-2'>{date}</td>
      <td className='border border-gray-200 px-4 py-2'>{patient}</td>
      <td className='border border-gray-200 px-4 py-2'>{surgeon}</td>
      <td className='border border-gray-200 px-4 py-2'>{operation}</td>
      <td className='border border-gray-200 px-4 py-2'>
        <span
          className={`inline-flex items-center justify-center px-5 py-1 rounded-lg text-neutral-900 text-base whitespace-nowrap  ${statusColor}`}
        >
          {status}
        </span>
      </td>
      <td className='border border-gray-200 px-4 py-2 text-neutral-900'>
        <Link to='/procedure' className='text-neutral-900 '>
          Ver Procedimiento
        </Link>
      </td>
      <td>
        <div
          className='flex-1 flex justify-center items-center px-4 py-5 font-medium text-center h-[72px] text-neutral-900 w-[100px]'
          role='cell'
        >
          <span className='text-sm'></span>
          <span
            className='ml-2 bg-white'
            style={{ cursor: 'pointer' }}
            onClick={() => (window.location.href = '/surgeryData')}
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
      </td>
    </tr>
  )
}
