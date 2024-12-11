import Image from "next/image";
import localFont from "next/font/local";
import NavBar from "@/components/NavBar";
import EventInfo from "@/components/EventInfo";

const scheduleHanoi = [
  { time: "9 am", name: "Engagement Ceremony", rsvpDate: "May 31, 2025" },
  { time: "5 pm", name: "Wedding Reception", rsvpDate: "May 31, 2025" },
  { time: "6 pm", name: "Wedding Banquet", rsvpDate: "May 31, 2025" },
];

const scheduleGuangzhou = [
  { time: "9 am", name: "Engagement Ceremony", rsvpDate: "May 31, 2025" },
  { time: "5 pm", name: "Wedding Reception", rsvpDate: "May 31, 2025" },
  { time: "6 pm", name: "Wedding Banquet", rsvpDate: "May 31, 2025" },
];

export default function Home() {
  return (
    <>
    <NavBar />
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Side with Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6">
          <p className="text-xl avenir">Join us in the Celebration of</p>
          <h1 className="p-8 text-5xl md:text-9xl didot italic  text-[#383B42] uppercase text-center">Jack
            <span className="md:block"><span className="text-[#A0AC60]"> & </span> Linh</span></h1>
          <div className="text-base avenir flex items-center">
              Hanoi 
              <svg className="inline-block w-1 h-1 m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z" />
            </svg>
            <span className="flex-col fraunces text-[#A0AC60] text-3xl font-extrabold m-5">
              <p>12.6.25</p>
              <p>21.6.25</p>
            </span>
            <svg className="inline-block w-1 h-1 m-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z" />
            </svg>
               Guangzhou
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

    <div className="flex flex-col md:flex-row h-screen">      
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6">
      <EventInfo location="Hanoi" date="Thursday, June 12, 2025" schedule={scheduleHanoi} />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6">
      <EventInfo location="Guangzhou" date="Saturday, June 21, 2025" schedule={scheduleGuangzhou} />
      </div>
        
    </div>


    </>
    
    
  );
}
