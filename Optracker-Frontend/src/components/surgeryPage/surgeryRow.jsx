/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
export default function SurgeryRow({
  id,
  date,
  Patient,
  title,
  DoctorSurgery,
  status,
  procedure,
  statusColor
}) {
  return (
    <div
      className='flex relative flex-wrap items-start w-full border-t border-gray-200 h-[72px] max-md:max-w-full'
      role='row'
    >
      <div className='flex-1 px-4 py-4 min-h-[72px] w-[140px]' role='cell'>
        {new Date(date).toLocaleString('es-ES', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </div>
      <div
        className='flex-1 px-4 py-6 min-h-[72px] text-neutral-900 w-[120px]'
        role='cell'
      >
        {Patient.name} {Patient.lastName}
      </div>
      <div className='flex-1 px-0 py-4 min-h-[72px] w-[120px]' role='cell'>
        {DoctorSurgery.length > 0 && DoctorSurgery[0].doctor
          ? `${DoctorSurgery[0].doctor.names} ${DoctorSurgery[0].doctor.lastNames}`
          : 'Doctor no disponible'}
      </div>
      <div className='flex-1 px-0 py-4 min-h-[72px] w-[100px]' role='cell'>
        {title}
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
        <Link to={`/procedure/${id}`} className='text-blue-500 hover:underline'>
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
          onClick={() => (window.location.href = `/surgery-data/${id}`)}
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
