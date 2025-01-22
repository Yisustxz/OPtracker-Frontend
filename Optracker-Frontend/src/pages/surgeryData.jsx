/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Navigation from '../components/ui/navigation';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function SurgeryData() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [surgeryInfo, setSurgeryInfo] = useState({});
  const [team, setTeam] = useState([]);
  const [procedures, setProcedures] = useState([]);

  useEffect(() => {
    const fetchSurgeryData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/surgery/${id}`);
        const data = response.data;

        // Formatear la información de la cirugía
        setSurgeryInfo({
          patientName: `${data.Patient.name} ${data.Patient.lastName}`,
          date: new Date(data.date).toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          }),
        });

        // Combinar doctores y enfermeras en el equipo
        const combinedTeam = [
          ...data.DoctorSurgery.map(doctor => ({
            role: doctor.doctor.speciality,
            name: `${doctor.doctor.names} ${doctor.doctor.lastNames}`,
            image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png', // Cambiar según la imagen real
          })),
          ...data.NurseSurgery.map(nurse => ({
            role: nurse.nurse.speciality,
            name: `${nurse.nurse.name} ${nurse.nurse.lastName}`,
            image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png', // Cambiar según la imagen real
          })),
        ];
        setTeam(combinedTeam);

        // Obtener procedimientos
        const procedureList = data.ProcedurePerSurgery.map(proc => ({
          name: proc.procedure.name,
          responsible: proc.procedure.description, // Cambiar según la lógica deseada
          image: '/procedure-image.png', // Usar la imagen de la carpeta public
        }));
        setProcedures(procedureList);
      } catch (error) {
        console.error("Error fetching surgery data:", error);
      }
    };

    fetchSurgeryData();
  }, [id]);

  return (
    <div className='flex flex-col pt-24 bg-white'>
      {/* Main Container */}
      <div className='flex overflow-hidden flex-col w-full bg-white min-h-[800px] max-md:max-w-full'>
        <div className='flex relative flex-col w-full max-md:max-w-full'>
          <Navigation />

          {/* Content Wrapper */}
          <div className='flex relative z-0 justify-center items-start px-40 py-5 w-full max-md:px-5 max-md:max-w-full'>
            <div className='flex overflow-hidden z-0 flex-col flex-1 shrink w-full basis-0 max-w-[960px] min-w-[240px] max-md:max-w-full'>
              {/* Header */}
              <div className='flex items-center mb-6'>
                <span
                  onClick={() => navigate('/surgery')}
                  className='bg-white text-black px-2 py-1 rounded-md cursor-pointer flex items-center mr-4'
                >
                  <svg
                    className='w-6 h-6 text-gray-800 dark:text-white'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 8 14'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13'
                    />
                  </svg>
                </span>
                <h1 className='text-2xl font-bold text-center ml-24'>
                  {`Cirugía de ${surgeryInfo.patientName} (${surgeryInfo.date})`}
                </h1>
              </div>

              {/* Surgical Team Section */}
              <div className='flex flex-col items-center mb-6'>
                <h2 className='text-lg font-bold mb-4 text-center'>
                  Equipo quirúrgico
                </h2>
                <div className='grid grid-cols-2 gap-4 w-full max-w-[800px]'>
                  {team.map((member, index) => (
                    <div
                      key={index}
                      className='flex items-center p-4 rounded-md'
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className='w-12 h-12 rounded-full mr-4'
                      />
                      <div className='flex flex-col'>
                        <span className='font-medium'>{member.role}</span>
                        <span className='text-sm text-gray-500'>
                          {member.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Procedures Section */}
              <div className='mb-6'>
                <h2 className='text-lg font-bold mb-4 text-left'>
                  Procedimientos
                </h2>
                <div className='grid grid-cols-2 gap-4 w-full max-w-[800px]'>
                  {procedures.map((procedure, index) => (
                    <div key={index} className='flex items-center p-4'>
                      <img
                        src={procedure.image}
                        alt={procedure.name}
                        className='w-6 h-6 mr-4'
                      />
                      <div className='flex flex-col flex-1'>
                        <span className='font-medium'>{procedure.name}</span>
                        <span className='text-sm text-gray-500'>
                          {procedure.responsible}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Accept Button */}
              <div className='flex justify-center'>
                <button 
                  className='bg-blue-500 text-white font-medium py-2 px-8 rounded hover:bg-blue-700'
                  onClick={() => navigate('/surgery')} // Redirigir a la página de cirugía
                >
                  Aceptar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SurgeryData;
