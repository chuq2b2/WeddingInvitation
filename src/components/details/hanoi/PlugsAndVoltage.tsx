const PlugsAndVoltage = () => (
  <div className="md:w-1/2 w-2/3 avenir justify-center items-center flex flex-col">
    <h2 className="font-bold text-xl justify-content flex flex-col items-center mb-5">
      Plugs And Voltage
    </h2>
    <p>
      In Vietnam, power plugs and sockets are of types A (flat two-prong pins), C
      (round two-prong pins), and D (three-prong pins). The standard voltage is
      110/220 V, with a standard frequency of 50 Hz. You can purchase a travel
      adapter locally in Vietnam or order one in advance.{" "}
      <span className="whitespace-nowrap">
        More information can be found{" "}
        <a href="https://www.power-plugs-sockets.com/vietnam/" target="_blank">
          <span className="font-bold text-pink-400">here</span>
        </a>
        .
      </span>
    </p>
  </div>
);

export default PlugsAndVoltage;