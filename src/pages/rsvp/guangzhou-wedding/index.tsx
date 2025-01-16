import { useState } from "react";
import RSVPForm from "@/components/RSVPForm";
import EventInvite from "@/components/Invite";
import { eventDetails } from "@/components/details/EventDetails";

export default function HanoiWedding() {
  const [rsvpData, setRsvpData] = useState<Record<string, any> | null>(null);
  const guangzhou = eventDetails.guangzhou;

  const handleRSVPSubmit = (data: Record<string, any>) => {
    setRsvpData(data); // Save RSVP data to show EventInvite
  };

  return (
    <div className="justify-center items-center flex">
      {!rsvpData ? (
        <RSVPForm
          location={guangzhou.location}
          eventDate={guangzhou.date}
          rsvpDeadline="Mar 12th, 2025"
          availableDates={[
            { date: "June 21", times: ["10 AM - 2 PM", "4 PM - 8 PM", "8 PM - 11 PM"] },
            { date: "June 21", times: ["10 AM - 2 PM", "4 PM - 8 PM", "8 PM - 11 PM"] },
          ]}
          onRSVPSubmit={handleRSVPSubmit}
        />
      ) : (
        <EventInvite
          location={guangzhou.location}
          date={guangzhou.date}
          hotel={""}
        />
      )}
    </div>
  );
}