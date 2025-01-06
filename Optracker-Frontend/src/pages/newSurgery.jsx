import Navigation from '../components/ui/navigation'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProcedureSection from '@/components/surgeryPage/newSurgery/procedureSection'

function NewSurgery() {
  const navigate = useNavigate()
  // eslint-disable-next-line no-unused-vars
  const [patients, setPatients] = useState([
    { id: 1, name: 'Juan Pérez', role: 'Paciente' },
    { id: 2, name: 'María López', role: 'Paciente' },
    { id: 3, name: 'Carlos García', role: 'Paciente' }
  ])
  // eslint-disable-next-line no-unused-vars
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: 'Dr. Ana Torres', role: 'Cirujano' },
    { id: 2, name: 'Dr. Luis Gómez', role: 'Anestesista' },
    { id: 3, name: 'Nurse Carla Martínez', role: 'Enfermera' }
  ])

  const [selectedPatient, setSelectedPatient] = useState(null)
  const [selectedTeamMembers, setSelectedTeamMembers] = useState([])

  const [patientSearchValue, setPatientSearchValue] = useState('')
  const [teamSearchValue, setTeamSearchValue] = useState('')

  const [patientDropdownVisible, setPatientDropdownVisible] = useState(false)
  const [teamDropdownVisible, setTeamDropdownVisible] = useState(false)

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient)
    setPatientSearchValue('')
    setPatientDropdownVisible(false)
  }

  const handleSelectTeamMember = (member) => {
    if (!selectedTeamMembers.find((m) => m.id === member.id)) {
      setSelectedTeamMembers([...selectedTeamMembers, member])
    }
    setTeamSearchValue('')
    setTeamDropdownVisible(false)
  }
  return (
    <div className='flex flex-col min-h-screen bg-white '>
      <Navigation />
      <div className='flex flex-col items-center pt-20 px-5'>
        <div className='w-full max-w-[960px]'>
          {/* Título */}

          <header className='mb-8 flex items-center'>
            <span
              onClick={() => navigate('/surgery')}
              className=' bg-white text-black px-2 py-1 rounded-md cursor-pointer'
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
            <h1 className='text-3xl font-bold text-neutral-900 ml-32 mb-1'>
              Nueva Cirugía
            </h1>
          </header>

          {/* Formulario */}
          <form className='space-y-6 bg-white p-6 text-left pr-80'>
            {/* Título de la cirugía */}
            <div>
              <label className='block font-bold text-lg mb-2'>
                Título de la Cirugía
              </label>
              <input
                type='text'
                className='border w-full px-4 py-2 rounded'
                placeholder='Título'
              />
            </div>

            {/* Fecha de la cirugía */}
            <div>
              <label className='block font-bold text-lg mb-2'>
                Fecha de la cirugía
              </label>
              <input type='date' className='border w-full px-4 py-2 rounded' />
            </div>

            {/* Hora de la cirugía */}
            <div>
              <label className='block font-bold text-lg mb-2'>
                Hora de la cirugía
              </label>
              <input type='time' className='border w-full px-4 py-2 rounded' />
            </div>

            {/* Dropdown para buscar pacientes */}
            <div>
              <label className='block font-bold text-lg  mb-2'>Paciente</label>
              <input
                type='text'
                className='border w-full px-4 py-2 rounded mb-2'
                placeholder='Busca a un Paciente'
                value={patientSearchValue}
                onChange={(e) => {
                  setPatientSearchValue(e.target.value)
                  setPatientDropdownVisible(true)
                }}
              />
              {patientDropdownVisible && (
                <ul className='border rounded shadow bg-white max-h-60 overflow-y-auto'>
                  {patients
                    .filter((patient) =>
                      patient.name
                        .toLowerCase()
                        .includes(patientSearchValue.toLowerCase())
                    )
                    .map((patient) => (
                      <li
                        key={patient.id}
                        className='flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer'
                        onClick={() => handleSelectPatient(patient)}
                      >
                        <img
                          src='usuario_generico.png'
                          alt='Perfil genérico'
                          className='w-10 h-10 rounded-full mr-3'
                        />
                        <div>
                          <p className='font-medium'>{patient.name}</p>
                          <p className='text-sm text-gray-500'>
                            {patient.role}
                          </p>
                        </div>
                      </li>
                    ))}
                </ul>
              )}
            </div>

            {/* Paciente seleccionado */}
            <div>
              {selectedPatient ? (
                <div className='flex items-center px-4 py-2'>
                  <img
                    src='usuario_generico.png'
                    alt='Perfil genérico'
                    className='w-10 h-10 rounded-full mr-3'
                  />
                  <div>
                    <p className='font-medium'>{selectedPatient.name}</p>
                    <p className='text-sm text-gray-500'>
                      {selectedPatient.role}
                    </p>
                  </div>
                </div>
              ) : (
                <p className='text-gray-500'>Paciente no seleccionado</p>
              )}
            </div>

            {/* Dropdown para buscar miembros del equipo quirúrgico */}
            <div>
              <label className='block font-bold text-lg  mb-2'>
                Equipo Quirurgico que participara
              </label>
              <input
                type='text'
                className='border w-full px-4 py-2 rounded mb-2'
                placeholder='Buscar miembro de equipo'
                value={teamSearchValue}
                onChange={(e) => {
                  setTeamSearchValue(e.target.value)
                  setTeamDropdownVisible(true)
                }}
              />
              {teamDropdownVisible && (
                <ul className='border rounded shadow bg-white max-h-60 overflow-y-auto'>
                  {teamMembers
                    .filter((member) =>
                      member.name
                        .toLowerCase()
                        .includes(teamSearchValue.toLowerCase())
                    )
                    .map((member) => (
                      <li
                        key={member.id}
                        className='flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer'
                        onClick={() => handleSelectTeamMember(member)}
                      >
                        <img
                          src='usuario_generico.png'
                          alt='Perfil genérico'
                          className='w-10 h-10 rounded-full mr-3'
                        />
                        <div>
                          <p className='font-medium'>{member.name}</p>
                          <p className='text-sm text-gray-500'>{member.role}</p>
                        </div>
                      </li>
                    ))}
                </ul>
              )}
            </div>

            {/* Lista de miembros seleccionados */}
            <div>
              <ul>
                {selectedTeamMembers.map((member) => (
                  <li key={member.id} className='flex items-center px-4 py-2'>
                    <img
                      src='usuario_generico.png'
                      alt='Perfil genérico'
                      className='w-10 h-10 rounded-full mr-3'
                    />
                    <div>
                      <p className='font-medium'>{member.name}</p>
                      <p className='text-sm text-gray-500'>{member.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </form>

          {/* Sección de procedimientos */}
          <ProcedureSection />
        </div>
      </div>
    </div>
  )
}

export default NewSurgery
