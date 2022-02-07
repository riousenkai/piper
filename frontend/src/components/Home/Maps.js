import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const Maps = ({ apiKey, lat, lng }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  const center = {
    lat,
    lng,
  };



  return (
    <>
      {isLoaded && (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker
            position={{ lat: 29.72951793201924, lng: -95.42534553080883 }}
            icon={{
              url: "/vet-marker.png",
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(31, 10),
              scaledSize: new window.google.maps.Size(60, 60),
            }}
          />
        </GoogleMap>
      )}
    </>
  );
};

export default React.memo(Maps);
