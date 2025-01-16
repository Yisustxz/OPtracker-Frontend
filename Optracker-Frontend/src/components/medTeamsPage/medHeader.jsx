import * as React from "react";

function MedTeamHeader() {
  return (
    <div className="flex flex-wrap gap-3 justify-between items-start p-4 w-full text-neutral-900 max-md:max-w-full mt-10">
      <h1 className="w-72 text-3xl font-bold leading-none whitespace-nowrap min-w-[288px]">
        Equipo medico
      </h1>
      <span 
        className="flex overflow-hidden justify-center items-center px-4 text-sm font-medium text-center bg-[#577C8E] rounded-xl max-w-[480px] min-h-[32px] min-w-[84px] w-[200px] cursor-pointer"
        aria-label="Agregar nuevo paciente"
      >
        <span 
          className="overflow-hidden self-stretch my-auto w-[200px] text-white cursor-pointer"
          onClick={() => window.location.assign('/new-medteams')}
        >
          Nuevo equipo medico
        </span>
      </span>
    </div>
  );
}

export default MedTeamHeader;