import * as React from 'react'

export function SubmitButton() {
  return (
    <div className='flex absolute z-0 justify-center items-start max-w-full text-sm font-bold text-center text-white whitespace-nowrap bottom-[289px] left-1/2 transform -translate-x-1/2 w-[457px]'>
      {' '}
      {/* Ajustado un poco más a la izquierda */}
      <div className='flex flex-col flex-1 shrink w-full basis-0 max-w-[960px] min-w-[240px] max-md:max-w-full'>
        <div className='flex flex-1 items-start px-4 py-3 size-full max-md:max-w-full'>
          <button
            className='flex overflow-hidden flex-1 shrink justify-center items-center px-4 w-full rounded-xl basis-0 bg-[#577C8E] max-w-[480px] min-h-[40px] min-w-[84px] max-md:max-w-full hover:bg-[#425c69]'
            tabIndex={0}
          >
            <span className='overflow-hidden self-stretch my-auto w-[54px]'>
              Aceptar
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
