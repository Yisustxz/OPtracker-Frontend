import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SurgeryPage from './pages/Surgery'

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/surgery' element={<SurgeryPage />} />
      </Routes>
    </Router>
  )
}

export default App
