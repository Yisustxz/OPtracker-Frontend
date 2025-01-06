/* eslint-disable react/prop-types */
'react'
import Navigation from '../components/ui/navigation'
import { useNavigate } from 'react-router-dom'
function SurgeryData({ surgeryInfo, team = [], procedures = [] }) {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col pt-24 bg-white'>
      {/* Main Container */}
      <div className='flex overflow-hidden flex-col w-full bg-white min-h-[800px] max-md:max-w-full'>
        <div className='flex relative flex-col w-full max-md:max-w-full'>
          <Navigation />

          {/* Content Wrapper */}
          <div className='flex relative z-0 justify-center items-start px-40 py-5 w-full max-md:px-5 max-md:max-w-full'>
            <div className='flex overflow-hidden z-0 flex-col flex-1 shrink w-full basis-0 max-w-[960px] min-w-[240px] max-md:max-w-full'>
              {/* Header */}
              <div className='flex items-center mb-6'>
                <span
                  onClick={() => navigate('/surgery')}
                  className='bg-white text-black px-2 py-1 rounded-md cursor-pointer flex items-center mr-4'
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
                <h1 className='text-2xl font-bold text-center ml-32'>
                  {`Cirugía de ${surgeryInfo.patientName} (${surgeryInfo.date})`}
                </h1>
              </div>

              {/* Surgical Team Section */}
              <div className='flex flex-col items-center mb-6'>
                <h2 className='text-lg font-bold mb-4 text-center'>
                  Equipo quirúrgico
                </h2>
                <div className='grid grid-cols-2 gap-4 w-full max-w-[800px]'>
                  {team.map((member, index) => (
                    <div
                      key={index}
                      className='flex items-center p-4  rounded-md'
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className='w-12 h-12 rounded-full mr-4'
                      />
                      <div className='flex flex-col'>
                        <span className='font-medium'>{member.role}</span>
                        <span className='text-sm text-gray-500'>
                          {member.name}
                        </span>
                      </div>
                      <button className='ml-auto text-blue-500 border-none'>
                        <button className='ml-2 '>
                          <img
                            src='pencil-icon.png'
                            alt='Edit'
                            className='w-4 h-4'
                          />
                        </button>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Procedures Section */}
              <div className='mb-6'>
                <h2 className='text-lg font-bold mb-4 text-left'>
                  Procedimientos
                </h2>
                <div className='grid grid-cols-2 gap-4 w-full max-w-[800px]'>
                  {procedures.map((procedure, index) => (
                    <div key={index} className='flex items-center p-4  '>
                      <img
                        src={procedure.image}
                        alt={procedure.name}
                        className='w-6 h-6 mr-4'
                      />
                      <div className='flex flex-col flex-1'>
                        <span className='font-medium'>{procedure.name}</span>
                        <span className='text-sm text-gray-500'>
                          {procedure.responsible}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accept Button */}
              <div className='flex justify-center'>
                <button className='bg-blue-500 text-white font-medium py-2 px-8 rounded hover:bg-blue-700'>
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Example data for props
const exampleSurgeryInfo = {
  patientName: 'Maggie Smith',
  date: '01/06/2022'
}

const exampleTeam = [
  {
    role: 'Cirujano principal',
    name: 'Dr. John Doe',
    image: 'usuario_generico.png'
  },
  {
    role: 'Anestesiólogo',
    name: 'Dr. Jane Doe',
    image: 'usuario_generico.png'
  },
  {
    role: 'Asistente de cirugía',
    name: 'Dr. Chris Doe',
    image: 'usuario_generico.png'
  },
  {
    role: 'Enfermera anestesista',
    name: 'Dr. Bob Doe',
    image: 'usuario_generico.png'
  },
  {
    role: 'Enfermera circulante',
    name: 'Dr. Alice Doe',
    image: 'usuario_generico.png'
  },
  {
    role: 'Enfermera circulante',
    name: 'Dr. Alice Doe',
    image: 'usuario_generico.png'
  }
]

const exampleProcedures = [
  {
    name: 'Incisión',
    responsible: 'Dr. John Doe',
    image: 'procedure-image.png'
  },
  {
    name: 'Extracción de tumor',
    responsible: 'Dr. John Doe',
    image: 'procedure-image.png'
  },
  {
    name: 'Anestesia general',
    responsible: 'Dr. Jane Doe',
    image: 'procedure-image.png'
  },
  {
    name: 'Administración de anestesia',
    responsible: 'Dr. Bob Doe',
    image: 'procedure-image.png'
  },
  {
    name: 'Monitorización de signos vitales',
    responsible: 'Dr. Alice Doe',
    image: 'procedure-image.png'
  },
  {
    name: 'Asistente en incisión',
    responsible: 'Dr. Chris Doe',
    image: 'procedure-image.png'
  }
]

export default function App() {
  return (
    <SurgeryData
      surgeryInfo={exampleSurgeryInfo}
      team={exampleTeam}
      procedures={exampleProcedures}
    />
  )
}
