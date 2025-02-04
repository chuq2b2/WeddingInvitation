import Image from "next/image";
import EventInfo from "@/components/EventInfo";
import Carousel from "@/components/Carousel";
import { eventDetails } from "@/components/details/EventDetails";
import { qnaDetails } from "@/components/details/QuestionAndAnswerDetails";
import QuestionAndAnswer from "@/components/QuestionAndAnswer";

export default function Home() {
  const hanoiDetails = eventDetails.hanoi;
  const guangzhouDetails = eventDetails.guangzhou;
  return (
    <>
      {/* Home Page */}
      <div className="flex flex-col md:flex-row h-screen">
        {/* Left Side with Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6">
          <p className="text-xl avenir animate-slideFromTop">
            Join us in the Celebration of
          </p>
          <h1 className="p-8 text-5xl md:text-9xl didot italic  text-[#383B42] uppercase text-center animate-slideFromBottom">
            Jack
            <span className="md:block">
              <span className="text-[#A0AC60]"> & </span> Linh
            </span>
          </h1>
       
          <div className="text-base avenir flex items-center animate-slideFromBottom">
            Hanoi
            <svg
              className="inline-block w-1 h-1 m-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
            >
              <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z" />
            </svg>
            <span className="flex-col fraunces text-[#A0AC60] text-3xl font-extrabold  animate-slideFromBottom [animation-delay:0.3s]">
              <p>June 12th, 2025</p>
            </span>
            
          </div>
          <div className="text-base avenir flex items-center animate-slideFromBottom">
            Guangzhou
            <svg
              className="inline-block w-1 h-1 m-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
            >
              <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z" />
            </svg>
            <span className="flex-col fraunces text-[#A0AC60] text-3xl font-extrabold animate-slideFromBottom [animation-delay:0.3s]">
              <p>June 21st, 2025</p>
            </span>
          </div>
        </div>

        {/* Right Side with Parallax Image */}
        <div
          className="w-full md:w-1/2 h-full parallax"
          style={{
            backgroundImage: "url('/Linh-5.jpg')",
          }}
        ></div>
      </div>

      {/* Home RSVP */}
      <div
        id="rsvp"
        className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:h-screen p-8 md:p-12 gap-5"
      >
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <EventInfo
            location={hanoiDetails.location}
            date={hanoiDetails.date}
            hotel={hanoiDetails.hotel}
            schedule={hanoiDetails.schedule}
            rsvpHref={hanoiDetails.rsvpHref}
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <EventInfo
            location={guangzhouDetails.location}
            date={guangzhouDetails.date}
            hotel={guangzhouDetails.hotel}
            schedule={guangzhouDetails.schedule}
            rsvpHref={guangzhouDetails.rsvpHref}
          />
        </div>
      </div>

      <div
        className="h-screen parallax-full bg-gradient-to-r flex items-center justify-center pt-50"
        style={{
          backgroundImage: "url('/Linh-30.png')",
        }}
      >
        <Image
          src="/signature-white.avif"
          alt="Signature"
          width={1052}
          height={322}
          style={{ width: "1052px", height: "322px" }}
          priority={false}
          className="object-contain filter brightness-200 w-auto h-auto"
        />
      </div>
    </>
  );
}
