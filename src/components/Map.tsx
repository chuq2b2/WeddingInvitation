import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface MapProps {
  apiKey: string;
  center: { lat: number; lng: number };
  zoom: number;
  markers?: { id: string; position: { lat: number; lng: number } }[];
}

const Map: React.FC<MapProps> = ({ apiKey, center, zoom, markers = [] }) => {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const customMapStyles = [
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [{ color: "#000000" }],
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#f5f5f5" }, { visibility: "on" }],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#d6d6d6" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#ffc0cb" }],
    },
    {
      featureType: "administrative.province",
      elementType: "geometry.stroke",
      stylers: [{ color: "#000000" }, { weight: 2 }],
    },
    {
      featureType: "administrative.locality",
      elementType: "geometry.stroke",
      stylers: [{ color: "#000000" }, { weight: 1 }],
    },
  ];

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
        options={{
          styles: customMapStyles,
        }}>
        {markers.map((marker) => (
          <Marker key={marker.id} position={marker.position} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
