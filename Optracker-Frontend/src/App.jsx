import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InfoPaciente from './pages/InfoPaciente';
import TrazaQuiru from './pages/TrazaQuiru'; // Importa el componente
import Encuesta from './pages/Encuesta'; // Importa el componente de Encuesta
import Header from './components/ui/Header'; // Corrige el error de ';'

import './App.css';

function App() {
  return (
    <Router>
      {/* Header global que estará presente en todas las páginas */}
      <Header />
      <Routes>
        {/* Ruta para la página principal */}
        <Route path='/' element={<HomePage />} />

        {/* Ruta para la página de información del paciente */}
        <Route path='/info-paciente' element={<InfoPaciente />} />

        {/* Ruta para la página de trazabilidad quirúrgica */}
        <Route path='/traza-quiru' element={<TrazaQuiru />} />

        {/* Ruta para la página de encuesta */}
        <Route path='/encuesta' element={<Encuesta />} />
      </Routes>
    </Router>
  );
}

export default App;
