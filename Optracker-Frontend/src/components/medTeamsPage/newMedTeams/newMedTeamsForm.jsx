import FormInput from "@/components/patienteRecord/FormInput";

function NewMedTeamForm({
  formData,
  setFormData,
  addEducationField,
  selectedType,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEducationChange = (index, value) => {
    const updatedEducation = [...formData.educacion];
    updatedEducation[index] = value;
    setFormData({ ...formData, educacion: updatedEducation });
  };

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 w-[60vw]">
        {/* Nombre */}
        <div>
          <FormInput
            label="Nombre"
            id="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="p-8 w-[300px]" // Aumentar el tamaño del campo
          />
        </div>
        
        <div>
          <FormInput
            label="Apellido"
            id="apellido"
            placeholder="Apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
            className="p-8 w-[300px]" // Aumentar el tamaño del campo
          />
        </div>

        <div>
          <FormInput
            label="Cedula"
            id="cedula"
            placeholder="Cedula"
            value={formData.cedula}
            onChange={handleChange}
            required
            className="p-8 w-[300px]" // Aumentar el tamaño del campo
          />
        </div>

        <div>
          <FormInput
            label="Email"
            id="email"
            placeholder="Email"
            value={formData.correo}
            onChange={handleChange}
            required
            className="p-8 w-[300px]" // Aumentar el tamaño del campo
          />
        </div>

        <div>
          <FormInput
            label="Especialidad"
            id="especialidad"
            placeholder="Especialidad"
            value={formData.especialidad}
            onChange={handleChange}
            required
            className="p-8 w-[300px]" // Aumentar el tamaño del campo
          />
        </div>

        <div>
          <FormInput
            label="Especialidad"
            id="especialidad"
            placeholder="Especialidad"
            value={formData.especialidad}
            onChange={handleChange}
            required
            className="p-8 w-[300px]" // Aumentar el tamaño del campo
          />
        </div>

        <div>
          <FormInput
            label="Licencia"
            id="licencia"
            placeholder="Licencia"
            value={formData.licencia}
            onChange={handleChange}
            required
            className="p-8 w-[300px]" // Aumentar el tamaño del campo
          />
        </div>

        <div>
          <FormInput
            label="Número DEA"
            id="numeroDEA"
            placeholder="Número DEA"
            value={formData.numeroDEA}
            onChange={handleChange}
            required
            className="p-8 w-[300px]" // Aumentar el tamaño del campo
          />
        </div>

        {selectedType === "Nurse" && (
            <div>
              <FormInput
                label="Contraseña"
                id="contrasena"
                type="password"
                placeholder="Contraseña"
                value={formData.contrasena || ""}
                onChange={handleChange}
                required
                className="p-8 w-[300px]" // Aumentar el tamaño del campo
              />
            </div>
        )}

      {/* Educación */}
      <div className="flex flex-col items-center mt-8">
        <label className="block font-medium mb-2">Educación</label>
        {formData.educacion?.map((edu, index) => (
          <div key={index} className="flex justify-center gap-4 mb-4">
            <select
              value={edu}
              onChange={(e) => handleEducationChange(index, e.target.value)}
              className="border border-gray-300 w-full px-4 py-2 rounded-xl bg-white"
            >
              <option value="" disabled>
                Selecciona un título académico
              </option>
              <option value="Bachiller">Bachiller</option>
              <option value="Técnico Superior Universitario">
                Técnico Superior Universitario
              </option>
              <option value="Licenciatura">Licenciatura</option>
              <option value="Ingeniería">Ingeniería</option>
              <option value="Maestría">Maestría</option>
              <option value="Doctorado">Doctorado</option>
            </select>
          </div>
        ))}
        <button
          type="button"
          onClick={addEducationField}
          className="flex items-center justify-center w-48 border border-gray-300 px-4 py-2 rounded-xl mt-2 bg-white"
        >
          + Agregar Educación
        </button>
      </div>
    </form>
  );
}

export default NewMedTeamForm;
