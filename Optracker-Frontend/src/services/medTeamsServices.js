// src/services/medTeamsService.js
import api from "./api";

export const fetchNurses = async () => {
  try {
    const response = await api.get("/nurse");
    return response.data.map((nurse) => ({
      nombre: `${nurse.name} ${nurse.lastName}`,
      especialidad: nurse.speciality,
      tipo: "Nurse",
      email: nurse.email,
      licencia: nurse.licenseNumber,
      dea: nurse.dea,
      dni: nurse.dni,
      educacion: nurse.NurseStudies,
    }));
  } catch (error) {
    console.error("Error fetching nurses:", error);
    throw error;
  }
};

export const fetchDoctors = async () => {
  try {
    const response = await api.get("/doctor");
    return response.data.map((doctor) => ({
      nombre: `${doctor.names} ${doctor.lastNames}`,
      especialidad: doctor.speciality,
      tipo: "Doctor",
      licencia: doctor.licenseNumber,
      dni: doctor.dni,
      dea: doctor.dea,
    }));
  } catch (error) {
    console.error("Error fetching doctors:", error);
    throw error;
  }
};

// Servicio para crear un doctor
export const createDoctor = async (doctorData) => {
  console.log("Datos enviados al servidor:", doctorData);
  try {
    const response = await api.post(`/doctor`, doctorData);
    return response.data;
  } catch (error) {
    console.error("Error al crear el doctor:", error);
    throw error;
  }
};

// Servicio para crear un enfermero
export const createNurse = async (nurseData) => {
  try {
    const response = await api.post(`/nurse`, nurseData);
    return response.data;
  } catch (error) {
    console.error("Error al crear el enfermero:", error);
    throw error;
  }
};
