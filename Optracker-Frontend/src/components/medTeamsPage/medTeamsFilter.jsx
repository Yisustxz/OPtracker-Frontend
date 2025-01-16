import * as React from "react";

const filters = [
  { id: "todos", label: "Todos" }, 
  { id: "cirujano", label: "Cirujano" },
  { id: "enfermero", label: "Enfermero" }
];

function MedTeamsFilter({ activeFilter, setActiveFilter }) {
  return (
    <div className='w-full flex gap-4 items-start mb-6'>
      {filters.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => setActiveFilter(label)}
          className={`flex items-center justify-center border-2 border-gray-300 rounded-xl px-4 py-2 transition-colors duration-200 hover:bg-blue-300 hover:border-blue-600 ${
            activeFilter === label ? 'bg-blue-200 border-blue-500 text-black' : 'bg-white text-black'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default MedTeamsFilter;
