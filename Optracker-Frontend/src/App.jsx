import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage'
import SurgeryPage from './pages/surgery'

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
