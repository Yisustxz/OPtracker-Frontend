function MedTeamsFilter({ filtro, setFiltro, search, setSearch }) {
  return (
    <div className='flex flex-wrap items-center gap-4 mb-6'>
      <div className='flex gap-2'>
        <button
          onClick={() => setFiltro('Todos')}
          className={`px-4 py-2 mr-1 rounded-xl ${
            filtro === 'Todos' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Todos
        </button>
        <button
          onClick={() => setFiltro('Doctor')}
          className={`px-4 py-2 mr-1 rounded-xl ${
            filtro === 'Doctor' ? 'bg-blue-500 text-white' : 'bg-gray-200 '
          }`}
        >
          Doctores
        </button>
        <button
          onClick={() => setFiltro('Nurse')}
          className={`px-4 py-2 mr-1 rounded-xl ${
            filtro === 'Nurse' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Enfermeros
        </button>
      </div>
      <input
        type='text'
        placeholder='Buscar Equipo Médico'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='w-full max-w px-4 py-2 border rounded-xl'
      />
    </div>
  )
}

export default MedTeamsFilter
