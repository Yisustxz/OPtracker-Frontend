import * as React from "react";

const filters = [
  { id: "todos", label: "Todos" }, // Agregado el filtro "Todos"
  { id: "completado", label: "Sin cirugía" },
  { id: "progreso", label: "Con cirugía" }
];

function FilterSection({ activeFilter, setActiveFilter }) {
  return (
    <div className="flex flex-wrap gap-3 items-start py-3 pr-4 pl-3 w-full text-sm font-medium text-neutral-900 max-md:max-w-full">
      {filters.map(({ id, label }) => (
        <span 
          key={id}
          onClick={() => setActiveFilter(label)}
          className={`flex gap-2 justify-center items-center border-2 border-gray-300 rounded-xl px-2 py-1 transition-colors duration-200 hover:bg-blue-300 hover:border-blue-600 ${
            activeFilter === label ? "bg-blue-200 border-blue-500 text-black" : "bg-white text-black"
          } min-h-[36px] w-[120px]`} 
          aria-pressed={activeFilter === label}
        >
          <span className="self-stretch my-auto">{label}</span>
        </span>
      ))}
    </div>
  );
}

export default FilterSection;