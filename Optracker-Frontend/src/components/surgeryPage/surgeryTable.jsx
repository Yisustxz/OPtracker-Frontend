/* eslint-disable react/prop-types */
import SurgeryRow from './surgeryRow'

export default function SurgeryTable({ surgeries }) {
  return (
    <div className='flex flex-col justify-center px-4 py-3 w-full text-sm max-md:max-w-full'>
      <div className='flex overflow-hidden items-start w-full bg-white rounded-xl border border-solid border-zinc-200 max-md:max-w-full'>
        <div className='flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full'>
          <div className='flex flex-col w-full font-medium text-neutral-900 max-md:max-w-full'>
            <div className='flex relative flex-wrap flex-1 gap-0 bg-white size-full max-md:max-w-full'>
              <div className='px-4 py-3 w-[140px]' role='columnheader'>
                Fecha De cirugía
              </div>
              <div className='px-4 py-3 w-[120px]' role='columnheader'>
                Paciente
              </div>
              <div className='px-4 py-3 w-[120px]' role='columnheader'>
                Cirujano
              </div>
              <div className='px-4 py-3 w-[100px]' role='columnheader'>
                Operación
              </div>
              <div className='px-4 py-3 w-[140px]' role='columnheader'>
                Status
              </div>
              <div className='px-4 py-3 w-[100px]' role='columnheader'>
                Procedimiento
              </div>
              <div
                className='absolute self-start py-3.5 pr-4 pl-1 whitespace-nowrap h-[46px] min-h-[46px] right-[0px] w-[100px]'
                role='columnheader'
              ></div>
            </div>
          </div>
          <div className='flex flex-col w-full text-slate-500 max-md:max-w-full'>
            {surgeries.map((surgery) => (
              <SurgeryRow key={surgery.id} {...surgery} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
