import EventInvite from "@/components/Invite";
import Map from "@/components/Map";
import { eventDetails } from "@/components/details/EventDetails";
import TravelDocument from "@/components/details/guangzhou/TravelDocument";
import HealthInsurance from "@/components/details/guangzhou/HealthInsurance";
import SIM from "@/components/details/guangzhou/SIM";
import Immunization from "@/components/details/guangzhou/Immunization";
import MoneyAndCurrency from "@/components/details/guangzhou/MoneyAndCurrency";
import TravelTips from "@/components/details/TravelTips";
import Accommodation from "@/components/details/guangzhou/Accommodation";
import Transportation from "@/components/details/guangzhou/Transportation";
import PlugsAndVoltage from "@/components/details/guangzhou/PlugsAndVoltage";
import TakesOut from "@/components/details/guangzhou/TakesOut";
import Navigation from "@/components/details/guangzhou/Navigation";
import WhatToDo from "@/components/details/guangzhou/WhatToDo";
import WhereToEat from "@/components/details/guangzhou/WhereToEat";

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
export default function GuangzhouWedding() {
  const guangzhou = eventDetails.guangzhou;
  const mapCenter = { lat: 23.12911, lng: 113.264385 };
  const mapMarkers = [
    {
      id: "guangzhou-location",
      position: mapCenter,
      color: "#4A4A4A",
    },
    {
      id: "hanoi-location",
      position: { lat: 21.028511, lng: 105.804817 },
      color: "#4A4A4A",
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row h-screen">
        <div className="w-full md:w-2/5 flex flex-col justify-center items-center bg-white p-8">
          <h2 className="text-3xl font-bold mb-4">Welcome to Guangzhou</h2>
          <p className="text-lg">
            Discover the vibrant energy of Guangzhou, a city rich in culture and
            innovation. From its iconic Canton Tower to its delicious cuisine,
            this city offers the perfect blend of tradition and modernity. Join
            us for an unforgettable celebration in this dynamic metropolis.
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

      <TravelTips headline="Guangzhou Travel Tips" contentMap={contentMap} />

      <p className="avenir text-center mb-4">
        Note: Facebook, WhatsApp, Instagram, Google services may not work in
        China. You may need to download a plugin to keep using these app.
        <br></br>
        Check out{" "}
        <a
          href="https://www.trip.com/travel-guide-activity/entryGuide/homePage?aid=3305672&sid=26090260"
          target="_blank"
        >
          <span className="font-bold text-pink-400">China Travel Guide</span>
        </a>
      </p>
    </>
  );
}
