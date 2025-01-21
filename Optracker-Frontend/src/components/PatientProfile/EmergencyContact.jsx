import React from 'react'

export default function EmergencyContact({
  name,
  phoneNumber,
  email,
  lastName,
  image
}) {
  return (
    <div className='flex flex-wrap gap-4 items-center px-4 py-2 w-full bg-white min-h-[72px] max-md:max-w-full'>
      <img
        loading='lazy'
        src={
          'https://i.pinimg.com/236x/d9/d8/8e/d9d88e3d1f74e2b8ced3df051cecb81d.jpg'
        }
        alt={`profile picture`}
        className='object-contain shrink-0 self-stretch my-auto w-14 rounded-3xl aspect-square'
      />
      <div className='flex flex-col justify-center self-stretch my-auto w-[300px]'>
        <div className='overflow-hidden max-w-full text-base font-medium text-neutral-900 w-[101px]'>
          {name} {lastName}
        </div>
        <div className='flex overflow-hidden flex-col max-w-full text-sm whitespace-nowrap text-slate-500 w-[120px]'>
          <div className='mr-4'>{phoneNumber}</div>
          <div className='ml-2'>{email}</div>
        </div>
      </div>
    </div>
  )
}
