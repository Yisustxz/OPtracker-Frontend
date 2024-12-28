import * as React from "react";
import { useState } from "react";
import Navigation from "../components/ui/Navigation";
import PatientTable from "../components/patientsList/PatientTable";
import PatientHeader from "../components/patientsList/PatientHeader";
import FilterSection from "../components/patientsList/FilterSection";
import SearchBar from "../components/patientsList/SearchBar";

function PatientPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("Todos");

  return (
    <div className="flex flex-col pt-1.5 bg-white">
      <div className="flex overflow-hidden flex-col w-full bg-white min-h-[800px] max-md:max-w-full">
        <div className="flex relative flex-col w-full max-md:max-w-full">
          <Navigation />
          <div className="flex relative z-0 justify-center items-start px-40 py-5 w-full max-md:px-5 max-md:max-w-full">
            <div className="flex overflow-hidden z-0 flex-col flex-1 shrink w-full basis-0 max-w-[960px] min-w-[240px] max-md:max-w-full">
              <PatientHeader />
              <FilterSection activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
              <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              <PatientTable searchQuery={searchQuery} activeFilter={activeFilter} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientPage;