import React from 'react';
import Navigation from '@/components/ui/Navigation';
import PersonalInformation from '../components/PatientProfile/PersonalInformation';

export default function PatientProfile() {
  return (
    <div className="flex relative flex-col items-start bg-white">
      <Navigation />
      <div className="flex overflow-hidden z-0 flex-col self-stretch w-full bg-white min-h-[800px] max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex relative flex-1 justify-center items-start px-40 py-16 size-full max-md:px-5 max-md:max-w-full"> {/* Aumenté el padding superior */}
            <div className="flex overflow-hidden z-0 flex-col flex-1 shrink w-full basis-0 max-w-[960px] min-w-[240px] max-md:max-w-full">
              <PersonalInformation />
            </div>
            <span onClick={() => window.location.href = '/patient'} className="cursor-pointer absolute top-24 left-[78px] z-0"> {/* Ajusté la posición del icono */}
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
              </svg>
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}