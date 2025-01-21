import React, { useState } from 'react'
import NavigationFamily from '../components/ui/NavigationFamily'
import TeamMember from '../components/SuregyTracker/TeamMember'
import PatientStatus from '../components/SuregyTracker/PatientStatus'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const timelineSteps = [
  { title: 'Llegada del paciente', time: '8:00 AM' },
  { title: 'Pre-cirugía', time: '8:30 AM' },
  { title: 'En cirugía', time: '9:00 AM' },
  { title: 'Post-cirugía', time: '' },
  { title: 'El paciente se va', time: '' }
]

const teamMembers = [
  {
    avatar:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/87a0203cc22e61e33426ce5e0ea0869af100586342bc20097f102519a81f6a00',
    role: 'Cirujano principal',
    name: 'Dr. John Doe'
  },
  {
    avatar:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/79979c7910a7b7992f1119821d7076c93d5ae0192761aed6c99698a14f9ca23e',
    role: 'Enfermera anestesista',
    name: 'Dr. Bob Doe'
  }
]

export default function PatientTracker() {
  const initialCheckedItems = timelineSteps.map((step) =>
    step.time ? true : false
  )
  const [checkedItems, setCheckedItems] = useState(initialCheckedItems)

  const handleCheckboxChange = (index) => {
    if (timelineSteps[index].time && !checkedItems[index]) {
      // Solo permitir marcar si no está marcado
      const updatedCheckedItems = [...checkedItems]
      updatedCheckedItems[index] = true // Marcar el checkbox
      setCheckedItems(updatedCheckedItems)
    }
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
          007
        </div>

        <section className='team-section'>
          <h2 className='team-title'>Equipo quirúrgico</h2>
          <div className='team-container'>
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                avatar={member.avatar}
                role={member.role}
                name={member.name}
              />
            ))}
            <div
              style={{
                textAlign: 'right',
                marginTop: '30px',
                fontSize: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                cursor: 'pointer'
              }}
            >
              <span></span>
              <span
                style={{ color: 'blue', transition: 'color 0.3s' }}
                onMouseEnter={(e) => (e.target.style.color = 'darkblue')}
                onMouseLeave={(e) => (e.target.style.color = 'blue')}
              >
                Ver más
              </span>
            </div>
          </div>
        </section>

        <section className='status-section'>
          <PatientStatus />
        </section>

        <section className='timeline-section'>
          <div className='timeline-container'>
            {timelineSteps.map((step, index) => (
              <div key={index} className='timeline-step'>
                <input
                  type='checkbox'
                  checked={checkedItems[index]}
                  onChange={() => handleCheckboxChange(index)}
                  onClick={(e) => e.stopPropagation()} // Evitar que el evento de clic se propague
                  disabled={!step.time || checkedItems[index]} // Deshabilitar el checkbox si no hay tiempo o si ya está marcado
                />
                {/* Se eliminó el icono para los pasos no marcados */}
                <span>
                  {step.title} - {step.time}
                </span>
              </div>
            ))}
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
          margin-bottom: 40px; /* Añadido margen inferior para separación */
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
        .timeline-step input {
          margin-right: 8px;
          appearance: none;
          width: 20px;
          height: 20px;
          border: 2px solid #ccc;
          background-color: white;
          border-radius: 4px;
          cursor: pointer;
        }
        .timeline-step input:checked {
          background-color: #007bff; /* Cambiar el color de fondo cuando está marcado */
          border: 2px solid #007bff; /* Cambiar el borde cuando está marcado */
        }
      `}</style>
    </div>
  )
}
