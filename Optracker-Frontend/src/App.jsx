import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import PrivateRoute from './components/Routes/PrivateRoute'
import FamilyCode from './pages/FamilyCode'
import HomePage from './pages/homepage'
import { LoginPage } from './pages/LoginPage'
import MedTeamProfile from './pages/MedTeamProfile'
import MedTeams from './pages/medTeams'
import NewMedTeams from './pages/newMedTeams'
import { NewSurgery } from './pages/newSurgery' // Eliminé la declaración duplicada
import PatientRegistration from './pages/patienteRegistration'
import PatientPage from './pages/PatientPage'
import PatientProfile from './pages/PatientProfile'
import PatientTracker from './pages/PatientTracker'
import ProcedurePage from './pages/procedurePage'
import Surgery from './pages/surgery'
import SurgeryData from './pages/surgeryData'
import Statistics from './pages/Statistics'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/family-code' element={<FamilyCode />} />
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
          path='/patient'
          element={
            <PrivateRoute>
              <PatientPage />
            </PrivateRoute>
          }
        />

        <Route
          path='/patient-registration'
          element={
            <PrivateRoute>
              <PatientRegistration />
            </PrivateRoute>
          }
        />

        <Route
          path='/patient-profile/:id'
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
              <Surgery />
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
          path='/surgery-data'
          element={
            <PrivateRoute>
              <SurgeryData />
            </PrivateRoute>
          }
        />

        {/* <Route
          path="/familyCode"
          element={
            <PrivateRoute>
              <FamilyCode />
            </PrivateRoute>
          }
        /> */}

        <Route
          path='/patiente-tracker'
          element={
            <PrivateRoute>
              <PatientTracker />
            </PrivateRoute>
          }
        />

        <Route
          path='/med-teams'
          element={
            <PrivateRoute>
              <MedTeams />
            </PrivateRoute>
          }
        />

        <Route
          path='/med-teams-profile'
          element={
            <PrivateRoute>
              <MedTeamProfile />
            </PrivateRoute>
          }
        />

        <Route
          path='/new-med-teams'
          element={
            <PrivateRoute>
              <NewMedTeams />
            </PrivateRoute>
          }
        />
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Statistics />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
