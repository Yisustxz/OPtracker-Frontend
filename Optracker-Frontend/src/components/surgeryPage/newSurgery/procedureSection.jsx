import { useState } from 'react'

function ProcedureSection() {
  // Lista completa de procedimientos predefinidos
  const allProcedures = [
    {
      id: 1,
      title: 'Revision Propietario',
      description: 'Laparoscopic cholecystectomy'
    },
    {
      id: 2,
      title: 'Cholecystectomy',
      description: 'Laparoscopic cholecystectomy'
    },
    {
      id: 3,
      title: 'Appendectomy',
      description: 'Laparoscopic appendectomy'
    },
    {
      id: 4,
      title: 'Hernia Repair',
      description: 'Laparoscopic inguinal hernia repair'
    },
    {
      id: 5,
      title: 'Gastrectomy',
      description: 'Partial gastrectomy procedure'
    }
  ]

  const [procedures, setProcedures] = useState([]) // Lista de procedimientos seleccionados
  const [searchTerm, setSearchTerm] = useState('') // Término de búsqueda

  // Filtra procedimientos según el término de búsqueda
  const filteredProcedures = allProcedures.filter((procedure) =>
    procedure.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleAddProcedure = (procedure) => {
    // Evita añadir procedimientos duplicados
    if (!procedures.some((p) => p.id === procedure.id)) {
      setProcedures([...procedures, procedure])
    }
    setSearchTerm('') // Limpia el input de búsqueda
  }

  return (
    <div className='p-6 bg-white rounded shadow'>
      {/* Header */}
      <h2 className='text-xl font-bold mb-4'>Procedimiento</h2>

      {/* Input de búsqueda */}
      <div className='flex items-center gap-4 mb-6'>
        <input
          type='text'
          className='border rounded w-full px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300'
          placeholder='Buscar procedimiento'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Lista de resultados de búsqueda */}
      {searchTerm && (
        <div className='mb-6'>
          <h3 className='text-lg font-medium mb-2'>Resultados:</h3>
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
            {filteredProcedures.length > 0 ? (
              filteredProcedures.map((procedure) => (
                <button
                  key={procedure.id}
                  onClick={() => handleAddProcedure(procedure)}
                  className='flex items-center gap-4 p-4 border rounded shadow hover:shadow-md transition'
                >
                  {/* Icono */}
                  <div className='bg-gray-100 p-3 rounded-full'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6 text-gray-600'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 6v12m6-6H6'
                      />
                    </svg>
                  </div>
                  {/* Texto */}
                  <div>
                    <h3 className='font-semibold text-gray-800'>
                      {procedure.title}
                    </h3>
                    <p className='text-sm text-gray-500'>
                      {procedure.description}
                    </p>
                  </div>
                </button>
              ))
            ) : (
              <p className='col-span-2 sm:col-span-3 text-gray-500'>
                No se encontraron resultados.
              </p>
            )}
          </div>
        </div>
      )}

      {/* Lista de procedimientos seleccionados */}
      <div>
        <h3 className='text-lg font-medium mb-2'>
          Procedimientos seleccionados:
        </h3>
        {procedures.length > 0 ? (
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
            {procedures.map((procedure) => (
              <div
                key={procedure.id}
                className='flex items-center gap-4 p-4 border rounded shadow hover:shadow-md transition'
              >
                {/* Icono */}
                <div className='bg-gray-100 p-3 rounded-full'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6 text-gray-600'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M12 6v12m6-6H6'
                    />
                  </svg>
                </div>
                {/* Texto */}
                <div>
                  <h3 className='font-semibold text-gray-800'>
                    {procedure.title}
                  </h3>
                  <p className='text-sm text-gray-500'>
                    {procedure.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className='text-gray-500'>No se han añadido procedimientos.</p>
        )}
      </div>
    </div>
  )
}

export default ProcedureSection
