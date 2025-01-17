import * as React from "react";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="flex flex-col justify-center px-4 py-3 w-full max-md:max-w-full">
      <div className="flex flex-col w-full min-h-[48px] min-w-[160px] max-md:max-w-full">
        <form
          className="flex items-center rounded-xl bg-gray-100 w-full h-full"
          onSubmit={(e) => e.preventDefault()}
          role="search"
        >
          <div className="flex justify-center items-center pl-2 w-10 h-full">
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <label htmlFor="searchInput" className="sr-only">
            Buscar equipo medico
          </label>
          <input
            id="searchInput"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar equipo medico"
            className="flex-1 py-2 pr-4 pl-2 h-full text-base bg-transparent text-slate-500 focus:outline-none"
          />
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
