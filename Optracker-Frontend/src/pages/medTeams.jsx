import Navigation from '../components/ui/navigation'
import React, { useState } from 'react'
import MedTeamsHeader from '@/components/medTeamsPage/medTeamsHeader'
import MedTeamsFilter from '@/components/medTeamsPage/medTeamsFilter'
import MedTeamsTable from '@/components/medTeamsPage/medTeamsTable'

function MedTeams() {
  const equipo = [
    {
      nombre: 'Dr. Sarah Smith',
      especialidad: 'Orthopedic Surgeon',
      tipo: 'Doctor'
    },
    {
      nombre: 'Dr. Alex Johnson',
      especialidad: 'Anesthesiologist',
      tipo: 'Doctor'
    },
    {
      nombre: 'Dr. Michael Brown',
      especialidad: 'Cardiothoracic Surgeon',
      tipo: 'Doctor'
    },
    { nombre: 'Dr. Emily Davis', especialidad: 'Neurosurgeon', tipo: 'Doctor' },
    {
      nombre: 'Dr. Robert Miller',
      especialidad: 'Enfermero quirúrgico',
      tipo: 'Enfermero'
    },
    {
      nombre: 'Dr. Laura Wilson',
      especialidad: 'Enfermero de urgencias',
      tipo: 'Enfermero'
    },
    {
      nombre: 'Dr. Daniel Taylor',
      especialidad: 'Enfermero de urgencias',
      tipo: 'Enfermero'
    },
    {
      nombre: 'Dr. Olivia Martinez',
      especialidad: 'Pediatric Surgeon',
      tipo: 'Doctor'
    },
    {
      nombre: 'Dr. Sophia Garcia',
      especialidad: 'Enfermero General',
      tipo: 'Enfermero'
    }
  ]

  const [search, setSearch] = useState('')
  const [filtro, setFiltro] = useState('Todos')

  const datosFiltrados = equipo.filter((persona) => {
    return (
      (filtro === 'Todos' || persona.tipo === filtro) &&
      (persona.nombre.toLowerCase().includes(search.toLowerCase()) ||
        persona.especialidad.toLowerCase().includes(search.toLowerCase()))
    )
  })

  return (
    <div>
      <Navigation />
      <main className='p-24'>
        <div className=' top-0'>
          <MedTeamsHeader />
          <MedTeamsFilter
            filtro={filtro}
            setFiltro={setFiltro}
            search={search}
            setSearch={setSearch}
          />
        </div>
        {/* <MedTeamsFilter filtro={filtro} setFiltro={setFiltro} search={search} setSearch={setSearch} /> */}
        <div className='sticky'>
          <MedTeamsTable equipo={datosFiltrados} />
        </div>
      </main>
    </div>
  )
}

export default MedTeams
