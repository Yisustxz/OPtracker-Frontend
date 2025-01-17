import MedTeamHeader from "@/components/medTeamsPage/medHeader";
import MedTeamsFilter from "@/components/medTeamsPage/medTeamsFilter";
import MedTeamsTable from "@/components/medTeamsPage/medTeamsTable";
import SearchBar from "@/components/medTeamsPage/SearchBar";
import { fetchDoctors, fetchNurses } from "@/services/medTeamsServices";
import { useEffect, useState } from "react";
import Navigation from "../components/ui/Navigation";

function MedTeams() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [loading, setLoading] = useState(false);
  const [equipo, setEquipo] = useState([]);

  useEffect(() => {
    const loadMedTeams = async () => {
      try {
        setLoading(true);
        const [nurses, doctors] = await Promise.all([
          fetchNurses(),
          fetchDoctors(),
        ]);
        setEquipo([...nurses, ...doctors]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadMedTeams();
  }, []);
  return (
    <div className="flex flex-col pt-1.5 bg-white">
      <div className="flex overflow-hidden flex-col w-full bg-white min-h-[800px] max-md:max-w-full">
        <div className="flex relative flex-col w-full max-md:max-w-full">
          <Navigation />
          <div className="flex relative z-0 justify-center items-start px-40 py-5 w-full max-md:px-5 max-md:max-w-full">
            <div className="flex overflow-hidden z-0 flex-col flex-1 shrink w-full basis-0 max-w-[960px] min-w-[240px] max-md:max-w-full">
              <MedTeamHeader />
              <MedTeamsFilter
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
              />
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              <div>
                {loading ? (
                  <p>Cargando personal médico...</p>
                ) : (
                  <MedTeamsTable
                    searchQuery={searchQuery}
                    activeFilter={activeFilter}
                    equipo={equipo}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedTeams;
