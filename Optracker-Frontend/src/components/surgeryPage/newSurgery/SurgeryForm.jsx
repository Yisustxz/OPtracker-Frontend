import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function SurgeryForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);
  const [procedure, setProcedure] = useState(""); // Estado para el procedimiento
  const [proceduresList, setProceduresList] = useState([]); // Lista de procedimientos agregados
  const [surgeryData, setSurgeryData] = useState({
    title: "",
    date: "",
    status: "SCHEDULED",
    patientId: 0,
    nurseIds: [],
    doctorIds: [],
    procedureIds: [],
  });
  const navigate = useNavigate(); // Inicializar useNavigate

  const colors = ["#577C8E", "#2F4157", "#577C8E", "#219CED"];

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleOnBlurTitle = () => {
    setTitle(title.charAt(0).toUpperCase() + title.slice(1));
  };

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value); // Obtiene la fecha seleccionada
    const currentDate = new Date(); // Obtiene la fecha y hora actual

    // Verifica si la fecha seleccionada es anterior a la fecha actual
    if (selectedDate < currentDate) {
      alert("Por favor selecciona una fecha y hora futuras.");
      e.target.value = "";
    } else {
      console.log("Fecha válida:", selectedDate);
      setDate(new Date(e.target.value).toISOString());
      // Aquí puedes manejar la fecha válida según lo que necesites
    }
  };

  const [patients, setPatients] = useState([]);
  const [procedures, setProcedures] = useState([]); // Estado para procedimientos

  // Llamada a la API para obtener los pacientes
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get("http://localhost:3000/patient");
        const formattedPatients = response.data.map((patient) => ({
          id: patient.id,
          name: `${patient.name} ${patient.lastName}`,
          dni: patient.dni,
        }));
        setPatients(formattedPatients);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, []);

  // Llamada a la API para obtener los procedimientos
  useEffect(() => {
    const fetchProcedures = async () => {
      try {
        const response = await axios.get("http://localhost:3000/procedure");
        const formattedProcedures = response.data.map((proc) => ({
          id: proc.id,
          name: proc.name,
        }));
        setProcedures(formattedProcedures);
      } catch (error) {
        console.error("Error fetching procedures:", error);
      }
    };

    fetchProcedures();
  }, []);

  const [medTeam, setMedTeam] = useState([]);

  useEffect(() => {
    console.log("MedTeam actualizado:", medTeam);
  }, [medTeam]);

  // Llamada a la API para obtener enfermeras y doctores
  useEffect(() => {
    const fetchMedTeam = async () => {
      try {
        const [nursesResponse, doctorsResponse] = await Promise.all([
          axios.get("http://localhost:3000/nurse"),
          axios.get("http://localhost:3000/doctor"),
        ]);
        const formattedNurses = nursesResponse.data.map((nurse) => ({
          id: nurse.id,
          name: `${nurse.name} ${nurse.lastName}`,
          dni: nurse.dni,
          type: "nurse", // Agregar tipo manualmente
        }));
        const formattedDoctors = doctorsResponse.data.map((doctor) => ({
          id: doctor.id,
          name: `${doctor.names} ${doctor.lastNames}`,
          dni: doctor.dni,
          type: "doctor", // Agregar tipo manualmente
        }));
        setMedTeam([...formattedNurses, ...formattedDoctors]);
      } catch (error) {
        console.error("Error fetching medical team:", error);
      }
    };

    fetchMedTeam();
  }, []);

  const handleAddMember = (memberDni, index = null) => {
    if (!memberDni) return;

    console.log(memberDni);

    const member = medTeam.find((m) => m.dni === memberDni);
    if (!member) return;

    const { type } = member;

    console.log(member);
    console.log(type);

    setSurgeryData((prev) => {
      const updatedData = { ...prev };

      if (type === "nurse") {
        console.log("nurse");
        updatedData.nurseIds = [...new Set([...prev.nurseIds, member.id])];
      } else if (type === "doctor") {
        console.log("doctor");
        updatedData.doctorIds = [...new Set([...prev.doctorIds, member.id])];
      }

      return updatedData;
    });

    if (index === null) {
      // Agregar nuevo miembro
      setTeamMembers((prev) => [...new Set([...prev, member.id])]);
    } else {
      // Actualizar miembro en una posición específica
      setTeamMembers((prev) => {
        const updatedMembers = [...prev];
        updatedMembers[index] = member.id;
        return updatedMembers;
      });
    }

    console.log(surgeryData);
  };

  const handleAddProcedure = (procedureId, index = null) => {
    if (!procedureId) return;

    console.log(procedureId);

    setSurgeryData((prev) => {
      const updatedData = { ...prev };

      updatedData.procedureIds = [
        ...new Set([...prev.procedureIds, procedureId]),
      ];

      return updatedData;
    });

    console.log(surgeryData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(surgeryData);
    try {
      const surgeryDate = new Date(date).toISOString(); // Convertir la fecha a formato ISO
      const response = await axios.post("http://localhost:3000/surgery", {
        title: title,
        date: surgeryDate,
        status: surgeryData.status,
        patientId: Number(surgeryData.patientId), // Convertir el ID del paciente a número
        nurseIds: surgeryData.nurseIds.map(Number), // Convertir los IDs de las enfermeras a números
        doctorIds: surgeryData.doctorIds.map(Number), // Convertir los IDs de los doctores a números
        procedureIds: surgeryData.procedureIds.map((proc) => Number(proc)), // Convertir los IDs de los procedimientos a números
      });
      if (response.status === 201) {
        console.log(response);
        navigate("/surgery"); // Redirigir a la página de cirugía
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [additionalMembers, setAdditionalMembers] = useState([]);

  const [additionalProcedures, setAdditionalProcedures] = useState([]);

  const handleAddNewMemberSelect = () => {
    setAdditionalMembers([...additionalMembers, ""]);
  };

  const handleAddNewProcedure = () => {
    setAdditionalProcedures([...additionalProcedures, ""]);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      {" "}
      {/* Agregado onSubmit aquí */}
      <header className="mb-8 flex items-center">
        <span
          onClick={() => navigate("/surgery")}
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
        <h1 className="text-3xl font-bold text-neutral-900 ml-60 mb-1">
          Registrar una nueva cirugía
        </h1>
      </header>
      <div
        className="form-field"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div style={{ flex: 1, marginRight: "10px" }}>
          <label htmlFor="surgeryTitle" className="field-label">
            Título de la cirugía
          </label>
          <input
            type="text"
            id="surgeryTitle"
            className="field-input"
            placeholder="titulo"
            onChange={handleTitleChange}
            onBlur={handleOnBlurTitle}
            maxLength={40}
            required
          />
        </div>
        <div style={{ flex: 1 }}>
          <label htmlFor="surgeryDate" className="field-label">
            Fecha de la cirugía
          </label>
          <input
            type="datetime-local"
            id="surgeryDate"
            className="field-input"
            onChange={handleDateChange}
            required
          />
        </div>
      </div>
      <div
        className="form-field"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div style={{ flex: 1 }}>
          <label htmlFor="patientSelect" className="field-label">
            Paciente
          </label>
          <select
            id="patientSelect"
            className="field-input"
            onChange={(e) =>
              setSurgeryData({ ...surgeryData, patientId: e.target.value })
            }
            required
          >
            <option value="">Selecciona un paciente</option>
            {patients.map((patient) => (
              <option key={patient.id} value={patient.id}>
                {patient.name} ({patient.dni})
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-field">
        <label className="field-label">Equipo quirúrgico que participará</label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <select
            className="field-input"
            onChange={(e) => handleAddMember(e.target.value)}
            style={{ width: "40%" }}
            required
          >
            <option value="">Selecciona un miembro del equipo</option>
            {medTeam.map((member) => (
              <option key={member.id} value={member.dni}>
                {member.name} ({member.dni})
              </option>
            ))}
          </select>
          <button
            type="button"
            className="add-member-button"
            style={{
              marginLeft: "10px",
              background: "#F0F2F5",
              borderRadius: "12px",
              border: "none",
            }}
            onClick={handleAddNewMemberSelect}
          >
            Agregar nuevo ayudante
          </button>
        </div>

        {/* Renderizar selects adicionales */}
        {additionalMembers.map((_, index) => (
          <div key={index} className="form-field">
            <select
              className="field-input mt-3"
              onChange={(e) => handleAddMember(e.target.value, index)}
              style={{ width: "40%" }}
              required
            >
              <option value="">Selecciona un miembro del equipo</option>
              {medTeam.map((member) => (
                <option key={member.id} value={member.dni}>
                  {member.name} ({member.dni})
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <div className="form-field">
        <label htmlFor="procedure" className="field-label">
          Procedimiento
        </label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <select
            id="procedure"
            className="field-input"
            onChange={(e) => handleAddProcedure(e.target.value)}
            required
            style={{ width: "40%" }}
          >
            <option value="">Selecciona un procedimiento</option>
            {procedures.map((proc) => (
              <option key={proc.id} value={proc.id}>
                {proc.name}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="add-member-button"
            style={{
              marginLeft: "10px",
              background: "#F0F2F5",
              borderRadius: "12px",
              border: "none",
            }}
            onClick={handleAddNewProcedure}
          >
            Agregar nuevo procedimiento
          </button>
        </div>

        {/* Renderizar procedimientos adicionales */}
        {additionalProcedures.map((proc, index) => (
          <div key={index} className="form-field">
            <select
              className="field-input mt-3"
              value={proc.id}
              onChange={(e) => handleAddProcedure(e.target.value, index)}
              style={{ width: "40%" }}
              required
            >
              <option value="">Selecciona un procedimiento</option>
              {procedures.map((proc) => (
                <option key={proc.id} value={proc.id}>
                  {proc.name}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <button type="submit" className="submit-button">
        {" "}
        {/* Cambiado a type="submit" */}
        Registrar
      </button>
      <style jsx>{`
        .form-container {
          position: relative;
          display: flex;
          width: 960px;
          flex-direction: column;
          overflow: hidden;
          align-items: start;
          justify-content: start;
          padding: 20px 0;
        }
        .form-title {
          font-size: 32px;
          font-weight: 700;
          color: #121417;
          margin-bottom: 24px;
        }
        .form-field {
          width: 100%;
          margin-bottom: 24px;
        }
        .field-label {
          color: #121417;
          font-weight: 700;
          font-size: 18px;
          margin-bottom: 8px;
          display: block;
        }
        .field-input {
          background-color: white;
          border: 1px solid #dbe0e5;
          border-radius: 12px;
          font-size: 14px;
          font-family: inherit;
          padding: 10px;
          width: 80%;
        }
        .team-members {
          margin-top: 16px;
          width: 80%;
        }
        .team-member-circle {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
        }
        .member-circle {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          margin-right: 8px;
        }
        .add-member-button {
          background: #f0f2f5;
          color: black;
          padding: 10px 15px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
        }
        .add-member-button:hover {
          background: #e0e0e0;
        }
        .submit-button {
          background: #219ced;
          color: white;
          padding: 12px 24px;
          border-radius: 12px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          font-family: inherit;
          align-self: center;
          min-width: 120px;
        }
        .submit-button:hover {
          background: #1b8ad6;
        }
        .procedure-item {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
        }
      `}</style>
    </form>
  );
}
