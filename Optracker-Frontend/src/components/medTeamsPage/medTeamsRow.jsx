/* eslint-disable react/prop-types */
export default function MedTeamsRow({ nombre, especialidad, tipo }){
    return (
        <tr>
          <td className='border border-gray-200 px-4 py-2'>{nombre}</td>
          <td className='border border-gray-200 px-4 py-2 text-blue-500'>{especialidad}</td>
          <td className='border border-gray-200 px-4 py-2'>{tipo}</td>
        </tr>
      );
    }