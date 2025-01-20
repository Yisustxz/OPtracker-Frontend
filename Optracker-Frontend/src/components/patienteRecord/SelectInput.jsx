import * as React from "react";

export default function SelectInput({ label, id, value, onChange, required = false, options }) {
  return (
    <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[160px]">
      <label htmlFor={id} className="pb-2 w-full font-medium text-neutral-900">
        {label}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        aria-label={label}
        className="overflow-hidden self-stretch px-4 py-4 w-full bg-white rounded-xl border border-solid border-zinc-200 min-h-[56px] text-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}