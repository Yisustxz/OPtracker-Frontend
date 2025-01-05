import React from 'react';
import Navigation from '@/components/ui/Navigation';
import ProfileHeader from '../components/PatientProfile/ProfileHeader';
import PersonalInformation from '../components/PatientProfile/PersonalInformation';
import EmergencyContact from '../components/PatientProfile/EmergencyContact';

const emergencyContacts = [
  {
    id: 1,
    name: 'Jane Doe',
    phone: '0414-9857478',
    email: 'JaneDoes@gmail.com',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/63ab16d633d8f8875ec9acd9006015c677d4c0be6f638e6d7107082cc7283625?placeholderIfAbsent=true&apiKey=33b41968e7754d2b98ae74310dc65b2e'
  },
  {
    id: 2,
    name: 'James Doe',
    phone: '0424-5868445',
    email: 'JaneDoes@gmail.com',
    image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a7641669d5bc844e85377186ebf9f43faff169253e3f090e7d1fb836d69abec8?placeholderIfAbsent=true&apiKey=33b41968e7754d2b98ae74310dc65b2e'
  }
];

export default function PatientProfile() {
  return (
    <div className="flex relative flex-col items-start bg-white">
      <Navigation />
      <div className="flex overflow-hidden z-0 flex-col self-stretch w-full bg-white min-h-[800px] max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex relative flex-1 justify-center items-start px-40 py-16 size-full max-md:px-5 max-md:max-w-full"> {/* Aumenté el padding superior */}
            <div className="flex overflow-hidden z-0 flex-col flex-1 shrink w-full basis-0 max-w-[960px] min-w-[240px] max-md:max-w-full">
              <ProfileHeader />
              <PersonalInformation />
              <div className="px-4 pt-4 pb-2 w-full text-lg font-bold leading-none text-neutral-900 max-md:max-w-full">
                Emergency Contacts
              </div>
              {emergencyContacts.map(contact => (
                <EmergencyContact key={contact.id} {...contact} />
              ))}
          
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