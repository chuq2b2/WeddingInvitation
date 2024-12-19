import EventInvite from "@/components/Invite";
import { eventDetails } from "@/components/EventDetails";

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
