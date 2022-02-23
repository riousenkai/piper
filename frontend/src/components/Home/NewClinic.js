import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { states } from "../../helpers/states";
import { getLatLong } from "../../helpers/homeHelpers";
import { postMarker } from "../../store/marker";

const NewClinic = ({ inactive, setInactive }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState(null);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [phone, setPhone] = useState(null)

  useEffect(() => {
    const loc = `${address} ${city} ${state} ${zip}`;
    getLatLong(loc).then((d) => {
      setLat(d.lat);
      setLong(d.long);
    });
  }, [state, zip]);

  const reset = (e) => {
    e.preventDefault();

    setName("");
    setAddress("");
    setCity("");
    setState("");
    setZip(null);
    setPhone(null)

    setInactive((old) => !old);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if ((!name || !address, !city, !state, !zip)) {
      window.alert("Please complete the form!");
      return;
    }

    const obj = {
      name,
      street: address,
      city,
      state,
      zip_code: zip,
      lat,
      lng: long,
      phone,
    };

    dispatch(postMarker(obj));
    reset(e)
    window.alert("Successfully added to the database!")
  };

  return (
    <form hidden={!inactive} onSubmit={onSubmit}>
      <input
        placeholder="Clinic Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Street Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <select value={state} onChange={(e) => setState(e.target.value)}>
        <option value={null}>Choose State</option>
        {states.map((s) => (
          <option value={s.ab}>{s.name}</option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Zip Code"
        value={zip}
        onChange={(e) => setZip(e.target.value)}
      />

      <input
        type="number"
        placeholder="Contact Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        />

      <button>Submit</button>
      <button onClick={reset}>Cancel</button>
    </form>
  );
};

export default NewClinic;
