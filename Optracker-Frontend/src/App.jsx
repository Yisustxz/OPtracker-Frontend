import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'

import './App.css'
import { LoginPage } from './pages/LoginPage'
import PatientPage from './pages/PatientPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/patient' element={<PatientPage/>} />
      </Routes>
    </Router>
  )
}

export default App
