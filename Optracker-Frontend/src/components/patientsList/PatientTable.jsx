import * as React from "react";
import PatientTableRow from "./PatientTableRow";
import PatientTableHeader from "./PatientTableHeader";

const patients = [
  {
    id: 1,
    date: "Jun 1, 2022",
    name: "John Doe",
    surgeon: "Dr. Mark Johnson",
    status: "Completado",
    statusColor: "bg-green-500"
  },
  {
    id: 2,
    date: "Jun 2, 2022",
    name: "John Doe",
    surgeon: "Dr. Sarah Thompson",
    status: "En progreso",
    statusColor: "bg-yellow-300"
  },
  {
    id: 3,
    date: "Jun 3, 2022",
    name: "Jane Smith",
    surgeon: "Dr. Michael Williams",
    status: "Completado",
    statusColor: "bg-green-500"
  },
  {
    id: 4,
    date: "Jun 4, 2022",
    name: "Bob Johnson",
    surgeon: "Dr. Emily Davis",
    status: "Cancelado",
    statusColor: "bg-orange-600"
  },
  {
    id: 5,
    date: "Jun 5, 2022",
    name: "Sara Miller",
    surgeon: "Dr. James Brown",
    status: "Completado",
    statusColor: "bg-green-500"
  },
  {
    id: 6,
    date: "Jun 6, 2022",
    name: "Mike Wilson",
    surgeon: "Dr. Emma Garcia",
    status: "En progreso",
    statusColor: "bg-yellow-300"
  },
  {
    id: 7,
    date: "Jun 7, 2022",
    name: "Chris Taylor",
    surgeon: "Dr. Olivia Martinez",
    status: "En progreso",
    statusColor: "bg-yellow-300"
  },
  {
    id: 8,
    date: "Jun 8, 2022",
    name: "Ava White",
    surgeon: "Dr. Daniel Rodriguez",
    status: "En progreso",
    statusColor: "bg-yellow-300"
  },
  {
    id: 9,
    date: "Jun 9, 2022",
    name: "Sam Lee",
    surgeon: "Dr. Mia Perez",
    status: "Completado",
    statusColor: "bg-green-500"
  },
  {
    id: 10,
    date: "Jun 10, 2022",
    name: "Lily Turner",
    surgeon: "Dr. Logan Scott",
    status: "Programado",
    statusColor: "bg-gray-100"
  }
];

function PatientTable({ searchQuery, activeFilter }) {
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
          <PatientTableHeader />
          <div className="flex flex-col w-full text-slate-500 max-md:max-w-full">
            {filteredPatients.map((patient) => (
              <PatientTableRow key={patient.id} {...patient} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientTable;