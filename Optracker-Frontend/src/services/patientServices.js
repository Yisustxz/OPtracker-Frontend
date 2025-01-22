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

    return {
      id: patient[0]?.id,
      nombre: `${patient[0]?.name} ${patient[0]?.lastName}`,
      dni: patient[0]?.dni,
      familyCode: patient[0]?.familyCode,
      email: patient[0]?.email,
      telefono: patient[0]?.phoneNumber,
      alergias: patient[0]?.alergies,
      fechaNacimiento: patient[0]?.birthDate,
      peso: patient[0]?.weight,
      altura: patient[0]?.height,
      genero: patient[0]?.gender,
      tipoSangre: patient[0]?.bloodType,
      emergencyContacts: Array.isArray(patient[0]?.EmergencyContact)
        ? patient[0]?.EmergencyContact.map((contact) => ({
            id: contact.id,
            nombre: `${contact.name} ${contact.lastName}`,
            email: contact.email,
            telefono: contact.phoneNumber,
            dni: contact.dni
          }))
        : [],
      cirugias: Array.isArray(patient[0]?.Surgery) ? patient[0]?.Surgery : []
    }
  } catch (error) {
    console.error('Error fetching patient by UUID:', error)
    throw error
  }
}
