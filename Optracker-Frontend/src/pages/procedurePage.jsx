import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from '../components/ui/navigation'

export default function ProcedurePage() {
  const navigate = useNavigate()
  const [procedures, setProcedures] = useState([
    { id: 1, name: 'Revisión de Propietario', completed: false }, // Cambiado a false
    { id: 2, name: 'Pre Cirugía', completed: false },
    { id: 3, name: 'Cirugía', completed: false },
    { id: 4, name: 'Post Cirugía', completed: false },
    { id: 5, name: 'El paciente se va', completed: false }
  ])

  const [newProcedureName, setNewProcedureName] = useState('')

  const toggleProcedure = (id) => {
    setProcedures((prev) =>
      prev.map((proc, index) => {
        if (proc.id === id) {
          // Verificar si el procedimiento anterior está completado
          if (index === 0 || prev[index - 1].completed) {
            return { ...proc, completed: !proc.completed }
          }
          return proc; // No cambiar si el anterior no está completado
        }
        return proc
      })
    )
  }

  const addProcedure = () => {
    if (newProcedureName.trim()) {
      setProcedures((prev) => [
        ...prev,
        { id: prev.length + 1, name: newProcedureName, completed: false }
      ])
      setNewProcedureName('')
    }
  }

  const handleSubmit = () => {
    console.log('Procedures submitted:', procedures)
    // Aquí puedes enviar los datos al backend o manejar la acción deseada
    alert('Procedures sent successfully!')
  }

  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <Navigation />
      <div className='flex flex-col items-center pt-20 px-5'>
        <div className='w-full max-w-[960px]'>
          {/* Título */}
          <header className='mb-8 flex items-center'>
            <span
              onClick={() => navigate('/surgery')}
              className='bg-white text-black px-2 py-1 rounded-md cursor-pointer'
            >
              <svg
                className='w-6 h-6 text-gray-800 dark:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 8 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13'
                />
              </svg>
            </span>
            <h1 className='text-3xl font-bold text-neutral-900 ml-20 mb-1'>
              Cirugía de reemplazo de rodilla izquierda
            </h1>
          </header>

          {/* Lista de procedimientos */}
          <ul>
            {procedures.map((procedure) => (
              <li key={procedure.id} className='flex items-center mb-8'>
                <input
                  type='checkbox'
                  checked={procedure.completed}
                  onChange={() => toggleProcedure(procedure.id)}
                  className='mr-2 border border-gray-300 bg-white'
                />
                <span
                  className={
                    procedure.completed
                      ? 'text-gray-500 line-through'
                      : 'text-[#121417] font-public-sans text-[18px] font-bold leading-[23px] text-left'
                  }
                >
                  {procedure.name}
                </span>
              </li>
            ))}
          </ul>

          {/* Agregar nuevo procedimiento */}
          <div className='flex items-center gap-4 mb-8'>
            <input
              type='text'
              value={newProcedureName}
              onChange={(e) => setNewProcedureName(e.target.value)}
              placeholder='Agregar nuevo procedimiento'
              className='border border-gray-300 bg-white rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <button
              onClick={addProcedure}
              className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
            >
              Agregar
            </button>
          </div>

          {/* Botones de acción */}
          <div className='flex justify-center gap-4'>
          <button
              onClick={handleSubmit}
              className='bg-red-500 text-white w-1/2 py-2 rounded-md hover:bg-red-600'
            >
              Cancelar Procedimiento
            </button>
            <button
              onClick={handleSubmit}
              className='bg-green-500 text-white w-1/2 py-2 rounded-md hover:bg-green-600'
            >
              Listo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
