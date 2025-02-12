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
        <p className="mb-2 avenir pt-2">Acknowledgement</p>
        <p className="text-sm text-gray-600 avenir">© 2025</p>
        <p className="text-sm text-gray-600 avenir">UNIX Design: Ha Huynh</p>
        <p className="text-sm text-gray-600 avenir">Front End Dev: Quynh Chu</p>
        <p className="text-sm text-gray-600 avenir">
          Back End Dev: Quynh Chu and Tom Nguyen
        </p>
        <p className="text-sm text-gray-600 avenir">
          Content Dev: Linh Chu and Jack Weng
        </p>
        <p className="mb-2 avenir pt-2">Gallery</p>
        <p className="text-sm text-gray-600 avenir">
          Photographers: Ha Huynh and Quynh Chu
        </p>
        <p className="text-sm text-gray-600 avenir">Makeup artist: Quynh Chu</p>
        <p className="text-sm text-gray-600 avenir">
          Hair, dress and floral stylist: Ha Huynh
        </p>
      </div>
    </footer>
  );
};

export default Footer;
