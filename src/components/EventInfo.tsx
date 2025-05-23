// EventInfo.tsx
import React from "react";

// Define the types for the props
interface ScheduleItem {
  time: string;
  name: string;
  location: string;
  rsvpDate: string;
}

interface EventInfoProps {
  location: string;
  locationHref: string;
  date: string;
  hotel: string;
  schedule: ScheduleItem[];
  rsvpHref: string;
}

const EventInfo: React.FC<EventInfoProps> = ({
  location,
  locationHref,
  date,
  hotel,
  schedule,
  rsvpHref,
}) => {
  return (
    <div className="w-5/9 p-2">
      <h1 className=" text-xl avenir text-[#383B42] text-center">{location}</h1>
      <p className="text-4xl mt-4 fraunces text-center font-bold">{date}</p>
      <h1 className=" text-xl mt-4 avenir text-[#383B42] text-center">
        <a
          href={locationHref}
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-blue-800 hover:underline"
        >
          {hotel}
        </a>
      </h1>
      <div className="mt-4 avenir text-base">
        {schedule.map((event, index) => (
          <div key={index} className="flex justify-between mt-2">
            <span className="text-[#A0AC60] font-bold text-xl ">
              {event.time}
            </span>
            <span>
              <div className="flex-col text-end justify-end">
                {event.name}
                <br></br>
                {event.location}
              </div>
            </span>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <a
          href={rsvpHref}
          className="bg-[#A0AC60] text-white p-2 rounded-full pl-4 pr-4 hover:bg-white hover:opacity-50 hover:text-black border-1 hover:border-black hover:border-solid border-transparent border-2 transition duration-300 ease-in-out"
        >
          RSVP
        </a>
      </div>
    </div>
  );
};

export default EventInfo;
