import React, { useState } from "react";
import { states } from "../../helpers/states";

const NewClinic = ({ inactive, setInactive }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    console.log(zip);
  };

  return (
    <form hidden={inactive} onSubmit={onSubmit}>
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
      <button>Submit</button>
    </form>
  );
};

export default NewClinic;
