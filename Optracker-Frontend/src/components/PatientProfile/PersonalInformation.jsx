import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import EmergencyContact from './EmergencyContact'

export default function PersonalInformation({ patientId }) {
  const [personalInfo, setPersonalInfo] = useState([])
  const [editIndex, setEditIndex] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [patientName, setPatientName] = useState('')
  const [emergencyContacts, setEmergencyContacts] = useState([])

  const [createAt, setCreateAt] = useState('')

  const { id } = useParams()

  useEffect(() => {
    // Llama a la API para obtener los datos del paciente
    const fetchPatientData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/patient/${id}`)
        const data = await response.json()

        setPatientName(`${data.name} ${data.lastName}`)

        // Mapea los datos de la API al formato esperado
        const formattedData = [
          {
            label: 'Género',
            value: data.gender === 'FEMALE' ? 'Femenino' : 'Masculino'
          },
          { label: 'Edad', value: calculateAge(data.birthDate) || 'N/A' },
          { label: 'Cédula', value: data.dni },
          { label: 'Teléfono', value: data.phoneNumber || 'N/A' },
          { label: 'Correo', value: data.email },
          {
            label: 'Fecha de Nacimiento',
            value: data.birthDate
              ? new Intl.DateTimeFormat('es-ES', { timeZone: 'UTC' }).format(
                  new Date(data.birthDate)
                )
              : 'N/A'
          },
          { label: 'Altura', value: `${data.height || 'N/A'} cm` },
          { label: 'Peso', value: `${data.weight || 'N/A'} kg` },
          { label: 'Tipo de Sangre', value: formatBloodType(data.bloodType) },
          { label: 'Alergias', value: data.alergies || 'N/A' }
        ]

        setPersonalInfo(formattedData)

        setCreateAt(data.createAt)

        setEmergencyContacts(data.EmergencyContact)

        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching patient data:', error)
      }
    }

    fetchPatientData()
  }, [patientId])

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

  const calculateAge = (birthDate) => {
    if (!birthDate) return null
    const birth = new Date(birthDate)
    const today = new Date()
    return (
      today.getFullYear() -
      birth.getFullYear() -
      (today < new Date(today.getFullYear(), birth.getMonth(), birth.getDate())
        ? 1
        : 0)
    )
  }

  const formatBloodType = (bloodType) => {
    const mapping = {
      O_POSITIVE: 'O+',
      O_NEGATIVE: 'O-',
      A_POSITIVE: 'A+',
      A_NEGATIVE: 'A-',
      B_POSITIVE: 'B+',
      B_NEGATIVE: 'B-',
      AB_POSITIVE: 'AB+',
      AB_NEGATIVE: 'AB-'
    }
    return mapping[bloodType] || 'N/A'
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className='flex flex-wrap gap-3 justify-center items-start p-4 w-full text-3xl font-bold leading-none text-neutral-900 max-md:max-w-full'>
        <div className='w-72 min-w-[288px] text-center'>Perfil de Paciente</div>
      </div>
      <div className='flex items-start p-4 w-full text-center max-md:max-w-full'>
        <div className='flex flex-col flex-1 shrink items-center w-full basis-0 min-w-[240px] max-md:max-w-full'>
          <div className='flex flex-col items-center max-w-full w-full'>
            <img
              loading='lazy'
              src='https://i.pinimg.com/236x/d9/d8/8e/d9d88e3d1f74e2b8ced3df051cecb81d.jpg'
              alt='John Doe profile picture'
              className='object-contain w-32 max-w-full aspect-square min-h-[128px] rounded-[64px]'
            />
            <div className='flex flex-col justify-center items-center mt-4 w-full'>
              <div className='text-2xl font-bold leading-none text-neutral-900 w-full'>
                {patientName || 'Cargando...'}
              </div>
              <div className='w-full text-base text-slate-500'>
                Ingresado el{' '}
                {new Intl.DateTimeFormat('es-ES').format(new Date(createAt))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-4 pt-4 pb-2 w-full text-lg font-bold leading-none text-neutral-900 max-md:max-w-full'>
        Información Personal
      </div>
      <div className='flex flex-wrap p-4 w-full text-sm max-md:max-w-full'>
        {personalInfo.map((info, index) => (
          <div
            key={index}
            className='w-1/2 px-4 py-4 text-left border-t border-gray-200 max-md:w-full'
          >
            <div className='w-full text-slate-500'>{info.label}</div>
            <div className='mt-1 inline-flex w-full text-neutral-900 justify-between'>
              {editIndex === index ? (
                <input
                  type='text'
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className='border border-gray-300 bg-white rounded p-1'
                />
              ) : (
                info.value
              )}
            </div>
          </div>
        ))}
      </div>
      <div className='px-4 pt-4 pb-2 w-full text-lg font-bold leading-none text-neutral-900 max-md:max-w-full'>
        Contactos de emergencia
      </div>
      {/* Renderizar los contactos de emergencia */}
      {emergencyContacts && emergencyContacts.length > 0 ? (
        emergencyContacts.map((contact) => (
          <EmergencyContact key={contact.id} {...contact} />
        ))
      ) : (
        <div>No hay contactos de emergencia disponibles</div>
      )}
    </>
  )
}
