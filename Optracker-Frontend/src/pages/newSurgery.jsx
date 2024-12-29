import Navigation from '../components/ui/navigation'

function NewSurgery() {
  return (
    <div className='flex flex-col pt-1.5 bg-white'>
      <div className='flex overflow-hidden flex-col w-full bg-white min-h-[800px] max-md:max-w-full'>
        <div className='flex relative flex-col w-full max-md:max-w-full'>
          <Navigation />
          <div className='flex relative z-0 justify-center items-start px-40 py-5 w-full max-md:px-5 max-md:max-w-full'>
            <div className='flex overflow-hidden z-0 flex-col flex-1 shrink w-full basis-0 max-w-[960px] min-w-[240px] max-md:max-w-full'>
              <div className='flex flex-wrap gap-3 justify-between items-start p-4 w-full text-neutral-900 max-md:max-w-full mt-10'>
                <h1 className='w-72 text-3xl font-bold leading-none whitespace-nowrap min-w-[288px]'>
                  Nueva Cirugia
                </h1>
              </div>
              
                <form className="space-y-4 text-left">
                <div className="grid grid-cols-1 gap-4 mt-3">
                  {/* Título */}
                  <div>
                    <label className="block font-medium mb-2">Título de la Cirugía</label>
                    <input
                      type="text"
                      className="border w-full px-4 py-2 rounded"
                      placeholder="Título"
                    />
                  </div>
                  {/* Fecha */}
                  <div>
                    <label className="block font-medium mb-2">Fecha de la cirugía</label>
                    <input type="date" className="border w-full px-4 py-2 rounded" />
                  </div>
                  <div>
                    <label className="block font-medium mb-2">Hora de la cirugía</label>
                    <input type="time" className="border w-full px-4 py-2 rounded" />
                  </div>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewSurgery
