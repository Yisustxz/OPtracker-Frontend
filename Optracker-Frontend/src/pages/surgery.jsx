import React, { useEffect, useState } from "react";
import SearchBar from "../components/surgeryPage/searchbar";
import Navigation from "../components/ui/navigation";
import SurgeryHeader from "../components/surgeryPage/surgeryHeader";
import SurgeryTable from "../components/surgeryPage/surgeryTable";
import axios from "axios";

function Surgery() {
  const [surgeries, setSurgeries] = useState([]);
  const filters = [
    "Todas",
    "Completado",
    "En Progreso",
    "Programada",
    "Cancelado",
  ];
  const [activeFilter, setActiveFilter] = useState("Todas");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchSurgeries = async () => {
      try {
        const response = await axios.get("http://localhost:3000/surgery");

        const updatedSurgeries = response.data.map(surgery => {
          const { status, color } = getStatusAndColor(surgery.status);
          return {
            ...surgery,
            status,
            statusColor: color
          };
        });

        setSurgeries(updatedSurgeries);
      } catch (error) {
        console.error("Error fetching surgeries:", error);
      }
    };

    fetchSurgeries();
  }, []);

  const getStatusAndColor = (status) => {
    switch (status) {
      case "SCHEDULED":
        return { status: "Programada", color: "bg-gray-300" };
      case "IN_PROGRESS":
        return { status: "En Progreso", color: "bg-yellow-300" };
      case "DONE":
        return { status: "Completado", color: "bg-green-500" };
      case "CANCELLED":
        return { status: "Cancelado", color: "bg-red-400" };
      default:
        return { status, color: "" };
    }
  };

  const filteredSurgeries = surgeries.filter((surgery) => {
    const matchesFilter =
      activeFilter === "Todas" ||
      surgery.status.toLowerCase() === activeFilter.toLowerCase();
    const matchesSearch = surgery.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="flex flex-col pt-1.5 bg-white">
      <div className="flex overflow-hidden flex-col w-full bg-white min-h-[800px] max-md:max-w-full">
        <div className="flex relative flex-col w-full max-md:max-w-full">
          <Navigation />
          <div className="flex relative z-0 justify-center items-start px-40 py-5 w-full max-md:px-5 max-md:max-w-full">
            <div className="flex overflow-hidden z-0 flex-col flex-1 shrink w-full basis-0 max-w-[960px] min-w-[240px] max-md:max-w-full">
              <SurgeryHeader />
              <div className="flex flex-wrap gap-3 items-start py-3 pr-4 pl-3 w-full text-sm font-medium text-neutral-900 max-md:max-w-full">
                {filters.map((filter) => (
                  <span
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`flex gap-2 justify-center items-center border-2 border-gray-300 rounded-xl px-2 py-1 transition-colors duration-200 hover:bg-blue-300 hover:border-blue-600 ${
                      activeFilter === filter
                        ? "bg-blue-200 border-blue-500 text-black"
                        : "bg-white text-black"
                    } min-h-[36px] w-[120px]`}
                    aria-pressed={activeFilter === filter}
                  >
                    <span className="self-stretch my-auto">{filter}</span>
                  </span>
                ))}
              </div>
              <SearchBar onSearch={setSearchQuery} />
              <SurgeryTable surgeries={filteredSurgeries} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Surgery;
