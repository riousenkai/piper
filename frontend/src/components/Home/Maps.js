import React, { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "800px",
  height: "600px",
};

const Maps = ({ apiKey, lat, lng }) => {
  const [selected, setSelected] = useState(null);
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
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          clickableIcons={false}
        >
          <Marker
            onClick={() =>
              setSelected({ lat: 29.72951793201924, lng: -95.42534553080883 })
            }
            position={{ lat: 29.72951793201924, lng: -95.42534553080883 }}
            icon={{
              url: "/vet-marker.png",
              scaledSize: new window.google.maps.Size(40, 40),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(20, 10),
            }}
          />
          {selected !== null && (
            <InfoWindow
              position={{ lat: +selected.lat, lng: +selected.lng }}
              onCloseClick={() => setSelected(null)}
            >
              <div className="info-parent">
                <div>WEEEEEEEEEEEEEEEEEEEEEEEEEEEE</div>
                <div>Test</div>
                <div>Address</div>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      )}
    </>
  );
};

export default React.memo(Maps);
