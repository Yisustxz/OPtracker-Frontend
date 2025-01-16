import * as React from "react";
import { useState } from "react";
import Navigation from "../components/ui/Navigation";
import MedTeamsFilter from "@/components/medTeamsPage/medTeamsFilter";
import SearchBar from "@/components/medTeamsPage/SearchBar";
import MedTeamsTable from "@/components/medTeamsPage/medTeamsTable";
import MedTeamHeader from "@/components/medTeamsPage/medHeader";

function MedTeams() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("Todos");

  return (
    <div className="flex flex-col pt-1.5 bg-white">
      <div className="flex overflow-hidden flex-col w-full bg-white min-h-[800px] max-md:max-w-full">
        <div className="flex relative flex-col w-full max-md:max-w-full">
          <Navigation />
          <div className="flex relative z-0 justify-center items-start px-40 py-5 w-full max-md:px-5 max-md:max-w-full">
            <div className="flex overflow-hidden z-0 flex-col flex-1 shrink w-full basis-0 max-w-[960px] min-w-[240px] max-md:max-w-full">
              <MedTeamHeader />
              <MedTeamsFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
              <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
              <MedTeamsTable searchQuery={searchQuery} activeFilter={activeFilter} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedTeams;