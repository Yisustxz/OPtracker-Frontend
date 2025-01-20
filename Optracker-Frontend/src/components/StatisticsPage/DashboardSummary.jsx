import React from 'react';

const summaryData = [
  { label: 'Cirugías en curso', value: 10, bgColor: 'bg-blue-100' },
  { label: 'Pacientes', value: 400, bgColor: 'text-white', customBgColor: 'rgb(47,65,87)' },
  { label: 'Cirugías completadas', value: 200, bgColor: 'text-white', customBgColor: 'rgb(87,124,142)' },
  { label: 'Cirugías programadas', value: 50, bgColor: 'bg-gray-100' }
];

export default function DashboardSummary() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      {summaryData.map((item, index) => (
        <div
          key={index}
          className={`p-6 rounded-lg shadow-sm text-center ${item.bgColor}`}
          style={{
            backgroundColor: item.customBgColor || '',
          }}
        >
          <div className="text-lg font-semibold">{item.label}</div>
          <div className="text-3xl font-bold">{item.value}</div>
        </div>
      ))}
    </div>
  );
}

