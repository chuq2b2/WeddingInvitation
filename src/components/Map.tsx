import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

interface MapProps {
  apiKey: string;
  center: { lat: number; lng: number };
  zoom: number;
  markers?: {
    id: string;
    position: { lat: number; lng: number };
    googleMapsLink: string;
  }[];
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

  const [selectedMarker, setSelectedMarker] = useState<{
    id: string;
    position: { lat: number; lng: number };
    googleMapsLink: string;
    address?: string;
  } | null>(null);

  useEffect(() => {
    if (selectedMarker) {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode(
        { location: selectedMarker.position },
        (results, status) => {
          if (status === "OK" && results && results[0]) {
            setSelectedMarker((prev) => ({
              ...prev!,
              address: results[0].formatted_address,
            }));
          }
        }
      );
    }
  }, [selectedMarker]);

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
          <Marker
            key={marker.id}
            position={marker.position}
            onClick={() => setSelectedMarker(marker)}
          />
        ))}
        {selectedMarker && (
          <InfoWindow
            position={selectedMarker.position}
            onCloseClick={() => setSelectedMarker(null)}>
            <div>
              <p>{selectedMarker.address || "Loading address..."}</p>
              <button
                onClick={() =>
                  window.open(selectedMarker.googleMapsLink, "_blank")
                }>
                View on Google Maps
              </button>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
