import { useState } from "react";
import EventInvite from "@/components/Invite";
import Map from "@/components/Map";
import { eventDetails } from "@/components/details/EventDetails";
import TravelDocument from "@/components/details/hanoi/TravelDocument";
import MoneyAndCurrency from "@/components/details/hanoi/MoneyAndCurrency";
import SIM from "@/components/details/hanoi/SIM";
import HealthInsurance from "@/components/details/hanoi/HealthInsurance";
import Immunization from "@/components/details/hanoi/Immunization";
import TravelTips from "@/components/details/TravelTips";
import Accommodation from "@/components/details/hanoi/Accommodation";
import Transportation from "@/components/details/hanoi/Transportation";
import PlugsAndVoltage from "@/components/details/hanoi/PlugsAndVoltage";
import TakesOut from "@/components/details/hanoi/TakesOut";
import Navigation from "@/components/details/hanoi/Navigation";
import WhatToDo from "@/components/details/hanoi/WhatToDo";
import WhereToEat from "@/components/details/hanoi/WhereToEat";

const contentMap = {
  travelDocument: <TravelDocument />,
  moneyAndCurrency: <MoneyAndCurrency />,
  SIM: <SIM />,
  healthInsurance: <HealthInsurance />,
  immunization: <Immunization />,
  accommodation: <Accommodation />,
  transportation: <Transportation />,
  plugsAndVoltage: <PlugsAndVoltage />,
  takesOut: <TakesOut />,
  navigation: <Navigation />,
  whatToDo: <WhatToDo />,
  whereToEat: <WhereToEat />,
};

export default function HanoiWedding() {
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

      <TravelTips headline="Hanoi Travel Tips" contentMap={contentMap} />

      <p className="avenir text-center mb-4">
        Other guides/tours you can read/explore:
        <br></br>
        <a href="https://whatthephovn.com/" target="_blank">
          <span className="font-bold text-pink-400">
            https://whatthephovn.com/
          </span>
        </a>
        <br></br>
        <a href="https://vietnam.travel/myvietnam" target="_blank">
          <span className="font-bold text-pink-400">
            https://vietnam.travel/myvietnam
          </span>
        </a>
      </p>
    </>
  );
}
