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
  return (
    <>
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
