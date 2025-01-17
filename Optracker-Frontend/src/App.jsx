import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage'
import SurgeryPage from './pages/surgery'
import ProcedurePage from './pages/procedurePage'
import SurgeryData from './pages/surgeryData'
import { NewSurgery } from './pages/newSurgery'
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
import PrivateRoute from './components/Routes/PrivateRoute'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        {/*      <Route path='/patient' element={<PatientPage />} />
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
        <Route path='/medTeamProfile' element={<MedTeamProfile />} /> */}
        <Route
          path='/'
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />

        <Route
          path='/patient'
          element={
            <PrivateRoute>
              <PatientPage />
            </PrivateRoute>
          }
        />

        <Route
          path='/patientregistration'
          element={
            <PrivateRoute>
              <PatientRegistration />
            </PrivateRoute>
          }
        />

        <Route
          path='/patientProfile/:id'
          element={
            <PrivateRoute>
              <PatientProfile />
            </PrivateRoute>
          }
        />

        <Route
          path='/surgery'
          element={
            <PrivateRoute>
              <SurgeryPage />
            </PrivateRoute>
          }
        />

        <Route
          path='/new-surgery'
          element={
            <PrivateRoute>
              <NewSurgery />
            </PrivateRoute>
          }
        />

        <Route
          path='/procedure'
          element={
            <PrivateRoute>
              <ProcedurePage />
            </PrivateRoute>
          }
        />

        <Route
          path='/surgeryData'
          element={
            <PrivateRoute>
              <SurgeryData />
            </PrivateRoute>
          }
        />

        <Route
          path='/familycode'
          element={
            <PrivateRoute>
              <FamilyCode />
            </PrivateRoute>
          }
        />

        <Route
          path='/patienteTracker'
          element={
            <PrivateRoute>
              <PatientTracker />
            </PrivateRoute>
          }
        />

        <Route
          path='/medteams'
          element={
            <PrivateRoute>
              <MedTeams />
            </PrivateRoute>
          }
        />

        <Route
          path='/new-medteams'
          element={
            <PrivateRoute>
              <NewMedTeams />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
