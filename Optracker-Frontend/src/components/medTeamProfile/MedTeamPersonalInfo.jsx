import React from 'react';

const professionalInfo = [
  { label: 'Especialidad', value: 'Pediatría' },
  { label: 'Licencia Médica', value: '123456 (California)' },
  { label: 'Número NPI', value: '298746585' },
  { label: 'Número DEA', value: '1418456' }
];

export default function MedTeamProfesionalInf() {
  return (
    <>
      {/* Título de la sección */}
      <div className="px-4 pt-4 mb-3 pb-5 w-full text-lg font-bold leading-none text-neutral-900 max-md:max-w-full text-left border-b border-gray-200">
        Información Profesional
      </div>

      {/* Contenedor general con borde inferior */}
      <div className="grid grid-cols-2 gap-x-8 p-3 w-full text-sm max-md:max-w-full border-b border-gray-200">
        {professionalInfo.map((info, index) => (
          <div key={index} className="flex flex-col py-4 ">
            <div className="text-slate-500">{info.label}</div>
            <div className="mt-1 text-neutral-900">{info.value}</div>
          </div>
        ))}
      </div>
    </>
  );
}



