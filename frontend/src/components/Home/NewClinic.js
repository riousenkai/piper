const NewClinic = ({ inactive }) => {
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
