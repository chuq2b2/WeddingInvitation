import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 items-center">
      <div className="container mx-auto flex flex-col text-center items-center">
        <h2 className="fraunces font-semibold text-[#383B42] md:text-5xl mb-4 text-2xl">
          We Hope To See You Soon!
        </h2>
        <Image
          src="/signature.avif"
          alt="Signature"
          width={214}
          height={48}
          style={{ width: "214px", height: "48px" }}
          priority={false}
        />
        <p className="mb-2 avenir pt-2">Contact Us</p>
        <p className="text-sm text-gray-600 avenir">© 2024 by Jack & Linh</p>
      </div>
    </footer>
  );
};

export default Footer;
