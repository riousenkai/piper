import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAPIKey } from "../../store/user";
import Maps from "./Maps";
import Geocode from "react-geocode";

const Home = () => {
  const dispatch = useDispatch();
  const apiKey = useSelector((state) => state.user?.key);
  const [loc, setLoc] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    if (!apiKey) {
      dispatch(getAPIKey());
    }
  }, [dispatch, apiKey]);

  useEffect(() => {
    if (apiKey) {
      Geocode.setApiKey(apiKey);
    }
  }, [apiKey]);

  const locSuccess = (pos) => {
    const coords = pos.coords;
    setData({ lat: coords.latitude, long: coords.longitude });
  };

  useEffect(() => {
    setData(navigator.geolocation.getCurrentPosition(locSuccess));
  }, []);

  if (!apiKey) {
    return null;
  }

  return (
    <div>
      <div>Please Enter Your Location:</div>
      <input value={loc} onChange={(e) => setLoc(e.target.value)} />
      <button
        onClick={() => {
          Geocode.fromAddress(loc).then(
            (response) => {
              const { lat, lng } = response.results[0].geometry.location;
              setData({ lat: +lat, long: +lng });
            },
            (error) => {
              console.error(error);
            }
          );
        }}
      >
        Submit
      </button>
      <Maps apiKey={apiKey} lat={data?.lat} lng={data?.long} />
    </div>
  );
};

export default Home;
