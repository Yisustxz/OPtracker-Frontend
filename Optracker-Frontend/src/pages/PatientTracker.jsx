import React, { useState, useEffect } from 'react'
import NavigationFamily from '../components/ui/NavigationFamily'
import TeamMember from '../components/SuregyTracker/TeamMember'
import PatientStatus from '../components/SuregyTracker/PatientStatus'
import { useLocation, useNavigate } from 'react-router-dom'
import { fetchPatientByUUID } from '../services/patientServices'

export default function PatientTracker() {
  const location = useLocation()
  const patientDataFromLocation = location.state?.patientData
  const surgery = patientDataFromLocation?.cirugias[0] // Obtener la primera cirugía
  const procedures = surgery?.ProcedurePerSurgery || []
  const navigate = useNavigate()

  // Extraer los miembros del equipo
  const doctor = surgery?.DoctorSurgery[0]?.doctor
  const nurse = surgery?.NurseSurgery[0]?.nurse

  // Inicializar los estados de los procedimientos basados en `done`
  const [checkedItems, setCheckedItems] = useState(
    procedures.map((step) => step.done)
  )

  const [patientData, setPatientData] = useState(patientDataFromLocation)

  // Función para obtener los datos actualizados del paciente
  const getUpdatedPatientData = async (familyCode) => {
    try {
      const updatedPatient = await fetchPatientByUUID(familyCode)
      const updatedProcedures =
        updatedPatient.cirugias[0]?.ProcedurePerSurgery || []

      // Compara el estado de los procedimientos y actualiza el estado de los checkboxes
      const updatedCheckedItems = updatedProcedures.map((step, index) => {
        return step.done
      })
      setCheckedItems(updatedCheckedItems)
      setPatientData(updatedPatient) // Actualiza el estado de patientData
    } catch (error) {
      console.error('Error al obtener los datos del paciente:', error)
    }
  }

  // useEffect para hacer el fetch del paciente y actualizar los checkboxes
  useEffect(() => {
    if (patientDataFromLocation?.familyCode) {
      getUpdatedPatientData(patientDataFromLocation.familyCode)
    }
  }, [patientDataFromLocation])

  // Manejar el cambio en los checkboxes
  const handleCheckboxChange = (index) => {
    const updatedCheckedItems = [...checkedItems]
    updatedCheckedItems[index] = true // Solo permitir marcar como hecho
    setCheckedItems(updatedCheckedItems)
  }

  return (
    <div className='patient-tracker'>
      <NavigationFamily />

      <main className='main-content' style={{ marginTop: '90px' }}>
        <div
          className='patient-id'
          style={{
            textAlign: 'center',
            position: 'absolute',
            top: '1%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          {patientData?.familyCode || 'N/A'}
        </div>

        {/* Equipo Quirúrgico */}
        <section className='team-section'>
          <h2 className='team-title'>Equipo quirúrgico</h2>
          <div className='team-container'>
            {doctor && (
              <TeamMember
                avatar='https://i.pinimg.com/550x/a8/0e/36/a80e3690318c08114011145fdcfa3ddb.jpg'
                role={`Doctor: ${doctor.speciality}`}
                name={`${doctor.names} ${doctor.lastNames}`}
              />
            )}
            {nurse && (
              <TeamMember
                avatar='https://i.pinimg.com/550x/a8/0e/36/a80e3690318c08114011145fdcfa3ddb.jpg'
                role={`Enfermero: ${nurse.speciality}`}
                name={`${nurse.name} ${nurse.lastName}`}
              />
            )}
            <div
              style={{
                textAlign: 'right',
                marginTop: '60px',
                fontSize: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                cursor: 'pointer'
              }}
            >
              <span
                className='flex overflow-hidden justify-center items-center text-sm font-medium text-center bg-[#577C8E] rounded-xl max-w-[480px]  min-w-[84px] w-[160px] cursor-pointer transition hover:bg-[#425c69] mb-14 py-3'
                aria-label='Ver más'
              >
                <span
                  className='overflow-hidden self-stretch my-auto w-[300px] text-white cursor-pointer'
                  onClick={() =>
                    navigate('/surgery-info', { state: { patientData } })
                  }
                >
                  Ver más
                </span>
              </span>
            </div>
          </div>
        </section>

        {/* Estado del Paciente */}
        <section className='status-section'>
          <PatientStatus patientData={patientData} />{' '}
          {/* Pasa los datos actualizados */}
        </section>

        {/* Línea de tiempo */}
        <section className='timeline-section'>
          <div className='timeline-container'>
            {procedures.map((step, index) => (
              <div key={index} className='timeline-step'>
                <div
                  className={`checkbox-indicator ${
                    checkedItems[index] ? 'done' : 'pending'
                  }`}
                />
                <span>
                  {step.procedure.name} -{' '}
                  {step.procedure.durationHours > 0
                    ? `${step.procedure.durationHours}h`
                    : '30 min'}
                </span>
              </div>
            ))}
          </div>
          <div className='flex justify-center'>
            <span
              className='flex overflow-hidden justify-center items-center text-sm font-medium text-center bg-[#577C8E] rounded-xl max-w-[480px]  min-w-[84px] w-[160px] cursor-pointer transition hover:bg-[#425c69] mb-4 py-3'
              onClick={() =>
                navigate('/satisfactionrating', { state: { patientData } })
              }
            >
              <span className='text-white'>Evaluar Cirugía</span>
            </span>
          </div>
          <div className='info-text'>
            Esta información está destinada a la familia y amigos del paciente.
          </div>
        </section>
      </main>

      <style jsx>{`
        .patient-tracker {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          background-color: #ffffff;
        }
        .main-content {
          padding: 40px;
          position: relative;
        }
        .patient-id {
          position: absolute;
          right: 40px;
          top: 20px;
          color: #121417;
          font: 700 32px/1 'Public Sans', sans-serif;
        }
        .status-section {
          margin-bottom: 40px;
        }
        .timeline-section {
          margin-bottom: 40px;
        }
        .info-text {
          color: #61788a;
          font: 400 14px 'Public Sans', sans-serif;
          margin-bottom: 24px;
          padding: 0 16px;
        }
        .timeline-container {
          padding: 0 16px;
        }
        .team-section {
          padding: 0 16px;
          margin-bottom: 40px;
        }
        .team-title {
          color: #121417;
          font: 700 22px/1 'Public Sans', sans-serif;
          margin-bottom: 24px;
          text-align: center;
        }
        .team-container {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          justify-content: center;
        }
        .timeline-step {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
        }
        .checkbox-indicator {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          margin-right: 8px;
          border: 2px solid #ccc;
          transition: background-color 0.3s, border-color 0.3s;
        }
        .checkbox-indicator.pending {
          background-color: white;
          border-color: #ccc;
        }
        .checkbox-indicator.done {
          background-color: #28a745;
          border-color: #28a745;
        }
        .timeline-step span {
          font-size: 14px;
        }
        .timeline-step input:checked {
          background-color: #007bff;
          border: 2px solid #007bff;
        }
      `}</style>
    </div>
  )
}
