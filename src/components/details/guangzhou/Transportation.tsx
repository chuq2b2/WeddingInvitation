const Transportation = () => (
  <div className="md:w-1/2 w-2/3 avenir  justify-center items-center flex flex-col">
    <h2 className="font-bold text-xl justify-content flex flex-col items-center mb-5">
      Transportation
    </h2>
    <div className="flex flex-col items-center mb-4">
      <img src="/guangzhou/railway12306.png" alt="Railway12306 App" />
    </div>
    <p className="text-center mb-4">
      Download Railway12306 for bullet trains to travel within Chinese cities:
    </p>
    <ul className="list-disc pl-5 text-left space-y-2 mb-24">
      <li>
        Search for the connection you are after, enter your passport details to
        reserve your seat.
      </li>
      <li>
        You don’t need a physical ticket—just use your passport number (it’s
        basically your ticket to travel the bullet train).
      </li>
    </ul>

    <div className="flex flex-col items-center mb-4">
      <img src="/guangzhou/didi.png" alt="DiDi App" />
    </div>
    <p className="text-center mb-4">
      DiDi Ridesharing App: This is essentially Uber in China.
    </p>
    <ul className="list-disc pl-5 text-left space-y-2 mb-24">
      <li>They have an English setting available.</li>
    </ul>

    <div className="flex flex-col items-center mb-4">
      <img src="/guangzhou/Yang Cheng Tong.png" alt="Yang Cheng Tong card" />
    </div>
    <p className="text-center mb-4">
      Yang Cheng Tong: You can purchase this rechargeable card to pay for public
      transportation in Guangzhou.{" "}
    </p>
    <ul className="list-disc pl-5 text-left space-y-2 mb-24">
      <li>
        These will be only available in 7-Eleven stores and Guangzhou Metro
        ticket centers
      </li>
      <li>Useable for busses and metro</li>
      <li>
        Cards are rechargeable at authorized service providers with the signs
        written "Yang Cheng Tong Top Up Stop (羊城通充值点)", "Yang Cheng Tong
        Auto Top Up Stop (羊城通自助充值点)" or "Yang Cheng Tong Convenient Stop
        (羊城通便利站)"
      </li>
      <li>Also rechargeable at 7-Eleven stores</li>
    </ul>
  </div>
);

export default Transportation;
