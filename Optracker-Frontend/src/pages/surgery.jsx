import Navigation from '../components/ui/navigation'
import React from 'react'
import SearchBar from '../components/surgeryPage/searchbar'
import SurgeryFilter from '../components/surgeryPage/surgeryFilter'
import SurgeryTable from '../components/surgeryPage/surgeryTable'
import SurgeryHeader from '../components/surgeryPage/surgeryHeader'

const surgeries = [
  {
    id: 1,
    date: 'Jun 1, 2022',
    patient: 'Maggie Smith',
    surgeon: 'Dr. Mark Johnson',
    operation: 'Operacion corazon abierto',
    status: 'Completado',
    statusColor: 'bg-green-500'
  },
  {
    id: 2,
    date: 'Jun 2, 2022',
    patient: 'John Doe',
    surgeon: 'Dr. Sarah Thompson',
    operation: 'Operacion bypass',
    status: 'En progreso',
    statusColor: 'bg-yellow-300'
  },
  {
    id: 3,
    date: 'Jun 3, 2022',
    patient: 'Jane Smith',
    surgeon: 'Dr. Michael Williams',
    operation: 'Operacion cadera',
    status: 'Completado',
    statusColor: 'bg-green-500'
  }
]

function Surgery() {
  const filters = [
    'Todas',
    'Completadas',
    'En Progreso',
    'Programadas',
    'Canceladas'
  ]
  const [activeFilter, setActiveFilter] = React.useState('Todas')
  const [searchQuery, setSearchQuery] = React.useState('')

  const filteredSurgeries = surgeries.filter((surgery) => {
    const matchesFilter =
      activeFilter === 'Todas' || surgery.status === activeFilter
    const matchesSearch = surgery.operation
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className='flex flex-col pt-1.5 bg-white'>
      <div className='flex overflow-hidden flex-col w-full bg-white min-h-[800px] max-md:max-w-full'>
        <div className='flex relative flex-col w-full max-md:max-w-full'>
          <Navigation />
          <div className='flex relative z-0 justify-center items-start px-40 py-5 w-full max-md:px-5 max-md:max-w-full'>
            <div className='flex overflow-hidden z-0 flex-col flex-1 shrink w-full basis-0 max-w-[960px] min-w-[240px] max-md:max-w-full'>
              <SurgeryHeader />
              <SurgeryFilter
                filters={filters}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
              />
              <SearchBar onSearch={setSearchQuery} />
              <SurgeryTable surgeries={filteredSurgeries} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Surgery
