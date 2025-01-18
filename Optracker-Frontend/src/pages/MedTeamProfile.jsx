import EducationList from "@/components/medTeamProfile/MedEducation";
import MedTeamProfesionalInf from "@/components/medTeamProfile/MedTeamPersonalInfo";
import MedTeamProfileHeader from "@/components/medTeamProfile/medTeamProfileHeader";
import Navigation from "@/components/ui/navigation";
import { fetchDoctorsById, fetchNursesById } from "@/services/medTeamsServices";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function MedTeamProfile() {
  const location = useLocation();
  const navigate = useNavigate();
  const [personal, setPersonal] = useState([]);
  const [loading, setLoading] = useState(false);
  const { state } = location;

  useEffect(() => {
    const loadMedTeamData = async (state) => {
      try {
        setLoading(true);
        if (state.tipo === "Nurse") {
          const nurse = await Promise.all([fetchNursesById(state.id)]);
          setPersonal(nurse);
          return;
        }
        if (state.tipo === "Doctor") {
          const doctor = await Promise.all([fetchDoctorsById(state.id)]);
          setPersonal(doctor);
          return;
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (!state) {
      return (
        <div className="flex flex-col justify-center items-center min-h-[90dvh]">
          <p>No se encontraron datos. Por favor regresa a la tabla.</p>
          <button
            onClick={() => navigate("/medteams")}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Regresar
          </button>
        </div>
      );
    }

    loadMedTeamData(state);
  }, [state, navigate]);

  return (
    <div className="flex relative flex-col items-start bg-white">
    <Navigation />
    <div className="flex overflow-hidden z-0 flex-col self-stretch w-full bg-white min-h-[800px]">
      <div className="flex flex-col w-full">
        <div className="flex relative flex-1 justify-center items-start px-64 py-16 size-full"> 
          <div className="flex overflow-hidden z-0 flex-col flex-1 shrink w-full basis-0 max-w-full">
            {loading ? (
                <p>Cargando información del personal...</p>
              ) : (
                <>
                  <MedTeamProfileHeader personal={personal} />
                  <MedTeamProfesionalInf personal={personal} />
                  <div className="my-4" /> {/* Espacio entre filas */}
                  <EducationList personal={personal} />
                </>
              )}
          </div>
          <span onClick={() => window.location.href = '/medteams'} className="cursor-pointer absolute top-24 left-[78px] z-0"> {/* Ajusté la posición del icono */}
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
            </svg>
          </span>
        </div>
      </div>
    </div>

    </div>
  );
}
