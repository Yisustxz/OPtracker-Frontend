import React from 'react'

export default function MedTeamProfileHeader({ personal }) {
  return (
    <div className='flex flex-col items-center px-48 w-full max-md:max-w-full'>
      <div className='flex flex-wrap gap-3 justify-between items-start p-4 w-full text-3xl font-bold leading-none text-neutral-900 max-md:max-w-full'>
        <div className='w-72 min-w-[288px]'>
          Perfil de {personal[0]?.tipo === 'Nurse' ? 'Enfermero' : 'Doctor'}
        </div>
      </div>
      <div className='w-32 h-32 rounded-full overflow-hidden'>
        <img
          loading='lazy'
          src='https://i.pinimg.com/550x/a8/0e/36/a80e3690318c08114011145fdcfa3ddb.jpg'
          alt='John Doe profile picture'
          className='object-cover w-full h-full'
        />
      </div>
      <div className='mt-6 text-center'>
        <div className='text-2xl font-bold leading-none text-neutral-900'>
          {personal[0]?.nombre}
        </div>
        <div className='text-lg text-slate-500 mt-1'>
          {personal[0]?.tipo === 'Nurse' ? 'Enfermero' : 'Doctor'}
        </div>
      </div>
    </div>
  )
}
