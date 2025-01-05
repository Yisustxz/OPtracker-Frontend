export default function FamilyCard({ icon, title, description }) {
    return (
      <div className="flex flex-col grow shrink p-4 rounded-lg border border-emerald-100 border-solid bg-slate-50 min-w-[240px] w-[241px] transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500">
        <div className="flex flex-col items-start w-full">
          <img
            loading="lazy"
            src={icon}
            alt=""
            className="object-contain flex-1 w-6 aspect-square"
          />
        </div>
        <div className="flex flex-col mt-3 w-full">
          <div className="w-full text-base font-bold leading-none text-neutral-900">
            {title}
          </div>
          <div className="mt-1 w-full text-sm leading-5 text-slate-500">
            {description}
          </div>
        </div>
      </div>
    );
  }