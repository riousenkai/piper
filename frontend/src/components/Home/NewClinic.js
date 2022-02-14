import React, { useState, useEffect } from "react";
import { states } from "../../helpers/states";

const NewClinic = ({ inactive, setInactive }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState(null);

  useEffect(() => {
    states.sort((a, b) => a.name[0] - b.name[0]);
    setInactive(false);
  }, []);

  console.log(states)


  return (
    <form hidden={inactive}>
      <input placeholder="Clinic Name" />
      <input placeholder="Street Address" />
      <select value={state} onChange={(e) => setState(e.target.value)}>
        <option value={null}>Select a state</option>
        {states.map((s) => (
          <option value={s.ab}>{s.name}</option>
        ))}
      </select>
      <input placeholder="Zip Code" />
    </form>
  );
};

export default NewClinic;
