import React, { useState } from 'react'

export default function MedTeamProfesionalInf({ personal }) {
  const professionalInfo = [
    { label: 'Especialidad', value: personal[0]?.especialidad },
    { label: 'Licencia Médica', value: personal[0]?.licencia },
    { label: 'DNI', value: personal[0]?.dni },
    { label: 'Número DEA', value: personal[0]?.dea }
  ]

  const [personalInfo, setPersonalInfo] = useState(professionalInfo)
  const [editIndex, setEditIndex] = useState(null)
  const [inputValue, setInputValue] = useState('')

  const handleEdit = (index) => {
    setEditIndex(index)
    setInputValue(personalInfo[index].value)
  }

  const handleSave = (index) => {
    const updatedInfo = [...personalInfo]
    updatedInfo[index].value = inputValue
    setPersonalInfo(updatedInfo)
    setEditIndex(null)
  }

  return (
    <>
      <div className='px-4 pt-4 pb-2 w-full text-lg font-bold leading-none text-neutral-900 max-md:max-w-full'>
        Informacion Profesional
      </div>
      <div className='flex flex-col p-4 w-full text-sm max-md:max-w-full text-left'>
        {[0, 2].map((index) => (
          <div
            key={index}
            className='flex flex-wrap w-full whitespace-nowrap min-h-[79px] max-md:max-w-full'
          >
            <div className='flex flex-col grow shrink py-4 pr-20 border-t border-gray-200 min-w-[240px]'>
              <div className='w-full text-slate-500 max-md:max-w-full'>
                {professionalInfo[index].label}
              </div>
              <div className='mt-1 inline-flex w-full text-neutral-900 justify-between'>
                {editIndex === index ? (
                  <input
                    type='text'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className='border border-gray-300 bg-white rounded p-1'
                  />
                ) : (
                  personalInfo[index].value
                )}
              </div>
            </div>
            <div className='flex flex-col grow shrink py-4 pl-20 border-t border-gray-200 min-w-[240px]'>
              <div className='w-full text-slate-500'>
                {professionalInfo[index + 1].label}
              </div>
              <div className='mt-1 inline-flex w-full text-neutral-900 justify-between'>
                {editIndex === index + 1 ? (
                  <input
                    type='text'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className='border border-gray-300 rounded p-1 bg-white'
                  />
                ) : (
                  professionalInfo[index + 1].value
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
