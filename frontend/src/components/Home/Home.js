import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAPIKey } from "../../store/user";
import { getLatLong } from "../../helpers/homeHelpers";
import Maps from "./Maps";
import Geocode from "react-geocode";
import NewClinic from "./NewClinic";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const apiKey = useSelector((state) => state.user?.key);
  const [loc, setLoc] = useState("");
  const [data, setData] = useState({});
  const [inactive, setInactive] = useState(false)

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
        <input
          value={loc}
          onChange={(e) => setLoc(e.target.value)}
          onKeyPress={(e) =>
            e.key === "Enter" && getLatLong(loc).then((d) => setData(d))
          }
        />
        <button onClick={() => getLatLong(loc).then((d) => setData(d))}>
          Submit
        </button>
      </div>

      <div>
      <button hidden={inactive} onClick={() => setInactive((old) => !old)}>Enter a new clinic</button>
      <NewClinic inactive={inactive} setInactive={setInactive} />
      </div>

      {apiKey ? (
        <Maps apiKey={apiKey} lat={data?.lat} lng={data?.long} />
      ) : null}
    </div>
  );
};

export default Home;
