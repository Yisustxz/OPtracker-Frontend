import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

import './App.css'
import { LoginPage } from './pages/LoginPage'
import PatientPage from './pages/PatientPage'
import PatientRegistration from './pages/patienteRegistration'
import PatientProfile from './pages/PatientProfile'
import FamilyCode from './pages/FamilyCode'
import PatientTracker from './pages/PatientTracker'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/patient' element={<PatientPage/>} />
        <Route path='/patientregistration' element={<PatientRegistration/>} />
        <Route path='/patientProfile' element={<PatientProfile/>} />
        <Route path='/familycode' element={<FamilyCode/>} />
        <Route path='/patienteTracker' element={<PatientTracker/>} />

      </Routes>
    </Router>
  )
}

export default App
