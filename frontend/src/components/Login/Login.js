import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAPIKey } from "../../store/user";
import Maps from "./Maps";

const Login = () => {
  const dispatch = useDispatch();
  const apiKey = useSelector((state) => state.user?.key);
  const [loc, setLoc] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    if (!apiKey) {
      dispatch(getAPIKey());
    }
  }, [dispatch, apiKey]);

  const locSuccess = (pos) => {
    const coords = pos.coords;
    setData({ lat: coords.latitude, long: coords.longitude });
  };

  useEffect(() => {
    setData(navigator.geolocation.getCurrentPosition(locSuccess));
  }, []);

  console.log(data)

  if (!apiKey) {
    return null;
  }

  return (
    <div>
      <div>Please Enter Your Location:</div>
      <input value={loc} onChange={(e) => setLoc(e.target.value)} />
      <button>Submit</button>
      <Maps apiKey={apiKey} lat={data.lat} lng={data.long} />
    </div>
  );
};

export default Login;
