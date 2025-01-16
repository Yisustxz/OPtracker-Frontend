import { useNavigate } from "react-router-dom";

function MedTeamsHeader() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-gray-800">Personal médico</h1>
      <button
        onClick={() => navigate("/newMedTeams")}
        className="bg-gray-200 text-black px-6 py-2 rounded-xl hover:bg-blue-600 transition hover:text-white"
      >
        Nuevo personal médico
      </button>
    </div>
  );
}

export default MedTeamsHeader;
