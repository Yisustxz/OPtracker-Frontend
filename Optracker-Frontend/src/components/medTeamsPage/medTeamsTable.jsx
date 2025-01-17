import MedTeamTableHeader from "./medTeamHeader";
import MedTeamTableRow from "./medTeamRow";

function MedTeamsTable({ searchQuery, activeFilter, equipo }) {
  const filteredMedTeam = equipo.filter((personal) => {
    const matchesSearch = personal.nombre
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter =
      activeFilter === "Todos" || personal.tipo === activeFilter;
    return matchesSearch && matchesFilter;
  });
  return (
    <div className="flex flex-col justify-center px-4 py-3 w-full text-sm max-md:max-w-full">
      <div className="flex overflow-hidden items-start w-full bg-white rounded-xl border border-solid border-zinc-200 max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
          <MedTeamTableHeader />
          <div className="flex flex-col w-full text-slate-500 max-md:max-w-full">
            {filteredMedTeam.map((personal, id) => (
              <MedTeamTableRow
                key={id}
                id={personal.id}
                tipo={personal.tipo}
                {...personal}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedTeamsTable;
