import { useNavigate } from 'react-router-dom'

function PatientHeader() {
  const navigate = useNavigate()
  return (
    <div className='flex flex-wrap gap-3 justify-between items-start p-4 w-full text-neutral-900 max-md:max-w-full mt-10'>
      <h1 className='w-72 text-3xl font-bold leading-none whitespace-nowrap min-w-[288px]'>
        Cirugía
      </h1>

      <button
        className='flex justify-center items-center text-sm font-medium text-center rounded-xl max-w-[480px] cursor-pointer text-neutral-900 bg-transparent border-none p-0'
        onClick={() => navigate('/new-surgery')}
      >
        Nueva Cirugía
      </button>
    </div>
  )
}

export default PatientHeader
