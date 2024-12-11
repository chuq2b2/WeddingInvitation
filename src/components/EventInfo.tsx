// EventInfo.tsx
import React from "react";

// Define the types for the props
interface ScheduleItem {
  time: string;
  name: string;
  rsvpDate: string;
}

interface EventInfoProps {
  location: string;
  date: string;
  schedule: ScheduleItem[];
}

const EventInfo: React.FC<EventInfoProps> = ({ location, date, schedule }) => {
  return (
    <div className="w-full md:w-1/2 p-6">
      <p className="text-xl avenir">Join us in the Celebration of</p>
      <h1 className="p-8 text-5xl md:text-9xl didot italic text-[#383B42] text-center">{location}</h1>
      <p className="text-lg mt-4 avenir text-center">{date}</p>
      <div className="mt-4">
        {schedule.map((event, index) => (
          <div key={index} className="flex justify-between mt-2">
            <span className="text-green-500">{event.time}</span>
            <span>{event.name}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="bg-green-500 text-white p-2 rounded-full">RSVP</button>
      </div>
      <p className="text-center text-sm mt-4">Please confirm your attendance by {schedule[0].rsvpDate}</p>
    </div>
  );
};

export default EventInfo;