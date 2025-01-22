import React, { useState } from 'react'
import FamilyCard from '../components/FamilyCode/FamilyCard'
import FormInput from '../components/patienteRecord/FormInput'
import NavigationFamily from '../components/ui/NavigationFamily'
import { fetchPatientByUUID } from '../services/patientServices'
import { useNavigate } from 'react-router-dom'

export default function FamilyCode() {
  const [accessCode, setAccessCode] = useState('')
  const [error, setError] = useState(null)
  const [patientData, setPatientData] = useState(null)
  const navigate = useNavigate()
  const familyCode = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0310f3b6fd945619dfb15a3d483773ed12b38f4248de919f3fd823082975f5f6?placeholderIfAbsent=true&apiKey=33b41968e7754d2b98ae74310dc65b2e',
      title: 'Actualizaciones en tiempo real',
      description:
        'Recibe información precisa y actualizada sobre cada paso del procedimiento quirúrgico.'
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a5865196034ab594332eb2437f325fe3a8ac99cbcf729c600a185bcdeeeb479f?placeholderIfAbsent=true&apiKey=33b41968e7754d2b98ae74310dc65b2e',
      title: 'Fácil de usar',
      description:
        'Solo necesitas un código único para acceder al estado del paciente.'
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b0c6c6285c673ad8ca79a71f60d661c6a76c45c2db1c57a9e8313218528150f9?placeholderIfAbsent=true&apiKey=33b41968e7754d2b98ae74310dc65b2e',
      title: 'Seguridad y privacidad',
      description:
        'Todos los datos están protegidos con altos estándares de seguridad.'
    }
  ]

  const handleInputChange = (e) => {
    setAccessCode(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    try {
      const data = await fetchPatientByUUID(accessCode)
      if (data) {
        navigate('/patient-tracker', { state: { patientData: data } })
        setPatientData(data)
      } else {
        setError('No se encontró ningún paciente con ese código.')
      }
    } catch (err) {
      console.error('Error al buscar paciente:', err)
      setError('Ocurrió un error al procesar tu solicitud.')
    }
  }

  return (
    <div className='flex flex-col bg-white'>
      <NavigationFamily /> {/* Cambié Navigation por NavigationFamily */}
      <main className='flex overflow-hidden flex-col w-full bg-slate-50 max-md:max-w-full'>
        <div className='flex flex-col w-full max-md:max-w-full'>
          <div className='flex flex-1 justify-center items-start px-40 py-5 size-full max-md:px-5 max-md:max-w-full'>
            <div className='flex overflow-hidden flex-col flex-1 shrink w-full basis-0 max-w-[960px] min-w-[240px] max-md:max-w-full'>
              <div className='flex flex-col w-full max-md:max-w-full'>
                <img
                  src='../../public/ImagenCirugia.png'
                  className='w-full h-auto mb-5 relative filter brightness-50' // Aplicar filtro de oscuridad más intenso
                />
                <div className='absolute top-72 left-1/3 transform -translate-x-12 text-center'>
                  {' '}
                  {/* Alineación del título y subtítulo */}
                  <h1 className='text-6xl font-bold text-white mb-2'>
                    OpTracker
                  </h1>{' '}
                  {/* Título grande */}
                </div>
                <div className='absolute top-80 left-1/3 transform -translate-x-10 text-center'>
                  {' '}
                  {/* Alineación del subtítulo */}
                  <p className='text-white mt-10'>
                    Accede al estado de tu ser querido en tiempo real
                  </p>{' '}
                  {/* Subtítulo */}
                </div>
                <form
                  onSubmit={handleSubmit}
                  className='absolute top-96 left-1/2 transform -translate-x-1/2 mb-5 flex items-center space-x-2'
                >
                  <FormInput
                    label=''
                    id='accessCode'
                    placeholder='Ingresa tu código'
                    required
                    value={accessCode}
                    onChange={handleInputChange}
                    className='p-4 w-full max-w-[1000px]'
                  />
                  <button
                    type='submit'
                    className='p-4 bg-cyan-600 text-white rounded-lg w-[180px] mt-1'
                  >
                    Consultar estado
                  </button>
                </form>
                {error && (
                  <p className='text-red-500 mt-2 text-center'>{error}</p>
                )}
              </div>
              <section className='flex flex-col justify-center px-4 py-10 w-full text-neutral-900 max-md:max-w-full'>
                <div className='flex flex-col items-start w-full max-md:max-w-full'>
                  <h1 className='max-w-full text-4xl font-black tracking-tighter leading-none w-[720px] max-md:max-w-full'>
                    ¿Cómo te ayudamos?
                  </h1>
                  <p className='mt-4 max-w-full text-base leading-6 w-[720px] max-md:max-w-full'>
                    Nuestro sistema de trazabilidad quirúrgica te brinda
                    información en tiempo real sobre el estado del procedimiento
                    de tu ser querido. Podrás conocer cada etapa del proceso
                    quirúrgico con claridad, reduciendo la incertidumbre y
                    aumentando tu tranquilidad.
                  </p>
                </div>
              </section>
              <h2 className='px-4 pt-5 pb-3 w-full text-2xl font-bold leading-none text-neutral-900 max-md:max-w-full'>
                ¿Por qué elegir <span className='text-cyan-700'>OpTracker</span>
                ?
              </h2>
              <div className='flex flex-col justify-center p-4 w-full max-md:max-w-full'>
                <div className='flex flex-wrap flex-1 gap-3 size-full max-md:max-w-full'>
                  {familyCode.map((card, index) => (
                    <FamilyCard
                      key={index}
                      icon={card.icon}
                      title={card.title}
                      description={card.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
