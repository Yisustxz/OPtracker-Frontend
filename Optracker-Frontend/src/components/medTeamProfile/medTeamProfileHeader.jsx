import React from "react";

export default function MedTeamProfileHeader({ personal }) {
  return (
    <>
      <div className="flex flex-wrap gap-3 justify-center items-start p-4 w-full text-3xl font-bold leading-none text-neutral-900 max-md:max-w-full">
        <div className="w-72 min-w-[288px]">Perfil del Personal</div>
      </div>
      <div className="flex flex-col items-center px-48 w-full max-md:max-w-full mt-7">
        <div className="w-32 h-32 rounded-full overflow-hidden">
          <img
            loading="lazy"
            src="https://i.pinimg.com/236x/d9/d8/8e/d9d88e3d1f74e2b8ced3df051cecb81d.jpg"
            alt="Imagen de perfil"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-6 text-center">
          <div className="text-2xl font-bold leading-none text-neutral-900">
            {personal[0]?.nombre}
          </div>
          <div className="text-lg text-slate-500 mt-1">
            {personal[0]?.tipo === "Nurse" ? "Enfermero" : "Doctor"}
          </div>
        </div>
      </div>
    </>
  );
}
