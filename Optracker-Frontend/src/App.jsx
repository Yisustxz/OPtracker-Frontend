import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage'
import SurgeryPage from './pages/surgery'
import ProcedurePage from './pages/procedurePage'
import SurgeryData from './pages/surgeryData'

import './App.css'
import { NewSurgery } from './pages/newSurgery'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/surgery' element={<SurgeryPage />} />
        <Route path='/new-surgery' element={<NewSurgery />} />
        <Route path='/procedure' element={<ProcedurePage />}></Route>
        <Route path='/surgeryData' element={<SurgeryData />}></Route>
      </Routes>
    </Router>
  )
}

export default App
