import { useNavigate } from 'react-router-dom';

function MedTeamsHeader() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-800">Equipo Médico</h1>
      <button
        onClick={() => navigate('/new-medteams')}
        className="bg-gray-200 text-black px-6 py-1 rounded-xl hover:bg-blue-600 transition hover:text-white"
      >
        Nuevo Equipo Médico
      </button>
    </div>
  );
}

export default MedTeamsHeader;

