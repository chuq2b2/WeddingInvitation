import Image from "next/image";
import EventInfo from "@/components/EventInfo";
import Carousel from "@/components/Carousel";
import {eventDetails} from "@/components/EventDetails";


export default function Home() {
  const hanoiDetails = eventDetails.hanoi;
  const guangzhouDetails = eventDetails.guangzhou
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
            <span className="flex-col fraunces text-[#A0AC60] text-3xl font-extrabold m-5 animate-slideFromBottom [animation-delay:0.3s]">
              <p>12.6.25</p>
              <p>21.6.25</p>
            </span>
            <svg
              className="inline-block w-1 h-1 m-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
            >
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

      <div className="flex flex-col justify-center items-center py-32">
        <p className="fraunces text-2xl lg:text-4xl lg:w-1/2 px-16 font-semibold text-[#383B42] text-center animate-fadeIn">
          “And now here is my secret, a very simple secret: It is only with the
          heart that one can see rightly; what is essential is invisible to the
          eye."
        </p>
        <p className="avenir text-md pt-4 animate-fadeIn">
          Antoine de Saint-Exupéry
        </p>
      </div>

      {/* Home Our Story */}
      <div id="our-story" className="h-screen">
        <div className="hidden xl:block h-screen">
          <div className="grid grid-cols-12 gap-4 h-full">
            <div className="col-span-1 overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: "url('/Linh-2.jpg')" }}
              ></div>
            </div>
            <div className="col-span-5 overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center transform scale-105 object-cover"
                style={{ backgroundImage: "url('/Linh-1.jpg')" }}
              ></div>
            </div>
            <div className="col-span-4 relative">
              <div
                className="h-full w-full bg-cover bg-center justify-center"
                style={{ backgroundImage: "url('/Linh-26.jpg')" }}
              >
                <div className="bg-white justify-center absolute flex flex-col inset-y-16 -mx-10 px-16">
                  <h3 className="text-5xl mb-4 didot font-bold text-right">
                    Our Love Story
                  </h3>
                  <p className="text-[#383B42] avenir">
                    In the heart of Boston's cadence, two souls converged, their
                    paths unwinding like a gentle river through the cityscape.
                    Moments of serendipity became their guide, where laughter
                    echoed amidst the hum of daily life. Hand in hand, they wove
                    their way through the familiar streets, each step a silent
                    testament to the bond that grew between them.
                  </p>
                  <p className="mt-4 text-[#383B42] avenir">
                    When the time was right, they took the leap, trading
                    cobblestone for skyscrapers, and Boston’s charm for New
                    York’s endless rhythm. Amidst the urban sprawl, they found
                    solace in each other's presence. Their love, quiet and
                    steadfast, blossomed in the simplicity of shared routines
                    and whispered promises under the city lights.
                  </p>
                  <p className="mt-4 text-[#383B42] avenir">
                    In the grandeur of the mundane, Jack and Linh carved out a
                    world that was theirs alone. Not defined by grand gestures,
                    but by the quiet strength found in everyday moments. Their
                    love story, a tapestry of gentle touches and understanding
                    glances, continues to unfold, a beautiful narrative of
                    life's simplest yet most profound joys.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-2 overflow-hidden">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: "url('/Linh-33.jpg')" }}
              ></div>
            </div>
          </div>
        </div>
        <div className="xl:hidden">
          <Carousel />
        </div>
      </div>

      <div className="h-60 bg-white"></div>

      <div
        className="h-screen parallax-full bg-gradient-to-r sm:relative pt-50"
        style={{
          backgroundImage: "url('/Linh-13.png')",
        }}
      ></div>
    </>
  );
}
