import NewMedTeamForm from "@/components/medTeamsPage/newMedTeams/newMedTeamsForm";
import NewMedTeamHeader from "@/components/medTeamsPage/newMedTeams/newMedTeamsHeader";
import Navigation from "@/components/ui/navigation";
import { useState } from "react";
import { createDoctor, createNurse } from "../services/medTeamsServices";

function NewMedTeams() {
  const [selectedType, setSelectedType] = useState("Doctor");
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    cedula: "",
    correo: "",
    especialidad: "",
    licencia: "",
    numeroDEA: "",
    educacion: [""],
    contrasena: "", // Campo de contraseña
  });

  const addEducationField = () => {
    setFormData({ ...formData, educacion: [...formData.educacion, ""] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación específica para el enfermero
    if (selectedType === "Enfermero" && !formData.contrasena) {
      alert("Por favor, ingresa una contraseña para el enfermero.");
      return;
    }

    try {
      if (selectedType === "Doctor") {
        // Transformar datos para doctores
        const doctorData = {
          names: formData.nombre,
          lastNames: formData.apellido,
          speciality: formData.especialidad,
          licenseNumber: formData.licencia,
          dni: formData.cedula,
          dea: formData.numeroDEA,
        };

        const result = await createDoctor(doctorData);
        console.log("Doctor creado con éxito:", result);
      } else if (selectedType === "Enfermero") {
        // Transformar datos para enfermeros
        const nurseData = {
          email: formData.correo,
          name: formData.nombre,
          lastName: formData.apellido,
          password: formData.contrasena,
          speciality: formData.especialidad,
          licenseNumber: formData.licencia,
          dea: formData.numeroDEA,
        };

        const result = await createNurse(nurseData);
        console.log("Enfermero creado con éxito:", result);
      }

      alert("¡Registro exitoso!");
    } catch (error) {
      alert("Ocurrió un error al registrar el equipo médico.");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col pt-24 bg-white">
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
            selectedType={selectedType}
          />

          {/* Botón de Registro */}
          <div className="mt-8">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 w-1/2 mt-7"
            >
              Registrar personal médico
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewMedTeams;
