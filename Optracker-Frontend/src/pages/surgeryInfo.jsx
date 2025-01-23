import React from 'react'
import Navigation from '../components/ui/navigation'
import { useNavigate, useLocation } from 'react-router-dom'

function SurgeryInfo() {
  const navigate = useNavigate()
  const location = useLocation()
  const patientData = location.state?.patientData
  console.log(patientData)
  const surgery = patientData.cirugias[0] // Tomar la primera cirugía como ejemplo
  const team = [
    ...surgery.DoctorSurgery.map((ds) => ({
      role: 'Doctor',
      name: `${ds.doctor.names} ${ds.doctor.lastNames}`,
      image: 'usuario_generico.png' // Cambiar por la URL correcta si existe
    })),
    ...surgery.NurseSurgery.map((ns) => ({
      role: 'Nurse',
      name: `${ns.nurse.name} ${ns.nurse.lastName}`,
      image: 'usuario_generico.png' // Cambiar por la URL correcta si existe
    }))
  ]
  const procedures = surgery.ProcedurePerSurgery.map((pps) => ({
    name: pps.procedure.name,
    responsible: pps.procedure.description,
    image: 'procedure-image.png' // Cambiar por la URL correcta si existe
  }))

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
                  onClick={() =>
                    navigate('/patient-tracker', {
                      state: { patientData } // Pasar de nuevo el estado al volver
                    })
                  }
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
                <h1 className='text-2xl font-bold text-center ml-24'>
                  {`Cirugía de ${patientData.nombre} (${new Date(
                    surgery.date
                  ).toLocaleDateString()})`}
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
                    <div key={index} className='flex items-center p-4'>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SurgeryInfo
