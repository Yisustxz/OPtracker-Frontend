import * as React from "react";

const filters = [
  { id: "todos", label: "Todos", width: "w-[109px]" }, // Agregado el filtro "Todos"
  { id: "completado", label: "Completado", width: "w-[111px]" },
  { id: "progreso", label: "En progreso", width: "w-[118px]" },
  { id: "cancelado", label: "Cancelado", width: "w-[109px]" },
  { id: "programado", label: "Programado", width: "w-[109px]" }
];

function FilterSection({ activeFilter, setActiveFilter }) {
  return (
    <div className="flex flex-wrap gap-3 items-start py-3 pr-4 pl-3 w-full text-sm font-medium text-neutral-900 max-md:max-w-full">
      {filters.map(({ id, label, width }) => (
        <span 
          key={id}
          onClick={() => setActiveFilter(label)}
          className={`flex gap-2 justify-center items-center px-3 text-center whitespace-nowrap rounded-xl min-h-[32px] ${width} ${
            activeFilter === label ? "bg-blue-100 border-2 border-black" : "bg-gray-100 border border-transparent"
          } transition-all duration-200 cursor-pointer`} // Estilo de cursor agregado
          aria-pressed={activeFilter === label}
        >
          <span className="self-stretch my-auto">{label}</span>
        </span>
      ))}
    </div>
  );
}

export default FilterSection;