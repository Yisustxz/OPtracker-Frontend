import React from 'react'
import { FaUniversity } from 'react-icons/fa' // Icono de universidad

const educationData = [
  {
    title: 'Facultad de Medicina: Universidad de California'
  },
  {
    title: 'Residencia: Stanford'
  }
]

export default function EducationList() {
  return (
    <div className='p-4 text-left'>
      <h2 className='text-lg font-bold mb-6'>Educación</h2>
      <div className='space-y-4 text-left'>
        {educationData.map((edu, index) => (
          <div key={index} className='flex items-start gap-4'>
            <FaUniversity className='text-gray-500 my-4' size={24} />
            <div>
              <div className='font-medium py-4'>{edu.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
