import React from 'react';
import { FaUniversity } from 'react-icons/fa'; // Icono de universidad

const educationData = [
  {
    title: 'Facultad de Medicina: Universidad de California',
    location: 'San Francisco',
    period: '2006 - 2010'
  },
  {
    title: 'Residencia: Stanford',
    location: 'San Francisco',
    period: '2010 - 2013'
  }
];

export default function EducationList() {
  return (
    <div className="p-6 text-left">
      <h2 className="text-lg font-bold mb-6">Educación</h2>
      <div className="space-y-4 text-left">
        {educationData.map((edu, index) => (
          <div key={index} className="flex items-start gap-4">
            <FaUniversity className="text-gray-500 mt-1" size={24} />
            <div>
              <div className="font-medium ">{edu.title}</div>
              <div className="text-slate-500">{edu.location}</div>
              <div className="text-slate-500 mb-4">{edu.period}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
