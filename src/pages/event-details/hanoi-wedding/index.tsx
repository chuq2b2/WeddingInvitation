import { useState } from "react";
import EventInvite from "@/components/Invite";
import Map from "@/components/Map";
import { eventDetails } from "@/components/details/EventDetails";
import { Button } from "@/components/ui/button";
import { Backpack, CircleDollarSign, Signal, Cross, Syringe } from "lucide-react";
import TravelDocument from "@/components/details/hanoi/TravelDocument";
import MoneyAndCurrency from "@/components/details/hanoi/MoneyAndCurrency";
import SIM from "@/components/details/hanoi/SIM";
import HealthInsurance from "@/components/details/hanoi/HealthInsurance";
import Immunization from "@/components/details/hanoi/Immunization";

type ContentKey = "travelDocument" | "moneyAndCurrency" | "sim" | "healthInsurance" | "immunization";

const contentMap: Record<ContentKey, JSX.Element> = {
  travelDocument: <TravelDocument />,
  moneyAndCurrency: <MoneyAndCurrency />,
  sim: <SIM />,
  healthInsurance: <HealthInsurance/>,
  immunization: <Immunization/>
};

export default function HanoiWedding() {
  const [activeContent, setActiveContent] = useState<ContentKey | "none">(
    "none"
  );
  const hanoi = eventDetails.hanoi;
  const mapCenter = { lat: 21.028511, lng: 105.804817 };
  const mapMarkers = [
    {
      id: "hanoi-location",
      position: mapCenter,
    },
    {
      id: "guangzhou-location",
      position: { lat: 23.12911, lng: 113.264385 },
    },
  ];

  const buttonClasses = (isActive: boolean) =>
    `px-4 py-2 rounded-md transition ${
      isActive ? "bg-gray-800 text-white" : "hover:bg-gray-300"
    }`;

  return (
    <>
      <EventInvite
        location={hanoi.location}
        date={hanoi.date}
        hotel={hanoi.hotel}
      />
      <div className="flex flex-col md:flex-row h-screen">
        <div className="w-full md:w-2/5 flex flex-col justify-center items-center bg-white p-8">
          <h2 className="text-3xl font-bold mb-4">Welcome to Hanoi</h2>
          <p className="text-lg">
            Discover the charm of Hanoi, the heart of Vietnam. Experience its
            rich history, culture, and beauty as we celebrate this special
            moment together.
          </p>
        </div>
        <div className="w-full md:w-3/5">
          <Map
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
            center={mapCenter}
            zoom={6}
            markers={mapMarkers}
          />
        </div>
      </div>

      <h1 className="text-5xl font-bold font-fraunces flex justify-center items-center my-8">
        Hanoi Travel Tips
      </h1>
      <div className="justify-center flex flex-row flex-wrap items-center">
        <Button
          variant="outline"
          className={buttonClasses(activeContent === "travelDocument")}
          onClick={() => setActiveContent("travelDocument")}
        >
          <Backpack />
          Travel Document
        </Button>

        <Button
          variant="outline"
          className={buttonClasses(activeContent === "moneyAndCurrency")}
          onClick={() => setActiveContent("moneyAndCurrency")}
        >
          <CircleDollarSign />
          Money And Currency
        </Button>

        <Button
          variant="outline"
          className={buttonClasses(activeContent === "sim")}
          onClick={() => setActiveContent("sim")}
        >
          <Signal />
          SIM
        </Button>
        <Button
          variant="outline"
          className={buttonClasses(activeContent === "healthInsurance")}
          onClick={() => setActiveContent("healthInsurance")}
        >
          <Cross />
          Health Insurance
        </Button>
        <Button
          variant="outline"
          className={buttonClasses(activeContent === "immunization")}
          onClick={() => setActiveContent("immunization")}
        >
          <Syringe />
          Immunization
        </Button>
      </div>

      <div className="mt-8 flex flex-col items-center h-[80vh] ">
        {activeContent !== "none" ? contentMap[activeContent] : <div></div>}
      </div>
    </>
  );
}
