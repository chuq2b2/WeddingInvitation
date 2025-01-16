import EventInfo from "@/components/EventInfo";
import { eventDetails } from "@/components/details/EventDetails";

export default function RSVP() {
  const hanoiDetails = eventDetails.hanoi;
  const guangzhouDetails = eventDetails.guangzhou;
  return (
    <div className="h-auto">
      <div
        className="h-screen parallax-full bg-gradient-to-r sm:relative pt-50 flex flex-col justify-end"
        style={{
          backgroundImage: "url('/Linh-13.png')",
        }}
      >
        <h1 className="fraunces md:text-5xl text-xl font-bold text-center space-y-10 py-10 text-white drop-shadow-lg justify-center">
          RSVP The Wedding You're Attending
        </h1>
      </div>
      <div className="flex flex-col md:flex-row space-y-10 p-8 md:p-12 gap-5">
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
    </div>
  );
}
