import EventInvite from "@/components/Invite";
import { eventDetails } from "@/components/details/EventDetails";
import Map from "@/components/Map";


export default function HanoiWedding() {
  const hanoi = eventDetails.hanoi;
  const mapCenter = { lat: 21.028511, lng: 105.804817 };
  const mapMarkers = [
    {
      id: "hanoi-location",
      position: mapCenter,
    },
    {
      id: "guangzhou-location",
      position: { lat: 23.12911, lng: 113.264385 },
    },
  ];

  return (
    <>
      <EventInvite
        location={hanoi.location}
        date={hanoi.date}
        hotel={hanoi.hotel}
      />
      <div className="flex flex-col md:flex-row h-screen">
        <div className="w-full md:w-2/5 flex flex-col justify-center items-center bg-white p-8">
          <h2 className="text-3xl font-bold mb-4">Welcome to Hanoi</h2>
          <p className="text-lg">
            Discover the charm of Hanoi, the heart of Vietnam. Experience its
            rich history, culture, and beauty as we celebrate this special
            moment together.
          </p>
        </div>
        <div className="w-full md:w-3/5">
          <Map
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
            center={mapCenter}
            zoom={6}
            markers={mapMarkers}
          />
        </div>
      </div>
    </>
  );
}
