import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navigation from '../components/ui/navigation'
import axios from 'axios'

export default function ProcedurePage() {
  const navigate = useNavigate()
  const { id } = useParams() // Obtener el id de la URL
  const [procedures, setProcedures] = useState([])
  const [newProcedureName, setNewProcedureName] = useState('')
  const [surgery, setSurgery] = useState()

  useEffect(() => {
    const fetchSurgery = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/surgery/${id}`)
        const surgery = response.data
        setSurgery(response.data)
        const procedureList = surgery.ProcedurePerSurgery.map(proc => ({
          id: proc.procedure.id,
          name: proc.procedure.name,
          completed: proc.done,
          createdAt: proc.procedure.createdAt // Traer createdAt del procedimiento
        })) // Ordenar por createdAt
        setProcedures(procedureList)
      } catch (error) {
        console.error("Error fetching surgery:", error)
      }
    }

    fetchSurgery()
  }, [id])

  const toggleProcedure = async (id, procedureId) => {
    console.log(id)
    setProcedures((prev) =>
      prev.map((proc, index) => {
        if (procedureId === proc.id) {
          const canToggle = index === 0 || prev[index - 1].completed; // Verificar si se puede marcar el checkbox
          if (canToggle) {
            console.log(id, proc.id)
            const updatedCompleted = !proc.completed && !proc.completed; // No permitir desmarcar si ya está completado
            // Llamar a la API para actualizar el estado del procedimiento
            axios.patch(`http://localhost:3000/surgery/procedure/status`, {
              surgeryId: Number(id), // Cambiar según el id de la cirugía
              procedureId: Number(proc.id),
              done: updatedCompleted
            }).then(response => {
              console.log(response);
            }).catch(error => {
              console.error("Error updating procedure status:", error);
            });
            return { ...proc, completed: updatedCompleted }
          }
        }
        return proc
      })
    )
  }

  const handleCancelProcedure = async () => {
    try {
      const { title, date, patientId, nurseIds, doctorIds, procedureIds } = surgery; // Obtener datos de surgery
      await axios.patch(`http://localhost:3000/surgery/${id}`, {
        title,
        date,
        status: "CANCELLED",
        patientId,
        nurseIds,
        doctorIds,
        procedureIds
      });
      alert('Procedimiento cancelado exitosamente!');
      navigate('/surgery'); // Redirigir a la página de cirugía
    } catch (error) {
      console.error("Error canceling procedure:", error);
    }
  }

  const handleSubmit = () => {
    console.log('Procedures submitted:', procedures)
    alert('Procedures sent successfully!')
  }

  const allCompleted = procedures.every(proc => proc.completed); // Verificar si todos los procedimientos están completados

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
            {procedures
              .map((procedure) => (
                <li key={procedure.id} className='flex items-center mb-8'>
                  <input
                    type='checkbox'
                    checked={procedure.completed}
                    onChange={() => procedure.completed ? null : toggleProcedure(id, procedure.id)} // No permitir desmarcar si está completado
                    className='mr-2 border border-gray-300 bg-white'
                    disabled={procedure.completed || (surgery && surgery.status === "CANCELLED")} // Deshabilitar el checkbox si está completado o si la cirugía está cancelada
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

          {/* Botones de acción */}
          {surgery && surgery.status !== "CANCELLED" && surgery.status !== "DONE" && ( // Mostrar botones solo si la cirugía no está cancelada
            <div className='flex justify-center gap-4'>
              <button
                onClick={handleCancelProcedure}
                className='bg-red-500 text-white w-1/2 py-2 rounded-md hover:bg-red-600'
              >
                Cancelar Procedimiento
              </button>
              <button
                onClick={handleSubmit}
                disabled={!allCompleted} // Deshabilitar el botón si no todos los procedimientos están completados
                className={`w-1/2 py-2 rounded-md ${allCompleted ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
              >
                Listo
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
