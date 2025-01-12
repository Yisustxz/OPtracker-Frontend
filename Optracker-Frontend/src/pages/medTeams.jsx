import React, { useState, useEffect } from 'react'
import Navigation from '../components/ui/navigation'
import MedTeamsHeader from '@/components/medTeamsPage/medTeamsHeader'
import MedTeamsFilter from '@/components/medTeamsPage/medTeamsFilter'
import MedTeamsTable from '@/components/medTeamsPage/medTeamsTable'
import { fetchNurses, fetchDoctors } from '../services/medTeamsServices'

function MedTeams() {
  const [equipo, setEquipo] = useState([])
  const [search, setSearch] = useState('')
  const [filtro, setFiltro] = useState('Todos')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadMedTeams = async () => {
      try {
        setLoading(true)
        const [nurses, doctors] = await Promise.all([
          fetchNurses(),
          fetchDoctors()
        ])
        setEquipo([...nurses, ...doctors])
      } catch (error) {
        console.error('Error loading medical teams:', error)
      } finally {
        setLoading(false)
      }
    }

    loadMedTeams()
  }, [])

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
        <div className='top-0'>
          <MedTeamsHeader />
          <MedTeamsFilter
            filtro={filtro}
            setFiltro={setFiltro}
            search={search}
            setSearch={setSearch}
          />
        </div>
        <div className='sticky'>
          {loading ? (
            <p>Cargando equipos médicos...</p>
          ) : (
            <MedTeamsTable equipo={datosFiltrados} />
          )}
        </div>
      </main>
    </div>
  )
}

export default MedTeams
