import * as React from 'react'

function PatientTableHeader() {
  return (
    <div className='flex flex-col w-full font-medium text-neutral-900 max-md:max-w-full'>
      <div className='flex relative flex-wrap flex-1 gap-0 bg-white size-full max-md:max-w-full'>
        <div className='px-4 py-3 w-[180px]' role='columnheader'>
          Fecha de ingreso
        </div>
        <div className='px-4 py-3 w-[95px]' role='columnheader'>
          Codigo
        </div>
        <div className='px-4 py-3 w-[180px]' role='columnheader'>
          Paciente
        </div>
        <div className='px-4 py-3 w-[100px]' role='columnheader'>
          Cedula
        </div>
        <div className='px-4 py-3 w-[150px]' role='columnheader'>
          Status
        </div>
        <div
          className='absolute self-start  whitespace-nowrap h-[46px] min-h-[46px] right-[0px] w-[500px]'
          role='columnheader'
        ></div>
      </div>
    </div>
  )
}

export default PatientTableHeader
