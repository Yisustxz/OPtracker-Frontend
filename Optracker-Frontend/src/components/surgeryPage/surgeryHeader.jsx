import { useNavigate } from 'react-router-dom'

function PatientHeader() {
  const navigate = useNavigate()
  return (
    <div className='flex flex-wrap gap-3 justify-between items-start p-4 w-full text-neutral-900 max-md:max-w-full mt-10'>
      <h1 className='w-72 text-3xl font-bold leading-none whitespace-nowrap min-w-[288px]'>
        Cirugia
      </h1>

      <button
        className='flex overflow-hidden justify-center items-center px-4 text-sm font-medium text-center bg-[#577C8E] rounded-xl max-w-[480px] min-h-[32px] min-w-[84px] w-[134px] cursor-pointer text-white'
        onClick={() => navigate('/new-surgery')}
      >
        Nueva Cirugía
      </button>
    </div>
  )
}

export default PatientHeader
