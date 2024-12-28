function Surgery() {
  return (
    <>
      <div className='p-6 space-y-4'>
        {/* Primera fila */}
        <div className='flex items-center justify-between'>
          <button className='btn btn-icon btn-secondary'>
            <span className='material-icons'>arrow_back</span>
          </button>
          <h1 className='text-2xl font-bold'>Cirugía</h1>
          <button className='btn btn-primary'>Nueva Cirugía</button>
        </div>

        {/* Segunda fila (Filtros) */}
        <div className='flex items-center justify-center gap-4'>
          <button className='btn btn-outline'>Todos</button>
          <button className='btn btn-outline'>Programados</button>
          <button className='btn btn-outline'>En Progreso</button>
          <button className='btn btn-outline'>Completados</button>
          <button className='btn btn-outline'>Cancelados</button>
        </div>

        {/* Tabla */}
        <div className='overflow-x-auto'>
          <table className='table-auto w-full border border-gray-300 rounded-md'>
            <thead className='bg-gray-100'>
              <tr>
                <th className='px-4 py-2 border'>Fecha de Cirugía</th>
                <th className='px-4 py-2 border'>Paciente</th>
                <th className='px-4 py-2 border'>Cirujano</th>
                <th className='px-4 py-2 border'>Operación</th>
                <th className='px-4 py-2 border'>Estado</th>
                <th className='px-4 py-2 border'>Procedimiento</th>
              </tr>
            </thead>
            <tbody>
              {/* Fila de ejemplo */}
              <tr>
                <td className='px-4 py-2 border'>2024-12-27</td>
                <td className='px-4 py-2 border'>Juan Pérez</td>
                <td className='px-4 py-2 border'>Dra. María López</td>
                <td className='px-4 py-2 border'>Apendicectomía</td>
                <td className='px-4 py-2 border'>
                  <span className='badge badge-success'>Completado</span>
                </td>
                <td className='px-4 py-2 border text-center'>
                  <button className='btn btn-sm btn-primary'>
                    Ver Procedimiento
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Surgery
