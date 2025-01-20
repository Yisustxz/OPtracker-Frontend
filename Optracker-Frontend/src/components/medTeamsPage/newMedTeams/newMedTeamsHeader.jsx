import { useNavigate } from "react-router-dom";

function NewMedTeamHeader({ selectedType, setSelectedType }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap gap-4 items-center mb-6">
      {/* Título */}
      <header className="mb-8 flex items-center">
        <span
          onClick={() => navigate("/med-teams")}
          className="mr-4 bg-white text-black px-2 py-1 rounded-md cursor-pointer"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
            />
          </svg>
        </span>
        <h1 className="text-3xl font-bold text-neutral-900 ml-52 mb-1">
          Registrar un nuevo personal médico
        </h1>
      </header>

      {/* Botones de tipo */}
      <div className="w-full flex gap-4 items-start">
        <button
          onClick={() => setSelectedType("Doctor")}
          className={`flex items-center justify-center border-2 border-gray-300 rounded-xl px-4 py-2 transition-colors duration-200 hover:bg-blue-300 hover:border-blue-600 ${
            selectedType === "Doctor"
              ? "bg-blue-200 border-blue-500 text-black"
              : "bg-white text-black"
          }`}
        >
          <i className="fas fa-user-md mr-2"></i> Doctor
        </button>
        <button
          onClick={() => setSelectedType("Nurse")}
          className={`flex items-center justify-center border-2 border-gray-300 rounded-xl px-4 py-2 transition-colors duration-200 hover:bg-blue-300 hover:border-blue-600 ${
            selectedType === "Nurse"
              ? "bg-blue-200 border-blue-500 text-black"
              : "bg-white text-black"
          }`}
        >
          <i className="fas fa-user-nurse mr-2"></i> Nurse
        </button>
      </div>
    </div>
  );
}

export default NewMedTeamHeader;
