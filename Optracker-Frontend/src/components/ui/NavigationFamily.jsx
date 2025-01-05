import * as React from "react";

function NavigationFamily() {
  const navItems = [
   
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex flex-wrap justify-between items-center px-10 py-3 w-full bg-white border-b border-gray-200 max-md:px-5 max-md:max-w-full">
      <div className="flex items-center gap-2">
        <img src="/logosinfondo.png" alt="Logo" className="h-16" /> {/* Aumentado el tamaño del logo */}
        <span className="text-lg font-bold">OpTracker</span>
      </div>
      <div className="flex relative flex-1 shrink gap-8 items-center justify-center my-auto basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex absolute right-4 z-0 gap-9 items-center text-sm font-medium min-h-[40px] min-w-[240px]">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`self-stretch my-auto whitespace-nowrap text-black hover:text-[#577C8E] ${item.width}`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col self-stretch my-auto w-4 min-h-[16px]">
          <div className="flex flex-1 w-4 min-h-[16px]" />
        </div>
      </div>
    </nav>
  );
}

export default NavigationFamily;