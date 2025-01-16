import EventInvite from "@/components/Invite";
import { eventDetails } from "@/components/details/EventDetails";

export default function GuangzhouWedding() {
  const guangzhou = eventDetails.guangzhou;

  return (
    <>
      <EventInvite
        location={guangzhou.location}
        date={guangzhou.date}
        hotel={guangzhou.hotel}
      />
    </>
  );
}
