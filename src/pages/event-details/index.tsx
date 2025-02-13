import { eventDetails } from "@/components/details/EventDetails";
import EventInfo from "@/components/EventInfo";

export default function EventDetails() {
  const hanoiDetails = eventDetails.hanoi;
  const guangzhouDetails = eventDetails.guangzhou;
  return (
    <div className="h-screen">
      <h1 className="fraunces text-5xl font-bold text-center space-y-10 py-10 text-[#A0AC60]">
        Please RSVP The Wedding You're Attending
      </h1>
      <div className="flex flex-col md:flex-row space-y-10 p-8 md:p-12 gap-5">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <EventInfo
            location={hanoiDetails.location}
            locationHref={hanoiDetails.locationHref}
            date={hanoiDetails.date}
            hotel={hanoiDetails.hotel}
            schedule={hanoiDetails.schedule}
            rsvpHref={hanoiDetails.rsvpHref}
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <EventInfo
            location={guangzhouDetails.location}
            locationHref={guangzhouDetails.locationHref}
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
