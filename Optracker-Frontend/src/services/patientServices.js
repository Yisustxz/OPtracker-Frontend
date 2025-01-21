import api from './api'

export const fetchPatients = async () => {
  try {
    const response = await api.get('/patient')
    return response.data.map((patient) => ({
      id: patient.id,
      nombre: `${patient.name} ${patient.lastName}`,
      dni: patient.dni,
      email: patient.email,
      telefono: patient.phoneNumber,
      alergias: patient.alergies,
      fechaNacimiento: patient.birthDate,
      peso: patient.weight,
      altura: patient.height,
      genero: patient.gender,
      tipoSangre: patient.bloodType
    }))
  } catch (error) {
    console.error('Error fetching patients:', error)
    throw error
  }
}

export const fetchPatientByUUID = async (uuid) => {
  try {
    const response = await api.get(`/patient/code/${uuid}`)
    const patient = response.data || {}

    console.log('Respuesta del servidor:', patient) // Verificar respuesta

    return {
      id: patient.id,
      nombre: `${patient.name} ${patient.lastName}`,
      dni: patient.dni,
      email: patient.email,
      telefono: patient.phoneNumber,
      alergias: patient.alergies,
      fechaNacimiento: patient.birthDate,
      peso: patient.weight,
      altura: patient.height,
      genero: patient.gender,
      tipoSangre: patient.bloodType,
      emergencyContacts: Array.isArray(patient.EmergencyContact)
        ? patient.EmergencyContact.map((contact) => ({
            id: contact.id,
            nombre: `${contact.name} ${contact.lastName}`,
            email: contact.email,
            telefono: contact.phoneNumber,
            dni: contact.dni
          }))
        : [],
      cirugias: Array.isArray(patient.Surgery) ? patient.Surgery : []
    }
  } catch (error) {
    console.error('Error fetching patient by UUID:', error)
    throw error
  }
}
