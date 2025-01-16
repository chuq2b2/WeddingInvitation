import EventInvite from "@/components/Invite";
import { eventDetails } from "@/components/details/EventDetails";
import RSVPForm from "@/components/RSVPForm";

export default function HanoiWedding() {
  const hanoi = eventDetails.hanoi;

  return (
    <div>
      <RSVPForm
        location={hanoi.location}
        eventDate={hanoi.date}
        rsvpDeadline="Mar 12th, 2025"
        availableDates={[
          { date: "June 7", times: ["10 AM - 2 PM", "4 PM - 8 PM", "8 PM - 11 PM"] },
          { date: "June 8", times: ["10 AM - 2 PM", "4 PM - 8 PM", "8 PM - 11 PM"] },
        ]}
      />
      {/* <EventInvite
        location={hanoi.location}
        date={hanoi.date}
        hotel={hanoi.hotel}
      /> */}
    </div>
  );
}
