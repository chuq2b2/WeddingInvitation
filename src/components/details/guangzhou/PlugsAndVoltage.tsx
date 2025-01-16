const PlugsAndVoltage = () => (
  <div className="md:w-1/2 w-2/3 avenir  justify-center items-center flex flex-col">
    <h2 className="font-bold text-xl justify-content flex flex-col items-center mb-5">
      Plugs And Voltage
    </h2>
    <img src="/guangzhou/plugs.png"/>
    <p>
      In China, power plugs and sockets of type A, type C, and type I are used.
      Standard voltage is 220 V at a frequency of 50 Hz.{" "}
      <span className="whitespace-nowrap">
         More information can be found{" "}
        <a href="https://www.power-plugs-sockets.com/china/" target="_blank">
          <span className="font-bold text-pink-400">here</span>
        </a>
        .
      </span>
    </p>
  </div>
);

export default PlugsAndVoltage;
