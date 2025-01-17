export default function MedTeamProfesionalInf({ personal }) {
  const professionalInfo = [
    { label: "Especialidad", value: personal[0]?.especialidad },
    { label: "Licencia Médica", value: personal[0]?.licencia },
    { label: "DNI", value: personal[0]?.dni },
    { label: "Número DEA", value: personal[0]?.dea },
  ];

  return (
    <>
      <div className="px-4 pt-4 mb-3 pb-5 w-full text-xl font-bold leading-none text-neutral-900 max-md:max-w-full text-left ">
        Información Profesional
      </div>
      <div className="grid grid-cols-2 gap-x-8 p-3 w-full text-sm max-md:max-w-full ">
        {professionalInfo.map((info, index) => (
          <div key={index} className="flex flex-col py-4 ">
            <div className="text-slate-500 font-semibold text-lg">
              {info.label}
            </div>
            <div className="mt-1 text-neutral-900 text-base">{info.value}</div>
          </div>
        ))}
      </div>
    </>
  );
}
