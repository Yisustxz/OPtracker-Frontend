import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import MedTeamProfileHeader from '@/components/medTeamProfile/medTeamProfileHeader'
import Navigation from '@/components/ui/navigation'
import MedTeamProfesionalInf from '@/components/medTeamProfile/MedTeamPersonalInfo'
import EducationList from '@/components/medTeamProfile/MedEducation'

export default function MedTeamProfile() {
  const location = useLocation()
  const navigate = useNavigate()
  const persona = location.state

  if (!persona) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <p>No se encontraron datos. Por favor regresa a la tabla.</p>
        <button
          onClick={() => navigate('/medteams')}
          className='ml-4 px-4 py-2 bg-blue-500 text-white rounded'
        >
          Regresar
        </button>
      </div>
    )
  }

  return (
    <div className='flex relative flex-col items-start bg-white'>
      <Navigation />
      <div className='flex overflow-hidden z-0 flex-col self-stretch w-full bg-white min-h-[800px] max-md:max-w-full'>
        <div className='flex flex-col w-full max-md:max-w-full'>
          <div className='flex relative flex-1 justify-center items-start px-40 py-16 size-full max-md:px-5 max-md:max-w-full'>
            <div className='flex overflow-hidden z-0 flex-col flex-1 shrink w-full basis-0 max-w-[960px] min-w-[240px] max-md:max-w-full'>
              <MedTeamProfileHeader persona={persona} />
              <MedTeamProfesionalInf persona={persona} />
              <EducationList persona={persona} />
            </div>

            <span
              onClick={() => navigate('/medteams')}
              className='cursor-pointer absolute top-24 left-[78px] z-0'
            >
              <svg
                className='w-6 h-6 text-gray-800 dark:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 8 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13'
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
