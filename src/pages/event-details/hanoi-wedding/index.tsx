import EventInvite from "@/components/Invite";
import { eventDetails } from "@/components/details/EventDetails";

export default function HanoiWedding() {
  const hanoi = eventDetails.hanoi;
  return (
    <>
      <EventInvite
        location={hanoi.location}
        date={hanoi.date}
        hotel={hanoi.hotel}
      />
    </>
  );
}
