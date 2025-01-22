import React from 'react'

export default function PatientStatus({ patientData }) {
  const surgery = patientData?.cirugias[0] // Obtener la primera cirugía
  const procedures = surgery?.ProcedurePerSurgery || []

  // Calcular el porcentaje de progreso
  const totalProcedures = procedures.length
  const completedProcedures = procedures.filter((step) => step.done).length
  const progressPercentage =
    totalProcedures > 0 ? (completedProcedures / totalProcedures) * 100 : 0

  const totalDuration = procedures.reduce(
    (acc, step) => acc + (step.procedure?.durationHours || 0),
    0
  ) // Duración total

  // Obtener la fecha de la cirugía y la fecha actual
  const surgeryDate = new Date(surgery?.date) // Ajusta el nombre del campo si es diferente
  const today = new Date()

  // Comparar si la cirugía es hoy
  const isSurgeryToday = surgeryDate.toDateString() === today.toDateString()

  return (
    <div className='patient-status'>
      <div className='status-header'>
        <div className='status-title'>
          {isSurgeryToday
            ? 'La cirugía es hoy'
            : `La cirugía es el ${surgeryDate.toLocaleDateString()}`}
        </div>
      </div>
      <div className='progress-bar'>
        <div
          className='progress-fill'
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className='estimated-time'>
        Tiempo restante estimado: {totalDuration - completedProcedures} horas
      </div>
      <div className='location'>Ubicación: Sala de cirugía</div>
      <style jsx>{`
        .patient-status {
          width: 960px;
          padding: 16px;
          margin-bottom: 32px;
        }
        .status-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .status-title {
          color: #121417;
          font: 500 16px 'Public Sans', sans-serif;
        }
        .progress-bar {
          width: 100%;
          height: 8px;
          background-color: #dbe0e5;
          border-radius: 4px;
          margin-bottom: 12px;
        }
        .progress-fill {
          height: 100%;
          background-color: #121417;
          border-radius: 4px;
        }
        .estimated-time {
          color: #61788a;
          font: 400 14px 'Public Sans', sans-serif;
          margin-bottom: 8px;
        }
        .location {
          color: #000000;
          font: 700 20px/1.2 'Public Sans', sans-serif;
        }
      `}</style>
    </div>
  )
}
