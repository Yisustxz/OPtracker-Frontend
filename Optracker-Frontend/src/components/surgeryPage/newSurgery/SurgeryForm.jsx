import React, { useState } from 'react';

export function SurgeryForm() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [newMemberName, setNewMemberName] = useState('');
  const [procedure, setProcedure] = useState(''); // Estado para el procedimiento
  const [proceduresList, setProceduresList] = useState([]); // Lista de procedimientos agregados

  const colors = ['#577C8E', '#2F4157', '#577C8E', '#219CED'];

  const handleAddMember = () => {
    if (newMemberName) {
      setTeamMembers([...teamMembers, { id: teamMembers.length + 1, name: newMemberName, color: colors[Math.floor(Math.random() * colors.length)] }]);
      setNewMemberName(''); // Limpiar el campo de entrada después de agregar
    }
  };

  const handleAddProcedure = () => {
    if (procedure) {
      setProceduresList([...proceduresList, { id: proceduresList.length + 1, title: procedure }]);
      setProcedure(''); // Limpiar el campo de entrada después de agregar
    }
  };

  return (
    <form className="form-container">
      <h1 className="form-title">Nueva Cirugia</h1>
      
      <div className="form-field" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, marginRight: '10px' }}>
          <label htmlFor="surgeryTitle" className="field-label">
            Titulo de la Cirugia
          </label>
          <input
            type="text"
            id="surgeryTitle"
            className="field-input"
            placeholder="titulo"
            required
          />
        </div>
        <div style={{ flex: 1 }}>
          <label htmlFor="surgeryDate" className="field-label">
            Fecha de La cirugia
          </label>
          <input
            type="date"
            id="surgeryDate"
            className="field-input"
            required
          />
        </div>
      </div>

      <div className="form-field" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1, marginRight: '10px' }}>
          <label htmlFor="surgeryTime" className="field-label">
            Hora de La cirugia
          </label>
          <input
            type="time"
            id="surgeryTime"
            className="field-input"
            required
          />
        </div>
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
        <label className="field-label">
          Equipo quirurgico que participara
        </label>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <input
            type="text"
            className="field-input"
            placeholder="Nombre del ayudante"
            value={newMemberName}
            onChange={(e) => setNewMemberName(e.target.value)}
            style={{ width: '40%' }} // Reducido el ancho del campo de escritura
          />
          <button type="button" className="add-member-button" style={{ marginLeft: '10px', background: '#F0F2F5', borderRadius: '12px', border: 'none' }} onClick={handleAddMember}>
            Agregar nuevo ayudante
          </button>
        </div>
        
        <div className="team-members">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-member-circle">
              <div className="member-circle" style={{ backgroundColor: member.color }}></div>
              <span>{member.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="procedure" className="field-label">
          Procedimiento
        </label>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <textarea
            id="procedure"
            className="field-input"
            placeholder="Escribir el procedimiento"
            value={procedure}
            onChange={(e) => setProcedure(e.target.value)}
            required
            style={{ width: '40%' }} // Reducido el ancho del campo de escritura
          />
          <button type="button" className="add-member-button" style={{ marginLeft: '10px', background: '#F0F2F5', borderRadius: '12px', border: 'none' }} onClick={handleAddProcedure}>
            Agregar procedimiento
          </button>
        </div>
        <div className="procedures-list">
          {proceduresList.map((proc) => (
            <div key={proc.id} className="procedure-item" style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ backgroundColor: '#f0f0f0', padding: '8px', borderRadius: '4px' }}>
                <svg className="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="6" cy="7" r="3" />
                  <circle cx="6" cy="17" r="3" />
                  <line x1="8.6" y1="8.6" x2="19" y2="19" />
                  <line x1="8.6" y1="15.4" x2="19" y2="5" />
                </svg>
              </div>
              <label htmlFor={`procedure-${proc.id}`} style={{ marginLeft: '8px' }}>{proc.title}</label>
            </div>
          ))}
        </div>
      </div>

      <button type="submit" className="submit-button">
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
          background: #F0F2F5;
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