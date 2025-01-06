import Navigation from "@/components/ui/navigation";
import NewMedTeamHeader from "@/components/medTeamsPage/newMedTeams/newMedTeamsHeader";
import NewMedTeamForm from "@/components/medTeamsPage/newMedTeams/newMedTeamsForm";
import { useState } from "react";

function NewMedTeams() {
  const [selectedType, setSelectedType] = useState("Doctor");
  const [formData, setFormData] = useState({
    nombre: "",
    cedula: "",
    correo: "",
    especialidad: "",
    licencia: "",
    numeroDEA: "",
    educacion: [""],
  });

  const addEducationField = () => {
    setFormData({ ...formData, educacion: [...formData.educacion, ""] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <div className="flex flex-col pt-1.5 bg-white">
      <Navigation />
      <div className="flex justify-center px-40 py-5 max-md:px-5">
        <div className="w-full max-w-[960px]">
          {/* Encabezado */}
          <NewMedTeamHeader
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />

          {/* Formulario */}
          <NewMedTeamForm
            formData={formData}
            setFormData={setFormData}
            addEducationField={addEducationField}
          />

          {/* Botón de Registro */}
          <div className="mt-8">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 w-1/2 mt-7"
            >
              Registrar Equipo Médico
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewMedTeams;