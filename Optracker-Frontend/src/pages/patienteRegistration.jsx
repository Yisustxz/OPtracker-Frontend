import SelectInput from "@/components/patienteRecord/SelectInput";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/patienteRecord/FormInput";
import Navigation from "../components/ui/Navigation";
import apiClient from "../services/xiosConfig";

export default function PatientRegistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    identification: "",
    birthDate: "",
    gender: "",
    bloodType: "",
    email: "",
    phone: "",
    height: "",
    weight: "",
    alergies: "",
    emergencyContacts: [
      { name: "", lastName: "", dni: "", phone: "", email: "" },
    ],
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "identification" && !/^\d*$/.test(value)) return;
    if (id === "birthDate") {
      const selectedDate = new Date(value); // Fecha seleccionada
      const currentDate = new Date(); // Fecha actual

      // Verificar si la fecha seleccionada es futura
      if (selectedDate > currentDate) {
        alert("La fecha de nacimiento no puede ser una fecha futura.");
        return; // Detenemos la ejecución y no actualizamos el estado
      }
    }
    if (id === "phone") {
      // Validar que solo contenga números
      const numericValue = value.replace(/\D/g, ""); // Elimina cualquier carácter que no sea un dígito

      // Actualiza el estado con el valor numérico limpio
      setFormData((prevData) => ({
        ...prevData,
        [id]: numericValue,
      }));

      return; // Salimos de la función porque ya actualizamos el estado
    }

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleOnBlur = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value.charAt(0).toUpperCase() + value.slice(1),
    });
  };

  const handleOnBlurEmail = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value.toLowerCase(),
    });
  };

  const handleEmergencyContactChange = (index, e) => {
    const { id, value } = e.target;
    const updatedContacts = [...formData.emergencyContacts];
    updatedContacts[index] = { ...updatedContacts[index], [id]: value };
    setFormData((prev) => ({
      ...prev,
      emergencyContacts: updatedContacts,
    }));
  };

  const handleOnBlurEmergency = (index, e) => {
    const { id, value } = e.target;
    const updatedContacts = [...formData.emergencyContacts];
    updatedContacts[index] = {
      ...updatedContacts[index],
      [id]: value.charAt(0).toUpperCase() + value.slice(1),
    };
    setFormData((prev) => ({
      ...prev,
      emergencyContacts: updatedContacts,
    }));
  };

  const handleOnBlurEmergencyEmail = (index, e) => {
    const { id, value } = e.target;
    const updatedContacts = [...formData.emergencyContacts];
    updatedContacts[index] = {
      ...updatedContacts[index],
      [id]: value.toLowerCase(),
    };
    setFormData((prev) => ({
      ...prev,
      emergencyContacts: updatedContacts,
    }));
  };

  const addEmergencyContact = () => {
    setFormData((prev) => ({
      ...prev,
      emergencyContacts: [
        ...prev.emergencyContacts,
        { name: "", phone: "", email: "" },
      ],
    }));
  };

  const removeEmergencyContact = (index) => {
    const updatedContacts = formData.emergencyContacts.filter(
      (_, i) => i !== index
    );
    setFormData((prev) => ({
      ...prev,
      emergencyContacts: updatedContacts,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log([formData.alergies]);

    console.log(new Date(formData.birthDate));

    console.log(new Date(formData.birthDate).toISOString());

    // Mapea los datos del formulario para que coincidan con el DTO del backend
    const patientData = {
      dni: formData.identification,
      email: formData.email,
      name: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: formData.phone,
      alergies: formData.alergies,
      birthDate: new Date(formData.birthDate).toISOString(), // Asegurando que birthDate sea una instancia de Date
      weight: parseFloat(formData.weight),
      height: parseFloat(formData.height),
      gender: formData.gender.toUpperCase(), // Asegúrate de que coincida con los valores esperados
      bloodType: formData.bloodType.toUpperCase(), // Ajusta según el formato del backend
      emergencyContacts: formData.emergencyContacts.map((contact) => ({
        name: contact.name,
        lastName: contact.lastName,
        dni: contact.dni,
        phoneNumber: contact.phone,
        email: contact.email,
      })),
    };

    console.log(patientData);

    try {
      const { data: createdPatient } = await apiClient.post(
        "/patient",
        patientData
      );
      console.log("Paciente registrado:", createdPatient);

      const emergencyContactsData = {
        patientId: createdPatient.id,
        emergencyContacts: patientData.emergencyContacts,
      };

      const createContacts = emergencyContactsData.emergencyContacts.map(
        (contact) => {
          const contactData = {
            patientId: emergencyContactsData.patientId,
            ...contact, // Asegúrate de que `contact` contiene los campos necesarios
          };

          return apiClient
            .post("/emergency-contact", contactData)
            .then(() =>
              console.log("Contact created successfully:", contactData)
            )
            .catch((error) => {
              if (error.response) {
                // Si el servidor respondió con un estado de error (e.g., 400, 500)
                console.error("Error creating contact:", contactData, {
                  status: error.response.status,
                  data: error.response.data, // Contiene el mensaje del servidor
                  headers: error.response.headers,
                });
              } else if (error.request) {
                // Si no hubo respuesta del servidor
                console.error(
                  "No response received for contact:",
                  contactData,
                  error.request
                );
              } else {
                // Otros errores (e.g., problemas en la configuración de la solicitud)
                console.error(
                  "Error setting up request for contact:",
                  contactData,
                  error.message
                );
              }
            });
        }
      );

      try {
        await Promise.all(createContacts);
        console.log("All contacts processed");
      } catch (error) {
        console.error("Error in processing some contacts", error);
      }

      alert("Paciente registrado con éxito");
      navigate("/patient"); // Redirige a otra página si es necesario
    } catch (error) {
      console.error("Error al registrar el paciente:", error);
      alert("Hubo un error al registrar el paciente");
    }
  };

  const navLinks = [
    { text: "Inicio", width: "w-[35px]", isActive: true },
    { text: "Equipo Medico", width: "w-[97px]", isActive: false },
    { text: "Paciente", width: "w-[57px]", isActive: false },
    { text: "Cirugia", width: "w-12", isActive: false },
  ];

  return (
    <div className="flex flex-col bg-white">
      <nav
        className="flex relative justify-between items-center px-10 py-3 w-full max-md:px-5 max-md:max-w-full"
        role="navigation"
      >
        <div className="flex relative z-0 flex-1 shrink gap-8 items-start self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex z-0 gap-9 items-center text-sm font-medium min-h-[40px] min-w-[240px] text-neutral-900">
            {navLinks.map((link, index) => (
              <Navigation key={index} {...link} />
            ))}
          </div>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ce98b8d152b957dce5797de30055cf980a701c9485fd96eaf3e963f03b1df12?placeholderIfAbsent=true&apiKey=33b41968e7754d2b98ae74310dc65b2e"
          alt="User profile"
          className="object-contain rounded-3xl aspect-[1.02] w-[41px]"
        />
      </nav>

      <main className="flex flex-col p-8 max-w-7xl mx-auto w-full">
        <header className="mb-8 flex items-center">
          <span
            onClick={() => navigate("/patient")}
            className="mr-4 bg-white text-black px-2 py-1 rounded-md cursor-pointer"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white stroke-2" // Añadido stroke-2 para hacerlo más grueso
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
              />
            </svg>
          </span>
          <h1 className="text-3xl font-bold text-neutral-900 ml-80 mb-1">
            Registrar un nuevo paciente
          </h1>
        </header>
        <p className="text-sm text-slate-500 mt-0 mb-4 ml-59">
          Complete el formulario a continuación para registrar un nuevo paciente
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 w-[60vw]"
        >
          <FormInput
            label="Nombre"
            id="firstName"
            placeholder="Nombre"
            value={formData.firstName}
            onChange={handleInputChange}
            onBlur={handleOnBlur}
            required
            max={30}
            className="p-8 w-[300px] bg-white border border-gray-300" // Mantener el estilo blanco con bordes gris claro
          />
          <FormInput
            label="Apellido"
            id="lastName"
            placeholder="Apellido"
            value={formData.lastName}
            onChange={handleInputChange}
            onBlur={handleOnBlur}
            required
            max={30}
            className="p-4 bg-white border border-gray-300" // Mantener el estilo blanco con bordes gris claro
          />
          <FormInput
            label="Cédula"
            id="identification"
            placeholder="Cédula"
            value={formData.identification}
            onChange={handleInputChange}
            required
            max={8}
            className="p-4 bg-white border border-gray-300" // Mantener el estilo blanco con bordes gris claro
          />
          <FormInput
            label="Fecha de nacimiento"
            id="birthDate"
            type="date"
            value={formData.birthDate}
            onChange={handleInputChange}
            required
            className="p-4 bg-white border border-gray-300" // Mantener el estilo blanco con bordes gris claro
          />
          <SelectInput
            label="Género"
            id="gender"
            value={formData.gender}
            onChange={(e) =>
              handleInputChange({
                target: { id: "gender", value: e.target.value },
              })
            }
            required
            className="p-4 bg-white border border-gray-300" // Mantener el estilo blanco con bordes gris claro
            options={[
              { value: "", label: "Selecciona un género", disabled: true },
              { value: "MALE", label: "Masculino" },
              { value: "FEMALE", label: "Femenino" },
            ]}
          />
          <SelectInput
            label="Tipo de sangre"
            id="bloodType"
            value={formData.bloodType}
            onChange={(e) =>
              handleInputChange({
                target: { id: "bloodType", value: e.target.value },
              })
            }
            required
            className="p-4 bg-white border border-gray-300" // Mantener el estilo blanco con bordes gris claro
            options={[
              {
                value: "",
                label: "Selecciona un tipo de sangre",
                disabled: true,
              },
              { value: "O_POSITIVE", label: "O+" },
              { value: "O_NEGATIVE", label: "O-" },
              { value: "A_POSITIVE", label: "A+" },
              { value: "A_NEGATIVE", label: "A-" },
              { value: "B_POSITIVE", label: "B+" },
              { value: "B_NEGATIVE", label: "B-" },
              { value: "AB_POSITIVE", label: "AB+" },
              { value: "AB_NEGATIVE", label: "AB-" },
            ]}
          />
          <FormInput
            label="Correo electrónico"
            id="email"
            type="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleOnBlurEmail}
            required
            className="p-4 bg-white border border-gray-300" // Mantener el estilo blanco con bordes gris claro
          />
          <FormInput
            label="Número de teléfono"
            id="phone"
            type="tel"
            placeholder="Número de Teléfono"
            value={formData.phone}
            onChange={handleInputChange}
            required
            max={12}
            className="p-4 bg-white border border-gray-300" // Mantener el estilo blanco con bordes gris claro
          />
          <FormInput
            label="Altura (Cm)"
            id="height"
            type="number"
            placeholder="70"
            value={formData.height}
            onChange={handleInputChange}
            required
            min="0"
            className="p-4 bg-white border border-gray-300" // Mantener el estilo blanco con bordes gris claro
          />
          <FormInput
            label="Peso (Kg)"
            id="weight"
            type="number"
            placeholder="160"
            value={formData.weight}
            onChange={handleInputChange}
            required
            min="0"
            className="p-4 bg-white border border-gray-300" // Mantener el estilo blanco con bordes gris claro
          />
          <FormInput
            label="Alergias"
            id="alergies"
            placeholder="Alergia"
            max={50}
            value={formData.alergies}
            onChange={handleInputChange}
            onBlur={handleOnBlur}
            className="p-4 bg-white border border-gray-300" // Mantener el estilo blanco con bordes gris claro
          />

          <div className="col-span-full mt-12">
            {" "}
            {/* Aumentar el margen superior */}
            <h2 className="text-lg font-bold text-neutral-900 mb-6">
              Contacto de emergencia
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {formData.emergencyContacts.map((contact, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <FormInput
                    label="Nombre del contacto de emergencia"
                    id="name"
                    placeholder="Nombre del contacto de emergencia"
                    value={contact.name}
                    onChange={(e) => handleEmergencyContactChange(index, e)}
                    onBlur={(e) => handleOnBlurEmergency(index, e)}
                    required
                    className="p-4 bg-white border border-gray-300" // Mantener el estilo blanco con bordes gris claro
                  />
                  <FormInput
                    label="Apellido del contacto de emergencia"
                    id="lastName"
                    placeholder="Apellido del contacto de cmergencia"
                    value={contact.lastName}
                    onChange={(e) => handleEmergencyContactChange(index, e)}
                    onBlur={(e) => handleOnBlurEmergency(index, e)}
                    required
                    className="p-4 bg-white border border-gray-300" // Mantener el estilo blanco con bordes gris claro
                  />
                  <FormInput
                    label="Cédula del contacto de emergencia"
                    id="dni"
                    placeholder="Cédula del contacto de emergencia"
                    value={contact.dni}
                    onChange={(e) => handleEmergencyContactChange(index, e)}
                    required
                    className="p-4 bg-white border border-gray-300" // Mantener el estilo blanco con bordes gris claro
                  />
                  <FormInput
                    label="Teléfono del contacto de emergencia"
                    id="phone"
                    type="tel"
                    placeholder="Número de teléfono"
                    value={contact.phone}
                    onChange={(e) => handleEmergencyContactChange(index, e)}
                    required
                    className="p-4 bg-white border border-gray-300" // Mantener el estilo blanco con bordes gris claro
                  />
                  <FormInput
                    label="Correo electrónico del contacto de emergencia"
                    id="email"
                    type="email"
                    placeholder="Correo electrónico"
                    value={contact.email}
                    onChange={(e) => handleEmergencyContactChange(index, e)}
                    onBlur={(e) => handleOnBlurEmergencyEmail(index, e)}
                    required
                    className="p-4 bg-white border border-gray-300" // Mantener el estilo blanco con bordes gris claro
                  />
                  <button
                    type="button"
                    onClick={() => removeEmergencyContact(index)}
                    className="mt-2 px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600"
                  >
                    Eliminar contacto
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={addEmergencyContact}
              className="mt-12 px-4 py-2 bg-[#F0F2F5] text-black font-bold rounded-lg hover:bg-[#D9D9D9]"
            >
              Agregar contacto de emergencia
            </button>
          </div>

          <div className="col-span-full mt-8">
            <button
              type="submit"
              className="px-6 py-3 bg-sky-500 text-white font-bold rounded-xl min-h-[40px] hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Registrar Paciente
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
