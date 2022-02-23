import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMarkers } from "../../store/marker";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { phoneConverter } from "../../helpers/mapHelpers";

const containerStyle = {
  width: "800px",
  height: "600px",
};

const Maps = ({ apiKey, lat, lng }) => {
  const dispatch = useDispatch();
  const markers = useSelector((state) => state.marker.markers);
  const [selected, setSelected] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  const center = {
    lat,
    lng,
  };

  useEffect(() => {
    dispatch(getMarkers());
  }, []);

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          clickableIcons={false}
          options={{
            styles: [
              {
                featureType: "poi",
                stylers: [{ visibility: "off" }],
              },
              {
                featureType: "transit",
                elementType: "labels.icon",
                stylers: [{ visibility: "off" }],
              },
            ],
          }}
        >
          {markers &&
            markers.map((marker, i) => (
              <Marker
                onClick={() => setSelected(marker)}
                position={{ lat: marker.lat, lng: marker.lng }}
                icon={{
                  url: "/vet-marker.png",
                  scaledSize: new window.google.maps.Size(40, 40),
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(20, 10),
                }}
                key={marker + i}
              />
            ))}
          {selected !== null && (
            <InfoWindow
              position={{ lat: +selected.lat, lng: +selected.lng }}
              onCloseClick={() => setSelected(null)}
            >
              <div className="info-parent">
                <div>{selected.name}</div>
                <div>{selected.street}</div>
                <div>
                  {selected.city}, {selected.state} {selected.zip_code}
                </div>
                <div>{phoneConverter(selected.phone)}</div>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      )}
    </>
  );
};

export default React.memo(Maps);
