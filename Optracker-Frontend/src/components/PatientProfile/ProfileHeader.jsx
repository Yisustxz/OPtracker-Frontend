import React from 'react';

export default function ProfileHeader() {
  return (
    <>
      <div className="flex flex-wrap gap-3 justify-between items-start p-4 w-full text-3xl font-bold leading-none text-neutral-900 max-md:max-w-full">
        <div className="w-72 min-w-[288px]">Perfil de Paciente</div>
      </div>
      <div className="flex items-start p-4 w-full text-center max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink items-center w-full basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col items-center max-w-full w-[157px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3244335da1cb69304b9c0c242b7c7d6b5a2979d027617e5855a4c3d914bf819f?placeholderIfAbsent=true&apiKey=33b41968e7754d2b98ae74310dc65b2e"
              alt="John Doe profile picture"
              className="object-contain w-32 max-w-full aspect-square min-h-[128px] rounded-[64px]"
            />
            <div className="flex flex-col justify-center items-center mt-4 w-full">
              <div className="text-2xl font-bold leading-none text-neutral-900 w-[94px]">
                John Doe
              </div>
              <div className="w-full text-base text-slate-500">
                Admitted Jan 2, 2022
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}