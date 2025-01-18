import * as React from "react";
import { useNavigate } from "react-router-dom";

function MedTeamTableRow({ nombre, especialidad, tipo, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="flex relative flex-wrap items-start w-full border-t border-gray-200 h-[72px] max-md:max-w-full"
      role="row"
    >
      <div className="flex-1 px-4 py-7 min-h-[72px] w-[236px]" role="cell">
        {nombre}
      </div>
      <div
        className="flex-1 px-4 py-7 min-h-[72px] text-neutral-900 w-[245px]"
        role="cell"
      >
        {especialidad}
      </div>
      <div className="flex-1 px-0 py-7 min-h-[72px] w-[253px]" role="cell">
        {tipo}
      </div>
      <div
        className="flex-1 flex justify-center items-center px-4 py-5 font-medium text-center h-[72px] text-neutral-900 w-[100px]"
        role="cell"
      >
        <span
          className="ml-2 bg-white"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/medteamsprofile", { state: { id: id, tipo: tipo } });
          }}
        >
          <svg
            className="h-6 w-6 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="2" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default MedTeamTableRow;
