const Immunization = () => (
  <div className="md:w-1/2 w-2/3 avenir  justify-center items-center flex flex-col">
    <h2 className="font-bold text-xl justify-content flex flex-col items-center mb-5">
      Immunization
    </h2>
    Please review the CDC’s Vietnam Travel page to see the recommended vaccines
    for travel to Vietnam{" "}
    <a
      href="https://wwwnc.cdc.gov/travel/destinations/traveler/none/vietnam"
      target="_blank"
    >
      <span className="font-bold text-pink-400">here</span>
    </a>{" "}
    .
  </div>
);

export default Immunization;
