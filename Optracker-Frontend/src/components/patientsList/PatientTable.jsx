import React, { useState, useEffect } from "react";
import axios from "axios";
import PatientTableRow from "./PatientTableRow";
import PatientTableHeader from "./PatientTableHeader";

function PatientTable({ searchQuery, activeFilter }) {
  const [patients, setPatients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Llamada a la API para obtener los pacientes
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get("http://localhost:3000/patient");
        const formattedPatients = response.data.map(patient => ({
          id: patient.id,
          date: new Date(patient.createAt).toLocaleDateString(),
          name: `${patient.name} ${patient.lastName}`,
          surgery: patient.Surgery.length,
          dni: patient.dni,
          phoneNumber: patient.phoneNumber,
          status: "Completado", // Puedes usar otro criterio si el estado es dinámico
          statusColor: patient.Surgery.length > 0 ? "bg-green-500" : "bg-gray-300"
        }));
        setPatients(formattedPatients);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching patients:", error);
        setIsLoading(false);
      }
    };

    fetchPatients();
  }, []);

  // Filtrar pacientes según la búsqueda y el filtro activo
  const filteredPatients = patients.filter(patient => {
    console.log(patient)
    const matchesSearch =
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.dni.includes(searchQuery);
    const matchesFilter =
      activeFilter === "Todos" ||
      (activeFilter === "Con cirugía" && patient.surgery > 0) ||
      (activeFilter === "Sin cirugía" && patient.surgery === 0);
    return matchesSearch && matchesFilter;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center px-4 py-3 w-full text-sm max-md:max-w-full">
      <div className="flex overflow-hidden items-start w-full bg-white rounded-xl border border-solid border-zinc-200 max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
          <PatientTableHeader />
          <div className="flex flex-col w-full text-slate-500 max-md:max-w-full">
            {filteredPatients.map(patient => (
              <PatientTableRow key={patient.id} {...patient} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientTable;
