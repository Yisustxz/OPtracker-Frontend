import * as React from "react";

function Navigation() {
  const navItems = [
    { label: "Inicio", width: "w-[40px]", link: "/" },
    { label: "Equipo médico", width: "w-[90px]", link: "/medTeams" },
    { label: "Paciente", width: "w-[50px]", link: "/patient" },
    { label: "Cirugía", width: "w-[50px]", link: "/surgery" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex flex-wrap justify-between items-center px-10 py-3 w-full bg-white border-b border-gray-200 max-md:px-5 max-md:max-w-full">
      <div className="flex items-center gap-2">
        <img src="/logosinfondo.png" alt="Logo" className="h-16" />{" "}
        {/* Aumentado el tamaño del logo */}
        <span className="text-lg font-bold">OpTracker</span>
      </div>
      <div className="flex relative flex-1 shrink gap-8 items-center justify-center my-auto basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex absolute right-4 z-0 gap-9 items-center text-sm font-medium min-h-[40px] min-w-[240px]">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`self-stretch my-auto whitespace-nowrap text-black transition hover:text-[#577C8E] ${item.width}`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col self-stretch my-auto w-4 min-h-[16px]">
          <div className="flex flex-1 w-4 min-h-[16px]" />
        </div>
      </div>
      <div className="flex items-center justify-center my-auto w-[37px]">
        {" "}
        {/* Cambiado para alinear el botón */}
        <button
          className="rounded-3xl w-[41px] h-[41px] overflow-hidden"
          aria-label="User profile"
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ce98b8d152b957dce5797de30055cf980a701c9485fd96eaf3e963f03b1df12?placeholderIfAbsent=true&apiKey=33b41968e7754d2b98ae74310dc65b2e"
            alt=""
            className="object-cover w-full h-full"
          />
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
