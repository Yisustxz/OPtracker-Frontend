/* eslint-disable react/prop-types */
import SurgeryRow from './surgeryRow'

export default function SurgeryTable({ surgeries }) {
  return (
    <table className='w-full border-collapse border border-gray-200'>
      <thead>
        <tr className='bg-gray-100'>
          <th className='border border-gray-200 px-4 py-2'>Fecha de cirugía</th>
          <th className='border border-gray-200 px-4 py-2'>Paciente</th>
          <th className='border border-gray-200 px-4 py-2'>Cirujano</th>
          <th className='border border-gray-200 px-4 py-2'>Operación</th>
          <th className='border border-gray-200 px-4 py-2'>Status</th>
          <th className='border border-gray-200 px-4 py-2'>Procedimiento</th>
        </tr>
      </thead>
      <tbody>
        {surgeries.map((surgery) => (
          <SurgeryRow key={surgery.id} {...surgery} />
        ))}
      </tbody>
    </table>
  )
}
