import React from "react";

export default function MedTeamProfileHeader({ personal }) {
  return (
    <div className="flex flex-col items-center px-48 w-full max-md:max-w-full">
      <div className="w-32 h-32 rounded-full overflow-hidden">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3244335da1cb69304b9c0c242b7c7d6b5a2979d027617e5855a4c3d914bf819f?placeholderIfAbsent=true&apiKey=33b41968e7754d2b98ae74310dc65b2e"
          alt="John Doe profile picture"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-6 text-center">
        <div className="text-2xl font-bold leading-none text-neutral-900">
          {personal[0]?.nombre}
        </div>
        <div className="text-lg text-slate-500 mt-1">
          {personal[0]?.especialidad}
        </div>
      </div>
    </div>
  );
}
