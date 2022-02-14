import React, { useState, useEffect } from "react";
import { states } from "../../helpers/states";

const NewClinic = ({ inactive, setInactive }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState(null);

  useEffect(() => {
    setInactive(false);
  }, []);

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
      <button>Submit</button>
    </form>
  );
};

export default NewClinic;
