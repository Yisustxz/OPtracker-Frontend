import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage'
import SurgeryPage from './pages/surgery'
import ProcedurePage from './pages/procedurePage'
import SurgeryData from './pages/surgeryData'

import './App.css'
import { LoginPage } from './pages/LoginPage'
import PatientPage from './pages/PatientPage'
import PatientRegistration from './pages/patienteRegistration'
import PatientProfile from './pages/PatientProfile'
import { NewSurgery } from './pages/newSurgery'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/patient' element={<PatientPage />} />
        <Route path='/patientregistration' element={<PatientRegistration />} />
        <Route path='/patientProfile' element={<PatientProfile />} />
        <Route path='/surgery' element={<SurgeryPage />} />
        <Route path='/new-surgery' element={<NewSurgery />} />
        <Route path='/procedure' element={<ProcedurePage />}></Route>
        <Route path='/surgeryData' element={<SurgeryData />}></Route>
      </Routes>
    </Router>
  )
}

export default App
