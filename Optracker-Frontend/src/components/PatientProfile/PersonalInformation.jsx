import React, { useState } from 'react';

const personalInfoData = [
  { label: 'Genero', value: 'Male' },
  { label: 'Edad', value: '60' },
  { label: 'Cedula', value: '298746585' },
  { label: 'Telefono', value: '0414-18752456' },
  { label: 'Correo', value: 'John@gmail.com' },
  { label: 'Fecha de Nacimiento', value: 'Jan 1, 1962' },
  { label: 'Altura', value: "6'2" },
  { label: 'Peso', value: '180 lbs' },
  { label: 'Tipo de Sangre', value: 'O+' },
  { label: 'Alergia', value: 'Peanuts, Penicillin' }
];

export default function PersonalInformation() {
  const [personalInfo, setPersonalInfo] = useState(personalInfoData);
  const [editIndex, setEditIndex] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleEdit = (index) => {
    setEditIndex(index);
    setInputValue(personalInfo[index].value);
  };

  const handleSave = (index) => {
    const updatedInfo = [...personalInfo];
    updatedInfo[index].value = inputValue;
    setPersonalInfo(updatedInfo);
    setEditIndex(null);
  };

  return (
    <>
      <div className="px-4 pt-4 pb-2 w-full text-lg font-bold leading-none text-neutral-900 max-md:max-w-full">
        Informacion Personal
      </div>
      <div className="flex flex-col p-4 w-full text-sm max-md:max-w-full">
        {[0, 2, 4, 6, 8].map(index => (
          <div key={index} className="flex flex-wrap w-full whitespace-nowrap min-h-[79px] max-md:max-w-full">
            <div className="flex flex-col grow shrink py-4 pr-20 border-t border-gray-200 min-w-[240px] w-[320px] max-md:max-w-full">
              <div className="w-full text-slate-500 max-md:max-w-full">
                {personalInfo[index].label}
              </div>
              <div className="mt-1 inline-flex w-full text-neutral-900 max-md:max-w-full justify-between">
                {editIndex === index ? (
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border border-gray-300 bg-white rounded p-1"
                  />
                ) : (
                  personalInfo[index].value
                )}
                <span className="ml-2 cursor-pointer" onClick={() => editIndex === index ? handleSave(index) : handleEdit(index)}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1700bd4f8231f8853f0a5973513a1c8fbd6fb0764f71cc78d7743b4bd71c79ee?placeholderIfAbsent=true&apiKey=33b41968e7754d2b98ae74310dc65b2e"
                    alt=""
                    className=""
                  />
                </span>
              </div>
            </div>
            <div className="flex flex-col grow shrink py-4 pl-20 border-t border-gray-200 min-w-[240px] w-[320px] max-md:max-w-full">
              <div className="w-full text-slate-500 max-md:max-w-full">
                {personalInfo[index + 1].label}
              </div>
              <div className="mt-1 inline-flex w-full text-neutral-900 max-md:max-w-full justify-between">
                {editIndex === index + 1 ? (
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border border-gray-300 rounded p-1 bg-white"
                  />
                ) : (
                  personalInfo[index + 1].value
                )}
                <span className="ml-2 cursor-pointer" onClick={() => editIndex === index + 1 ? handleSave(index + 1) : handleEdit(index + 1)}>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1700bd4f8231f8853f0a5973513a1c8fbd6fb0764f71cc78d7743b4bd71c79ee?placeholderIfAbsent=true&apiKey=33b41968e7754d2b98ae74310dc65b2e"
                    alt=""
                    className=""
                  />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}