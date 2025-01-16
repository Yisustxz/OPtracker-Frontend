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
    <form className="space-y-6">
      <div className="grid grid-cols-2 gap-4 text-left">
        {/* Nombre */}
        <div>
          <label className="block font-medium mb-2">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="border w-full px-4 py-2 rounded-xl mb-4"
            placeholder="Nombre"
            required
          />
        </div>

        {/* Apellido */}
        <div>
          <label className="block font-medium mb-2">Apellido</label>
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            className="border w-full px-4 py-2 rounded-xl mb-4"
            placeholder="Apellido"
            required
          />
        </div>

        {/* Cédula */}
        <div>
          <label className="block font-medium mb-2">Cédula</label>
          <input
            type="text"
            name="cedula"
            value={formData.cedula}
            onChange={handleChange}
            className="border w-full px-4 py-2 rounded-xl mb-4"
            placeholder="Cédula"
            required
          />
        </div>

        {/* Correo */}
        <div>
          <label className="block font-medium mb-2">Correo electrónico</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            className="border w-full px-4 py-2 rounded-xl mb-4"
            placeholder="Correo electrónico"
            required
          />
        </div>

        {/* Especialidad */}
        <div>
          <label className="block font-medium mb-2">Especialidad</label>
          <input
            type="text"
            name="especialidad"
            value={formData.especialidad}
            onChange={handleChange}
            className="border w-full px-4 py-2 rounded-xl mb-4"
            placeholder="Especialidad"
            required
          />
        </div>

        {/* Número de Licencia Médica */}
        <div>
          <label className="block font-medium mb-2">
            Número de licencia médica
          </label>
          <input
            type="text"
            name="licencia"
            value={formData.licencia}
            onChange={handleChange}
            className="border w-full px-4 py-2 rounded-xl mb-4"
            placeholder="Número de licencia médica"
            required
          />
        </div>

        {/* Número DEA */}
        <div>
          <label className="block font-medium mb-2">Número DEA</label>
          <input
            type="text"
            name="numeroDEA"
            value={formData.numeroDEA}
            onChange={handleChange}
            className="border w-full px-4 py-2 rounded-xl"
            placeholder="Número DEA"
            required
          />
        </div>
      </div>

      {/* Contraseña (Solo para Enfermero) */}
      {selectedType === "Nurse" && (
        <div>
          <label className="block font-medium mb-2">Contraseña</label>
          <input
            type="password"
            name="contrasena"
            value={formData.contrasena || ""}
            onChange={handleChange}
            className="border w-80 px-4 py-2 rounded-xl mb-4"
            placeholder="Contraseña"
            required={selectedType === "Nurse"}
          />
        </div>
      )}

      {/* Educación */}
      <div className="mt-6 flex flex-col items-center">
        <label className="block font-medium mb-2">Educación</label>
        {formData.educacion?.map((edu, index) => (
          <div key={index} className="flex justify-center gap-4 mb-4">
            <select
              value={edu}
              onChange={(e) => handleEducationChange(index, e.target.value)}
              className="border w-96 px-4 py-2 rounded-xl"
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
          className="flex items-center justify-center w-48 border px-4 py-2 rounded-xl mt-2"
        >
          + Agregar Educación
        </button>
      </div>
    </form>
  );
}

export default NewMedTeamForm;
