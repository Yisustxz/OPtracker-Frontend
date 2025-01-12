import React from 'react';

export default function MedTeamProfileHeader() {
  return (
    <div className="flex items-center p-4 w-full max-md:max-w-full">
      {/* Contenedor de la imagen */}
      <div className="w-32 h-32 rounded-full overflow-hidden">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3244335da1cb69304b9c0c242b7c7d6b5a2979d027617e5855a4c3d914bf819f?placeholderIfAbsent=true&apiKey=33b41968e7754d2b98ae74310dc65b2e"
          alt="John Doe profile picture"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Contenedor del texto */}
      <div className="ml-6 text-left">
        <div className="text-2xl font-bold leading-none text-neutral-900">
          Dr. John Doe
        </div>
        <div className="text-lg text-slate-500 mt-1">
          Pediátrica
        </div>
      </div>
    </div>
  );
}
