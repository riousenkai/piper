import React, { useState } from 'react'
import { states } from '../../helpers/states';

const NewClinic = ({ inactive }) => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState(null)

  return (
    <form hidden={inactive}>
      <input placeholder="Clinic Name" />
      <input placeholder="Street Address" />
      <input placeholder="State" />
      <input placeholder="Zip Code" />
    </form>
  );
};

export default NewClinic;
