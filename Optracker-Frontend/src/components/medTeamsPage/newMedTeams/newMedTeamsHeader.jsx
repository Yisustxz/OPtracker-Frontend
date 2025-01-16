import { useNavigate } from "react-router-dom";

function NewMedTeamHeader({ selectedType, setSelectedType }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-4 items-center mb-6">
      {/* Botón para regresar */}
      <button
        onClick={() => navigate("/medTeams")} // Navegar a la página anterior
        className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition"
      >
        <i className="fas fa-arrow-left"></i> {/* Ícono de flecha */}
      </button>

      {/* Título */}
      <h1 className="text-3xl font-bold  text-gray-800">
        Crear nuevo personal médico
      </h1>

      {/* Botones de tipo */}
      <div className="w-full flex gap-4 items-start">
        <button
          onClick={() => setSelectedType("Doctor")}
          className={`px-7 py-3 rounded-xl mr-3 ${
            selectedType === "Doctor" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          <i className="fas fa-user-md mr-2"></i> Doctor
        </button>
        <button
          onClick={() => setSelectedType("Nurse")}
          className={`px-7 py-3 rounded-xl ${
            selectedType === "Nurse" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          <i className="fas fa-user-nurse mr-2"></i> Nurse
        </button>
      </div>
    </div>
  );
}

export default NewMedTeamHeader;
