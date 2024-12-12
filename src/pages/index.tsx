import Image from "next/image";
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
    {/* Home Page */}
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

    {/* Home RSVP */}
    <div id="rsvp" className="flex flex-col md:flex-row space-y-10 md:space-y-0 h-screen p-8 md:p-12 gap-5">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
        <EventInfo
          location="Hanoi"
          date="Thursday, June 12, 2025"
          hotel="Hotel in Hanoi"
          schedule={scheduleHanoi}
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
        <EventInfo
          location="Guangzhou"
          date="Saturday, June 21, 2025"
          hotel="Hotel in Guangzhou"
          schedule={scheduleGuangzhou}
        />
      </div>
    </div>
    <div className="h-40 md:h-0 bg-white"></div>

    <div className="h-screen parallax-full bg-gradient-to-r flex items-center justify-center pt-50"
    style={{
      backgroundImage: "url('/Linh-30.jpg')"
    }}>
      <Image
        src="/signature-white.avif"
        alt="Signature"
        width={1052}
        height={322}
        style={{ width: '1052px', height: '322px' }}
        priority={false}
        className="object-contain filter brightness-200 w-auto h-auto"
      />
    </div>

    <div className="h-80"></div>
    {/* Home Our Story */}
    <div id="our-story" className="h-screen ">
      <div className="grid grid-cols-12 gap-4 h-full">
        <div className="col-span-2 overflow-hidden">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/Linh-2.jpg')" }}
          ></div>
        </div>
        <div className="col-span-6">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/Linh-1.jpg')" }}
          ></div>
        </div>
        <div className="col-span-4 flex flex-col justify-center bg-cover bg-center row-span-2"
          style={{backgroundImage: "url('/Linh-26.jpg')"}}>
          <div className="bg-white p-8">
            <h3 className="text-4xl mb-4 didot">Our Love Story</h3>
            <p className="text-[#383B42] avenir">
              In the heart of Boston's cadence, two souls converged, their paths
              unwinding like a gentle river through the cityscape. Moments of
              serendipity became their guide, where laughter echoed amidst the hum of
              daily life. Hand in hand, they wove their way through the familiar
              streets, each step a silent testament to the bond that grew between
              them.
            </p>
            <p className="mt-4 text-[#383B42] avenir">
              Their love, quiet and steadfast, blossomed in the simplicity of shared
              routines and whispered promises under the city lights.
            </p>
          </div>
          
        </div>
        <div className="col-span-6">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/Linh-26.jpg')" }}
          ></div>
        </div>
        <div className="col-span-2 overflow-hidden">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/Linh-33.jpg')" }}
          ></div>
        </div>
      </div>
    </div>
    </>
    
    
  );
}
