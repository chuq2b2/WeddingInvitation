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
  hotel: string;
  schedule: ScheduleItem[];
}

const EventInfo: React.FC<EventInfoProps> = ({
  location,
  date,
  hotel,
  schedule,
}) => {
  return (
    <div className="w-5/9 p-2">
      <h1 className=" text-xl avenir text-[#383B42] text-center">{location}</h1>
      <p className="text-4xl mt-4 fraunces text-center font-bold">{date}</p>
      <h1 className=" text-xl mt-4 avenir text-[#383B42] text-center">
        {hotel}
      </h1>
      <div className="mt-4 avenir text-base">
        {schedule.map((event, index) => (
          <div key={index} className="flex justify-between mt-2">
            <span className="text-[#A0AC60]">{event.time}</span>
            <span>{event.name}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="bg-[#A0AC60] text-white p-2 rounded-full pl-4 pr-4">
          RSVP
        </button>
      </div>
      <p className="text-center avenir text-sm mt-4">
        Please confirm your attendance by {schedule[0].rsvpDate}
      </p>
    </div>
  );
};

export default EventInfo;
