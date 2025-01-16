import * as React from "react";

function MedTeamTableHeader() {
  return (
    <div className="flex flex-col w-full font-medium text-neutral-900 max-md:max-w-full">
      <div className="flex relative flex-wrap flex-1 gap-0 bg-white size-full max-md:max-w-full">
        <div className="px-4 py-3 w-[220px]" role="columnheader">
          Nombre
        </div>
        <div className="px-4 py-3 w-[210px]" role="columnheader">
          Especialidad
        </div>
        <div className="px-4 py-3 w-[190px]" role="columnheader">
          Tipo
        </div>
        <div className="absolute self-start py-3.5 pr-4 pl-1 whitespace-nowrap h-[46px] min-h-[46px] right-[0px] w-[200px]" role="columnheader">
          
        </div>
      </div>
    </div>
  );
}

export default MedTeamTableHeader;