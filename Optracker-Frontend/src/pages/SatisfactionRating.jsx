import * as React from "react";
import { RatingScale } from "@/components/SatisfactionRating/RatingScale";
import { SubmitButton } from "@/components/SatisfactionRating/SubmitButton";
import Navigation from "@/components/ui/navigation";

function SatisfactionRating() {
  return (
    <>
        <Navigation survey={true} />
        <div className="flex relative flex-col bg-white mt-5">
        <div className="flex overflow-hidden z-0 flex-col w-full font-bold bg-white min-h-[800px] text-neutral-900 max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
            <div className="flex flex-1 justify-center items-start px-40 py-5 size-full max-md:px-5 max-md:max-w-full">
                <div className="flex overflow-hidden relative flex-col flex-1 shrink items-start pt-5 w-full basis-0 max-w-[960px] min-h-[760px] min-w-[240px] pb-[618px] max-md:pb-24 max-md:max-w-full">
                <h1 className="self-stretch px-4 pt-5 pb-2 w-full text-2xl leading-none text-center max-md:max-w-full">
                    Satisfacción de los familiares con la atención y la comunicación proporcionadas
                </h1>
                <div className="flex z-0 self-stretch pt-1 pb-3 w-full min-h-[64px] max-md:max-w-full" />
                <p className="absolute z-0 h-auto text-base leading-6 text-center top-[167px] w-[960px] max-md:max-w-full overflow-hidden">
                    Por favor, evalúe su satisfacción con la atención y la comunicación proporcionadas por la aplicación de trazabilidad en tiempo real. Seleccione la opción que mejor describa su experiencia:
                </p>
                <RatingScale />
                <SubmitButton />
                <a href="/patient-tracker" className="absolute top-5 right-5 text-red-500 text-xl hover:text-red-700">✖</a>
                </div>
            </div>
            </div>
        </div>
        </div>
    </>
  );
}

export default SatisfactionRating;