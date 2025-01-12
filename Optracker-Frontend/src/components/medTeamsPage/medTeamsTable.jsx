function MedTeamsTable({ equipo }) {
  return (
    <div className='overflow-x-auto rounded-lg cursor-default'>
      <table className='w-full border-collapse border border-gray-200 text-left cursor-default'>
        <thead>
          <tr className='bg-gray-100 cursor-default'>
            <th className='border border-gray-200 px-10 py-2 font-medium cursor-default'>
              Nombre
            </th>
            <th className='border border-gray-200 px-10 py-2 '>Especialidad</th>
            <th className='border border-gray-200 px-10 py-2 '>Tipo</th>
            <th className='border border-gray-200 px-10 py-2 '>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {equipo.map((persona, index) => (
            <tr key={index} className='hover:bg-gray-50'>
              <td className='px-10 py-5 border-b cursor-default'>
                {persona.nombre}
              </td>
              <td className='px-10 py-5 border-b text-gray-400 cursor-default'>
                {persona.especialidad}
              </td>
              <td className='px-10 py-5 border-b text-gray-400'>
                {persona.tipo}
              </td>
              <td className='px-10 py-5 border-b text-center'>
                <button className='text-gray-400 hover:underline '>
                  <i className='fas fa-eye' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MedTeamsTable
