import React from "react";

const Registry = () => {
  return (
    <div className="bg-white opacity-80 md:w-1/3">
      <h1 className="fraunces font-semibold text-6xl py-10 px-5 text-[#383B42]">
        Registry
      </h1>
      <p className="avenir text-md px-5 text-[#383B42]">
        Support our journey, your contribution will help us fill our future with
        memories and joy!
      </p>
      <div className="px-5 py-10">
        <button className="bg-[#A0AC60] text-white p-2 w-full opacity-100 hover:text-black hover:border-black hover:border-solid hover:bg-white border-transparent border-2 transition duration-300 ease-in-out">
          Donate
        </button>
      </div>
    </div>
  );
};
export default Registry;
