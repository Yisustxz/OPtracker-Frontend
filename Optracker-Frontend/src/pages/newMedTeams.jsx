import NewMedTeamForm from "@/components/medTeamsPage/newMedTeams/newMedTeamsForm";
import NewMedTeamHeader from "@/components/medTeamsPage/newMedTeams/newMedTeamsHeader";
import Navigation from "@/components/ui/navigation";
import { useEffect, useState } from "react";
import {
  createDoctor,
  createNurse,
  fetchEducation,
} from "../services/medTeamsServices";

function NewMedTeams() {
  const [selectedType, setSelectedType] = useState("Doctor");
  const [loading, setLoading] = useState(false);
  const [educationList, setEducationList] = useState([]);
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
    if (selectedType === "Nurse" && !formData.contrasena) {
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
          educationIds: formData.educacion,
        };

        const result = await createDoctor(doctorData);
        console.log("Doctor creado con éxito:", result);
      } else if (selectedType === "Nurse") {
        // Transformar datos para enfermeros
        const nurseData = {
          email: formData.correo,
          name: formData.nombre,
          lastName: formData.apellido,
          password: formData.contrasena,
          speciality: formData.especialidad,
          licenseNumber: formData.licencia,
          dea: formData.numeroDEA,
          dni: formData.cedula,
          educationIds: formData.educacion,
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

  useEffect(() => {
    const loadEducation = async () => {
      try {
        setLoading(true);
        const [educationData] = await Promise.all([fetchEducation()]);
        setEducationList([...educationData]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadEducation();
  }, []);

  return (
    <div className="flex flex-col pt-24 bg-white">
      <Navigation />
      <div className="flex justify-center px-10 py-5 max-md:px-5">
        {" "}
        {/* Ajustar el padding horizontal */}
        <div className="w-full max-w-[960px]">
          {/* Encabezado */}
          <NewMedTeamHeader
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />

          {/* Formulario */}
          {loading ? (
            <p>Cargando formulario...</p>
          ) : (
            <NewMedTeamForm
              formData={formData}
              setFormData={setFormData}
              addEducationField={addEducationField}
              selectedType={selectedType}
              educationList={educationList}
            />
          )}

          {/* Botón de Registro */}
          <div className="mt-8">
            <button
              type='submit'
              onClick={handleSubmit}
              className='px-6 py-3 bg-sky-500 text-white font-bold rounded-xl min-h-[40px] hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 mx-auto block mt-4'
            >
              Registrar Equipo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewMedTeams;
