import * as React from "react";
import MedTeamTableRow from "./medTeamRow";
import MedTeamTableHeader from "./medTeamHeader";

const patients = [
  { id: 1, name: "Juan Pérez", speciality: "Cardiología", type: "Doctor", status: "Activo" },
  { id: 2, name: "María López", speciality: "Pediatría", type: "Doctor", status: "Activo" },
  { id: 3, name: "Carlos García", speciality: "Neurología", type: "Doctor", status: "Inactivo" },
  { id: 4, name: "Ana Martínez", speciality: "Enfermería", type: "Nurse", status: "Activo" },
  { id: 5, name: "Luis Rodríguez", speciality: "Ginecología", type: "Doctor", status: "Activo" },
  { id: 6, name: "Sofía Hernández", speciality: "Oncología", type: "Nurse", status: "Inactivo" },
];

function MedTeamsTable({ searchQuery, activeFilter }) {
  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         patient.surgeon.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === "Todos" || patient.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex flex-col justify-center px-4 py-3 w-full text-sm max-md:max-w-full">
      <div className="flex overflow-hidden items-start w-full bg-white rounded-xl border border-solid border-zinc-200 max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
          <MedTeamTableHeader />
          <div className="flex flex-col w-full text-slate-500 max-md:max-w-full">
            {filteredPatients.map((patient) => (
              <MedTeamTableRow key={patient.id} {...patient} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedTeamsTable;
