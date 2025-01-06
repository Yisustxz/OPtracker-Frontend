import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage'
import SurgeryPage from './pages/surgery'
import NewSurgery from './pages/newSurgery'
import MedTeams from './pages/medTeams'
import NewMedTeams from './pages/newMedTeams'

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/surgery' element={<SurgeryPage />} />
        <Route path='/new-surgery' element={<NewSurgery />} />
        <Route path='/medteams' element={<MedTeams/>}/>
        <Route path='/new-medteams' element={<NewMedTeams/>}/>
      </Routes>
    </Router>
  )
}

export default App
