/* eslint-disable react/prop-types */
export default function SurgeryRow({
  date,
  patient,
  surgeon,
  operation,
  status
}) {
  const statusClasses = {
    Completado: 'bg-green-100 text-green-700',
    'En progreso': 'bg-yellow-100 text-yellow-700',
    Cancelado: 'bg-red-100 text-red-700',
    Programado: 'bg-blue-100 text-blue-700'
  }

  return (
    <tr>
      <td className='border border-gray-200 px-4 py-2'>{date}</td>
      <td className='border border-gray-200 px-4 py-2'>{patient}</td>
      <td className='border border-gray-200 px-4 py-2'>{surgeon}</td>
      <td className='border border-gray-200 px-4 py-2'>{operation}</td>
      <td className='border border-gray-200 px-4 py-2'>
        <span className={`px-2 py-1 rounded ${statusClasses[status]}`}>
          {status}
        </span>
      </td>
      <td className='border border-gray-200 px-4 py-2 text-blue-500 hover:underline'>
        Ver Procedimiento
      </td>
    </tr>
  )
}
