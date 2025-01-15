import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage'
import SurgeryPage from './pages/surgery'
import ProcedurePage from './pages/procedurePage'
import SurgeryData from './pages/surgeryData'
import MedTeams from './pages/medTeams'
import NewMedTeams from './pages/newMedTeams'
import './App.css'
import { LoginPage } from './pages/LoginPage'
import PatientPage from './pages/PatientPage'
import PatientRegistration from './pages/patienteRegistration'
import PatientProfile from './pages/PatientProfile'
import { NewSurgery } from './pages/newSurgery'
import FamilyCode from './pages/FamilyCode'
import PatientTracker from './pages/PatientTracker'
import MedTeamProfile from './pages/MedTeamProfile'
import Statistics from './pages/Statistics'

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
        <Route path='/familycode' element={<FamilyCode />} />
        <Route path='/patienteTracker' element={<PatientTracker />} />
        <Route path='/medteams' element={<MedTeams />} />
        <Route path='/new-medteams' element={<NewMedTeams />} />
        <Route path='/medTeamProfile' element={<MedTeamProfile />} />
        <Route path='/statistics' element={<Statistics />} />
      </Routes>
    </Router>
  )
}

export default App
