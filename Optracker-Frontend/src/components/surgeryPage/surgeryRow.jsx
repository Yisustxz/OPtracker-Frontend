/* eslint-disable react/prop-types */
export default function SurgeryRow({
  date,
  patient,
  surgeon,
  operation,
  status,
  statusColor
}) {
  return (
    <tr>
      <td className='border border-gray-200 px-4 py-2'>{date}</td>
      <td className='border border-gray-200 px-4 py-2'>{patient}</td>
      <td className='border border-gray-200 px-4 py-2'>{surgeon}</td>
      <td className='border border-gray-200 px-4 py-2'>{operation}</td>
      <td className='border border-gray-200 px-4 py-2'>
        <span
          className={`px-4 my-auto py-2 rounded-xl w-full text-black min-h-[32px] min-w-[84px] ${statusColor}`}
        >
          {status}
        </span>
      </td>
      <td
        className='border border-gray-200 px-4 py-2 text-blue-500'
        style={{ color: '#3D4D5C' }}
      >
        Ver Procedimiento
      </td>
    </tr>
  )
}
