import React from 'react';

export default function EmergencyContact({ name, phone, email, image }) {
  return (
    <div className="flex flex-wrap gap-4 items-center px-4 py-2 w-full bg-white min-h-[72px] max-md:max-w-full">
      <img
        loading="lazy"
        src={image}
        alt={`${name} profile picture`}
        className="object-contain shrink-0 self-stretch my-auto w-14 rounded-3xl aspect-square"
      />
      <div className="flex flex-col justify-center self-stretch my-auto w-[141px]">
        <div className="overflow-hidden max-w-full text-base font-medium text-neutral-900 w-[101px]">
          {name}
        </div>
        <div className="flex overflow-hidden flex-col max-w-full text-sm whitespace-nowrap text-slate-500 w-[141px]">
          <div>{phone}</div>
          <div>{email}</div>
        </div>
      </div>
    </div>
  );
}