import * as React from "react";

export function RatingScale() {
  const ratingOptions = [1, 2, 3, 4, 5];

  return (
    <>
      <div className="flex z-0 flex-col items-center p-4 max-w-full text-sm font-medium whitespace-nowrap absolute left-1/2 transform -translate-x-[50%] top-[268px]"> {/* Moved a la izquierda un poco más */}
        <div className="flex gap-5"> {/* Aumenté el espacio entre botones */}
          {ratingOptions.map((rating) => (
            <button
              key={rating}
              className="self-stretch px-4 rounded-xl border border-solid border-gray-400 bg-white min-h-[44px] hover:border-blue-700 hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200" // Efecto de borde azul más llamativo y elevación al pasar el mouse
              aria-label={`Rating ${rating}`}
              tabIndex={0}
            >
              {rating}
            </button>
          ))}
        </div>
      </div>
      <div className="absolute px-4 pt-4 pb-2 max-w-full text-lg leading-none left-[24%] transform -translate-x-1/2 top-[278px] w-[217px] text-center"> {/* Ajustado a la izquierda */}
        Muy insatisfecho
      </div>
      <div className="absolute px-4 pt-4 pb-2 max-w-full text-lg leading-none left-[75%] transform -translate-x-1/2 top-[278px] w-[217px] text-center"> {/* Moved un poquito a la derecha */}
        Muy satisfecho
      </div>
    </>
  );
}