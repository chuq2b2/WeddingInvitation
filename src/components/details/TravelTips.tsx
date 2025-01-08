import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Backpack, CircleDollarSign, Signal, Cross, Syringe, CarFront, Map, Hotel, Plug, Utensils, Package, PersonStanding } from "lucide-react";

type TravelTipsProps = {
  headline: string;
  contentMap: Record<string, JSX.Element>;
};

export default function TravelTips({ headline, contentMap }: TravelTipsProps) {
  const [activeContent, setActiveContent] = useState<string | "none">("none");

  const buttonClasses = (isActive: boolean) =>
    `px-4 py-2 rounded-md transition ${
      isActive ? "bg-gray-800 text-white" : "hover:bg-gray-300"
    }`;

  return (
    <div className="">
      <h1 className="text-3xl md:text-5xl font-bold text-[#383B42] font-fraunces flex justify-center items-center my-8">
        {headline}
      </h1>
      <div className="justify-center flex flex-row flex-wrap items-center md:w-2/3 mx-auto">
        {Object.keys(contentMap).map((key) => (
          <Button
            key={key}
            variant="outline"
            className={buttonClasses(activeContent === key)}
            onClick={() => setActiveContent(key)}
          >
            {/* Add icons conditionally based on the key */}
            {key === "travelDocument" && <Backpack />}
            {key === "moneyAndCurrency" && <CircleDollarSign />}
            {key === "SIM" && <Signal />}
            {key === "healthInsurance" && <Cross />}
            {key === "immunization" && <Syringe />}
            {key === "transportation" && <CarFront />}
            {key === "navigation" && <Map />}
            {key === "accommondation" && <Hotel />}
            {key === "plugsAndVoltage" && <Plug />}
            {key === "takesOut" && <Package />}
            {key === "whatToDo" && <PersonStanding />}
            {key === "whereToEat" && <Utensils />}
            {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}
          </Button>
        ))}
      </div>
      <div className="mt-8 flex flex-col items-center pb-24">
        {activeContent !== "none" ? contentMap[activeContent] : <div></div>}
      </div>
    </div>
  );
}