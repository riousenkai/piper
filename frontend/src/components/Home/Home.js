import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAPIKey } from "../../store/user";
import Maps from "./Maps";
import Geocode from "react-geocode";
import { getLatLong } from "../../helpers/homeHelpers";
import './Home.css'

const Home = () => {
  const dispatch = useDispatch();
  const apiKey = useSelector((state) => state.user?.key);
  const [loc, setLoc] = useState("");
  const [data, setData] = useState({});

  // const date = new Date()

  // console.log(date.getDate(), date.getHours(), date.getMinutes())

  useEffect(() => {
    if (!apiKey) {
      dispatch(getAPIKey());
    } else {
      Geocode.setApiKey(apiKey);
    }
  }, [dispatch, apiKey]);

  useEffect(() => {
    const locSuccess = (pos) => {
      const coords = pos.coords;
      setData({ lat: coords.latitude, long: coords.longitude });
    };
    navigator.geolocation.getCurrentPosition(locSuccess);
  }, []);

  return (
    <div>
      <div>Please Enter Location:</div>

      <div className="address-loc">
        <input value={loc} onChange={(e) => setLoc(e.target.value)} />
        <button onClick={() => getLatLong(loc).then((d) => setData(d))}>
          Submit
        </button>
      </div>

      <div>Enter a new clinic</div>

      {apiKey ? (
        <Maps apiKey={apiKey} lat={data?.lat} lng={data?.long} />
      ) : null}
    </div>
  );
};

export default Home;
