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
  return (
    <>
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
