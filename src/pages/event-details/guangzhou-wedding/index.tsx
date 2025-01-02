import EventInvite from "@/components/Invite";
import { eventDetails } from "@/components/details/EventDetails";
import Map from "@/components/Map";

export default function GuangzhouWedding() {
  const guangzhou = eventDetails.guangzhou;
  const mapCenter = { lat: 23.12911, lng: 113.264385 };
  const mapMarkers = [
    {
      id: "guangzhou-location",
      position: mapCenter,
      color: "#4A4A4A",
    },
    {
      id: "hanoi-location",
      position: { lat: 21.028511, lng: 105.804817 },
      color: "#4A4A4A",
    },
  ];

  return (
    <>
      <EventInvite
        location={guangzhou.location}
        date={guangzhou.date}
        hotel={guangzhou.hotel}
      />
      <div className="flex flex-col md:flex-row h-screen">
        <div className="w-full md:w-2/5 flex flex-col justify-center items-center bg-white p-8">
          <h2 className="text-3xl font-bold mb-4">Welcome to Guangzhou</h2>
          <p className="text-lg">
            Discover the vibrant energy of Guangzhou, a city rich in culture and
            innovation. From its iconic Canton Tower to its delicious cuisine,
            this city offers the perfect blend of tradition and modernity. Join
            us for an unforgettable celebration in this dynamic metropolis.
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
