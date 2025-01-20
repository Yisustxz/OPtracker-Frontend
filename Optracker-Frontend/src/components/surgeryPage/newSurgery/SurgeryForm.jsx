import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SurgeryForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);
  const [newMemberName, setNewMemberName] = useState("");
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

  const handleDateChange = (e) => {
    setDate(new Date(e.targat.value).toISOString());
  };

  const handleAddMember = () => {
    if (newMemberName) {
      setTeamMembers([
        ...teamMembers,
        {
          id: teamMembers.length + 1,
          name: newMemberName,
          color: colors[Math.floor(Math.random() * colors.length)],
        },
      ]);
      setNewMemberName(""); // Limpiar el campo de entrada después de agregar
    }
  };

  const handleSubmit = () => {
    try {
      const surgeryDate = new Date(date);
      surgeryDate.setHours(
        Number(time.split(":")[0]),
        Number(time.split(":")[1])
      );
      setSurgeryData({
        title: title,
        date: surgeryDate,
        status: surgeryData.status,
      });
      alert("Registro exitoso!");
    } catch (error) {
      console.log(error);
      alert("No se ha podido registrar la cirugía");
    }
  };

  const handleAddProcedure = () => {
    if (procedure) {
      setProceduresList([
        ...proceduresList,
        { id: proceduresList.length + 1, title: procedure },
      ]);
      setProcedure(""); // Limpiar el campo de entrada después de agregar
    }
  };

  return (
    <form className="form-container">
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
        <h1 className="text-3xl font-bold text-neutral-900 ml-52 mb-1">
          Registrar una Nueva Cirugia
        </h1>
      </header>

      <div
        className="form-field"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div style={{ flex: 1, marginRight: "10px" }}>
          <label htmlFor="surgeryTitle" className="field-label">
            Titulo de la Cirugia
          </label>
          <input
            type="text"
            id="surgeryTitle"
            className="field-input"
            placeholder="titulo"
            onChange={handleTitleChange}
            required
          />
        </div>
        <div style={{ flex: 1 }}>
          <label htmlFor="surgeryDate" className="field-label">
            Fecha de La cirugia
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
          <label htmlFor="patientSearch" className="field-label">
            Paciente
          </label>
          <input
            type="search"
            id="patientSearch"
            className="field-input"
            placeholder="Busca el paciente"
            required
          />
        </div>
      </div>

      <div className="form-field">
        <label className="field-label">Equipo quirurgico que participara</label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input
            type="text"
            className="field-input"
            placeholder="Nombre del ayudante"
            value={newMemberName}
            onChange={(e) => setNewMemberName(e.target.value)}
            style={{ width: "40%" }} // Reducido el ancho del campo de escritura
          />
          <button
            type="button"
            className="add-member-button"
            style={{
              marginLeft: "10px",
              background: "#F0F2F5",
              borderRadius: "12px",
              border: "none",
            }}
            onClick={handleAddMember}
          >
            Agregar nuevo ayudante
          </button>
        </div>

        <div className="team-members">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member-circle">
              <div
                className="member-circle"
                style={{ backgroundColor: member.color }}
              ></div>
              <span>{member.name}</span>
            </div>
          ))}
        </div>
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
          <textarea
            id="procedure"
            className="field-input"
            placeholder="Escribir el procedimiento"
            value={procedure}
            onChange={(e) => setProcedure(e.target.value)}
            required
            style={{ width: "40%" }} // Reducido el ancho del campo de escritura
          />
          <button
            type="button"
            className="add-member-button"
            style={{
              marginLeft: "10px",
              background: "#F0F2F5",
              borderRadius: "12px",
              border: "none",
            }}
            onClick={handleAddProcedure}
          >
            Agregar procedimiento
          </button>
        </div>
        <div className="procedures-list">
          {proceduresList.map((proc) => (
            <div
              key={proc.id}
              className="procedure-item"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "8px",
                  borderRadius: "4px",
                }}
              >
                <svg
                  className="h-8 w-8 text-black"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="6" cy="7" r="3" />
                  <circle cx="6" cy="17" r="3" />
                  <line x1="8.6" y1="8.6" x2="19" y2="19" />
                  <line x1="8.6" y1="15.4" x2="19" y2="5" />
                </svg>
              </div>
              <label
                htmlFor={`procedure-${proc.id}`}
                style={{ marginLeft: "8px" }}
              >
                {proc.title}
              </label>
            </div>
          ))}
        </div>
      </div>

      <button type="submit" className="submit-button" onClick={handleSubmit}>
        Continue
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
