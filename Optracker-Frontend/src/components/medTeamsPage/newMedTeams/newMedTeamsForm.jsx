function NewMedTeamForm({ formData, setFormData, addEducationField }) {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    return (
      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-4 text-left">
          {/* Nombre Completo */}
          <div>
            <label className="block font-medium mb-2">Nombre Completo</label>
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
            <label className="block font-medium mb-2">Correo</label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              className="border w-full px-4 py-2 rounded-xl mb-4"
              placeholder="Correo"
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
              Número de Licencia Médica
            </label>
            <input
              type="text"
              name="licencia"
              value={formData.licencia}
              onChange={handleChange}
              className="border w-full px-4 py-2 rounded-xl mb-4"
              placeholder="Número de licencia"
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
  
        
      </form>
    );
  }
  
  export default NewMedTeamForm;
  